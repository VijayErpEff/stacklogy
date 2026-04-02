"use client";

import React, { useRef, Children } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export default function HorizontalScroll({
  children,
  className = "",
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const childCount = Children.count(children);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll to horizontal translation
  // We need to move from 0 to -(childCount - 1) * card width
  // Using percentage-based transform relative to the scroll track
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${-(childCount - 1) * 85}%`]
  );

  // Progress bar width
  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${childCount * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Scrolling track */}
        <motion.div
          className="flex gap-6 px-[10vw]"
          style={{ x: translateX }}
        >
          {Children.map(children, (child, i) => (
            <div
              key={i}
              className="min-w-[80vw] md:min-w-[600px] lg:min-w-[700px] flex-shrink-0"
            >
              {child}
            </div>
          ))}
        </motion.div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-orange-500 rounded-full origin-left"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
    </div>
  );
}
