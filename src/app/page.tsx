import Link from "next/link";
import { agents } from "@/data/agents";
import AgentCard from "@/components/AgentCard";
import LandingClient from "./LandingClient";

const featured = agents.slice(0, 3);

export default function Home() {
  return (
    <>
      <section className="section-block border-b border-border">
        <div className="container-main text-center">
          <span className="eyebrow">Agent Marketplace</span>
          <h1 className="h1-display mt-5 text-fg">
            Find the right AI agent<br />for every job.
          </h1>
          <p className="lead-text mx-auto mt-4 text-center">
            Browse, connect, and deploy AI agents across your workflow.
            From code generation to security auditing &mdash; one marketplace.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/browse" className="btn btn-primary no-underline">
              Browse agents
            </Link>
            <a href="#how-it-works" className="btn btn-secondary no-underline">
              How it works
            </a>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container-main">
          <h2 className="h2-display text-fg">Featured agents</h2>
          <p className="meta mt-1">Start with the most popular agents on the platform.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((agent) => (
              <AgentCard key={agent.id} agent={agent} featured />
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-block border-t border-border">
        <div className="container-main text-center">
          <h2 className="h2-display text-fg">How it works</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", title: "Browse catalogue", desc: "24 agents across 6 categories with filtering by capability, pricing, and rating." },
              { step: "02", title: "Connect workspace", desc: "Integrate with Slack, GitHub, Google Drive, and Notion in one click." },
              { step: "03", title: "Assign and monitor", desc: "Manage team access, set budgets, and track performance from your dashboard." },
            ].map((item) => (
              <div key={item.step}>
                <span className="h-display text-[clamp(40px,5vw,64px)] font-bold text-accent/30">{item.step}</span>
                <h3 className="mt-2 text-sm font-semibold text-fg">{item.title}</h3>
                <p className="meta mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandingClient />

      <section className="section-block border-t border-border text-center">
        <div className="container-main">
          <h2 className="h2-display text-fg">Your first agent is three clicks away.</h2>
          <p className="meta mt-2">Free for solo use with one agent. $12/seat per agent after that.</p>
          <Link href="/browse" className="btn btn-primary mt-6 no-underline">
            Get started free
          </Link>
        </div>
      </section>
    </>
  );
}
