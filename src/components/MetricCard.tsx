"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface MetricCardProps {
  value: string | number;
  label: string;
  change?: string;
  changeType?: "up" | "down";
  suffix?: string;
  prefix?: string;
}

export default function MetricCard({ value, label, change, changeType = "up", suffix, prefix }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isPositive = changeType === "up";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(el, {
              opacity: [0, 1],
              translateY: [12, 0],
              ease: "outCubic",
              duration: 600,
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const displayValue = (() => {
    let v = typeof value === "number" ? value.toLocaleString() : value;
    if (prefix) v = prefix + v;
    if (suffix) v = v + suffix;
    return v;
  })();

  return (
    <div
      ref={ref}
      className="animate-hidden bg-surface border border-border rounded-card p-5 metric-card-animate"
      data-od-id={`metric-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <span className="block font-display text-3xl font-semibold mb-1" style={{ color: "oklch(52% 0.14 265)" }}>
        {displayValue}
      </span>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted">{label}</span>
        {change && (
          <span className={`text-xs font-medium ${isPositive ? "text-success" : "text-danger"}`}>
            {isPositive ? "↑ " : "↓ "}{change}
          </span>
        )}
      </div>
    </div>
  );
}
