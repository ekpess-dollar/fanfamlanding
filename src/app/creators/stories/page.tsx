import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/page/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Placeholder } from "@/components/ui/Placeholder";
import { CTABand } from "@/components/sections/CTABand";
import { VerifyIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Success Stories — FAN FAM",
  description:
    "Real creators, real income. See how musicians, coaches and artists built sustainable businesses on FAN FAM.",
};

const stories = [
  {
    name: "Priscilia O.",
    handle: "@yummychill54",
    niche: "Lifestyle creator",
    quote:
      "I moved my whole community to FAN FAM and tripled my monthly income in two months. Gifting during live streams changed everything.",
    stats: [
      { value: "3×", label: "Income in 8 weeks" },
      { value: "4.8k", label: "Subscribers" },
    ],
    photo: "Creator portrait 720×900 — Priscilia, warm and candid",
  },
  {
    name: "Marcus T.",
    handle: "@marcusbeats",
    niche: "Music producer",
    quote:
      "Pay-per-view drops and subscriptions mean I finally get paid for beats I used to give away. Setup took ten minutes.",
    stats: [
      { value: "$6.2k", label: "Monthly earnings" },
      { value: "120+", label: "Paid drops" },
    ],
    photo: "Creator portrait 720×900 — Marcus in the studio, headphones",
  },
  {
    name: "Lara K.",
    handle: "@laracreates",
    niche: "Visual artist",
    quote:
      "The DMs and subscriber collections keep my fans close. It feels personal, and payouts are fast and reliable.",
    stats: [
      { value: "9.1k", label: "Followers" },
      { value: "92%", label: "Renewal rate" },
    ],
    photo: "Creator portrait 720×900 — Lara painting in her studio",
  },
];

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success stories"
        title="Real creators. Real income."
        description="From bedroom producers to full-time artists — here's how creators are building sustainable businesses on FAN FAM."
      />

      <section className="py-16 sm:py-section">
        <Container className="flex flex-col gap-16 sm:gap-24">
          {stories.map((s, i) => (
            <article
              key={s.handle}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Placeholder
                kind="image"
                label={s.photo}
                className={`aspect-[4/5] w-full ${i % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div className={`flex flex-col gap-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3">
                  <Placeholder kind="avatar" rounded="full" label="" className="size-12" />
                  <div>
                    <p className="flex items-center gap-1 font-display text-p1 font-bold text-ink-900">
                      {s.name}
                      <VerifyIcon className="size-4 text-brand" title="Verified creator" />
                    </p>
                    <p className="text-p2 text-ink-500">
                      {s.handle} · {s.niche}
                    </p>
                  </div>
                </div>
                <blockquote className="font-display text-[24px] font-bold leading-snug text-ink-900 sm:text-[28px]">
                  “{s.quote}”
                </blockquote>
                <div className="flex gap-4">
                  {s.stats.map((st) => (
                    <Card key={st.label} className="flex flex-1 flex-col gap-1 bg-card p-4 text-center">
                      <span className="font-display text-display-sm font-extrabold text-brand-ink">
                        {st.value}
                      </span>
                      <span className="text-p3 text-ink-500">{st.label}</span>
                    </Card>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <SectionHeading
            eyebrow="Your turn"
            title="The next story could be yours"
            description="Join thousands of creators earning a living doing what they love."
          />
        </Container>
      </section>

      <CTABand />
    </>
  );
}
