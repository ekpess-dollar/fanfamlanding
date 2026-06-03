"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Light/dark toggle. The initial class is set pre-paint by the inline script in
 * layout.tsx (no flash); this component just reads/writes it and persists the
 * choice. Renders a stable button on the server and swaps the icon after mount
 * to avoid hydration mismatch.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  }

  const label = mounted
    ? isDark
      ? "Switch to light mode"
      : "Switch to dark mode"
    : "Toggle colour theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-ink-50 text-ink-700 transition-colors hover:bg-brand-100 hover:text-brand-ink",
        className,
      )}
    >
      {/* Sun (shown in dark mode → click for light); Moon (shown in light mode) */}
      <svg
        viewBox="0 0 24 24"
        className={cn("size-5", mounted && isDark ? "block" : "hidden")}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className={cn("size-5", mounted && isDark ? "hidden" : "block")}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
    </button>
  );
}
