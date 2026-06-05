"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { agents, categories, type SortOption } from "@/data/agents";
import AgentCard from "@/components/AgentCard";
import { Input } from "@/components/ui/input";

export default function BrowsePage() {
  const [search, setSearch] = useState("Codex");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState<SortOption>("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const perPage = 6;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const cards = grid.querySelectorAll(".agent-grid-card");
    if (cards.length > 0) {
      cards.forEach((el) => {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(12px)";
      });
      animate(cards, {
        opacity: [0, 1],
        translateY: [12, 0],
        ease: "outCubic",
        duration: 600,
        delay: stagger(80),
      });
    }
  }, [currentPage, search, selectedCategories, priceRange, minRating, sort]);

  const filteredAgents = useMemo(() => {
    let result = [...agents];

    // Search filter
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.tagline.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((a) => selectedCategories.includes(a.category));
    }

    // Price filter
    if (priceRange !== "all") {
      result = result.filter((a) => {
        switch (priceRange) {
          case "free":
            return a.price === 0;
          case "under20":
            return a.price < 20;
          case "20to50":
            return a.price >= 20 && a.price <= 50;
          case "over50":
            return a.price > 50;
          default:
            return true;
        }
      });
    }

    // Rating filter
    if (minRating > 0) {
      result = result.filter((a) => a.rating >= minRating);
    }

    // Sort
    switch (sort) {
      case "popular":
        result.sort((a, b) => b.runsPerDay - a.runsPerDay);
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [search, selectedCategories, priceRange, minRating, sort]);

  const totalPages = Math.ceil(filteredAgents.length / perPage);
  const paginatedAgents = filteredAgents.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setCurrentPage(1);
  };

  return (
    <div className="max-w-content mx-auto px-6 md:px-8 pt-8 pb-16" data-od-id="browse">
      <h1 className="font-display text-3xl font-semibold text-fg mb-6">Marketplace</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-[220px] flex-shrink-0" data-od-id="browse-sidebar">
          {/* Search */}
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Search agents..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full h-10 rounded-button border-border text-sm"
            />
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label key={cat.name} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.name)}
                    onChange={() => toggleCategory(cat.name)}
                    className="w-4 h-4 rounded border-border accent-accent"
                  />
                  <span className="text-sm text-fg group-hover:text-accent transition-colors duration-150">
                    {cat.name}
                  </span>
                  <span className="text-xs text-muted ml-auto">({cat.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Pricing</h3>
            <div className="space-y-2">
              {[
                { value: "all", label: "All" },
                { value: "free", label: "Free" },
                { value: "under20", label: "Under $20" },
                { value: "20to50", label: "$20\u2013$50" },
                { value: "over50", label: "Over $50" },
              ].map((opt) => (
                <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="pricing"
                    checked={priceRange === opt.value}
                    onChange={() => {
                      setPriceRange(opt.value);
                      setCurrentPage(1);
                    }}
                    className="w-4 h-4 accent-accent"
                  />
                  <span className="text-sm text-fg group-hover:text-accent transition-colors duration-150">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Rating</h3>
            <div className="space-y-2">
              {[
                { value: 0, label: "All" },
                { value: 4.5, label: "4.5+" },
                { value: 4.0, label: "4.0+" },
                { value: 3.5, label: "3.5+" },
              ].map((opt) => (
                <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="rating"
                    checked={minRating === opt.value}
                    onChange={() => {
                      setMinRating(opt.value);
                      setCurrentPage(1);
                    }}
                    className="w-4 h-4 accent-accent"
                  />
                  <span className="text-sm text-fg group-hover:text-accent transition-colors duration-150">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Sort & results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted">
              {filteredAgents.length} agent{filteredAgents.length !== 1 ? "s" : ""} found
            </p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="text-sm border border-border rounded-button px-3 py-1.5 bg-surface text-fg"
            >
              <option value="popular">Popular</option>
              <option value="price-low">Price: Low to high</option>
              <option value="price-high">Price: High to low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {/* Agent grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
            data-od-id="browse-grid"
          >
            {paginatedAgents.map((agent) => (
              <div key={agent.id} className="agent-grid-card" style={{ opacity: 0, transform: "translateY(12px)" }}>
                <AgentCard agent={agent} />
              </div>
            ))}
          </div>

          {paginatedAgents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted">No agents match your filters.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8" data-od-id="pagination">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-9 h-9 rounded-button text-sm font-medium transition-all duration-150 ${
                    currentPage === i + 1
                      ? "bg-accent text-white"
                      : "border border-border text-fg hover:bg-border/50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
