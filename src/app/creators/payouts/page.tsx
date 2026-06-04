import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/page/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";
import { CoinIcon, ShieldIcon, CalendarIcon, ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Payouts — Fanation",
  description:
    "How creators get paid on Fanation: transparent fees, fast withdrawals, multiple payout methods and clear schedules. No hidden charges.",
};

const highlights = [
  { Icon: CoinIcon, title: "Keep up to 90%", body: "A simple, transparent platform fee. What you earn is what you see — no surprise deductions." },
  { Icon: CalendarIcon, title: "Fast withdrawals", body: "Cash out on a rolling basis. Most withdrawals arrive within 1–3 business days." },
  { Icon: ShieldIcon, title: "Secure & compliant", body: "Bank-grade security, identity verification and fraud protection on every transaction." },
];

const methods = [
  { name: "Bank transfer", detail: "Direct to your local bank account", time: "1–3 business days" },
  { name: "Debit card", detail: "Instant cash-out to eligible cards", time: "Minutes" },
  { name: "Mobile money", detail: "Supported wallets in select regions", time: "Same day" },
  { name: "PayPal", detail: "Withdraw to a linked PayPal account", time: "1–2 business days" },
];

const steps = [
  { n: "01", title: "You earn", body: "Subscriptions, tips, gifts and live earnings collect in your balance in real time." },
  { n: "02", title: "Balance clears", body: "Funds become available to withdraw after a short standard hold." },
  { n: "03", title: "You withdraw", body: "Request a payout to your chosen method, any time, from your dashboard." },
  { n: "04", title: "Money lands", body: "Track the transfer until it reaches your account — with email updates." },
];

export default function PayoutsPage() {
  return (
    <>
      <PageHero
        eyebrow="Payouts"
        title="Get paid quickly, fairly and transparently"
        description="No hidden fees, no long lock-ups. See exactly how money moves from your fans to your bank account."
      />

      {/* Highlights */}
      <section className="py-16 sm:py-20">
        <Container>
          <ul className="grid gap-5 md:grid-cols-3">
            {highlights.map(({ Icon, title, body }) => (
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

      {/* How it works */}
      <section className="border-y border-ink-10 bg-surface py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow="How it works" title="From fan to bank in four steps" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n}>
                <Card className="flex h-full flex-col gap-2 bg-card p-6">
                  <span className="font-display text-display-sm font-extrabold text-brand-ink">{s.n}</span>
                  <h3 className="font-display text-p1 font-bold text-ink-900">{s.title}</h3>
                  <p className="text-p2 text-ink-500">{s.body}</p>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Methods */}
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Payout methods"
            title="Withdraw your way"
            description="Available methods vary by country. We're adding new options all the time."
          />
          <div className="overflow-hidden rounded-md border border-ink-50">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-surface text-p3 uppercase tracking-wide text-ink-500">
                  <th className="px-5 py-3 font-semibold">Method</th>
                  <th className="px-5 py-3 font-semibold">Details</th>
                  <th className="px-5 py-3 font-semibold">Typical speed</th>
                </tr>
              </thead>
              <tbody>
                {methods.map((m) => (
                  <tr key={m.name} className="border-t border-ink-10">
                    <td className="px-5 py-4 font-display text-p1 font-bold text-ink-900">{m.name}</td>
                    <td className="px-5 py-4 text-p2 text-ink-500">{m.detail}</td>
                    <td className="px-5 py-4 text-p2 text-ink-700">{m.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-p2 text-ink-500">
            Need help with a payout?{" "}
            <a href="/contact" className="font-medium text-brand-ink underline underline-offset-2">
              Contact support
            </a>{" "}
            and we'll sort it out.
          </p>
          <div>
            <Button href="/creators/become" size="lg">
              Start earning <ArrowRightIcon className="size-5" />
            </Button>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
