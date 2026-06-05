"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Marketplace" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Topnav() {
  const pathname = usePathname();

  return (
    <nav className="topnav">
      <div className="container-main flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-fg no-underline">
          <span className="font-display text-lg font-bold tracking-tight">
            AgentArcade
          </span>
        </Link>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors no-underline ${
                pathname === link.href ? "font-medium text-accent" : "text-muted hover:text-fg"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/browse" className="btn btn-primary text-sm no-underline">
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
