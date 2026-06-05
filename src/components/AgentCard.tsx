"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import Link from "next/link";
import type { Agent } from "@/data/agents";

interface AgentCardProps {
  agent: Agent & { accentColor?: string };
  variant?: "featured" | "default";
}

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5" style={{ color: "oklch(60% 0.10 75)" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" fill={i < full ? "currentColor" : hasHalf && i === full ? "url(#half)" : "oklch(92% 0.005 250)"} />
        </svg>
      ))}
    </div>
  );
}

export default function AgentCard({ agent, variant = "default" }: AgentCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (variant === "featured") {
    return (
      <Link href={`/agents/${agent.slug}`} className="no-underline block">
        <div
          ref={cardRef}
          className="animate-hidden-stagger bg-surface border border-border rounded-card p-6 hover:border-accent/30 transition-all duration-150 group"
          data-od-id={`agent-card-${agent.slug}`}
        >
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: agent.iconSvg }}
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg font-semibold text-fg group-hover:text-accent transition-colors duration-150 truncate">
                {agent.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <StarRating rating={agent.rating} />
                <span className="text-xs text-muted font-medium">{agent.rating}</span>
              </div>
            </div>
            <span className="text-sm font-semibold text-accent whitespace-nowrap">${agent.price}{agent.priceLabel}</span>
          </div>
          <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
            {agent.tagline}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <span className="inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full" style={{ backgroundColor: "oklch(52% 0.14 265 / 0.08)", color: "oklch(52% 0.14 265)" }}>
              {agent.category}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/agents/${agent.slug}`} className="no-underline block">
      <div
        ref={cardRef}
        className="animate-hidden-stagger bg-surface border border-border rounded-card p-5 hover:border-accent/30 transition-all duration-150 group h-full"
        data-od-id={`agent-card-${agent.slug}`}
      >
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: agent.iconSvg }}
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-base font-semibold text-fg group-hover:text-accent transition-colors duration-150 truncate">
              {agent.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <StarRating rating={agent.rating} size={12} />
              <span className="text-xs text-muted">{agent.rating}</span>
            </div>
          </div>
          <span className="text-sm font-semibold text-accent whitespace-nowrap">${agent.price}/mo</span>
        </div>
        <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-3">
          {agent.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          <span className="inline-flex px-2 py-0.5 text-[11px] font-medium rounded-full" style={{ backgroundColor: "oklch(52% 0.14 265 / 0.08)", color: "oklch(52% 0.14 265)" }}>
            {agent.category}
          </span>
          <span className="inline-flex px-2 py-0.5 text-[11px] font-medium rounded-full" style={{ backgroundColor: "oklch(54% 0.012 250 / 0.08)", color: "oklch(54% 0.012 250)" }}>
            v{agent.version}
          </span>
        </div>
      </div>
    </Link>
  );
}
