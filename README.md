# FAN FAM — Marketing Landing Site

A production-quality marketing site for **FAN FAM**, a creator/fan social
platform (subscriptions, gifting, live streaming, messaging, coins/tips).

Built with **Next.js (App Router) + Tailwind CSS**, driven entirely by design
tokens extracted from the FAN FAM Figma design system (file
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

## 🎨 Design tokens & theming

All raw values live **once** in [`src/app/globals.css`](src/app/globals.css) as
CSS custom properties. `tailwind.config.ts` references them via `var(--token)`,
so components only use semantic classes (`bg-brand`, `text-ink-900`,
`bg-card`, `rounded-pill`).

| Group | Tokens |
|---|---|
| Brand | `--brand` `#2599F6` · `--brand-strong` (AA fills) · `--brand-ink` (AA text) · `--brand-teal` `#07A9B4` (wordmark) |
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
