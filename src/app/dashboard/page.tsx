"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import Link from "next/link";
import { agents } from "@/data/agents";
import { Button } from "@/components/ui/button";
import MetricCard from "@/components/MetricCard";

const metrics = [
  { value: 24, label: "Agents installed", change: "+3 this week" as const, changeType: "up" as const },
  { value: 218000, label: "Runs today", change: "+12% vs yesterday" as const, changeType: "up" as const },
  { value: 384, label: "Monthly spend", prefix: "$" as const, change: "" as const, changeType: "up" as const },
  { value: 99.2, label: "Avg uptime", suffix: "%" as const, change: "" as const, changeType: "up" as const },
];

const installedAgents = [
  { slug: "codex", name: "Codex", runs: "4,180", lastActive: "2 min ago", status: "online" as const },
  { slug: "claude", name: "Claude Research", runs: "2,340", lastActive: "15 min ago", status: "online" as const },
  { slug: "bugsweep", name: "BugSweep", runs: "890", lastActive: "3 hours ago", status: "warn" as const },
  { slug: "docsmith", name: "DocSmith", runs: "420", lastActive: "1 day ago", status: "offline" as const },
];

const activityFeed = [
  { text: "Codex completed review on <strong>PR #1427</strong>", time: "2 min ago" },
  { text: "Claude Research published brief <strong>Q2 Competitive Analysis</strong>", time: "18 min ago" },
  { text: "BugSweep found <strong>3 potential regressions</strong> in main", time: "45 min ago" },
  { text: "Billing invoice <strong>#INV-2026-0428</strong> processed ($384.00)", time: "2 hours ago" },
  { text: "DocSmith synced API docs for <strong>agentarcade/packages</strong>", time: "4 hours ago" },
  { text: "TestGen generated <strong>47 new test cases</strong> for auth module", time: "6 hours ago" },
];

function AgentIcon({ slug }: { slug: string }) {
  const agent = agents.find((a) => a.slug === slug);
  if (!agent) return null;
  return (
    <div
      className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
      dangerouslySetInnerHTML={{
        __html: agent.iconSvg.replace('width="40"', 'width="20"').replace('height="40"', 'height="20"'),
      }}
    />
  );
}

export default function DashboardPage() {
  const metricRef = useRef<HTMLDivElement>(null);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!metricRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const metricCards = metricRef.current.querySelectorAll(".metric-card-animate");
    if (metricCards.length > 0) {
      animate(metricCards, {
        opacity: [0, 1],
        translateY: [12, 0],
        ease: "outCubic",
        duration: 600,
        delay: stagger(100),
      });
    }
  }, []);

  useEffect(() => {
    if (!feedRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const feedItems = feedRef.current.querySelectorAll(".feed-animate");
    if (feedItems.length > 0) {
      animate(feedItems, {
        opacity: [0, 1],
        translateX: [-6, 0],
        ease: "outCubic",
        duration: 500,
        delay: stagger(60),
      });
    }
  }, []);

  const statusColor = (status: string) => {
    switch (status) {
      case "online": return "oklch(55% 0.12 145)";
      case "warn": return "oklch(60% 0.10 75)";
      default: return "oklch(54% 0.012 250)";
    }
  };

  return (
    <div className="container max-w-content mx-auto px-6 py-8" data-od-id="dashboard">
      <h1 className="font-display text-2xl md:text-3xl tracking-tight mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
        {/* Main content */}
        <div>
          {/* Metric cards */}
          <section ref={metricRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" data-od-id="metrics">
            {metrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </section>

          {/* Installed agents */}
          <section className="bg-surface border border-border rounded-card p-6 mb-6" data-od-id="installed-agents">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-base">Installed agents</h2>
              <Link href="/browse" className="text-sm text-accent no-underline hover:underline">Browse more</Link>
            </div>
            <div>
              {installedAgents.map((a) => (
                <div key={a.slug} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
                  <AgentIcon slug={a.slug} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{a.name}</div>
                    <div className="text-xs text-muted">{a.runs} runs/wk</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted">{a.lastActive}</div>
                  </div>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: statusColor(a.status) }} />
                </div>
              ))}
            </div>
          </section>

          {/* Activity feed */}
          <section ref={feedRef} className="bg-surface border border-border rounded-card p-6" data-od-id="activity-feed">
            <h2 className="font-semibold text-base mb-5">Activity</h2>
            <div>
              {activityFeed.map((item, i) => (
                <div key={i} className="feed-animate flex gap-3 py-2.5 border-b border-border last:border-0">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "oklch(52% 0.14 265)" }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }} />
                    <span className="text-[10px] text-muted">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6" data-od-id="dashboard-sidebar">
          <div className="bg-surface border border-border rounded-card p-6">
            <h3 className="font-semibold text-sm mb-4">Account</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold text-sm">A</div>
              <div>
                <div className="text-sm font-medium">Acme Corp</div>
                <div className="text-xs text-muted">team@acmecorp.com</div>
              </div>
            </div>
            <p className="text-xs text-muted">24 agents · 8 team members</p>
          </div>

          <div className="bg-surface border border-border rounded-card p-6">
            <h3 className="font-semibold text-sm mb-4">Billing</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm"><span>Plan</span><span className="font-medium">Team Pro</span></div>
              <div className="flex justify-between text-sm"><span>Seats</span><span className="font-mono text-xs">8 × $49</span></div>
              <div className="flex justify-between text-sm border-t border-border pt-2"><span>Total</span><span className="font-semibold">$384/mo</span></div>
              <div className="flex justify-between text-xs text-muted"><span>Next invoice</span><span>Jun 28, 2026</span></div>
            </div>
            <Button variant="outline" className="w-full rounded-button text-sm">Manage billing</Button>
          </div>

          <div className="bg-surface border border-accent/30 rounded-card p-6" style={{ background: "oklch(52% 0.14 265 / 0.04)" }}>
            <h3 className="font-semibold text-sm mb-2">Add more agents</h3>
            <p className="text-xs text-muted mb-4">Discover new agents to expand your team&apos;s capabilities.</p>
            <Link href="/browse">
              <Button className="w-full bg-accent text-white hover:opacity-90 rounded-button text-sm">Browse marketplace</Button>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
