import React from "react";
import { Vortex } from "./vortex";

export const VortexBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="w-full h-full"
        particleCount={800}
        baseHue={220}
        baseSpeed={0.3}
        rangeSpeed={1.2}
        baseRadius={1}
        rangeRadius={2}
        containerClassName="opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
    </div>
  );
}; 