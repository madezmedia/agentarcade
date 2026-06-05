"use client";

import { useState, useEffect } from "react";
import { animate, stagger } from "animejs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import StepIndicator from "@/components/StepIndicator";

const TOTAL_STEPS = 4;

const preferences = [
  { id: "coding", label: "Coding & Development" },
  { id: "research", label: "Research & Analysis" },
  { id: "content", label: "Content Creation" },
  { id: "voice", label: "Voice & Audio" },
  { id: "analytics", label: "Data & Analytics" },
  { id: "automation", label: "Automation & Workflows" },
];

const accounts = [
  { id: "slack", label: "Slack" },
  { id: "github", label: "GitHub" },
  { id: "googledrive", label: "Google Drive" },
  { id: "notion", label: "Notion" },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [useCases, setUseCases] = useState<string[]>([]);
  const [connected, setConnected] = useState<string[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const els = document.querySelectorAll(".step-content");
    els.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(12px)";
    });
    animate(".step-content", {
      opacity: [0, 1],
      translateY: [12, 0],
      ease: "outCubic",
      duration: 500,
      delay: stagger(60, { start: 100 }),
    });
  }, [step]);

  const toggleUseCase = (id: string) => {
    setUseCases((prev) => prev.includes(id) ? prev.filter((u) => u !== id) : [...prev, id]);
  };

  const toggleAccount = (id: string) => {
    setConnected((prev) => prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]);
  };

  const nextStep = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="container max-w-[700px] mx-auto px-6 py-12" data-od-id="onboarding">
      <StepIndicator currentStep={step} totalSteps={TOTAL_STEPS} labels={["Welcome", "Preferences", "Connect", "Done"]} />

      {/* Step 1 — Welcome */}
      {step === 1 && (
        <section className="step-content" data-od-id="step-welcome">
          <div className="text-center mb-10">
            <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">Welcome to AgentArcade</h1>
            <p className="text-muted text-base max-w-[500px] mx-auto leading-relaxed">
              Your AI agent marketplace. Browse, connect, and deploy agents across your workflow in under 2 minutes.
            </p>
          </div>
          <div className="bg-surface border border-border rounded-card p-8 mb-10">
            <h3 className="font-semibold text-base mb-5">Here&apos;s what you get:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "24 curated agents", desc: "Across 6 categories" },
                { label: "3.6 min setup", desc: "Median time to first run" },
                { label: "Free starter plan", desc: "1 agent, solo use" },
                { label: "Team billing", desc: "$12/seat per agent after free" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="mt-0.5 flex-shrink-0" style={{ color: "oklch(55% 0.12 145)" }}>
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="text-xs text-muted">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={nextStep} className="bg-accent text-white hover:opacity-90 rounded-button px-8">
              Get started →
            </Button>
          </div>
        </section>
      )}

      {/* Step 2 — Preferences */}
      {step === 2 && (
        <section className="step-content" data-od-id="step-preferences">
          <h2 className="font-display text-2xl mb-2">Tell us about yourself</h2>
          <p className="text-sm text-muted mb-8">We&apos;ll recommend agents based on your role and needs.</p>

          <div className="mb-8">
            <label className="text-sm font-medium mb-3 block">Your role</label>
            <div className="flex flex-wrap gap-3">
              {["Developer", "Product", "Design", "Executive"].map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`px-5 py-2.5 text-sm rounded-button border transition-colors ${
                    role === r ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:border-fg"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="text-sm font-medium mb-3 block">Team size</label>
            <div className="flex flex-wrap gap-3">
              {["Solo", "2-5", "6-20", "20+"].map((s) => (
                <button
                  key={s}
                  onClick={() => setTeamSize(s)}
                  className={`px-5 py-2.5 text-sm rounded-button border transition-colors ${
                    teamSize === s ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:border-fg"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="text-sm font-medium mb-3 block">Primary use cases</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {preferences.map((p) => (
                <button
                  key={p.id}
                  onClick={() => toggleUseCase(p.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm rounded-button border transition-colors text-left ${
                    useCases.includes(p.id) ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:border-fg"
                  }`}
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                    useCases.includes(p.id) ? "bg-accent border-accent" : "border-border"
                  }`}>
                    {useCases.includes(p.id) && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    )}
                  </div>
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep} className="rounded-button">← Back</Button>
            <Button onClick={nextStep} className="bg-accent text-white hover:opacity-90 rounded-button px-8">
              Next →
            </Button>
          </div>
        </section>
      )}

      {/* Step 3 — Connect accounts */}
      {step === 3 && (
        <section className="step-content" data-od-id="step-connect">
          <h2 className="font-display text-2xl mb-2">Connect your workspace</h2>
          <p className="text-sm text-muted mb-8">Link the tools your team uses. Agents will work where you work.</p>

          <div className="space-y-3 mb-10">
            {accounts.map((acc) => (
              <button
                key={acc.id}
                onClick={() => toggleAccount(acc.id)}
                className={`w-full flex items-center gap-4 px-5 py-4 text-sm rounded-button border transition-colors text-left ${
                  connected.includes(acc.id) ? "border-accent bg-accent/5" : "border-border hover:border-fg"
                }`}
              >
                <span className="font-medium">{acc.label}</span>
                <span className="ml-auto flex items-center gap-2">
                  {connected.includes(acc.id) ? (
                    <>
                      <span className="w-2 h-2 rounded-full" style={{ background: "oklch(55% 0.12 145)" }} />
                      <span className="text-xs" style={{ color: "oklch(55% 0.12 145)" }}>Connected</span>
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 rounded-full bg-muted" />
                      <span className="text-xs text-muted">Connect</span>
                    </>
                  )}
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep} className="rounded-button">← Back</Button>
            <Button onClick={nextStep} className="bg-accent text-white hover:opacity-90 rounded-button px-8">
              Continue →
            </Button>
          </div>
        </section>
      )}

      {/* Step 4 — Done */}
      {step === 4 && (
        <section className="step-content text-center" data-od-id="step-done">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "oklch(55% 0.12 145 / 0.15)" }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ color: "oklch(55% 0.12 145)" }}>
              <path d="M8 18l8 8 12-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="font-display text-3xl md:text-4xl tracking-tight mb-3">You&apos;re all set!</h1>
          <p className="text-muted text-base max-w-[400px] mx-auto mb-2">
            Your workspace is ready. We&apos;ve pre-selected recommended agents based on your preferences.
          </p>
          {role && <p className="text-sm text-muted mb-8">{role} · {teamSize} team · {useCases.length} use cases · {connected.length} integrations</p>}
          <div className="flex justify-center gap-4">
            <Link href="/dashboard">
              <Button className="bg-accent text-white hover:opacity-90 rounded-button px-8 py-6 text-base">
                Go to dashboard
              </Button>
            </Link>
            <Link href="/browse">
              <Button variant="outline" className="rounded-button px-8 py-6 text-base">
                Browse agents
              </Button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
