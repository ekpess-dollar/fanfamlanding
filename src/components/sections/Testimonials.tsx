import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Placeholder } from "@/components/ui/Placeholder";
import { StarIcon, VerifyIcon } from "@/components/ui/Icons";

const testimonials = [
  {
    quote:
      "I moved my whole community to Fanation and tripled my monthly income in two months. Gifting during live streams is a game changer.",
    name: "Priscilia O.",
    handle: "@yummychill54",
    avatar: "Portrait 120×120 — Priscilia, smiling",
  },
  {
    quote:
      "Subscriptions plus pay-per-view means I finally get paid for the work I was giving away. Setup took ten minutes.",
    name: "Marcus T.",
    handle: "@marcusbeats",
    avatar: "Portrait 120×120 — Marcus, headphones",
  },
  {
    quote:
      "The DMs and group chats keep my fans close. It feels personal, and the payouts are fast and reliable.",
    name: "Lara K.",
    handle: "@laracreates",
    avatar: "Portrait 120×120 — Lara, in studio",
  },
];

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-surface py-20 sm:py-section">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Loved by creators"
          title="Real creators, real income"
          description="Hear from the people building their living on Fanation every day."
        />
        <ul className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card as="li" key={t.handle} className="flex flex-col gap-5 bg-card p-6">
              <div className="flex gap-1 text-brand" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-4 fill-brand" />
                ))}
              </div>
              <blockquote className="text-p1 text-ink-700">“{t.quote}”</blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <Placeholder
                  kind="avatar"
                  rounded="full"
                  label=""
                  className="size-11 shrink-0"
                />
                <div>
                  <p className="flex items-center gap-1 text-p2 font-bold text-ink-900">
                    {t.name}
                    <VerifyIcon className="size-4 text-brand" title="Verified creator" />
                  </p>
                  <p className="text-p3 text-ink-500">{t.handle}</p>
                </div>
              </figcaption>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  );
}
