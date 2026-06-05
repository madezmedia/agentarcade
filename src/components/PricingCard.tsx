interface PricingCardProps {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export default function PricingCard({ name, price, popular, features }: PricingCardProps) {
  return (
    <div className={`card p-6 relative ${popular ? "border-[var(--color-accent)]" : ""}`}>
      {popular && (
        <span className="pill absolute -top-2.5 left-1/2 -translate-x-1/2">
          Most popular
        </span>
      )}
      <h3 className="font-display text-base font-semibold text-fg mb-1">{name}</h3>
      <p className="text-2xl font-display font-semibold text-fg mb-4 num">{price}</p>
      <ul className="space-y-2.5 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "color-mix(in oklch, var(--color-fg) 70%, transparent)" }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="shrink-0" style={{ color: "var(--color-success)" }}>
              <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <button className={`btn w-full justify-center ${popular ? "btn-primary" : "btn-secondary"}`}>
        {popular ? "Get started" : "Choose plan"}
      </button>
    </div>
  );
}
