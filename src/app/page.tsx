import Link from "next/link";
import { agents } from "@/data/agents";
import AgentCard from "@/components/AgentCard";
import LandingClient from "./LandingClient";

const featured = agents.slice(0, 3);

export default function Home() {
  return (
    <>
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-landing text-center">
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-accent uppercase">
            Agent Marketplace
          </span>
          <h1 className="mt-6 font-display text-4xl leading-tight font-bold text-fg sm:text-5xl">
            Find the right AI agent
            <br />
            for every job.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted">
            Browse, connect, and deploy AI agents across your workflow.
            From code generation to security auditing — one marketplace.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/browse"
              className="rounded-button bg-accent px-6 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90"
            >
              Browse agents
            </Link>
            <a
              href="#how-it-works"
              className="rounded-button border border-border px-6 py-2.5 text-sm font-medium text-fg transition-all hover:bg-border/50"
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-landing">
          <h2 className="font-display text-xl font-bold text-fg">
            Featured agents
          </h2>
          <p className="mt-1 text-sm text-muted">
            Start with the most popular agents on the platform.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((agent) => (
              <AgentCard key={agent.id} agent={agent} featured />
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-landing">
          <h2 className="text-center font-display text-xl font-bold text-fg">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Browse catalogue",
                desc: "24 agents across 6 categories with filtering by capability, pricing, and rating.",
              },
              {
                step: "02",
                title: "Connect workspace",
                desc: "Integrate with Slack, GitHub, Google Drive, and Notion in one click.",
              },
              {
                step: "03",
                title: "Assign and monitor",
                desc: "Manage team access, set budgets, and track performance from your dashboard.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-display text-4xl font-bold text-accent/30">
                  {item.step}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-fg">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandingClient />

      <section className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-landing text-center">
          <h2 className="font-display text-xl font-bold text-fg">
            Your first agent is three clicks away.
          </h2>
          <p className="mt-2 text-sm text-muted">
            Free for solo use with one agent. $12/seat per agent after that.
          </p>
          <Link
            href="/browse"
            className="mt-6 inline-block rounded-button bg-accent px-6 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90"
          >
            Get started free
          </Link>
        </div>
      </section>
    </>
  );
}
