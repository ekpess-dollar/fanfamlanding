import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium tracking-p2 " +
  "transition-colors duration-200 focus-visible:outline-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Primary brand pill — matches Figma button (blue fill, white text, soft top light).
  // Uses brand-strong so white text meets WCAG-AA (≈4.96:1).
  primary:
    "bg-brand-strong text-white shadow-btn hover:bg-brand-ink " +
    "[background-image:linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_100%)]",
  // Card-surface pill with hairline border (AA-safe brand-ink text; adapts to theme)
  secondary:
    "bg-card text-brand-ink border border-brand hover:bg-brand-100 shadow-btn",
  // Minimal text/ghost
  ghost: "bg-transparent text-ink-700 hover:text-ink-900 hover:bg-ink-10",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-p2",
  lg: "px-7 py-3.5 text-p1",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
