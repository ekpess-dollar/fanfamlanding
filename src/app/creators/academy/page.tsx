import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/page/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Placeholder } from "@/components/ui/Placeholder";
import { ArrowRightIcon, PlayIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Creator Academy — FAN FAM",
  description:
    "Free guides, courses and playbooks to help you grow your audience and earn more on FAN FAM. Learn from creators who've done it.",
};

const tracks = [
  { title: "Getting started", count: "6 lessons", level: "Beginner" },
  { title: "Growing your audience", count: "8 lessons", level: "Intermediate" },
  { title: "Pricing & monetisation", count: "5 lessons", level: "Intermediate" },
  { title: "Going live like a pro", count: "7 lessons", level: "All levels" },
  { title: "Building a content calendar", count: "4 lessons", level: "Beginner" },
  { title: "Community & retention", count: "6 lessons", level: "Advanced" },
];

const featured = [
  { title: "Your first 1,000 true fans", mins: "12 min", tag: "Growth" },
  { title: "How to price your subscription", mins: "9 min", tag: "Monetisation" },
  { title: "Lighting & audio on a budget", mins: "15 min", tag: "Production" },
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Creator Academy"
        title="Learn the craft of creating — for free"
        description="Practical playbooks, short video lessons and templates to help you grow your audience and earn more, from creators who've been there."
      >
        <Button href="#tracks" size="lg">
          Browse all tracks <ArrowRightIcon className="size-5" />
        </Button>
      </PageHero>

      {/* Featured lessons */}
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="Start here" title="Featured lessons" />
          <ul className="grid gap-6 lg:grid-cols-3">
            {featured.map((l) => (
              <li key={l.title}>
                <Card className="flex h-full flex-col overflow-hidden bg-card">
                  <div className="relative">
                    <Placeholder
                      kind="image"
                      label={`Lesson thumbnail 800×450 — ${l.title}`}
                      className="aspect-video w-full rounded-none border-0"
                    />
                    <span className="absolute left-3 top-3">
                      <Badge tone="brand">{l.tag}</Badge>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex size-12 items-center justify-center rounded-full bg-white/90 text-brand-ink shadow-card-lg">
                        <PlayIcon className="size-5 translate-x-0.5" />
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="font-display text-p1 font-bold text-ink-900">{l.title}</h3>
                    <p className="mt-auto text-p3 text-ink-500">{l.mins} watch</p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Tracks */}
      <section id="tracks" className="scroll-mt-20 border-t border-ink-10 bg-surface py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Learning tracks"
            title="Structured paths to grow"
            description="Each track is a short series you can finish in an afternoon — then put straight to work."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t) => (
              <li key={t.title}>
                <a href="#" className="block h-full">
                  <Card className="flex h-full flex-col gap-3 bg-card p-6 transition-shadow hover:shadow-card-lg">
                    <Badge tone="neutral" className="w-fit">{t.level}</Badge>
                    <h3 className="font-display text-p1 font-bold text-ink-900">{t.title}</h3>
                    <p className="mt-auto flex items-center gap-1 text-p2 font-medium text-brand-ink">
                      {t.count} <ArrowRightIcon className="size-4" />
                    </p>
                  </Card>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
