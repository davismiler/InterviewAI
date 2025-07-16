'use client';
import React, { useEffect, useState } from 'react';

const Card = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('hasSeenNotice');
    if (!seen) {
      setShow(true);
      localStorage.setItem('hasSeenNotice', 'true');
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-white/10">
      <div className="relative w-full max-w-md mx-4 rounded-xl p-5 shadow-2xl border border-white/20 bg-white/30 backdrop-blur-md transition-all">
        
        {/* Decorative stripe on the left */}
        <div className="absolute left-0 top-0 h-full w-2 bg-[#c1614e] rounded-s-xl"></div>

        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-orange-700 hover:text-orange-950 transition"
          onClick={() => setShow(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <h2 className="text-xl font-bold text-orange-700 mb-2 pl-3">Notice!</h2>
        <p className="text-zinc-900 text-sm leading-relaxed pl-3 pr-5">
          Due to the discontinuation of free plans by Vapi for AI voice integration, we are currently unable to provide this service. However, we're working on a comeback.
          <br />
           Stay tuned 🔔
        </p>
      </div>
    </div>
  );
};

export default Card;
