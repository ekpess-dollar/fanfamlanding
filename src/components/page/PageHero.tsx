import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
};

/** Compact hero band for inner pages — mirrors the home hero's gradient. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "center",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-10 bg-gradient-to-b from-brand-100 to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 size-[480px] -translate-x-1/2 rounded-full bg-brand-200/50 blur-3xl"
      />
      <Container
        className={cn(
          "relative flex flex-col gap-4 py-16 sm:py-20",
          align === "center" ? "items-center text-center" : "items-start",
        )}
      >
        {eyebrow && (
          <span className="text-p3 font-semibold uppercase tracking-[1.5px] text-brand-ink">
            {eyebrow}
          </span>
        )}
        <h1
          className={cn(
            "font-display font-extrabold text-display-md text-ink-900 sm:text-display-lg",
            align === "center" && "max-w-3xl",
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "text-p1 text-ink-500 sm:text-[18px] sm:leading-8",
              align === "center" && "max-w-2xl",
            )}
          >
            {description}
          </p>
        )}
        {children && <div className="mt-2">{children}</div>}
      </Container>
    </section>
  );
}
