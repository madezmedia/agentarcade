"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export default function StatCounter({
  value,
  label,
  suffix = "",
  prefix = "",
  decimals = 0,
}: StatCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const countEl = countRef.current;
    if (!container || !countEl) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      countEl.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const obj = { val: 0 };
            animate(obj, {
              val: value,
              ease: "outCubic",
              duration: 1200,
              onUpdate: () => {
                countEl!.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
              },
            });
            animate(container, {
              opacity: [0, 1],
              ease: "outCubic",
              duration: 600,
            });
            observer.unobserve(container);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [value, prefix, suffix, decimals]);

  return (
    <div
      ref={containerRef}
      className="animate-counter text-center"
      data-od-id={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <span
        ref={countRef}
        className="block font-display text-4xl md:text-5xl font-semibold text-fg mb-1"
      >
        0
      </span>
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}
