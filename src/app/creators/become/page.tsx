import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/page/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BrowserFrame } from "@/components/ui/DeviceFrame";
import { Media } from "@/components/ui/Media";
import { CTABand } from "@/components/sections/CTABand";
import { CoinIcon, LockIcon, GiftIcon, LiveIcon, ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Become a Creator — Fanation",
  description:
    "Turn your audience into income on Fanation. Set up subscriptions, go live, accept gifts and get paid — all in one place. Free to start.",
};

const steps = [
  { n: "01", title: "Create your profile", body: "Sign up free, add your bio and photos, and get verified in minutes." },
  { n: "02", title: "Set up earning", body: "Choose subscription tiers, enable coins and gifting, and price your content." },
  { n: "03", title: "Share & go live", body: "Post, stream, and message your fans. Promote your Fanation link everywhere." },
  { n: "04", title: "Get paid", body: "Watch earnings land in your dashboard and cash out on your schedule." },
];

const tools = [
  { Icon: LockIcon, title: "Subscriptions", body: "Recurring monthly income from your most loyal fans, with tiered perks." },
  { Icon: CoinIcon, title: "Coins & tips", body: "Fans tip you on posts, comments and streams — instantly." },
  { Icon: GiftIcon, title: "Gifting", body: "One-off gifts to celebrate milestones and say thank you." },
  { Icon: LiveIcon, title: "Live streaming", body: "Earn in real time as fans send gifts during your broadcasts." },
];

const faqs = [
  { q: "Is it free to become a creator?", a: "Yes. Creating a profile and setting up your tools is completely free — we only take a share when you earn." },
  { q: "How much can I earn?", a: "There's no cap. You set your subscription prices, and tips and gifts are on top. Top creators earn a full-time income." },
  { q: "When do I get paid?", a: "Earnings are available to withdraw on a rolling basis. See the Payouts page for schedules and methods." },
  { q: "Do I need a big following?", a: "No. Many creators start small and grow on Fanation thanks to discovery, live streams and word of mouth." },
];

export default function BecomeCreatorPage() {
  return (
    <>
      <PageHero
        eyebrow="For creators"
        title="Get paid for the community you've built"
        description="Fanation gives you subscriptions, gifting, live streaming and messaging in one place — so you can focus on creating, not chasing payments."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#start" size="lg">
            Start creating — it's free <ArrowRightIcon className="size-5" />
          </Button>
          <Button href="/creators/payouts" variant="secondary" size="lg">
            See how payouts work
          </Button>
        </div>
      </PageHero>

      {/* Earning tools */}
      <section className="py-16 sm:py-section">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Your toolkit"
            title="Four ways to earn from day one"
            description="Mix and match what fits your audience — no gatekeeping, no minimum follower count."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map(({ Icon, title, body }) => (
              <Card as="li" key={title} className="flex flex-col gap-4 p-6">
                <span className="inline-flex size-12 items-center justify-center rounded-md bg-brand-200 text-brand-ink">
                  <Icon className="size-6" />
                </span>
                <h3 className="font-display text-p1 font-bold text-ink-900">{title}</h3>
                <p className="text-p2 text-ink-500">{body}</p>
              </Card>
            ))}
          </ul>
        </Container>
      </section>

      {/* Steps + product shot */}
      <section id="start" className="scroll-mt-20 border-y border-ink-10 bg-surface py-16 sm:py-section">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              eyebrow="Get started"
              title="Up and running in four steps"
            />
            <ol className="flex flex-col gap-6">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="font-display text-p1 font-extrabold text-brand-ink">{s.n}</span>
                  <div>
                    <h3 className="font-display text-p1 font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-1 text-p2 text-ink-500">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <BrowserFrame label="fanation.app/you" className="mx-auto max-w-xl">
            <div className="max-h-[480px] overflow-hidden">
              <Media
                src="/images/product-profile.png"
                alt="A Fanation creator profile with posts, a subscribe button and gifting options"
                width={1440}
                height={2351}
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </BrowserFrame>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-section">
        <Container className="flex max-w-3xl flex-col gap-8">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
          <ul className="flex flex-col gap-4">
            {faqs.map((f) => (
              <li key={f.q}>
                <details className="group rounded-md border border-ink-50 bg-card p-5 shadow-card">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-p1 font-bold text-ink-900">
                    {f.q}
                    <span className="text-brand-ink transition-transform group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-3 text-p2 text-ink-500">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
