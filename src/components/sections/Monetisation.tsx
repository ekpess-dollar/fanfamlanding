import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CoinIcon, GiftIcon, LockIcon, CalendarIcon, type IconLike } from "@/components/ui/Icons";

const ways: { Icon: IconLike; title: string; body: string }[] = [
  {
    Icon: CoinIcon,
    title: "Coins & tips",
    body: "Fans buy coins and tip you on posts, comments and live streams. Cash out whenever you like.",
  },
  {
    Icon: LockIcon,
    title: "Subscriptions",
    body: "Offer monthly subscriber tiers that unlock exclusive posts, media collections and DMs.",
  },
  {
    Icon: GiftIcon,
    title: "Gifting",
    body: "Supporters send one-off gifts to say thanks — a simple, instant way to back the creators they love.",
  },
  {
    Icon: CalendarIcon,
    title: "Scheduled drops",
    body: "Queue posts and pay-per-view events in advance so your income keeps flowing while you create.",
  },
];

export function Monetisation() {
  return (
    <section id="earn" className="scroll-mt-20 py-20 sm:py-section">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Earn your way"
          title="Four ways to get paid on Fanation"
          description="No gatekeeping, no guesswork. Mix and match the tools that fit how you create — and keep more of what you make."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map(({ Icon, title, body }) => (
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
  );
}
