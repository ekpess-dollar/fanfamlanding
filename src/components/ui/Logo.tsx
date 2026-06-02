import { cn } from "@/lib/cn";

/** FAN FAM wordmark — Inter Semi Bold, brand teal (from Figma node 2423:29048). */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[18px] font-semibold tracking-tight text-brand-teal",
        className,
      )}
    >
      FAN&nbsp;FAM
    </span>
  );
}
