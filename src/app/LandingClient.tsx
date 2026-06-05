"use client";

import { StatCounter } from "@/lib/anime-client";

export default function LandingClient() {
  return (
    <section className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-landing">
        <div className="grid gap-8 sm:grid-cols-3">
          <StatCounter value={218000} suffix="/day" label="Runs executed" />
          <StatCounter value={98.7} suffix="%" decimals={1} label="Uptime" />
          <StatCounter value={3.6} suffix=" min" decimals={1} label="Average setup time" />
        </div>
      </div>
    </section>
  );
}
