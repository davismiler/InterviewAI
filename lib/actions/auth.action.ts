'use server';
import { auth, db } from "@/firebass/admin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const TWO_WEEKS = 60 * 60 * 24 * 14;

export async function signUp(params: SignUpParams){
    const { uid, name, email } = params;
    try{
      const userRecord = await db.collection('users').doc(uid).get();
      if (userRecord.exists){
        return {
            success: false,
            message: 'User already exists. Please sign in Instead'
        }
      }
      await db.collection('users').doc(uid).set({name, email});
      return {
        success: true,
        message: 'User created successfully',
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        console.error('Error creating a user', e);
        if (e.code === 'auth/email-already-in-use'){
            return { success: false, message: 'Email already in use' };
        }
   
    return {
        success: false,
        message: 'Failed to create an account',
    }
}
}

export async function signIn(params: SignInParams){
    const { email, idToken} = params;
    try {
        const userRecord = await auth.getUserByEmail(email);
        if(!userRecord){
            return{
                success: false,
                message: 'User does not exist. Create an account instead.'
            }
        }
        await setSessionCookie(idToken);
    } catch (e) {
        console.log(e);
    }
}

export async function setSessionCookie(idToken: string){
    const cookieStore = await cookies();

    const sessionCookie = await auth.createSessionCookie(idToken, {expiresIn: TWO_WEEKS   * 1000 });

    cookieStore.set('session', sessionCookie,{
        maxAge: TWO_WEEKS,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path:'/',
        sameSite:'lax',
    })
}

export async function getCurrentUser(): Promise<User | null> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session")?.value;

    if(!sessionCookie) return null;
    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

        const userRecord = await db. collection('users')
        .doc(decodedClaims.uid)
        .get();
        if(!userRecord.exists)return null;
        return {
            ...userRecord.data(),
            id: userRecord.id,
        } as User;
    } catch (e) {
        console.log('Error verifying session cookie', e);
        return null;
    }
}

export async function isAuthenticated(){
    const user = await getCurrentUser();

    return !!user;
}

// Sign out user by clearing the session cookie
export async function signOut() {
    const cookieStore = await cookies();
  
    cookieStore.delete("session");
    
  }


