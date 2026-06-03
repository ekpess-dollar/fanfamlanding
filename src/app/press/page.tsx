import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/page/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Press — FAN FAM",
  description:
    "FAN FAM press kit, brand assets, company facts and media contact. Everything journalists need to cover the creator platform.",
};

const facts = [
  { label: "Founded", value: "2021" },
  { label: "Headquarters", value: "Remote-first" },
  { label: "Creators", value: "12,000+" },
  { label: "Paid to creators", value: "$4.2M+" },
  { label: "Countries", value: "180+" },
  { label: "Team", value: "40+ people" },
];

const coverage = [
  { outlet: "TechReview", title: "How FAN FAM is rewriting the rules of creator payouts", date: "Mar 2026" },
  { outlet: "The Wire", title: "The all-in-one app creators didn't know they needed", date: "Jan 2026" },
  { outlet: "Founders Daily", title: "Inside the platform putting fans and creators on equal footing", date: "Nov 2025" },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press & media"
        title="Press kit & media resources"
        description="Covering FAN FAM? Grab our brand assets, company facts, and reach our media team below."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#assets">Download press kit</Button>
          <Button href="/contact" variant="secondary">
            Contact press team
          </Button>
        </div>
      </PageHero>

      {/* Facts */}
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="At a glance" title="Company facts" />
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink-50 bg-ink-10 sm:grid-cols-3">
            {facts.map((f) => (
              <li key={f.label} className="flex flex-col gap-1 bg-card p-6">
                <span className="font-display text-display-sm font-extrabold text-ink-900">
                  {f.value}
                </span>
                <span className="text-p2 text-ink-500">{f.label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Brand assets */}
      <section id="assets" className="scroll-mt-24 border-t border-ink-10 bg-surface py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Brand assets"
            title="Logos & screenshots"
            description="Please don't alter, recolour or stretch the FAN FAM logo. Maintain clear space around the wordmark."
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {/* Brand asset: logo on a white background (intentionally white in both themes) */}
            <Card className="flex aspect-video items-center justify-center bg-[#ffffff]">
              <span className="font-display text-[28px] font-semibold text-brand-teal">
                FAN&nbsp;FAM
              </span>
            </Card>
            <Card className="flex aspect-video items-center justify-center bg-brand-strong">
              <span className="font-display text-[28px] font-semibold text-white">
                FAN&nbsp;FAM
              </span>
            </Card>
            <Placeholder
              kind="image"
              label="App screenshot pack — high-res product shots, 2400px wide"
              className="aspect-video w-full"
            />
          </div>
          <div>
            <Button href="#" variant="secondary">
              Download all assets (.zip) <ArrowRightIcon className="size-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Coverage */}
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="In the news" title="Recent coverage" />
          <ul className="flex flex-col gap-4">
            {coverage.map((c) => (
              <li key={c.title}>
                <a href="#" className="block">
                  <Card className="flex flex-col gap-2 bg-card p-6 transition-shadow hover:shadow-card-lg sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="text-p3 font-semibold uppercase tracking-wide text-brand-ink">
                        {c.outlet}
                      </span>
                      <h3 className="mt-1 font-display text-p1 font-bold text-ink-900">
                        {c.title}
                      </h3>
                    </div>
                    <span className="shrink-0 text-p2 text-ink-500">{c.date}</span>
                  </Card>
                </a>
              </li>
            ))}
          </ul>
          <p className="text-p2 text-ink-500">
            Media enquiries:{" "}
            <a href="mailto:press@fanfam.app" className="font-medium text-brand-ink underline underline-offset-2">
              press@fanfam.app
            </a>
          </p>
        </Container>
      </section>
    </>
  );
}
