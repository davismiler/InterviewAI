"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebass/client";
import { signIn, signUp } from "@/lib/actions/auth.action";
import Loading from "./Loading"


const AuthFormSchema = (type: FormType) => {return z.object ({
  name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
  email: z.string().email(),
  password: z.string().min(6),
})}


const AuthForm = ({type}: {type: FormType}) => {
  const router = useRouter();
  const formSchema = AuthFormSchema(type);
  // Add loading state
  const [isLoading, setIsLoading] = useState(false);
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password:"",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Set loading to true when form is submitted
    setIsLoading(true);
    
    try {
      if(type === 'sign-up') {
        const { name, email, password } = values;
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
        const result = await signUp({
          uid: userCredentials.user.uid,
          name: name!,
          email,
          password,
        })
        if (!result?.success){
          toast.error(result?.message);
          setIsLoading(false);
          return;
        }

        toast.success("Account created successfully.")
        router.push('/dashboard')
      } else {
        const {email,password} = values;
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        const idToken = await userCredential.user.getIdToken();
        if(!idToken) {
          toast.error('Sign in failed')
          setIsLoading(false);
          return;
        }
        await signIn({ email, idToken})
        toast.success("Sign in successfully.");
        router.push('/dashboard')
      }
    } catch(error){
      console.log(error);
      toast.error(`There is an error: ${error}`);
      // Set loading to false on error
      setIsLoading(false);
    }
  }
    
  const isSignIn = type === 'sign-in';
  
  return (
    <div className="card-border min-w-[20%] relative">
      {/* Full screen loader overlay */}
      {isLoading && ( 
            <div >{isSignIn ? <Loading /> : <Loading />}</div>    
      )}
      
      <div className="flex flex-col gap-4 card py-8 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={30} /><h2 className="text-primary-100">IntervueAI</h2>
        </div>
        <div className="flex justify-center text-[100%] sm:text-3xl">Practice Like You Truly Mean It</div>
      
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-2 form">
       
       {!isSignIn && (<FormField control={form.control}
          name="name"
          label="Name"
          placeholder="Your Name"
        />
      )}
       <FormField 
          control={form.control}
          name="email"
          label="Email"
          placeholder="Your email address" 
          type="email"
       />
       <FormField 
          control={form.control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
       />
       
        <Button className="btn" type="submit">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </Button>
      
        <Button 
          className="btn button flex items-center gap-2" 
          type="button" 
          onClick={async () => {
            try {
              setIsLoading(true);
              const { signInWithGoogle } = await import("@/firebass/client");
              const result = await signInWithGoogle();
              if (!result) {
                toast.error("Google sign-in failed.");
                setIsLoading(false);
                return;
              }
              const idToken = await result.user.getIdToken();
              await signIn({ email: result.user.email!, idToken });
              toast.success("Signed in with Google successfully!");
              router.push("/dashboard");
            } catch (err) {
              console.error(err);
              toast.error("Google sign-in error.");
              setIsLoading(false);
            }
          }}
        >
          <Image src="/google-icon.png" width={26} height={28} alt="Google icon" />
          {isSignIn ? "Continue With Google" : "Continue With Google"}
        </Button>
        
      </form>
    </Form>
    <p className="text-center">
      {isSignIn ? 'No account yet?': 'Have an account already?'}

      <Link href={!isSignIn ? '/sign-in':'/sign-up'} className="font-bold text-user-primary ml-1">
      {!isSignIn ? "Sign in" : 'Sign up'}</Link>
    </p>
    </div>
    </div>
  )
}

export default AuthForm