import { cn } from "@/lib/cn";

/** "F" monogram from Figma node 10013:4980 (two vector pieces composed). */
const PATH_TOP =
  "M165.24 10.94L160.94 6.64L154.69 2.74L147.27 0.390003L141.41 0L36.72 0.390003L25.78 3.52L14.46 10.55L10.55 14.46L5.08 22.27L1.56001 30.47L0 37.5V148.05L7.03 137.89L14.46 129.3L14.06 42.97L14.46 38.67L16.8 31.25L19.53 26.56L23.83 21.88L30.86 17.19L39.06 14.85H144.92L151.17 17.58L154.69 21.1L156.64 25L157.03 33.2L155.47 37.11L150.78 42.19L144.14 44.92H61.33L52.35 48.83L46.1 56.25L44.14 62.89V103.13L58.21 93.75L58.6 64.06L59.77 61.72L62.5 59.77L146.49 59.38L154.3 57.03L161.33 52.74L167.58 45.31L171.49 35.16L171.88 28.52L170.71 21.1L165.24 10.94Z";
const PATH_BOTTOM =
  "M131.25 10.94L123.44 4.3L115.24 0.779999L111.72 0L98.83 0.779999L88.67 4.69L68.75 15.62L51.17 27.34L39.06 36.72L24.22 50L15.24 59.37L8.60001 67.97L2.35001 79.69L0 88.28V98.44L1.56001 103.9L7.03 112.89L12.5 117.58L18.36 120.7L26.96 122.66L34.77 122.26L41.8 119.92L51.17 112.89L56.64 103.9L58.6 94.92L57.82 49.22L44.14 60.55V94.53L42.58 100L37.89 105.47L32.82 107.81L27.74 108.2L23.44 107.03L19.53 104.69L16.02 100.39L14.46 96.87L14.06 91.8L16.02 84.37L25 70.31L46.1 49.61L69.14 32.42L95.32 17.58L103.52 14.45H110.55L116.02 16.8L120.32 20.7L123.05 25.39L124.22 32.42L122.66 38.28L116.8 45.31L108.6 48.44L101.56 47.66L91.02 42.97L77.74 35.16L64.85 44.14L85.16 56.25L99.61 62.11L104.3 62.89L114.06 62.11L122.27 58.98L127.74 55.08L132.82 49.61L135.55 44.92L137.89 38.28L138.67 32.03L137.89 24.61L136.33 19.53L131.25 10.94Z";

type LogoProps = {
  className?: string;
  /** Hide the "Fanation" wordmark and show only the mark. */
  markOnly?: boolean;
  /** Render mark + wordmark in the current text colour (e.g. white on a brand tile). */
  mono?: boolean;
};

/** Fanation brand lockup: the F monogram (brand blue) + wordmark. */
export function Logo({ className, markOnly = false, mono = false }: LogoProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-2", className)}
      role={markOnly ? "img" : undefined}
      aria-label={markOnly ? "Fanation" : undefined}
    >
      <svg
        viewBox="0 0 171.88 201.96"
        fill="none"
        aria-hidden
        className={cn("h-8 w-auto", mono ? "text-current" : "text-brand")}
      >
        <path d={PATH_TOP} fill="currentColor" />
        <path d={PATH_BOTTOM} transform="translate(0 79.31)" fill="currentColor" />
      </svg>
      {!markOnly && (
        <span
          className={cn(
            "font-display text-[20px] font-bold tracking-tight",
            mono ? "text-current" : "text-ink-900",
          )}
        >
          Fanation
        </span>
      )}
    </span>
  );
}
