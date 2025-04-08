// app/page.tsx
"use client"
//import {  isAuthenticated } from '@/lib/actions/auth.action'
import Link from 'next/link'
//import { redirect } from 'next/navigation'
import React, { useState } from 'react';

export default  function LandingPage() {
  //const isUserAuthenticated = await isAuthenticated()
  const [showVideo, setShowVideo] = useState(false)
  //if (isUserAuthenticated) {
   // redirect('/dashboard') // 👈 this ensures logged-in users skip landing page
  //}
    
   const toggleVideo = () => {
      setShowVideo(!showVideo);
    };
  return (
    <>
      <>
 <div><h1>Welcome to IntervueAI</h1></div> 
  <div>
  <Link href="/sign-in">
    <button className="btn-primary flex items-center gap-2">
    Get started
    </button>
  </Link></div>
  <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <button
        onClick={toggleVideo}
        className="px-6 py-3 text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition-colors"
      >
        Play Video
      </button>
      
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Dotted background overlay */}
          <div 
            className="absolute inset-0  backdrop-blur-sm"
            style={{
              backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px)',
              backgroundSize: '4px 4px'
            }}
            onClick={toggleVideo}
          ></div>
          
          {/* Video container */}
          <div className="relative z-10 w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl">
            {/* Video header with title and close button */}
          {/*  <div className="flex items-center justify-between p-3 bg-black/90">
              {<h3 className="text-white text-lg">Interv</h3>}
              <button 
                onClick={toggleVideo}
                className="text-white text-2xl hover:text-gray-300"
              >
                ⋮
              </button>
            </div>*/}
            
            {/* Video player */}
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/bUqBOX0C-U0?autoplay=1"
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
</>
    </>
  )
}
