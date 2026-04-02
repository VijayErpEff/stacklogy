"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface MetricCardProps {
  value: string;
  label: string;
}

/**
 * Parses a metric string like "200+" or "$4.2M" into parts:
 * - prefix: non-numeric leading chars (e.g. "$")
 * - number: the numeric portion (e.g. 200 or 4.2)
 * - suffix: trailing non-numeric chars (e.g. "+" or "M")
 * - decimals: number of decimal places in the original string
 */
function parseMetric(value: string) {
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value, decimals: 0 };

  const numStr = match[2];
  const decimalIndex = numStr.indexOf(".");
  const decimals = decimalIndex === -1 ? 0 : numStr.length - decimalIndex - 1;

  return {
    prefix: match[1],
    number: parseFloat(numStr),
    suffix: match[3],
    decimals,
  };
}

export default function MetricCard({ value, label }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-48px" });
  const [displayValue, setDisplayValue] = useState("0");

  const { prefix, number: target, suffix, decimals } = parseMetric(value);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500; // ms
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setDisplayValue(current.toFixed(decimals));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target, decimals]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-white md:text-5xl">
        {prefix}
        {isInView ? displayValue : "0"}
        {suffix}
      </p>
      <p className="mt-2 text-white/40">{label}</p>
    </div>
  );
}
