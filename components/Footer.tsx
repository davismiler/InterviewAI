import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Github from './Github';
 // Remove if not using react-router
 import { useEffect, useState } from 'react';
const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="relative  text-gray-300  ">
      {/* Curved border effect */}
      

      {/* Logo and tagline */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <Image src="/logo.svg" alt="Logo" width={35} height={35} className="sm:w-20 w-14 mb-5 " />
        <Link href="https://github.com/davismiler/InterviewAI" >
        < Github />
        </Link>
        <p className="sm:text-3xl mt-4 text-lg text-purple-200 font-medium">
          Your Path to Interview Excellence
        </p>
      </div>


      {/* Divider */}
      <div className="mt-10 border-t border-gray-500 mx-10" />

      {/* Bottom row */}
      <div className="mt-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <div className="flex gap-4 mb-2 md:mb-0">
        <Link href="https://www.linkedin.com/in/abhishekganvir/" className="hover:underline">LinkedIn</Link>
          <Link href="https://github.com/davismiler" className="hover:underline">GitHub</Link>
          <Link href="mailto:abhishekganvirr@gmail.com" className="hover:underline">Contact Us</Link>
        </div>
        <div>
        {year && <>Copyright © {year} | <span className="font-semibold">InterviewAI</span></>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
