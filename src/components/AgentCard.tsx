import Link from "next/link";
import type { Agent } from "@/data/agents";

interface AgentCardProps {
  agent: Agent;
  featured?: boolean;
}

export default function AgentCard({ agent, featured }: AgentCardProps) {
  return (
    <Link href={`/agents/${agent.slug}`} className="block no-underline stagger-item">
      <article className={`card ${featured ? "p-5" : "p-4"} hover:border-[var(--color-accent)]/20 transition-colors`}>
        <div className="flex items-start gap-3">
          <div
            className="avatar-box"
            dangerouslySetInnerHTML={{ __html: agent.iconSvg }}
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="truncate text-sm font-semibold text-fg">
                {agent.name}
              </h3>
              <span className="shrink-0 text-sm font-bold text-accent num">
                ${agent.price}
                <span className="text-xs font-normal text-muted">
                  {agent.priceLabel}
                </span>
              </span>
            </div>
            <p className="mt-0.5 text-xs text-muted">{agent.tagline}</p>
          </div>
        </div>
        <p className={`text-xs text-muted ${featured ? "mt-3" : "mt-2"}`}>
          {agent.description.slice(0, 100)}&hellip;
        </p>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <svg className="star-icon" viewBox="0 0 20 20" fill="oklch(60% 0.10 75)">
              <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" />
            </svg>
            <span className="num text-xs font-medium text-fg">{agent.rating}</span>
            <span className="text-xs text-muted">({agent.reviewCount.toLocaleString()})</span>
          </div>
          <div className="ml-auto flex flex-wrap gap-1">
            {agent.capabilities.slice(0, 2).map((c) => (
              <span key={c.label} className="tag">{c.label}</span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
