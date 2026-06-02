"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#creators", label: "For creators" },
  { href: "/#community", label: "Community" },
  { href: "/#earn", label: "Earn" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-10 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-6" aria-label="Primary">
          <a href="#main" className="flex items-center gap-2" aria-label="FAN FAM home">
            <Logo />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-p2 font-medium text-ink-500 transition-colors hover:text-ink-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <Button href="/contact" variant="ghost">
              Log in
            </Button>
            <Button href="/creators/become">Join FAN FAM</Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-sm text-ink-700 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn("md:hidden", open ? "block" : "hidden")}
      >
        <Container className="flex flex-col gap-1 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 text-p1 font-medium text-ink-700 hover:bg-brand-100"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <Button href="/contact" variant="secondary" size="lg">
              Log in
            </Button>
            <Button href="/creators/become" size="lg">
              Join FAN FAM
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
