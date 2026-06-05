interface ActivityFeedItemProps {
  text: string;
  timestamp: string;
}

export default function ActivityFeedItem({ text, timestamp }: ActivityFeedItemProps) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-border last:border-0">
      <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: "var(--color-accent)" }} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-fg leading-relaxed">{text}</p>
        <span className="meta mt-0.5 block">{timestamp}</span>
      </div>
    </div>
  );
}
