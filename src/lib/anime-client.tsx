"use client";

import { useEffect, useRef, type ReactNode } from "react";

function outCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

interface AnimateOnViewProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "none";
}

export function AnimateOnView({
  children,
  className = "",
  animation = "fade-up",
}: AnimateOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            import("animejs").then(({ animate, cubicBezier }) => {
              const spring = cubicBezier(0.34, 1.56, 0.64, 1);
              if (animation === "fade-up") {
                animate(el, {
                  translateY: [20, 0],
                  opacity: [0, 1],
                  duration: 600,
                  easing: spring,
                });
              } else if (animation === "fade-in") {
                animate(el, {
                  opacity: [0, 1],
                  duration: 400,
                  easing: spring,
                });
              }
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animation]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
}

export function StaggerGrid({ children, className = "" }: StaggerGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const items = grid.querySelectorAll<HTMLElement>(".stagger-item");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            import("animejs").then(({ animate, cubicBezier }) => {
              const spring = cubicBezier(0.34, 1.56, 0.64, 1);
              items.forEach((item, i) => {
                animate(item, {
                  translateY: [12, 0],
                  opacity: [0, 1],
                  duration: 500,
                  delay: i * 80,
                  easing: spring,
                });
              });
            });
            observer.unobserve(grid);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className={className}>
      {children}
    </div>
  );
}

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  decimals = 0,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      el.textContent = `${prefix}${value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = el;
            const t0 = performance.now();
            const dur = 1200;
            const fmt = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;
            const tick = (now: number) => {
              const p = Math.min((now - t0) / dur, 1);
              const eased = outCubic(p);
              target.textContent = fmt(parseFloat((eased * value).toFixed(decimals)));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, prefix, decimals]);

  return (
    <div className="flex flex-col items-center gap-1">
      <span ref={ref} className="font-display text-3xl font-bold text-fg">
        {prefix}0{suffix}
      </span>
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}
