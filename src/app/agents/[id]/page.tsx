"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getAgentBySlug } from "@/data/agents";
import { Button } from "@/components/ui/button";
import CapabilityBar from "@/components/CapabilityBar";
import ReviewCard from "@/components/ReviewCard";
import PricingCard from "@/components/PricingCard";

function StarRating({ rating, size = 80 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" style={{ color: "oklch(60% 0.10 75)" }}>
      <svg width={size} height={size / 5} viewBox="0 0 80 16" fill="currentColor">
        {[0, 1, 2, 3, 4].map((i) => (
          <polygon key={i} points={`${i * 16 + 8} 1 ${i * 16 + 10} 5.5 ${i * 16 + 15} 6 ${i * 16 + 11.5} 9.5 ${i * 16 + 12.5} 15 ${i * 16 + 8} 12 ${i * 16 + 3.5} 15 ${i * 16 + 4.5} 9.5 ${i * 16 + 1} 6 ${i * 16 + 6} 5.5 ${i * 16 + 8} 1`} fill={i < Math.floor(rating) ? "currentColor" : "oklch(92% 0.005 250)"} />
        ))}
      </svg>
    </span>
  );
}

export default function AgentDetailPage() {
  const params = useParams();
  const agent = getAgentBySlug(params.id as string);
  const [activeTab, setActiveTab] = useState("reviews");
  const headerRef = useRef<HTMLDivElement>(null);
  const capRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const els = headerRef.current.querySelectorAll(".detail-animate");
    animate(els, {
      opacity: [0, 1],
      translateY: [10, 0],
      ease: "outCubic",
      duration: 600,
      delay: stagger(80, { start: 100 }),
    });
  }, [agent]);

  if (!agent) {
    return (
      <div className="container max-w-content mx-auto px-6 py-24 text-center" data-od-id="not-found">
        <h1 className="font-display text-3xl mb-4">Agent not found</h1>
        <p className="text-muted mb-8">The agent you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/browse"><Button>Browse agents</Button></Link>
      </div>
    );
  }

  return (
    <div className="container max-w-content mx-auto px-6" data-od-id={`agent-detail-${agent.slug}`}>
      {/* Agent Header */}
      <section ref={headerRef} className="flex items-start gap-8 py-12 flex-wrap" data-od-id="agent-header">
        <div
          className="detail-animate w-[72px] h-[72px] rounded-[16px] flex-shrink-0 flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: agent.iconSvg.replace('width="40"', 'width="72"').replace('height="40"', 'height="72"') }}
        />
        <div className="flex-1 min-w-[280px] detail-animate">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="font-display text-3xl md:text-4xl tracking-tight">{agent.name}</h1>
            <span className="inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full" style={{ backgroundColor: "oklch(52% 0.14 265 / 0.08)", color: "oklch(52% 0.14 265)" }}>{agent.category}</span>
            <span className="inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full" style={{ backgroundColor: "oklch(60% 0.10 75 / 0.08)", color: "oklch(60% 0.10 75)" }}>{agent.subCategory}</span>
          </div>
          <p className="text-sm text-muted mt-1 mb-4">
            by {agent.publisher} · v{agent.version} · Updated {new Date(agent.updatedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <StarRating rating={agent.rating} />
            <span className="text-sm text-muted">{agent.rating} · {agent.reviewCount.toLocaleString()} reviews</span>
            <span className="w-px h-4 bg-border" />
            <span className="text-sm" style={{ color: "oklch(55% 0.12 145)" }}>{agent.runsPerDay.toLocaleString()} runs/day</span>
          </div>
        </div>
        <div className="detail-animate flex-shrink-0">
          <Link href="/onboarding">
            <Button className="bg-accent text-white hover:opacity-90 rounded-button px-8 py-6 text-base">
              Install agent
            </Button>
          </Link>
        </div>
      </section>

      {/* Capabilities + About */}
      <section ref={capRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12" data-od-id="overview">
        <div>
          <h2 className="font-display text-xl mb-5">Capabilities</h2>
          {agent.capabilities.map((cap) => (
            <CapabilityBar key={cap.label} label={cap.label} score={cap.score} />
          ))}
        </div>
        <div>
          <h2 className="font-display text-xl mb-5">About</h2>
          <p className="text-sm text-muted leading-relaxed">{agent.description}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {agent.integrations.map((int) => (
              <span key={int} className="inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full bg-border/30 text-muted">{int}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section data-od-id="tabs" className="pb-16">
        <div className="flex border-b border-border mb-8">
          {[
            { id: "reviews", label: "Reviews" },
            { id: "pricing", label: "Pricing" },
            { id: "changelog", label: "Changelog" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
                activeTab === tab.id ? "text-fg border-accent" : "text-muted border-transparent hover:text-fg"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              {agent.reviews.map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </div>
            <div className="bg-surface border border-border rounded-card p-8 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">Overall Rating</p>
              <div className="font-display text-6xl text-accent leading-none mb-2">{agent.rating}</div>
              <div className="flex justify-center mb-3"><StarRating rating={agent.rating} /></div>
              <p className="text-xs text-muted mb-5">Based on {agent.reviewCount.toLocaleString()} verified reviews</p>
              <Button variant="outline" className="rounded-button">Write a review</Button>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === "pricing" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {agent.pricingPlans.map((plan) => (
              <PricingCard key={plan.name} name={plan.name} price={plan.price} popular={plan.popular} features={plan.features} />
            ))}
          </div>
        )}

        {/* Changelog Tab */}
        {activeTab === "changelog" && (
          <div className="max-w-[600px]">
            {agent.changelog.map((entry) => (
              <div key={entry.version} className="py-4 border-b border-border last:border-0">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-semibold text-sm">{entry.version}</span>
                  <span className="text-xs text-muted">{entry.date}</span>
                </div>
                <p className="text-sm text-muted">{entry.notes}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
