"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface CapabilityBarProps {
  label: string;
  score: number;
}

export default function CapabilityBar({ label, score }: CapabilityBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const container = containerRef.current;
    if (!bar || !container) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      bar.style.width = `${score}%`;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(bar, {
              width: [0, `${score}%`],
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
  }, [score]);

  return (
    <div ref={containerRef} className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-fg">{label}</span>
        <span className="num text-sm font-medium text-muted">{score}%</span>
      </div>
      <div className="h-2 rounded-full bg-border overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{ width: "0%", background: "var(--color-accent)" }}
        />
      </div>
    </div>
  );
}
