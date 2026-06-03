import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Go live", href: "/#live" },
      { label: "Subscriptions", href: "/#earn" },
      { label: "Coins & gifting", href: "/#earn" },
      { label: "Mobile app", href: "/mobile" },
    ],
  },
  {
    heading: "Creators",
    links: [
      { label: "Become a creator", href: "/creators/become" },
      { label: "Creator academy", href: "/creators/academy" },
      { label: "Payouts", href: "/creators/payouts" },
      { label: "Success stories", href: "/creators/stories" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const legal = [
  { label: "Terms of service", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Cookie notice", href: "/legal/cookies" },
];

const socials = [
  { name: "X", d: "M3 3l7.5 9.5L3.5 21H6l5.4-6.4L16 21h5l-7.8-10 6.7-8H17.4l-4.6 5.5L8.7 3H3Z" },
  { name: "Instagram", d: "M7 3.5h10A3.5 3.5 0 0 1 20.5 7v10A3.5 3.5 0 0 1 17 20.5H7A3.5 3.5 0 0 1 3.5 17V7A3.5 3.5 0 0 1 7 3.5Zm5 4.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5-1.2v.01" },
  { name: "TikTok", d: "M14 3c.4 2.6 2 4.2 4.5 4.5v3c-1.7 0-3.2-.5-4.5-1.4v5.7A5.8 5.8 0 1 1 8 9.2v3.1a2.7 2.7 0 1 0 2 2.6V3h4Z" },
  { name: "YouTube", d: "M22 12s0-3-.4-4.4a2.6 2.6 0 0 0-1.8-1.8C18.4 5.4 12 5.4 12 5.4s-6.4 0-7.8.4A2.6 2.6 0 0 0 2.4 7.6C2 9 2 12 2 12s0 3 .4 4.4a2.6 2.6 0 0 0 1.8 1.8c1.4.4 7.8.4 7.8.4s6.4 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8C22 15 22 12 22 12Zm-12 3V9l5 3-5 3Z" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-10 bg-card">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-4">
          <Logo className="text-[20px]" />
          <p className="max-w-xs text-p2 text-ink-500">
            The social platform where creators and fans connect, share, and earn
            together.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href="#"
                aria-label={s.name}
                className="inline-flex size-9 items-center justify-center rounded-full border border-ink-50 text-ink-500 transition-colors hover:border-brand hover:text-brand"
              >
                <svg viewBox="0 0 24 24" className="size-4.5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.heading} aria-label={col.heading} className="flex flex-col gap-3">
            <h2 className="text-p3 font-bold uppercase tracking-wide text-ink-500">
              {col.heading}
            </h2>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-p2 text-ink-500 transition-colors hover:text-ink-900">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-ink-10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-p3 text-ink-500">
            © {new Date().getFullYear()} FAN FAM. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-p3 font-medium text-ink-500 transition-colors hover:text-ink-700">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
