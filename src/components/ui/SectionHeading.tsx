import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-p3 font-semibold uppercase tracking-[1.5px] text-brand-ink">
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className="font-display font-bold text-display-sm text-ink-900 sm:text-display-md"
      >
        {title}
      </h2>
      {description && (
        <p className="text-p1 text-ink-500 sm:text-[18px] sm:leading-7">{description}</p>
      )}
    </div>
  );
}
