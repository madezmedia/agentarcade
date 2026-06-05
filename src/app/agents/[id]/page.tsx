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
    <div className="container-wide py-8">
      <Link href="/browse" className="meta mb-6 inline-block no-underline hover:text-fg">
        &larr; Back to marketplace
      </Link>

      <div className="flex items-start gap-4">
        <div
          className="avatar-box"
          style={{ width: 56, height: 56, borderRadius: 14 }}
          dangerouslySetInnerHTML={{ __html: agent.iconSvg }}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-fg">{agent.name}</h1>
            <span className="pill">{agent.category}</span>
          </div>
          <p className="mt-1 text-sm text-muted">{agent.tagline}</p>
          <div className="mt-3 flex items-center gap-4 meta">
            <span>&#9733; {agent.rating} ({agent.reviewCount.toLocaleString()} reviews)</span>
            <span className="num">{agent.runsPerDay.toLocaleString()} runs/day</span>
            <span>v{agent.version}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-fg num">${agent.price}</div>
          <div className="meta">{agent.priceLabel}</div>
        </div>
      </div>

      <DetailClient agent={agent} />
    </div>
  );
}
