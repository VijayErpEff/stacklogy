"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

interface KineticTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  highlightWords?: string[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function KineticText({
  text,
  className = "",
  tag = "h1",
  highlightWords = [],
}: KineticTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const words = text.split(" ");

  // Normalize highlight words to lowercase for comparison
  const highlightSet = new Set(
    highlightWords.map((w) => w.toLowerCase().replace(/[.,!?;:]/g, ""))
  );

  const Tag = tag;

  return (
    <div ref={ref}>
      <Tag className={className}>
        <motion.span
          className="inline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {words.map((word, i) => {
            const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, "");
            const isHighlight = highlightSet.has(cleanWord);

            return (
              <motion.span
                key={`${word}-${i}`}
                variants={wordVariants}
                className={`inline-block mr-[0.3em] ${
                  isHighlight ? "text-orange-500" : ""
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.span>
      </Tag>
    </div>
  );
}
