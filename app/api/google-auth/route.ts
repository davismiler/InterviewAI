// app/api/google-auth/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/firebass/admin";
import { setSessionCookie } from "@/lib/actions/auth.action";

export async function POST(req: NextRequest) {
  try {
    const { uid, name, email, idToken } = await req.json();

    // Check if user exists in Firestore
    const userRef = db.collection("users").doc(uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      // Save to Firestore if new user
      await userRef.set({
        name,
        email,
      });
    }

    // Set session cookie
    await setSessionCookie(idToken);

    return NextResponse.json({ success: true, message: "User signed in successfully." });
  } catch (error) {
    console.error("Google Auth error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}
