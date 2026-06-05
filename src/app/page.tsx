"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import Link from "next/link";
import AgentCard from "@/components/AgentCard";
import StatCounter from "@/components/StatCounter";
import { featuredAgents } from "@/data/agents";

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const elements = hero.querySelectorAll(".hero-animate");
    animate(elements, {
      opacity: [0, 1],
      translateY: [20, 0],
      ease: "outCubic",
      duration: 800,
      delay: stagger(100),
    });
  }, []);

  useEffect(() => {
    const steps = stepsRef.current;
    if (!steps) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = steps.querySelectorAll(".step-item");
            animate(items, {
              opacity: [0, 1],
              translateY: [16, 0],
              ease: "outCubic",
              duration: 600,
              delay: stagger(120),
            });
            observer.unobserve(steps);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(steps);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="max-w-landing mx-auto px-6 md:px-8 pt-20 pb-16 md:pt-28 md:pb-20"
        data-od-id="hero"
      >
        <div className="hero-animate mb-4">
          <span className="inline-flex px-3 py-1 text-[11px] font-semibold tracking-widest text-accent uppercase rounded-full" style={{ backgroundColor: "oklch(52% 0.14 265 / 0.08)" }}>
            AGENT MARKETPLACE
          </span>
        </div>
        <h1 className="hero-animate font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-fg leading-tight max-w-3xl mb-5">
          Find the right AI agent for every job.
        </h1>
        <p className="hero-animate text-lg text-muted max-w-xl mb-8 leading-relaxed">
          Browse, connect, and deploy specialized AI agents across your workflow. From code generation to video production, find the perfect agent for every task.
        </p>
        <div className="hero-animate flex items-center gap-3">
          <Link
            href="/browse"
            className="inline-flex items-center px-5 py-2.5 rounded-button text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 no-underline"
            style={{ backgroundColor: "oklch(52% 0.14 265)" }}
          >
            Browse agents
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex items-center px-5 py-2.5 rounded-button text-sm font-semibold text-fg border border-border transition-all duration-150 hover:bg-border/50 no-underline"
          >
            How it works
          </a>
        </div>
      </section>

      {/* Featured Agents */}
      <section className="max-w-landing mx-auto px-6 md:px-8 pb-16" data-od-id="featured">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-semibold text-fg">Featured agents</h2>
          <Link
            href="/browse"
            className="text-sm font-medium no-underline transition-colors duration-150"
            style={{ color: "oklch(52% 0.14 265)" }}
          >
            View all
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 inline">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} variant="featured" />
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section
        id="how-it-works"
        ref={stepsRef}
        className="max-w-landing mx-auto px-6 md:px-8 pb-16"
        data-od-id="how-it-works"
      >
        <h2 className="font-display text-2xl font-semibold text-fg text-center mb-12">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Browse catalogue",
              desc: "Explore 24 specialized agents across 6 categories. Filter by capabilities, pricing, and ratings to find your perfect match.",
            },
            {
              step: "02",
              title: "Connect workspace",
              desc: "Integrate with Slack, GitHub, Google Drive, and Notion. Your agents work where you work — no context switching.",
            },
            {
              step: "03",
              title: "Assign and monitor",
              desc: "Set team access, manage budgets, and track performance from your dashboard. Deploy in under 2 minutes.",
            },
          ].map((item) => (
            <div key={item.step} className="step-item animate-hidden-stagger text-center md:text-left">
              <span className="font-display text-5xl font-semibold" style={{ color: "oklch(52% 0.14 265 / 0.15)" }}>
                {item.step}
              </span>
              <h3 className="font-display text-lg font-semibold text-fg mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Row */}
      <section className="max-w-landing mx-auto px-6 md:px-8 pb-16" data-od-id="stats">
        <div className="bg-surface border border-border rounded-card p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCounter value={218000} label="Runs per day" suffix="K" prefix="" decimals={0} />
          <StatCounter value={98.7} label="Uptime" suffix="%" decimals={1} />
          <StatCounter value={3.6} label="Setup time" suffix=" min" decimals={0} />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-landing mx-auto px-6 md:px-8 pb-20" data-od-id="cta-strip">
        <div className="rounded-card p-8 md:p-12 text-center" style={{ backgroundColor: "oklch(18% 0.012 250)", color: "oklch(100% 0 0)" }}>
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">
            Your first agent is three clicks away.
          </h2>
          <p className="text-base mb-6 opacity-80 max-w-lg mx-auto">
            Free for solo use with one agent. $12/seat per agent after that.
          </p>
          <Link
            href="/onboarding"
            className="inline-flex items-center px-6 py-3 rounded-button text-sm font-semibold transition-all duration-150 hover:opacity-90 no-underline"
            style={{ backgroundColor: "oklch(52% 0.14 265)", color: "white" }}
          >
            Get started free
          </Link>
        </div>
      </section>
    </div>
  );
}
