"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimateOnView } from "@/lib/anime-client";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Workspace",
    subtitle: "Choose your workspace name and type.",
  },
  {
    title: "Connections",
    subtitle: "Connect your tools: Slack, GitHub, Google Drive.",
  },
  {
    title: "Agents",
    subtitle: "Pick your first agent from the catalogue.",
  },
  {
    title: "Team",
    subtitle: "Invite team members and set permissions.",
  },
];

const mockConnections = [
  { name: "Slack", connected: false },
  { name: "GitHub", connected: true },
  { name: "Google Drive", connected: false },
  { name: "Notion", connected: true },
];

const popularAgents = [
  { name: "Codex", tagline: "Write and review code with AI.", price: 29 },
  { name: "BugSweep", tagline: "Find and fix bugs before they ship.", price: 19 },
  { name: "DocSmith", tagline: "Generate and maintain documentation.", price: 14 },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceType, setWorkspaceType] = useState("personal");

  return (
    <div className="mx-auto max-w-content px-6 py-12">
      <div className="mx-auto max-w-lg">
        <AnimateOnView>
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-accent uppercase">
            Step {step} of 4
          </span>
          <h1 className="mt-4 font-display text-2xl font-bold text-fg">
            {steps[step - 1].title}
          </h1>
          <p className="mt-1 text-sm text-muted">
            {steps[step - 1].subtitle}
          </p>

          <div className="mt-8 flex gap-2">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors",
                  i + 1 <= step ? "bg-accent" : "bg-border",
                )}
              />
            ))}
          </div>
        </AnimateOnView>

        <AnimateOnView animation="fade-up">
          <div className="mt-8">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-fg">
                    Workspace name
                  </label>
                  <input
                    type="text"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    placeholder="Acme Corp"
                    className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-fg outline-none placeholder:text-muted focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-fg">
                    Type
                  </label>
                  <select
                    value={workspaceType}
                    onChange={(e) => setWorkspaceType(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-fg outline-none focus:border-accent"
                  >
                    <option value="personal">Personal</option>
                    <option value="team">Team</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                {mockConnections.map((conn) => (
                  <div
                    key={conn.name}
                    className="flex items-center justify-between rounded-card border border-border px-4 py-3"
                  >
                    <span className="text-sm text-fg">{conn.name}</span>
                    {conn.connected ? (
                      <span className="text-xs font-medium text-green-600">
                        Connected
                      </span>
                    ) : (
                      <button className="rounded-button border border-border px-3 py-1 text-xs text-fg transition-all hover:bg-border/50">
                        Connect
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                {popularAgents.map((agent) => (
                  <label
                    key={agent.name}
                    className="flex items-center gap-3 rounded-card border border-border px-4 py-3 text-sm transition-colors hover:border-accent/30"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-accent"
                    />
                    <span className="flex-1">
                      <span className="font-medium text-fg">
                        {agent.name}
                      </span>
                      <span className="ml-2 text-muted">
                        {agent.tagline}
                      </span>
                    </span>
                    <span className="text-xs text-muted">
                      ${agent.price}
                    </span>
                  </label>
                ))}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-fg">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="colleague@acme.com"
                    className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-fg outline-none placeholder:text-muted focus:border-accent"
                  />
                </div>
                <p className="text-xs text-muted">
                  You can always invite more team members from the dashboard.
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="text-sm text-muted hover:text-fg"
              >
                ← Back
              </button>
            ) : (
              <Link
                href="/browse"
                className="text-sm text-muted hover:text-fg"
              >
                ← Skip to marketplace
              </Link>
            )}
            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="rounded-button bg-accent px-5 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
              >
                Continue
              </button>
            ) : (
              <Link
                href="/dashboard"
                className="rounded-button bg-accent px-5 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
              >
                Go to dashboard
              </Link>
            )}
          </div>
        </AnimateOnView>
      </div>
    </div>
  );
}
