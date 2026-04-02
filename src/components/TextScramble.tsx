"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from "framer-motion";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  triggerOnView?: boolean;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

function randomChar(): string {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function TextScramble({
  text,
  className,
  delay = 0,
  duration = 1500,
  triggerOnView = true,
}: TextScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [displayText, setDisplayText] = useState<string>("");
  const hasStarted = useRef(false);

  const scramble = useCallback(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const length = text.length;
    const startTime = performance.now();

    // Each char resolves at a different time, sweeping left to right
    const resolveAt = Array.from({ length }, (_, i) => {
      if (text[i] === " ") return 0;
      // Sweep: chars resolve progressively, with 40% of duration as a "all scrambling" phase
      const pos = i / Math.max(length - 1, 1);
      return duration * 0.4 + pos * duration * 0.55 + (Math.random() * duration * 0.05);
    });

    let frameId: number;
    // Throttle to ~20fps for more visible char cycling (not silky smooth = more readable scramble)
    let lastFrame = 0;
    const frameDuration = 50; // ms between visual updates

    const animate = (now: number) => {
      const elapsed = now - startTime;

      if (now - lastFrame >= frameDuration || elapsed >= duration) {
        lastFrame = now;
        const progress = Math.min(elapsed / duration, 1);

        let result = "";
        for (let i = 0; i < length; i++) {
          if (text[i] === " ") {
            result += " ";
          } else if (elapsed >= resolveAt[i]) {
            result += text[i];
          } else {
            result += randomChar();
          }
        }

        setDisplayText(result);

        if (progress >= 1) {
          setDisplayText(text);
          return;
        }
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [text, duration]);

  // Show blank initially (not scrambled — the scramble IS the entrance)
  useEffect(() => {
    // Start with invisible chars (same length, spaces preserved)
    setDisplayText(
      text
        .split("")
        .map((ch) => (ch === " " ? " " : "\u00A0"))
        .join("")
    );
  }, [text]);

  // Trigger
  useEffect(() => {
    const shouldStart = triggerOnView ? isInView : true;
    if (!shouldStart) return;

    let cleanupFn: (() => void) | undefined;

    const timeoutId = setTimeout(() => {
      cleanupFn = scramble();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (cleanupFn) cleanupFn();
    };
  }, [isInView, triggerOnView, delay, scramble]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
