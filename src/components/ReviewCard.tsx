function StarIcons({ rating, size = 14 }: { rating: number; size?: number }) {
  const full = Math.floor(rating);
  return (
    <div className="flex items-center gap-0.5" style={{ color: "oklch(60% 0.10 75)" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" fill={i < full ? "currentColor" : "oklch(92% 0.005 250)"} />
        </svg>
      ))}
    </div>
  );
}

interface ReviewCardProps {
  reviewer: string;
  role: string;
  company: string;
  date: string;
  rating: number;
  text: string;
}

export default function ReviewCard({ reviewer, role, company, date, rating, text }: ReviewCardProps) {
  return (
    <div className="bg-surface border border-border rounded-card p-5" data-od-id={`review-${reviewer.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-display text-sm font-semibold text-fg">{reviewer}</h4>
          <p className="text-xs text-muted">{role}, {company}</p>
        </div>
        <span className="text-xs text-muted">{date}</span>
      </div>
      <StarIcons rating={rating} size={12} />
      <p className="text-sm text-fg/80 leading-relaxed mt-3">{text}</p>
    </div>
  );
}
