"use client";

import { motion } from "framer-motion";

interface BentoCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
  size?: "large" | "medium" | "small";
  gradient?: string;
}

export default function BentoCard({
  title,
  description,
  className = "",
  children,
  size = "medium",
  gradient = "bg-gradient-to-br from-slate-800 to-slate-900",
}: BentoCardProps) {
  return (
    <motion.div
      className={`relative h-full border border-white/5 rounded-2xl overflow-hidden group cursor-default ${gradient} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      data-size={size}
    >
      {/* Custom visual content fills the card */}
      {children && (
        <div className="absolute inset-0 overflow-hidden">{children}</div>
      )}

      {/* Hover shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" />

      {/* Text content anchored to bottom */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6">
        <div className="mt-auto">
          <h3
            className={`font-semibold text-white mb-1.5 ${
              size === "large" ? "text-2xl" : "text-lg"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-slate-400 leading-relaxed ${
              size === "large" ? "text-base" : "text-sm"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
