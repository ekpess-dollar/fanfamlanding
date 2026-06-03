import { cn } from "@/lib/cn";

/** A subtle browser chrome wrapper to present desktop product screenshots. */
export function BrowserFrame({
  children,
  className,
  label = "fanfam.app",
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border border-ink-50 bg-card shadow-card-lg",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-ink-10 bg-surface px-4 py-3">
        <span className="size-2.5 rounded-full bg-ink-100" />
        <span className="size-2.5 rounded-full bg-ink-100" />
        <span className="size-2.5 rounded-full bg-ink-100" />
        <span className="ml-3 hidden rounded-full bg-card px-3 py-1 text-p3 text-ink-300 sm:block">
          {label}
        </span>
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

/** A phone frame for presenting mobile/portrait product shots. */
export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-ink-50 bg-card p-2.5 shadow-card-lg",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.5rem] border border-ink-10">
        {children}
      </div>
    </div>
  );
}
