
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedCardProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const AnimatedCard = ({ children, delay = 0, className = '' }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 60, 
        damping: 20, 
        delay: delay 
      }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
