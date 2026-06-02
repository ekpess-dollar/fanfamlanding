import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Features } from "@/components/sections/Features";
import { Community } from "@/components/sections/Community";
import { Monetisation } from "@/components/sections/Monetisation";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Features />
      <Community />
      <Monetisation />
      <Testimonials />
      <CTABand />
    </>
  );
}
