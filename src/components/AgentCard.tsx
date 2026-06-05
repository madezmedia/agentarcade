import Link from "next/link";
import type { Agent } from "@/data/agents";
import { cn } from "@/lib/utils";

interface AgentCardProps {
  agent: Agent;
  featured?: boolean;
}

function AgentIcon({ agent }: { agent: Agent }) {
  const initials = agent.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg text-xs font-bold text-white",
        `bg-${agent.iconColor}`,
      )}
      style={{ backgroundColor: `var(--color-${agent.iconColor})` }}
    >
      {initials}
    </div>
  );
}

export default function AgentCard({ agent, featured }: AgentCardProps) {
  return (
    <Link
      href={`/agents/${agent.slug}`}
      className="stagger-item group block"
    >
      <article
        className={cn(
          "rounded-card border border-border bg-surface transition-all duration-150",
          featured ? "p-5" : "p-4",
          "hover:border-accent/20 hover:shadow-sm",
        )}
      >
        <div className="flex items-start gap-3">
          <AgentIcon agent={agent} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="truncate text-sm font-semibold text-fg">
                {agent.name}
              </h3>
              <span className="shrink-0 text-sm font-bold text-accent">
                ${agent.price}
                <span className="text-xs font-normal text-muted">
                  {agent.priceLabel}
                </span>
              </span>
            </div>
            <p className="mt-0.5 text-xs text-muted">{agent.tagline}</p>
          </div>
        </div>
        <p className={cn("text-xs text-muted", featured ? "mt-3" : "mt-2")}>
          {agent.description.slice(0, 100)}…
        </p>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xs text-amber-500">★</span>
            <span className="text-xs font-medium text-fg">{agent.rating}</span>
            <span className="text-xs text-muted">
              ({agent.reviewCount.toLocaleString()})
            </span>
          </div>
          <div className="ml-auto flex flex-wrap gap-1">
            {agent.capabilities.slice(0, 2).map((c) => (
              <span
                key={c.label}
                className="rounded-full bg-border px-2 py-0.5 text-[11px] text-muted"
              >
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
