import React, { useState, useEffect } from 'react';
import { Code2, Heart, ArrowUp, Atom, FileCode, Palette, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const techStack = [
    { icon: Atom, label: "React" },
    { icon: FileCode, label: "TypeScript" },
    { icon: Palette, label: "Tailwind" },
    { icon: Zap, label: "Vite" },
  ];
  
  return (
    <footer className="relative">
      {/* Main footer content */}
      <div className="bg-gray-900/80 py-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Logo and copyright */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/e9810342-de6a-4f13-9171-0077afe8c75a.png" 
                alt="Kalp Logo" 
                className="h-10 w-10"
              />
              <div>
                <p className="text-gray-400 text-sm">
                  © {currentYear} Kalp Senghani. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Built with <Heart className="inline w-3 h-3 text-red-500" /> and <Code2 className="inline w-3 h-3 text-blue-500" />
                </p>
              </div>
            </div>

            {/* Right side - Tech stack icons */}
            <div className="flex items-center space-x-4">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  title={tech.label}
                >
                  <tech.icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-800/80 hover:bg-gray-800 text-white shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
