"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"

import Image from "next/image"
import Link from "next/link"

import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"


const AuthFormSchema = (type: FormType) => {return z.object ({
  name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
  email: z.string().email(),
  password: z.string().min(3),
})}


const AuthForm = ({type}: {type: FormType}) => {
  const router = useRouter();
  const formSchema = AuthFormSchema(type);
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
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    try {
      if(type === 'sign-up') {
      toast.success("Account created successfully.")
      router.push('/dashboard')
    } else {
      toast.success("Sign in successfully.");
      router.push('/dashboard')
    } }
    catch(error){
        console.log(error);
        toast.error(`there is an error: ${error}`)
    }
    }
    // ✅ This will be type-safe and validated.
  
  const isSignIn = type === 'sign-in';
  return (
    <div className="card-border min-w-[20%]  ">
      <div className="flex flex-col gap-4 card py-8 px-10">
        <div className="flex flex-row gap-2 justify-center" >
          <Image src="/logo.svg" alt="logo" height={32} width={30} /><h2 className="text-primary-100">IntervueAI</h2>
        </div>
        <div className="flex justify-center text-[100%] sm:text-3xl">Practice Like You Truly Mean It</div>
      
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-2 form">
       
       {!isSignIn && (<FormField control={form.control}
       name="name"
       label="Name"
       placeholder="Your Name" />
      ) }
       <FormField control={form.control}
       name="email"
       label="Email"
       placeholder="Your email address" type="email" />
       <FormField control={form.control}
       name="password"
       label="Password"
       placeholder="Enter your password"
       type="password" />
        <Button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Creat an Account'}</Button>
      </form>
    </Form>
    <p className="text-center">
      {isSignIn ? 'No account yet?': 'Have an account already?'}

      <Link href={!isSignIn ? '/sign-in':'/sign-up'} className="font-bold text-user-primary ml-1" >
      {!isSignIn ? "Sign in" : 'Sign up'}</Link>

    </p>
    </div>
    </div>
  )
}

export default AuthForm