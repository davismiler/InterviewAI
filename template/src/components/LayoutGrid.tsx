"use client";

import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";

const boxVariants: Variants = {
  normal: (i: number) => ({
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  }),
  animate: (i: number) => {
    // Calculate new positions for clockwise rotation
    const positions = [
      { x: 11, y: 0 }, // Top left moves right
      { x: 0, y: 11 }, // Top right moves down
      { x: -11, y: 0 }, // Bottom right moves left
      { x: 0, y: -11 }, // Bottom left moves up
    ];
    return {
      ...positions[i],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    };
  },
};

interface LayoutGridProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const LayoutGrid = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: LayoutGridProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.rect
          width="7"
          height="7"
          x="3"
          y="3"
          rx="1"
          variants={boxVariants}
          animate={controls}
          initial="normal"
          custom={0}
        />
        <motion.rect
          width="7"
          height="7"
          x="14"
          y="3"
          rx="1"
          variants={boxVariants}
          animate={controls}
          initial="normal"
          custom={1}
        />
        <motion.rect
          width="7"
          height="7"
          x="14"
          y="14"
          rx="1"
          variants={boxVariants}
          animate={controls}
          initial="normal"
          custom={2}
        />
        <motion.rect
          width="7"
          height="7"
          x="3"
          y="14"
          rx="1"
          variants={boxVariants}
          animate={controls}
          initial="normal"
          custom={3}
        />
      </svg>
    </div>
  );
};

export { LayoutGrid };

