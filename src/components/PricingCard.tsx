interface PricingCardProps {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export default function PricingCard({ name, price, popular, features }: PricingCardProps) {
  return (
    <div
      className={`bg-surface border rounded-card p-6 relative ${popular ? "border-accent ring-1 ring-accent/20" : "border-border"}`}
      data-od-id={`pricing-${name.toLowerCase()}`}
    >
      {popular && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[11px] font-semibold text-white rounded-full bg-accent">
          Most popular
        </span>
      )}
      <h3 className="font-display text-base font-semibold text-fg mb-1">{name}</h3>
      <p className="text-2xl font-display font-semibold text-fg mb-4">{price}</p>
      <ul className="space-y-2.5 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-fg/70">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-success flex-shrink-0">
              <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2.5 rounded-button text-sm font-semibold transition-all duration-150 ${
          popular
            ? "bg-accent text-white hover:opacity-90"
            : "bg-transparent border border-border text-fg hover:bg-border/50"
        }`}
      >
        {popular ? "Get started" : "Choose plan"}
      </button>
    </div>
  );
}
