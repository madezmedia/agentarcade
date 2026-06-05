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
        <span className="num text-muted">{score}%</span>
      </div>
      <div className="h-2 rounded-full bg-border">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${score}%`, background: "var(--color-accent)" }}
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
                  ? "border-b-2 text-fg font-medium"
                  : "text-muted hover:text-fg"
              }`}
              style={activeTab === tab ? { borderBottomColor: "var(--color-accent)" } : { borderBottomWidth: 0 }}
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
            <p className="mt-2 text-sm text-muted leading-relaxed">{agent.description}</p>

            <h2 className="mt-8 text-sm font-semibold text-fg">Capabilities</h2>
            <div className="mt-3 space-y-3">
              {agent.capabilities.map((c) => (
                <CapabilityBar key={c.label} label={c.label} score={c.score} />
              ))}
            </div>
          </div>

          <div>
            <div className="card p-4">
              <h3 className="text-sm font-semibold text-fg">Quick info</h3>
              <dl className="mt-3 space-y-2 text-xs">
                <div className="flex justify-between">
                  <dt className="text-muted">Category</dt>
                  <dd className="text-fg">{agent.category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Version</dt>
                  <dd className="num text-fg">v{agent.version}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Runs / day</dt>
                  <dd className="num text-fg">{agent.runsPerDay.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Last updated</dt>
                  <dd className="text-fg">{agent.updatedAt}</dd>
                </div>
              </dl>
              <button className="btn btn-primary mt-4 w-full justify-center">
                Connect agent &mdash; ${agent.price}{agent.priceLabel}
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
                className={`card p-5 relative ${p.popular ? "border-[var(--color-accent)]" : ""}`}
              >
                {p.popular && (
                  <span className="pill absolute -top-2.5 left-1/2 -translate-x-1/2">
                    Most popular
                  </span>
                )}
                <h3 className="text-sm font-semibold text-fg">{p.name}</h3>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-fg num">{p.price}</span>
                </div>
                <ul className="mt-4 space-y-2 text-xs text-muted">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="shrink-0" style={{ color: "var(--color-success)" }}>
                        <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn mt-4 w-full justify-center ${
                    p.popular ? "btn-primary" : "btn-secondary"
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
            <div key={r.reviewer} className="card p-4">
              <div className="flex items-center gap-3">
                <div
                  className="avatar-box"
                  style={{ width: 32, height: 32, borderRadius: "50%" }}
                >
                  <span className="text-xs font-bold">{r.reviewer[0]}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-fg">{r.reviewer}</div>
                  <div className="flex items-center gap-2 meta">
                    <span>{r.role}, {r.company}</span>
                    <span>&middot;</span>
                    <span>&#9733; {r.rating}</span>
                    <span>&middot;</span>
                    <span>{r.date}</span>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Changelog" && (
        <div className="mt-6 space-y-4">
          {agent.changelog.map((c) => (
            <div key={c.version} className="card p-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-fg">{c.version}</span>
                <span className="meta">{c.date}</span>
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed">{c.notes}</p>
            </div>
          ))}
        </div>
      )}
    </AnimateOnView>
  );
}
