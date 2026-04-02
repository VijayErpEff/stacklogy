"use client";

import { Children, type ReactNode } from "react";

interface ScrollSnapProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollSnap({
  children,
  className = "",
}: ScrollSnapProps) {
  return (
    <div
      className={`h-screen overflow-y-auto snap-y snap-mandatory ${className}`}
      style={{ scrollBehavior: "smooth" }}
    >
      {Children.map(children, (child) => (
        <div className="snap-start min-h-screen">{child}</div>
      ))}
    </div>
  );
}
