import { cn } from "@/lib/cn";

type PlaceholderProps = {
  /** What real asset goes here, e.g. "Creator portrait — 480×600, smiling, phone in hand". */
  label: string;
  kind?: "image" | "video" | "avatar";
  className?: string;
  rounded?: "md" | "full" | "none";
};

/**
 * Clearly-marked placeholder for assets the client will swap in.
 * Renders at the correct dimensions (via className) with a visible note,
 * so replacing it with a real <Media>/<Image> is trivial.
 */
export function Placeholder({
  label,
  kind = "image",
  className,
  rounded = "md",
}: PlaceholderProps) {
  const radius =
    rounded === "full" ? "rounded-full" : rounded === "none" ? "" : "rounded-md";
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      data-placeholder={kind}
      className={cn(
        "relative flex items-center justify-center overflow-hidden border-2 border-dashed border-ink-100",
        "bg-[repeating-linear-gradient(45deg,var(--brand-100),var(--brand-100)_12px,var(--card)_12px,var(--card)_24px)]",
        radius,
        className,
      )}
    >
      {label ? (
        <span className="m-3 max-w-[85%] text-center text-p3 font-medium text-ink-500">
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-brand-ink">
            {kind} placeholder
          </span>
          {label}
        </span>
      ) : (
        // Compact (e.g. avatar): show only the dashed swatch with an icon hint
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand/70">
          {kind === "avatar" ? "" : kind}
        </span>
      )}
    </div>
  );
}
