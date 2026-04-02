"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function GradientGlow() {
  const [isMobile, setIsMobile] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { stiffness: 50, damping: 30, mass: 1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    // Detect touch device / mobile
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    setIsMobile(!hasMouse);

    if (!hasMouse) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-10 pointer-events-none"
      style={{
        x,
        y,
        width: 600,
        height: 600,
      }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgb(249 115 22 / 0.08) 0%, rgb(249 115 22 / 0.03) 30%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
