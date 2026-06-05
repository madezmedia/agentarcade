"use client";

import { useState, useMemo } from "react";
import type { Agent } from "@/data/agents";
import AgentCard from "@/components/AgentCard";
import { StaggerGrid } from "@/lib/anime-client";

interface BrowseClientProps {
  agents: Agent[];
  categories: { name: string; count: number }[];
  sortOptions: string[];
  mobile?: boolean;
}

const ITEMS_PER_PAGE = 8;

export default function BrowseClient({
  agents: allAgents,
  categories,
  sortOptions,
  mobile,
}: BrowseClientProps) {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [sort, setSort] = useState("Popular");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...allAgents];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.tagline.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q),
      );
    }
    if (selectedCategories.length > 0) {
      result = result.filter((a) => selectedCategories.includes(a.category));
    }
    if (priceRange !== "all") {
      result = result.filter((a) => {
        if (priceRange === "free") return a.price === 0;
        if (priceRange === "under20") return a.price < 20;
        if (priceRange === "20to50") return a.price >= 20 && a.price <= 50;
        if (priceRange === "over50") return a.price > 50;
        return true;
      });
    }
    if (ratingFilter !== "all") {
      const min = Number.parseFloat(ratingFilter);
      result = result.filter((a) => a.rating >= min);
    }
    result.sort((a, b) => {
      if (sort === "Price low") return a.price - b.price;
      if (sort === "Price high") return b.price - a.price;
      if (sort === "Rating") return b.rating - a.rating;
      return b.runsPerDay - a.runsPerDay;
    });
    return result;
  }, [search, selectedCategories, priceRange, ratingFilter, sort, allAgents]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
    setPage(1);
  };

  const filters = (
    <div className="space-y-6">
      <div className="relative">
        <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder="Search agents&hellip;"
          className="w-full rounded-lg border border-border bg-surface py-2 pl-9 pr-3 text-sm text-fg outline-none placeholder:text-muted focus:border-accent"
        />
      </div>

      <div>
        <h4 className="mb-2 text-xs font-semibold text-fg">Category</h4>
        <div className="space-y-1.5">
          {categories.map((cat) => (
            <label key={cat.name} className="flex cursor-pointer items-center gap-2 text-xs text-muted">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.name)}
                onChange={() => toggleCategory(cat.name)}
                className="h-3.5 w-3.5 rounded border-border accent-[var(--color-accent)]"
              />
              {cat.name}
              <span className="ml-auto num">({cat.count})</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-xs font-semibold text-fg">Pricing</h4>
        <div className="space-y-1.5">
          {[
            { value: "all", label: "All" },
            { value: "free", label: "Free" },
            { value: "under20", label: "Under $20" },
            { value: "20to50", label: "$20&ndash;$50" },
            { value: "over50", label: "Over $50" },
          ].map((opt) => (
            <label key={opt.value} className="flex cursor-pointer items-center gap-2 text-xs text-muted">
              <input
                type="radio"
                name="price"
                checked={priceRange === opt.value}
                onChange={() => { setPriceRange(opt.value); setPage(1); }}
                className="h-3.5 w-3.5 accent-[var(--color-accent)]"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-xs font-semibold text-fg">Rating</h4>
        <div className="space-y-1.5">
          {[
            { value: "all", label: "All" },
            { value: "4.5", label: "4.5+" },
            { value: "4.0", label: "4.0+" },
            { value: "3.5", label: "3.5+" },
          ].map((opt) => (
            <label key={opt.value} className="flex cursor-pointer items-center gap-2 text-xs text-muted">
              <input
                type="radio"
                name="rating"
                checked={ratingFilter === opt.value}
                onChange={() => { setRatingFilter(opt.value); setPage(1); }}
                className="h-3.5 w-3.5 accent-[var(--color-accent)]"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const sortRow = (
    <div className="mb-6 flex items-center justify-between">
      <span className="text-xs text-muted">
        <span className="num">{filtered.length}</span> agent{filtered.length !== 1 ? "s" : ""}
      </span>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-fg outline-none focus:border-accent"
      >
        {sortOptions.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );

  const grid = paged.length > 0 ? (
    <StaggerGrid className="grid gap-4 sm:grid-cols-2">
      {paged.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </StaggerGrid>
  ) : (
    <div className="py-12 text-center text-sm text-muted">No agents match your filters.</div>
  );

  const pagination = totalPages > 1 && (
    <div className="mt-8 flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs transition-colors num ${
            p === page ? "bg-accent text-[var(--color-surface)]" : "text-muted hover:bg-border"
          }`}
        >
          {p}
        </button>
      ))}
      {page < totalPages && (
        <button
          onClick={() => setPage(page + 1)}
          className="px-2 text-xs text-muted hover:text-fg"
        >
          Next &rarr;
        </button>
      )}
    </div>
  );

  if (mobile) {
    return (
      <div>
        <details className="mb-6">
          <summary className="cursor-pointer text-sm font-medium text-accent">Filters</summary>
          <div className="mt-4">{filters}</div>
        </details>
        {sortRow}{grid}{pagination}
      </div>
    );
  }

  return (
    <>
      <div>{filters}</div>
      <div className="min-w-0 flex-1">
        {sortRow}{grid}{pagination}
      </div>
    </>
  );
}
