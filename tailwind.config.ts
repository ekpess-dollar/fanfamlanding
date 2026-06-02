import type { Config } from "tailwindcss";

/**
 * Tokens are defined as CSS variables in globals.css (single source of truth).
 * Tailwind only references them so the build can never drift from the design.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--brand)",
          strong: "var(--brand-strong)",
          ink: "var(--brand-ink)",
          600: "var(--brand-600)",
          200: "var(--brand-200)",
          100: "var(--brand-100)",
          teal: "var(--brand-teal)",
        },
        live: "var(--live)",
        ink: {
          900: "var(--ink-900)",
          800: "var(--ink-800)",
          700: "var(--ink-700)",
          500: "var(--ink-500)",
          400: "var(--ink-400)",
          300: "var(--ink-300)",
          200: "var(--ink-200)",
          100: "var(--ink-100)",
          50: "var(--ink-50)",
          10: "var(--ink-10)",
        },
        surface: "var(--surface)",
      },
      fontFamily: {
        // wired to next/font CSS variables (see layout.tsx)
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Native app scale (from Figma variables)
        p3: ["12px", { lineHeight: "16px", letterSpacing: "var(--tracking-p3)" }],
        p2: ["14px", { lineHeight: "18px", letterSpacing: "var(--tracking-p2)" }],
        p1: ["16px", { lineHeight: "20px", letterSpacing: "var(--tracking-p1)" }],
        // Display scale extended for marketing (Inter), same tight tracking feel
        "display-sm": ["28px", { lineHeight: "1.15", letterSpacing: "-0.5px" }],
        "display-md": ["36px", { lineHeight: "1.12", letterSpacing: "-1px" }],
        "display-lg": ["48px", { lineHeight: "1.08", letterSpacing: "-1.5px" }],
        "display-xl": ["64px", { lineHeight: "1.04", letterSpacing: "-2px" }],
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-lg": "var(--shadow-card-lg)",
        btn: "var(--shadow-btn)",
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "96px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
