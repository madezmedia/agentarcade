"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimateOnView } from "@/lib/anime-client";

const steps = [
  { title: "Workspace", subtitle: "Choose your workspace name and type." },
  { title: "Connections", subtitle: "Connect your tools: Slack, GitHub, Google Drive." },
  { title: "Agents", subtitle: "Pick your first agent from the catalogue." },
  { title: "Team", subtitle: "Invite team members and set permissions." },
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
    <div className="container-wide py-12">
      <div className="container-narrow">
        <AnimateOnView>
          <span className="eyebrow">Step {step} of 4</span>
          <h1 className="h2-display mt-4 text-fg">{steps[step - 1].title}</h1>
          <p className="meta mt-1">{steps[step - 1].subtitle}</p>

          <div className="mt-8 flex gap-2">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="h-1 flex-1 rounded-full transition-colors"
                style={{ background: i + 1 <= step ? "var(--color-accent)" : "var(--color-border)" }}
              />
            ))}
          </div>
        </AnimateOnView>

        <AnimateOnView>
          <div className="mt-8">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-fg">Workspace name</label>
                  <input
                    type="text"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    placeholder="Acme Corp"
                    className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-fg outline-none placeholder:text-muted focus:border-[var(--color-accent)]"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-fg">Type</label>
                  <select
                    value={workspaceType}
                    onChange={(e) => setWorkspaceType(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-fg outline-none focus:border-[var(--color-accent)]"
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
                  <div key={conn.name} className="card flex items-center justify-between px-4 py-3">
                    <span className="text-sm text-fg">{conn.name}</span>
                    {conn.connected ? (
                      <span className="text-xs font-medium" style={{ color: "var(--color-success)" }}>Connected</span>
                    ) : (
                      <button className="btn btn-ghost text-xs">Connect</button>
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
                    className="card flex cursor-pointer items-center gap-3 px-4 py-3 text-sm transition-colors hover:border-[var(--color-accent)]/30"
                  >
                    <input type="checkbox" className="h-4 w-4 accent-[var(--color-accent)]" />
                    <span className="flex-1">
                      <span className="font-medium text-fg">{agent.name}</span>
                      <span className="ml-2 text-muted">{agent.tagline}</span>
                    </span>
                    <span className="num text-xs text-muted">${agent.price}</span>
                  </label>
                ))}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-fg">Email address</label>
                  <input
                    type="email"
                    placeholder="colleague@acme.com"
                    className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-fg outline-none placeholder:text-muted focus:border-[var(--color-accent)]"
                  />
                </div>
                <p className="meta">You can always invite more team members from the dashboard.</p>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between">
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)} className="btn btn-ghost text-sm">
                &larr; Back
              </button>
            ) : (
              <Link href="/browse" className="btn btn-ghost text-sm no-underline">
                &larr; Skip to marketplace
              </Link>
            )}
            {step < 4 ? (
              <button onClick={() => setStep(step + 1)} className="btn btn-primary">
                Continue
              </button>
            ) : (
              <Link href="/dashboard" className="btn btn-primary no-underline">
                Go to dashboard
              </Link>
            )}
          </div>
        </AnimateOnView>
      </div>
    </div>
  );
}
