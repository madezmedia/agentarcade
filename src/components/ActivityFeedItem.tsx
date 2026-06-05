interface ActivityFeedItemProps {
  text: string;
  timestamp: string;
}

export default function ActivityFeedItem({ text, timestamp }: ActivityFeedItemProps) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-border last:border-0" data-od-id="activity-item">
      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: "oklch(52% 0.14 265)" }} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-fg leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
        <span className="text-xs text-muted mt-0.5 block">{timestamp}</span>
      </div>
    </div>
  );
}
