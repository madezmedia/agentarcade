"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Marketplace" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Topnav() {
  const pathname = usePathname();

  return (
    <nav className="frosted-glass sticky top-0 z-50 w-full">
      <div className="mx-auto flex h-14 max-w-content items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-lg font-bold tracking-tight text-fg">
            AgentArcade
          </span>
        </Link>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors duration-150",
                pathname === link.href
                  ? "font-medium text-accent"
                  : "text-muted hover:text-fg",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/browse"
            className="rounded-button bg-accent px-4 py-1.5 text-sm font-medium text-white transition-all hover:opacity-90"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
