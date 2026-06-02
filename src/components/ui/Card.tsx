import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
};

/** Surface card — Figma: #FAFAFA, radius 16, soft #ECEEFB shadow, hairline border. */
export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-md border border-ink-50 bg-surface shadow-card",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
