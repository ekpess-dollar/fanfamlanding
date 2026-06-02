# Hero video — DROP REAL ASSETS HERE

The hero uses `<VideoHero>` which expects:

- `hero-feed.webm` and/or `hero-feed.mp4` — a short, muted, looping product
  demo (recommended ~10–20s, 1280×720+, < ~3 MB). Show the FAN FAM feed in
  action: scrolling posts, going live, gifting.
- Poster fallback currently points to `/images/product-home.png` (a real
  exported app screen). Swap for a dedicated `hero-poster.jpg` if desired.

Until real video files are added, the hero gracefully shows the poster image
(no broken media). Once you add the files, wire them in
`src/components/sections/Hero.tsx` via the `sources` prop:

```tsx
sources={[
  { src: "/video/hero-feed.webm", type: "video/webm" },
  { src: "/video/hero-feed.mp4", type: "video/mp4" },
]}
```

The component already handles autoplay, muted, loop, playsInline, and
prefers-reduced-motion (no autoplay for users who opt out).
