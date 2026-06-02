# FAN FAM — Landing Page

A production-quality marketing landing page for **FAN FAM**, the creator/fan
social platform. Built from the real Figma design system (file
`TZPwzg8gVnQjanrk1j7E8c`) — the Figma file is the product app, so this page is
designed fresh from its tokens and uses exported app screens as product media.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS 3.4** — theme is wired to CSS variables (single source of truth)
- **next/font** (Inter + Roboto, self-hosted) · **next/image** (responsive srcset, AVIF/WebP, lazy)

## Run

```bash
bun install      # or npm install
bun run dev      # http://localhost:3000
bun run build && bun run start   # production
```

## Design tokens — single source of truth

All raw values live **once** in [`src/app/globals.css`](src/app/globals.css) as
CSS custom properties, extracted from Figma variables. `tailwind.config.ts`
references them via `var(--token)`, and components only use semantic classes
(`bg-brand`, `text-ink-900`, `rounded-pill`). Change a token in one place →
the whole page updates.

| Group | Tokens |
|---|---|
| Brand | `--brand` `#2599F6` (base) · `--brand-strong` `#1670CC` (AA fills) · `--brand-ink` `#135FB0` (AA text) · `--brand-teal` `#07A9B4` (wordmark) |
| Ink | `--ink-900 … --ink-10` (greys) |
| Surface | `--surface` `#FAFAFA` · `--bg` `#FFFFFF` |
| Radii | `4 / 8 / 16 / 24 / full` |
| Shadows | `--shadow-card` (soft `#ECEEFB`) · `--shadow-card-lg` · `--shadow-btn` |

> **Accessibility note:** the source brand blue `#2599F6` is only ~3:1 on white,
> which fails WCAG-AA for normal text. We keep it for large display text,
> borders, focus rings and decorative use, and added `--brand-strong` /
> `--brand-ink` (AA-safe) for buttons, links, eyebrows and the CTA band.

## Structure

```
src/
  app/            layout (fonts, metadata, skip-link), page (composes sections), globals.css
  components/
    ui/           Button, Badge, Card, Container, SectionHeading, Logo,
                  Media (next/image), VideoHero, DeviceFrame, Placeholder, Icons
    sections/     Navbar, Hero, TrustStrip, Features, Community,
                  Monetisation, Testimonials, CTABand, Footer
  lib/            cn (classnames), tokens (TS mirror)
```

## Assets — what's real vs. placeholder

| Asset | Status | Where |
|---|---|---|
| Product screens (home, profile, live, messages) | **Real** — exported from Figma | `public/images/product-*.png` |
| Hero demo video | **Placeholder** — poster (real screen) shows until added | `public/video/` (see README there) |
| Human portraits (hero card, community grid, testimonials, avatars) | **Labelled placeholders** | `<Placeholder>` components with dimensions + notes |

### Swapping in real assets

- **Hero video:** drop `hero-feed.webm` / `.mp4` into `public/video/`, then pass
  `sources` to `<VideoHero>` in `src/components/sections/Hero.tsx`
  (autoplay / muted / loop / playsInline + reduced-motion already handled).
- **Photos:** every `<Placeholder>` carries a `label` describing the exact shot
  and renders at the correct dimensions. Replace each with `<Media>` (or
  `next/image`) using the same width/height. Search the codebase for
  `Placeholder` to find them all.

## Quality bar

- **Accessibility:** semantic landmarks (`header/nav/main/section/footer/figure/
  blockquote`), meaningful `alt` on every image, decorative icons `aria-hidden`,
  visible focus rings, skip-link, accessible mobile menu (`aria-expanded`/
  `aria-controls`), WCAG-AA contrast, and `prefers-reduced-motion` handling
  (no video autoplay + animations disabled for opt-out users).
- **Performance:** `next/image` responsive `srcset` + AVIF/WebP, lazy-loading
  below the fold, self-hosted fonts, fully static output (~114 kB first-load JS).
- **Fidelity:** spacing, radii, type and colour driven by the extracted Figma
  tokens, not approximations.
