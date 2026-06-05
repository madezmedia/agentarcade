"use client";

import Link from "next/link";
import { agents } from "@/data/agents";
import { StatCounter } from "@/lib/anime-client";
import { AnimateOnView } from "@/lib/anime-client";

const installedAgents = agents.slice(0, 4);
const recentActivity = [
  {
    action: "Codex completed code review on PR #243",
    time: "2 min ago",
  },
  {
    action: "BugSweep found 3 vulnerabilities in main",
    time: "14 min ago",
  },
  {
    action: "DocSmith regenerated API docs for v2.1",
    time: "1 hr ago",
  },
  {
    action: "PR Pilot merged PR #239 (bump deps)",
    time: "3 hrs ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-content px-6 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-fg">Dashboard</h1>
          <p className="mt-1 text-sm text-muted">
            Manage your agents, workspace, and billing in one place.
          </p>
        </div>
        <Link
          href="/browse"
          className="rounded-button bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
        >
          Browse more
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        <AnimateOnView>
          <div className="rounded-card border border-border p-4 text-center">
            <div className="text-2xl font-bold text-fg">4</div>
            <div className="mt-1 text-xs text-muted">Connected agents</div>
          </div>
        </AnimateOnView>
        <AnimateOnView>
          <div className="rounded-card border border-border p-4 text-center">
            <div className="text-2xl font-bold text-fg">$63</div>
            <div className="mt-1 text-xs text-muted">Monthly spend</div>
          </div>
        </AnimateOnView>
        <AnimateOnView>
          <div className="rounded-card border border-border p-4 text-center">
            <StatCounter value={12840} label="Total runs this month" />
          </div>
        </AnimateOnView>
        <AnimateOnView>
          <div className="rounded-card border border-border p-4 text-center">
            <div className="text-2xl font-bold text-fg">12</div>
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
                className="flex items-center gap-3 rounded-card border border-border px-4 py-3 text-sm transition-colors hover:border-accent/20"
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                  style={{ backgroundColor: `var(--color-${a.iconColor})` }}
                >
                  {a.name[0]}
                </div>
                <span className="flex-1 font-medium text-fg">
                  {a.name}
                </span>
                <span className="text-xs text-muted">
                  ${a.price}{a.priceLabel}
                </span>
                <span className="h-2 w-2 rounded-full bg-green-500" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-fg">Recent activity</h2>
          <div className="mt-3 space-y-2">
            {recentActivity.map((item) => (
              <div
                key={item.time}
                className="rounded-card border border-border px-4 py-3"
              >
                <p className="text-sm text-fg">{item.action}</p>
                <span className="mt-1 block text-xs text-muted">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
