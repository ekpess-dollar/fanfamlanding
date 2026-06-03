import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/page/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { PhoneFrame } from "@/components/ui/DeviceFrame";
import { Media } from "@/components/ui/Media";
import { Placeholder } from "@/components/ui/Placeholder";
import { LiveIcon, MessageIcon, CoinIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Get the App — FAN FAM",
  description:
    "FAN FAM on iOS and Android. Post, go live, message and earn from your pocket. Download the app and take your community everywhere.",
};

function StoreButton({ store }: { store: "ios" | "android" }) {
  const label = store === "ios" ? "App Store" : "Google Play";
  const sub = store === "ios" ? "Download on the" : "Get it on";
  return (
    <a
      href="#"
      aria-label={`Download FAN FAM on the ${label}`}
      className="inline-flex items-center gap-3 rounded-pill bg-[#111317] px-5 py-3 text-white transition-colors hover:bg-[#1d2026]"
    >
      <svg viewBox="0 0 24 24" className="size-6 shrink-0" fill="currentColor" aria-hidden>
        {store === "ios" ? (
          <path d="M16.4 12.7c0-2 1.6-3 1.7-3a3.7 3.7 0 0 0-2.9-1.6c-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.4 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6 1.2 0 1.5.6 2.5.6s1.7-1 2.3-2a8 8 0 0 0 1-2.1c0-.1-2-.8-2.1-3.3ZM14.5 6.3c.5-.7.9-1.6.8-2.6-.8 0-1.8.6-2.4 1.3-.5.6-1 1.5-.8 2.4.9.1 1.8-.4 2.4-1.1Z" />
        ) : (
          <path d="M4 3.5 13.5 12 4 20.5c-.3-.2-.5-.6-.5-1V4.5c0-.4.2-.8.5-1Zm10.7 9.2 2.6 2.6-9.3 5.3 6.7-7.9Zm0-1.4L8 3.4l9.3 5.3-2.6 2.6Zm1 .7 3-1.7c.5-.3.8-.8.8-1.3s-.3-1-.8-1.3M15.7 12l3.5 2-.2.1" />
        )}
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wide text-white/70">{sub}</span>
        <span className="text-p1 font-semibold">{label}</span>
      </span>
    </a>
  );
}

const features = [
  { Icon: LiveIcon, title: "Go live anywhere", body: "Start a stream from your phone in a tap and earn gifts in real time." },
  { Icon: MessageIcon, title: "Messages on the go", body: "Reply to fans and run group chats wherever you are." },
  { Icon: CoinIcon, title: "Track earnings live", body: "Watch tips, gifts and subscriptions roll in from your pocket." },
];

export default function MobilePage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile app"
        title="FAN FAM goes everywhere you do"
        description="Post, stream, message and earn from iOS and Android. Your whole community, right in your pocket."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <StoreButton store="ios" />
          <StoreButton store="android" />
        </div>
      </PageHero>

      {/* Phone showcase */}
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center gap-4">
            <PhoneFrame className="w-44 sm:w-52">
              <Media
                src="/images/product-home.png"
                alt="FAN FAM home feed on mobile"
                width={1440}
                height={850}
                sizes="208px"
                className="aspect-[9/19] object-cover object-top"
              />
            </PhoneFrame>
            <PhoneFrame className="mt-8 w-44 sm:w-52">
              <Media
                src="/images/product-messages.png"
                alt="FAN FAM messages on mobile"
                width={1440}
                height={1150}
                sizes="208px"
                className="aspect-[9/19] object-cover object-top"
              />
            </PhoneFrame>
          </div>
          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              eyebrow="Built for mobile"
              title="Everything you love, in your pocket"
            />
            <ul className="flex flex-col gap-6">
              {features.map(({ Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-brand-200 text-brand-ink">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-p1 font-bold text-ink-900">{title}</h3>
                    <p className="mt-1 text-p2 text-ink-500">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* QR / rating */}
      <section className="border-t border-ink-10 bg-surface py-16 sm:py-20">
        <Container className="grid items-center gap-8 sm:grid-cols-[auto_1fr]">
          <Placeholder kind="image" label="QR code to app stores 220×220" className="size-40" />
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-display-sm font-bold text-ink-900">
              Scan to download
            </h2>
            <p className="max-w-md text-p1 text-ink-500">
              Point your camera at the code to grab FAN FAM on iOS or Android.
              Rated <strong className="text-ink-900">4.9★</strong> by creators worldwide.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <StoreButton store="ios" />
              <StoreButton store="android" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
