import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "brand" | "live" | "neutral";
  className?: string;
};

const tones = {
  brand: "bg-brand-200 text-brand-ink",
  live: "bg-live text-white",
  neutral: "bg-ink-10 text-ink-700",
};

export function Badge({ children, tone = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-xs px-2 py-0.5 text-p3 font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
