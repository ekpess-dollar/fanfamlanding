import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BrowserFrame } from "@/components/ui/DeviceFrame";
import { VideoHero } from "@/components/ui/VideoHero";
import { Placeholder } from "@/components/ui/Placeholder";
import { ArrowRightIcon, StarIcon, VerifyIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-100 to-canvas">
      {/* soft brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-brand-200/60 blur-3xl"
      />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6 animate-fade-up">
          <Badge tone="brand" className="gap-1.5 px-3 py-1">
            <StarIcon className="size-3.5" /> Built for creators &amp; their fans
          </Badge>
          <h1 className="font-display text-[2.25rem] font-extrabold leading-[1.08] tracking-[-1px] text-ink-900 sm:text-display-lg lg:text-display-xl">
            Where creators and fans really{" "}
            <span className="text-brand">connect</span>.
          </h1>
          <p className="max-w-xl text-p1 text-ink-500 sm:text-[18px] sm:leading-8">
            Post, go live, and build subscriptions on one platform that pays you
            back. Fanation turns your community into income — with gifting, coins,
            and direct messaging built in.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#earn" size="lg">
              Start creating <ArrowRightIcon className="size-5" />
            </Button>
            <Button href="#features" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-2 flex items-center gap-4">
            <div className="flex -space-x-3" aria-hidden>
              {["A", "B", "C", "D"].map((k) => (
                <Placeholder
                  key={k}
                  kind="avatar"
                  rounded="full"
                  label=""
                  className="size-10 ring-2 ring-card"
                />
              ))}
            </div>
            <p className="text-p2 text-ink-500">
              <span className="font-bold text-ink-900">12,000+</span> creators
              already earning
            </p>
          </div>
        </div>

        {/* Product video + human overlay */}
        <div className="relative animate-fade-up">
          <BrowserFrame label="fanation.app/home">
            <VideoHero
              poster="/images/product-home.png"
              label="Fanation home feed in action — scrolling posts, live creators and gifting"
              className="aspect-[1440/850] w-full"
              // sources left empty → poster shows until a real demo video is added
              // (see public/video/README.md)
            />
          </BrowserFrame>

          {/* Floating "creator" card to add human presence + show monetisation */}
          <div className="absolute -bottom-6 -left-4 hidden w-64 rounded-md border border-ink-50 bg-card p-3 shadow-card-lg sm:flex sm:items-center sm:gap-3">
            <Placeholder
              kind="avatar"
              rounded="full"
              label="Creator selfie 96×96"
              className="size-12 shrink-0"
            />
            <div className="min-w-0">
              <p className="flex items-center gap-1 text-p2 font-bold text-ink-900">
                Priscilia <VerifyIcon className="size-4 text-brand" title="Verified creator" />
              </p>
              <p className="text-p3 font-semibold text-brand-ink">+$2,480 this month</p>
            </div>
          </div>

          {/* Floating LIVE badge */}
          <div className="absolute -right-3 top-6 hidden items-center gap-1.5 rounded-pill bg-live px-3 py-1.5 text-p3 font-semibold text-white shadow-card-lg sm:flex">
            <span className="size-2 animate-pulse rounded-full bg-white" /> LIVE now
          </div>
        </div>
      </Container>
    </section>
  );
}
