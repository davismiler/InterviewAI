// app/page.tsx
"use client"
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import GetStartedbtn from '@/components/GetStartedbtn';
import HomePlay from '@/components/HomePlay';
import Testimonials from '@/components/Testimonials';

//import {  isAuthenticated } from '@/lib/actions/auth.action'
import Link from 'next/link'
//import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react';

export default  function LandingPage() {
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;
  return (
    <>
      <>
 <div className='flex justify-center  content-center mt-6 items-center'>
  <div className='gap-x-1'>
  <div className='sm:text-5xl text-2xl text-[#CCCEEF] text-center'>Master Your Next Interview
  <div className='sm:text-7xl text-4xl mt-1.5 from-[#DDDFFF] text-transparent bg-clip-text bg-gradient-to-r to-[#8564be] font-bold text-center leading-[1.2]'>
 with Confidence</div>
 <div className='gap-2 pl-5 pr-5'>
 <p className='sm:text-2xl text-[16px] text-center mt-3 justify-center items-center'>Transform your interview preparation with AI-powered practice sessions.</p>
<p className='sm:text-2xl text-[16px] text-center justify-center items-center' >Experience personalized mock interviews tailored to your role, skills, and experience level. </p>
<p className='sm:text-2xl text-[16px]  text-center justify-center items-center'> Receive detailed feedback and actionable insights to excel in your next opportunity.
</p>
</div>
 </div>
 </div>
 </div> 
  <div className=' flex justify-center items-center text-center'>
  <Link href="/sign-up">
    < GetStartedbtn />
  </Link>
  <div className="absolute inset-0 z-0 rounded-xl pointer-events-none glow-border" />
  </div>
  
  <div className='relative z-20 '>
  < HomePlay />
  </div>


 {/* This wrapper shouldn't limit full-screen sections */}
<div className="flex flex-col items-center">
  
  {/* Normal content (centered) */}
  <section className="max-w-4xl px-4  text-center mt-[-50]">
    {/* ...hero text */}
    <div className=' sm:text-4xl text-2xl mt-7   from-[#466CCF] text-transparent bg-clip-text bg-gradient-to-r to-[#FF3BD4] font-bold text-center leading-[1.2]'>Why Choose Us</div>
    <div className='text-[#CCCEEF] text-2xl mt-3 sm:text-6xl'>Elevate Your Interview Skills with AI</div>
    <div className='text-[#7376AA] text-[20px] mt-3'>Discover powerful features designed to help you prepare effectively and perform confidently in your interviews.</div>
  </section>

  {/* Full-screen wide section */}
  <section className="relative w-screen  justify-center  items-center flex  overflow-hidden">
    <div className="mt-10">
      <Features />
    </div>
  </section>
</div>
<div className='relative z-10'>
  <Testimonials />
</div>

<div className='relative z-10'>
  <Footer />
</div>

</>
    </>
  )
}
