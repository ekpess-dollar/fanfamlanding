import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/page/PageHero";
import { ContactForm } from "@/components/page/ContactForm";
import { Card } from "@/components/ui/Card";
import { MessageIcon, UsersIcon, ShieldIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact — FAN FAM",
  description:
    "Get in touch with the FAN FAM team. Creator support, press, partnerships or general questions — we're here to help.",
};

const channels = [
  {
    Icon: MessageIcon,
    title: "General & support",
    body: "Questions about your account or how FAN FAM works.",
    contact: "hello@fanfam.app",
  },
  {
    Icon: UsersIcon,
    title: "Partnerships",
    body: "Brand deals, integrations and collaborations.",
    contact: "partners@fanfam.app",
  },
  {
    Icon: ShieldIcon,
    title: "Trust & safety",
    body: "Report abuse or raise a safety concern.",
    contact: "safety@fanfam.app",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Fill in the form and the right team will get back to you within 1–2 business days — or reach us directly below."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <div>
            <h2 className="mb-6 font-display text-display-sm font-bold text-ink-900">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* Direct channels */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-display-sm font-bold text-ink-900">
              Other ways to reach us
            </h2>
            {channels.map(({ Icon, title, body, contact }) => (
              <Card key={title} className="flex gap-4 bg-card p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-brand-200 text-brand-ink">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-p1 font-bold text-ink-900">{title}</h3>
                  <p className="mt-0.5 text-p2 text-ink-500">{body}</p>
                  <a
                    href={`mailto:${contact}`}
                    className="mt-1 inline-block text-p2 font-medium text-brand-ink underline underline-offset-2"
                  >
                    {contact}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
