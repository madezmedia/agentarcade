"use client";

import Link from "next/link";
import { agents } from "@/data/agents";
import { StatCounter, AnimateOnView } from "@/lib/anime-client";

const installedAgents = agents.slice(0, 4);
const recentActivity = [
  { action: "Codex completed code review on PR #243", time: "2 min ago" },
  { action: "BugSweep found 3 vulnerabilities in main", time: "14 min ago" },
  { action: "DocSmith regenerated API docs for v2.1", time: "1 hr ago" },
  { action: "PR Pilot merged PR #239 (bump deps)", time: "3 hrs ago" },
];

export default function DashboardPage() {
  return (
    <div className="container-wide py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-fg">Dashboard</h1>
          <p className="mt-1 text-sm text-muted">Manage your agents, workspace, and billing in one place.</p>
        </div>
        <Link href="/browse" className="btn btn-primary no-underline">
          Browse more
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        <AnimateOnView>
          <div className="card p-4 text-center">
            <div className="num text-2xl font-bold text-fg">4</div>
            <div className="mt-1 text-xs text-muted">Connected agents</div>
          </div>
        </AnimateOnView>
        <AnimateOnView>
          <div className="card p-4 text-center">
            <div className="num text-2xl font-bold text-fg">$63</div>
            <div className="mt-1 text-xs text-muted">Monthly spend</div>
          </div>
        </AnimateOnView>
        <AnimateOnView>
          <div className="card p-4 text-center">
            <StatCounter value={12840} label="Total runs this month" />
          </div>
        </AnimateOnView>
        <AnimateOnView>
          <div className="card p-4 text-center">
            <div className="num text-2xl font-bold text-fg">12</div>
            <div className="mt-1 text-xs text-muted">Pending reviews</div>
          </div>
        </AnimateOnView>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          <h2 className="text-sm font-semibold text-fg">Connected agents</h2>
          <div className="mt-3 space-y-2">
            {installedAgents.map((a) => (
              <Link
                key={a.id}
                href={`/agents/${a.slug}`}
                className="card flex items-center gap-3 px-4 py-3 text-sm no-underline hover:border-[var(--color-accent)]/20 transition-colors"
              >
                <div
                  className="avatar-box"
                  dangerouslySetInnerHTML={{ __html: a.iconSvg }}
                />
                <span className="flex-1 font-medium text-fg">{a.name}</span>
                <span className="num text-xs text-muted">${a.price}{a.priceLabel}</span>
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-success)" }} />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-fg">Recent activity</h2>
          <div className="mt-3 space-y-2">
            {recentActivity.map((item) => (
              <div key={item.time} className="card px-4 py-3">
                <p className="text-sm text-fg">{item.action}</p>
                <span className="meta mt-1 block">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
