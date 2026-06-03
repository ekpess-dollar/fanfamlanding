import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/page/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Careers — FAN FAM",
  description:
    "Help build the fairest home for creators. Explore open roles at FAN FAM across engineering, design, product and creator partnerships.",
};

const perks = [
  { title: "Remote-first", body: "Work from anywhere. We're async by default with quarterly team gatherings." },
  { title: "Real ownership", body: "Meaningful equity and the autonomy to ship work you're proud of." },
  { title: "Health & wellbeing", body: "Comprehensive medical cover, mental-health support and a wellness stipend." },
  { title: "Learning budget", body: "An annual budget for courses, books, and conferences — keep growing." },
  { title: "Generous time off", body: "Unlimited leave with a 20-day minimum we actually encourage you to take." },
  { title: "Top gear", body: "A home-office budget and the hardware you need to do your best work." },
];

const roles = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Remote (global)", type: "Full-time" },
  { title: "Product Designer", team: "Design", location: "Remote (EMEA)", type: "Full-time" },
  { title: "Trust & Safety Lead", team: "Operations", location: "Remote (global)", type: "Full-time" },
  { title: "Creator Partnerships Manager", team: "Growth", location: "Lagos / Remote", type: "Full-time" },
  { title: "Backend Engineer, Payments", team: "Engineering", location: "Remote (global)", type: "Full-time" },
  { title: "Community Support Specialist", team: "Support", location: "Remote (global)", type: "Contract" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the future of the creator economy"
        description="We're a small, senior team shipping fast and obsessing over creators. If that sounds like you, we'd love to talk."
      />

      {/* Perks */}
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow="Why FAN FAM" title="Great work, looked after" />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <Card as="li" key={p.title} className="flex flex-col gap-2 p-6">
                <h3 className="font-display text-p1 font-bold text-ink-900">{p.title}</h3>
                <p className="text-p2 text-ink-500">{p.body}</p>
              </Card>
            ))}
          </ul>
        </Container>
      </section>

      {/* Open roles */}
      <section className="border-t border-ink-10 bg-surface py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Open roles"
            title="Find your seat"
            description="Don't see a perfect fit? Introduce yourself anyway — we're always keen to meet exceptional people."
          />
          <ul className="flex flex-col gap-4">
            {roles.map((r) => (
              <li key={r.title}>
                <Card className="flex flex-col gap-4 bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-p1 font-bold text-ink-900">{r.title}</h3>
                    <p className="mt-1 text-p2 text-ink-500">
                      {r.team} · {r.location} · {r.type}
                    </p>
                  </div>
                  <Button href="/contact" variant="secondary" className="shrink-0">
                    Apply <ArrowRightIcon className="size-4" />
                  </Button>
                </Card>
              </li>
            ))}
          </ul>
          <p className="text-center text-p2 text-ink-500">
            Questions about working here?{" "}
            <a href="/contact" className="font-medium text-brand-ink underline underline-offset-2">
              Get in touch
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
