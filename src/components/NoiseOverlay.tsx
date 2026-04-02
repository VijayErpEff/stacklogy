"use client";

import { useEffect } from "react";

interface NoiseOverlayProps {
  className?: string;
}

export default function NoiseOverlay({ className = "" }: NoiseOverlayProps) {
  useEffect(() => {
    // Animate the feTurbulence seed to create subtle grain movement
    // Using setInterval at a slow rate to keep it lightweight
    let seed = 0;
    const turbulence = document.getElementById(
      "noise-turbulence"
    ) as SVGFETurbulenceElement | null;

    if (!turbulence) return;

    const interval = setInterval(() => {
      seed = (seed + 1) % 100;
      turbulence.setAttribute("seed", String(seed));
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] pointer-events-none opacity-[0.02] mix-blend-soft-light ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <filter id="noise-filter">
          <feTurbulence
            id="noise-turbulence"
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves={3}
            stitchTiles="stitch"
            seed="0"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noise-filter)"
          fill="transparent"
        />
      </svg>
    </div>
  );
}
