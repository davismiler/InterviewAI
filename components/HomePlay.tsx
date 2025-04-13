"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useEffect, useRef } from "react";
const HomePlay = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100; // AFTER HOW MUCH SCROLL

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    
    <div className="flex items-center justify-center w-full  ">
      {/* Video frame container */}
      {/* ✅ Play Button Overlayed 
      <button
          onClick={toggleVideo}
          className="absolute inset-0 z-10 flex items-center justify-center text-white"
        >
          {/* Play icon styling 
          <div className=' hidden sm:block block md:hidden homeplay-icon'>
          <div className=" w-18 h-18 sm:w-25 sm:h-25 bg-white/30 border-4 backdrop-blur-md rounded-full  flex sm:mb-[560] items-center justify-center border-black/85 hover:bg-white/20 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-black " 
              fill=""
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.94a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
            </svg>
          </div>
          </div>
        </button>
        */}
      
        {/* Background Image */}
        <div className="hero-image-wrapper  mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/hero.png.webp"
              alt="banner"
              width={1280}
              height={720}
              className="rounded-lg shadow-2xl border-1 bg-[radial-gradient(circle_230px_at_0%_0%,_#ffffff,_#9F79C1)] mx-auto"
              priority
            />
          </div>
        </div>
         <button
  onClick={toggleVideo}
  className="absolute inset-0 z-10 flex items-center justify-center text-white"
>
  {/* ✅ Visible only on small screens */}
  <div className="">
    <div className="w-18 h-18 sm:w-25 sm:h-25 bg-white/30 border-5 backdrop-blur-md rounded-full flex  items-center justify-center border-black/20 hover:bg-white/20 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-acliceblue" 
        fill="aliceblue"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.94a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
      </svg>
    </div>
  </div>
</button>

       
      
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 backdrop-blur-sm"
            style={{
              backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px)',
              backgroundSize: '4px 4px',
            }}
            onClick={toggleVideo}
          ></div>

          {/* Video Container */}
          <div className="relative z-10 w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/bUqBOX0C-U0?autoplay=1&modestbranding=1&rel=0"
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
  );
};

export default HomePlay;
