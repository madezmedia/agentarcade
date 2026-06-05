import { notFound } from "next/navigation";
import Link from "next/link";
import { agents } from "@/data/agents";
import DetailClient from "./DetailClient";

export function generateStaticParams() {
  return agents.map((a) => ({ id: a.slug }));
}

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const agent = agents.find((a) => a.slug === id);
  if (!agent) notFound();

  return (
    <div className="mx-auto max-w-content px-6 py-8">
      <Link
        href="/browse"
        className="mb-6 inline-block text-xs text-muted hover:text-fg"
      >
        ← Back to marketplace
      </Link>

      <div className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
          style={{ backgroundColor: `var(--color-${agent.iconColor})` }}
        >
          {agent.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-fg">{agent.name}</h1>
            <span className="rounded-full bg-accent/10 px-3 py-0.5 text-[11px] font-medium text-accent">
              {agent.category}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted">{agent.tagline}</p>
          <div className="mt-3 flex items-center gap-4 text-xs text-muted">
            <span>★ {agent.rating} ({agent.reviewCount.toLocaleString()} reviews)</span>
            <span>{agent.runsPerDay.toLocaleString()} runs/day</span>
            <span>v{agent.version}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-fg">${agent.price}</div>
          <div className="text-xs text-muted">{agent.priceLabel}</div>
        </div>
      </div>

      <DetailClient agent={agent} />
    </div>
  );
}
