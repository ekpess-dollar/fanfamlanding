# Fanation — Marketing Landing Site

A production-quality marketing site for **Fanation**, a creator/fan social
platform (subscriptions, gifting, live streaming, messaging, coins/tips).

Built with **Next.js (App Router) + Tailwind CSS**, driven entirely by design
tokens extracted from the Fanation Figma design system (file
`TZPwzg8gVnQjanrk1j7E8c`). The Figma file is the *product app*, so this site is
designed fresh from its tokens and uses real exported app screens as product
media.

> **Repo root = app root.** This repository *is* the Next.js project (the
> `package.json` is at the top level), so it deploys to Vercel with no “root
> directory” configuration.

---

## ✨ Highlights

- **Full marketing site** — home page + 12 content pages (company, creators,
  mobile, legal) sharing one nav/footer.
- **Light & dark mode** — token-based theme with a no-flash toggle, system-
  preference detection, `localStorage` persistence, and `?theme=` deep-links.
- **Design tokens as the single source of truth** — every colour, radius,
  shadow and type step is a CSS variable consumed by Tailwind; the build can’t
  drift from the design.
- **Accessibility** — semantic landmarks, alt text, keyboard support, visible
  focus, WCAG-AA contrast, and `prefers-reduced-motion` handling.
- **Performance** — `next/image` responsive `srcset` + AVIF/WebP, lazy-loading,
  self-hosted fonts, fully static output (~105 kB shared JS).

---

## 🧱 Tech stack

| Concern | Choice |
|---|---|
| Framework | Next.js 15 (App Router) · React 19 |
| Styling | Tailwind CSS 3.4 (theme wired to CSS variables) |
| Fonts | `next/font` — Inter (display) + Roboto (body), self-hosted |
| Images | `next/image` (AVIF/WebP, responsive) |
| Language | TypeScript |
| Package manager | Bun (npm/pnpm/yarn also work) |

---

## 🚀 Getting started

```bash
bun install
bun run dev        # http://localhost:3000
```

Production:

```bash
bun run build
bun run start
```

(Replace `bun` with `npm`/`pnpm` if you prefer — scripts are standard.)

---

## ☁️ Deploy to Vercel

1. Import this repo (`ekpess-dollar/fanfamlanding`) in Vercel.
2. **Root Directory:** leave as the default (`./`) — the Next.js app lives at the
   repo root.
3. Framework preset auto-detects **Next.js**; build = `next build` (default).
4. Deploy. No environment variables are required for the static site.

> If you ever deploy from the *parent* monorepo instead, set the Vercel **Root
> Directory** to `landing`.

---

## 🗂️ Project structure

```
src/
├── app/
│   ├── layout.tsx              shared shell: fonts, metadata, no-FOUC theme
│   │                           script, Navbar + Footer, skip-link
│   ├── page.tsx                home page (composed sections)
│   ├── globals.css             ← design tokens (light + .dark), base styles
│   ├── about/ careers/ press/ contact/        company pages
│   ├── creators/become · academy · payouts · stories
│   ├── mobile/                 get-the-app page
│   └── legal/terms · privacy · cookies         legal pages
├── components/
│   ├── ui/                     Button, Badge, Card, Container, SectionHeading,
│   │                           Logo, Media, VideoHero, DeviceFrame, Placeholder,
│   │                           Icons, ThemeToggle
│   ├── sections/               Navbar, Hero, TrustStrip, Features, Community,
│   │                           Monetisation, Testimonials, CTABand, Footer
│   └── page/                   PageHero, Prose, LegalLayout, ContactForm
└── lib/                        cn (classnames), tokens (TS mirror)
```

### Routes

`/` · `/about` · `/careers` · `/press` · `/contact` · `/creators/become` ·
`/creators/academy` · `/creators/payouts` · `/creators/stories` · `/mobile` ·
`/legal/terms` · `/legal/privacy` · `/legal/cookies`

---

## 🧑‍💻 Architecture & conventions (for developers)

This is a standard **React + Next.js (App Router)** codebase — if you know React,
you know 95% of this. The Next-specific parts are noted below.

### Server vs. client components
- Components are **React Server Components by default** (they render on the
  server, ship zero JS). Keep them server-side unless they need interactivity.
- Add `"use client"` at the top **only** when a component uses hooks, state, or
  browser APIs. The client components here are: `Navbar`, `ThemeToggle`,
  `VideoHero`, `ContactForm`. Everything else is a server component.

### Where things live
- `src/app/**` — **routing** is file-based. A folder with a `page.tsx` is a
  route; `layout.tsx` is the shared shell (fonts, `<Navbar>`/`<Footer>`,
  metadata, the no-flash theme script). Each `page.tsx` can `export const metadata`.
- `src/components/ui/**` — small reusable primitives (`Button`, `Card`, `Badge`,
  `Media`, `Logo`, `Icons`…). **Reach for these first.**
- `src/components/sections/**` — full page sections composed from `ui/` parts.
- `src/components/page/**` — inner-page building blocks (`PageHero`, `Prose`,
  `LegalLayout`, `ContactForm`).
- `src/lib/**` — helpers (`cn` classnames joiner, `tokens`).
- `@/` is the import alias for `src/` (see `tsconfig.json`).

### Styling conventions
- **Tailwind utility classes only** — no CSS modules / styled-components.
- **Never hardcode colors/spacing.** Use the semantic token classes
  (`bg-brand`, `text-ink-900`, `bg-card`, `rounded-pill`, `shadow-card`). They're
  defined once as CSS variables (see *Design tokens* below) and flip for dark
  mode automatically — so a raw `bg-white` or `#xxxxxx` is usually a mistake.
- Combine conditional classes with the `cn()` helper from `@/lib/cn`.
- Icons are inline SVG components in `src/components/ui/Icons.tsx` (decorative =
  `aria-hidden`; meaningful = pass a `title`).

### Common tasks
- **New page:** create `src/app/<route>/page.tsx`, `export const metadata`,
  open with `<PageHero …>`, compose sections, end with `<CTABand />`. It
  automatically gets the shared nav/footer from `layout.tsx`.
- **New section:** add a component in `src/components/sections/`, build it from
  `ui/` primitives, then drop it into `src/app/page.tsx`.
- **Add an image:** put it in `public/`, render with the `Media` component
  (wraps `next/image` for responsive `srcset` + lazy-loading) — always give a
  meaningful `alt`. Swap any `<Placeholder>` for real assets the same way.
- **Change the brand/theme:** edit the CSS variables in `globals.css` only.

### Quality bar to keep
Semantic HTML + `alt` text, keyboard focus states, **WCAG-AA contrast**, and
`prefers-reduced-motion` handling (it disables the hero autoplay and the
Community carousel). Run `npm run lint` before pushing.

---

## 🎨 Design tokens & theming

All raw values live **once** in [`src/app/globals.css`](src/app/globals.css) as
CSS custom properties. `tailwind.config.ts` references them via `var(--token)`,
so components only use semantic classes (`bg-brand`, `text-ink-900`,
`bg-card`, `rounded-pill`).

| Group | Tokens |
|---|---|
| Brand | `--brand` `#2599F6` (logo mark, accents) · `--brand-strong` (AA fills) · `--brand-ink` (AA text) |
| Ink | `--ink-900 … --ink-10` (text + borders) |
| Surfaces | `--bg` (page) · `--surface` (sections) · `--card` (elevated) |
| Radii | `4 / 8 / 16 / 24 / full` |
| Shadows | `--shadow-card`, `--shadow-card-lg`, `--shadow-btn` |

**Dark mode** is just a second set of those variables under a `.dark` selector —
no component changes. The toggle (`ThemeToggle`) flips the `.dark` class on
`<html>`; an inline script in `layout.tsx` applies the saved/system theme
**before paint** to avoid flashes. Append `?theme=dark` / `?theme=light` to any
URL to force a theme.

> **AA note:** the source brand blue `#2599F6` is ~3:1 on white (fails AA for
> normal text), so it’s reserved for large display text, borders, and
> decorative use; `--brand-strong` / `--brand-ink` (AA-safe) power buttons,
> links and labels.

---

## 🖼️ Assets — real vs. placeholder

| Asset | Status | Location |
|---|---|---|
| Product screens (home, profile, live, messages) | **Real** (Figma export) | `public/images/product-*.png` |
| Hero demo video | **Placeholder** (poster = real screen until added) | `public/video/` (see README there) |
| Human portraits (hero, community, testimonials, avatars) | **Labelled placeholders** | `<Placeholder>` with dimensions + notes |

**Swapping in real assets**

- **Hero video:** drop `hero-feed.webm` / `.mp4` in `public/video/`, then pass
  `sources` to `<VideoHero>` in `src/components/sections/Hero.tsx` (autoplay /
  muted / loop / playsInline + reduced-motion already handled).
- **Photos:** every `<Placeholder>` carries a `label` describing the exact shot
  and renders at the right dimensions — search `Placeholder` and swap each for
  `<Media>` / `next/image`.

---

## ⚠️ Before launch

- **Legal pages contain template copy** (each shows a “needs legal review”
  banner) — replace with text reviewed by qualified counsel.
- **Contact form** submission is a placeholder (`src/components/page/ContactForm.tsx`)
  — wire it to an API route / email service.

---

Built from Figma with Claude Code.
