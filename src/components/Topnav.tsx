"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Marketplace" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Topnav() {
  const pathname = usePathname();

  return (
    <header
      className="frosted-glass sticky top-0 z-50"
      data-od-id="topnav"
    >
      <div className="max-w-content mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="28" rx="7" fill="oklch(52% 0.14 265 / 0.15)"/>
              <path d="M8 10l6 4-6 4" stroke="oklch(52% 0.14 265)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 18h4" stroke="oklch(52% 0.14 265)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span className="font-display text-lg text-fg font-semibold tracking-tight">Arcade</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-150 no-underline",
                  pathname === link.href
                    ? "text-fg"
                    : "text-muted hover:text-fg"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" size="sm" className="rounded-button text-sm h-9 px-4">
                Sign in
              </Button>
            </SignInButton>
            <Link href="/onboarding">
              <Button size="sm" className="rounded-button text-sm h-9 px-4 bg-accent text-white hover:opacity-90">
                Get started
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
