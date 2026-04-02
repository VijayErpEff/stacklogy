"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  strength?: number;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  strength = 0.3,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Spring-animated x and y values for the button
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  // Inner content moves in the opposite direction at half strength
  const innerX = useTransform(x, (val) => val * -0.5);
  const innerY = useTransform(y, (val) => val * -0.5);

  const maxPull = 15;
  const pullZone = 40; // px beyond button edges

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      // Check if within pull zone (extended bounding box)
      const withinX =
        e.clientX >= rect.left - pullZone &&
        e.clientX <= rect.right + pullZone;
      const withinY =
        e.clientY >= rect.top - pullZone &&
        e.clientY <= rect.bottom + pullZone;

      if (withinX && withinY) {
        const pullX = Math.max(-maxPull, Math.min(maxPull, distX * strength));
        const pullY = Math.max(-maxPull, Math.min(maxPull, distY * strength));
        x.set(pullX);
        y.set(pullY);
      }
    },
    [strength, x, y]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block"
    >
      <motion.div
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {href ? (
          <Link href={href} className={className} onClick={onClick}>
            <motion.span
              className="inline-block"
              style={{ x: innerX, y: innerY }}
            >
              {children}
            </motion.span>
          </Link>
        ) : (
          <button type="button" className={className} onClick={onClick}>
            <motion.span
              className="inline-block"
              style={{ x: innerX, y: innerY }}
            >
              {children}
            </motion.span>
          </button>
        )}
      </motion.div>
    </motion.div>
  );

  // Wrap in a larger hit area to catch mouse moves in the pull zone
  return (
    <div
      className="inline-block"
      style={{ padding: `${pullZone}px`, margin: `-${pullZone}px` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </div>
  );
}
