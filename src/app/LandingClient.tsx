"use client";

import { StatCounter } from "@/lib/anime-client";

export default function LandingClient() {
  return (
    <section className="section-block border-t border-border">
      <div className="container-main">
        <div className="grid gap-8 sm:grid-cols-3">
          <StatCounter value={218000} suffix="/day" label="Runs executed" />
          <StatCounter value={98.7} suffix="%" decimals={1} label="Uptime" />
          <StatCounter value={3.6} suffix=" min" decimals={1} label="Average setup time" />
        </div>
      </div>
    </section>
  );
}
