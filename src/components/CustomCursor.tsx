"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Dot position — very snappy
  const dotX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.1 });
  const dotY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.1 });

  // Ring position — more lag for trailing effect
  const ringX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const ringY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    // Detect touch device
    const hasTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (hasTouch) {
      setIsTouchDevice(true);
      return;
    }

    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, label[for], [data-cursor-hover]'
      );
      setIsHoveringInteractive(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [dotX, dotY, ringX, ringY, isVisible]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Small dot — follows cursor closely */}
      <motion.div
        className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full bg-orange-500"
        style={{
          x: dotX,
          y: dotY,
          width: 8,
          height: 8,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHoveringInteractive ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        aria-hidden="true"
      />

      {/* Larger ring — trails behind with lag */}
      <motion.div
        className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHoveringInteractive ? 48 : 32,
          height: isHoveringInteractive ? 48 : 32,
          opacity: isVisible ? 1 : 0,
          borderColor: isHoveringInteractive
            ? "rgba(249, 115, 22, 0.5)"
            : "rgba(148, 163, 184, 0.4)",
          borderWidth: 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        aria-hidden="true"
      />
    </>
  );
}
