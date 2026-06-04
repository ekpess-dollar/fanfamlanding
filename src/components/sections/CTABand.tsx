import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function CTABand() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-md bg-brand-strong px-6 py-14 text-center sm:px-12 sm:py-20">
          {/* light gradient sheen to match Figma button treatment */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background-image:linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_45%)]"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="font-display text-display-md font-extrabold text-white sm:text-display-lg">
              Become a creator on Fanation today
            </h2>
            <p className="text-p1 text-white/90 sm:text-[18px]">
              It's free to join. Build your profile, bring your fans, and start
              earning in minutes.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href="#"
                size="lg"
                variant="secondary"
                className="border-transparent bg-white text-brand-ink hover:bg-brand-100"
              >
                Create your account <ArrowRightIcon className="size-5" />
              </Button>
              <Button
                href="#features"
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Explore features
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
