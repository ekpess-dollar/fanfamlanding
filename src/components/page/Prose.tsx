import { cn } from "@/lib/cn";

/**
 * Long-form content wrapper with consistent type rhythm for legal/editorial
 * pages. Styles raw h2/h3/p/ul/li/a via descendant selectors.
 */
export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-none text-p1 leading-7 text-ink-700",
        "[&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:scroll-mt-24 [&_h2]:font-display [&_h2]:text-[24px] [&_h2]:font-bold [&_h2]:text-ink-900",
        "[&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-p1 [&_h3]:font-bold [&_h3]:text-ink-900",
        "[&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2",
        "[&_a]:font-medium [&_a]:text-brand-ink [&_a]:underline [&_a]:underline-offset-2",
        "[&_strong]:font-semibold [&_strong]:text-ink-900",
        className,
      )}
    >
      {children}
    </div>
  );
}
