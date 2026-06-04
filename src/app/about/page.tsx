import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/page/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Placeholder } from "@/components/ui/Placeholder";
import { CTABand } from "@/components/sections/CTABand";
import { HeartIcon, UsersIcon, ShieldIcon, CoinIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About — Fanation",
  description:
    "Fanation is on a mission to help creators earn a living from the communities they build. Meet the team and the values behind the platform.",
};

const values = [
  {
    Icon: HeartIcon,
    title: "Creators first",
    body: "Every decision starts with one question: does this help creators earn and grow? If it doesn't, we don't ship it.",
  },
  {
    Icon: CoinIcon,
    title: "Fair by default",
    body: "Transparent payouts, no hidden fees, and pricing that keeps more money in the hands of the people doing the work.",
  },
  {
    Icon: ShieldIcon,
    title: "Safe & trusted",
    body: "Strong moderation, verified profiles, and privacy controls so creators and fans can show up as themselves.",
  },
  {
    Icon: UsersIcon,
    title: "Community over clout",
    body: "Real connection beats vanity metrics. We build tools that deepen relationships, not just chase reach.",
  },
];

const stats = [
  { value: "2021", label: "Founded" },
  { value: "12,000+", label: "Creators" },
  { value: "$4.2M+", label: "Paid out" },
  { value: "180+", label: "Countries" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="We're building the fairest home for creators"
        description="Fanation started with a simple belief: the people who make the internet worth showing up for deserve to earn a real living from it."
      />

      {/* Mission */}
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-display-sm font-bold text-ink-900 sm:text-[32px]">
              From side hustle to sustainable income
            </h2>
            <p className="text-p1 leading-7 text-ink-500 sm:text-[17px]">
              Creators were building huge communities on platforms that captured
              most of the value. Tipping was clunky, subscriptions were
              gatekept, and going live meant juggling five different apps.
            </p>
            <p className="text-p1 leading-7 text-ink-500 sm:text-[17px]">
              So we built Fanation — one place to post, stream, message, and get
              paid. Today thousands of musicians, coaches, artists and everyday
              storytellers use Fanation to turn their audience into dependable
              income.
            </p>
          </div>
          <Placeholder
            kind="image"
            label="Team / founders photo — 1000×750, candid in-office or community meetup"
            className="aspect-[4/3] w-full"
          />
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-ink-10 bg-surface">
        <Container className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
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

      {/* Values */}
      <section className="py-16 sm:py-section">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="What we believe"
            title="The values that guide every release"
          />
          <ul className="grid gap-5 sm:grid-cols-2">
            {values.map(({ Icon, title, body }) => (
              <Card as="li" key={title} className="flex gap-4 p-6">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-md bg-brand-200 text-brand-ink">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-p1 font-bold text-ink-900">{title}</h3>
                  <p className="mt-1 text-p2 text-ink-500">{body}</p>
                </div>
              </Card>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
