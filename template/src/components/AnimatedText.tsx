import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "",
  once = false 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = Array.isArray(text) ? text : [text];

  useEffect(() => {
    if (once && currentText === textArray[0]) return;

    const timer = setTimeout(() => {
      // Current text being processed
      const fullText = textArray[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
        
        // If we've completed typing the current text
        if (currentText === fullText) {
          // If we're only typing once, we're done
          if (once) return;
          
          // Otherwise, prepare to delete after a pause
          setIsDeleting(true);
          setTypingSpeed(1000); // Pause before deleting
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        
        // If we've deleted everything
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % textArray.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, textArray, once, typingSpeed]);

  return (
    <span className={cn("inline-block", className)}>
      {currentText}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
};

export default AnimatedText;
