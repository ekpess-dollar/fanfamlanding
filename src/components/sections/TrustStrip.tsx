import { Container } from "@/components/ui/Container";

const stats = [
  { value: "12,000+", label: "Active creators" },
  { value: "$4.2M+", label: "Paid out to creators" },
  { value: "180+", label: "Countries" },
  { value: "4.9/5", label: "Average creator rating" },
];

export function TrustStrip() {
  return (
    <section aria-label="Key statistics" className="border-y border-ink-10 bg-white">
      <Container className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <span className="font-display text-display-sm font-extrabold text-ink-900">
              {s.value}
            </span>
            <span className="mt-1 text-p2 text-ink-500">{s.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
