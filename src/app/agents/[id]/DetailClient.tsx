"use client";

import { useState } from "react";
import type { Agent } from "@/data/agents";
import { AnimateOnView } from "@/lib/anime-client";

interface DetailClientProps {
  agent: Agent;
}

const tabs = ["Overview", "Pricing", "Reviews", "Changelog"];

function CapabilityBar({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-fg">{label}</span>
        <span className="text-muted">{score}%</span>
      </div>
      <div className="h-2 rounded-full bg-border">
        <div
          className="h-full rounded-full bg-accent transition-all duration-700"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

export default function DetailClient({ agent }: DetailClientProps) {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <AnimateOnView>
      <div className="mt-8 border-b border-border">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-accent font-medium text-fg"
                  : "text-muted hover:text-fg"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "Overview" && (
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <h2 className="text-sm font-semibold text-fg">About</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {agent.description}
            </p>

            <h2 className="mt-8 text-sm font-semibold text-fg">
              Capabilities
            </h2>
            <div className="mt-3 space-y-3">
              {agent.capabilities.map((c) => (
                <CapabilityBar
                  key={c.label}
                  label={c.label}
                  score={c.score}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-card border border-border p-4">
              <h3 className="text-sm font-semibold text-fg">Quick info</h3>
              <dl className="mt-3 space-y-2 text-xs">
                <div className="flex justify-between">
                  <dt className="text-muted">Category</dt>
                  <dd className="text-fg">{agent.category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Version</dt>
                  <dd className="text-fg">v{agent.version}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Runs / day</dt>
                  <dd className="text-fg">
                    {agent.runsPerDay.toLocaleString()}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Last updated</dt>
                  <dd className="text-fg">{agent.updatedAt}</dd>
                </div>
              </dl>
              <button className="mt-4 w-full rounded-button bg-accent py-2 text-sm font-medium text-white transition-all hover:opacity-90">
                Connect agent — ${agent.price}{agent.priceLabel}
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Pricing" && (
        <div className="mt-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {agent.pricingPlans.map((p) => (
              <div
                key={p.name}
                className={`rounded-card border p-5 ${
                  p.popular ? "border-accent" : "border-border"
                }`}
              >
                {p.popular && (
                  <span className="mb-2 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                    Popular
                  </span>
                )}
                <h3 className="text-sm font-semibold text-fg">{p.name}</h3>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-fg">
                    {p.price}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-xs text-muted">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-4 w-full rounded-button py-2 text-sm font-medium transition-all ${
                    p.popular
                      ? "bg-accent text-white hover:opacity-90"
                      : "border border-border text-fg hover:bg-border/50"
                  }`}
                >
                  {p.popular ? "Get started" : "Choose plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Reviews" && (
        <div className="mt-6 space-y-4">
          {agent.reviews.map((r) => (
            <div key={r.reviewer} className="rounded-card border border-border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-border text-xs font-bold text-muted">
                  {r.reviewer[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-fg">
                    {r.reviewer}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span>{r.role}, {r.company}</span>
                    <span>·</span>
                    <span>★ {r.rating}</span>
                    <span>·</span>
                    <span>{r.date}</span>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Changelog" && (
        <div className="mt-6 space-y-4">
          {agent.changelog.map((c) => (
            <div key={c.version} className="rounded-card border border-border p-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-fg">
                  {c.version}
                </span>
                <span className="text-xs text-muted">{c.date}</span>
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {c.notes}
              </p>
            </div>
          ))}
        </div>
      )}
    </AnimateOnView>
  );
}
