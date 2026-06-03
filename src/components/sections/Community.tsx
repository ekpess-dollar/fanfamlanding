import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";

/**
 * "Who it's for" — humanising section. Real creator portraits exported from the
 * FAN FAM Figma design (nodes 10006:4663 / 10009), shown as a self-scrolling
 * marquee over the source's decorative treatment: a blurred room backdrop, a
 * soft-light noise grain, and a torn "cloud" edge at top and bottom.
 */
const people = [
  { src: "/images/people/creator-podcaster.jpg", name: "Marcus", role: "Podcaster", pos: "object-top", alt: "A podcaster recording at his laptop with a studio microphone" },
  { src: "/images/people/creator-sculptor.jpg", name: "Maryann", role: "Sculptor", pos: "object-top", alt: "A sculptor shaping a clay bust in her studio" },
  { src: "/images/people/creator-vlogger.jpg", name: "Tobi", role: "Vlogger", pos: "object-top", alt: "A vlogger filming himself on a phone gimbal at home" },
  { src: "/images/people/creator-streamer.jpg", name: "Elena", role: "Streamer", pos: "object-center", alt: "A creator taking a selfie under studio lighting" },
  { src: "/images/people/creator-coach.jpg", name: "Dembe", role: "Fitness coach", pos: "object-top", alt: "A fitness coach standing confidently outdoors" },
  { src: "/images/people/creator-traveler.jpg", name: "Aisha", role: "Travel creator", pos: "object-center", alt: "A travel creator relaxing in a natural hot spring overlooking mountains" },
  { src: "/images/people/creator-model.jpg", name: "Sofia", role: "Model", pos: "object-top", alt: "A model posing by a sunlit window" },
  { src: "/images/people/creator-fitnessmodel.jpg", name: "Bella", role: "Fitness model", pos: "object-center", alt: "A fitness model leaning against a concrete wall" },
  { src: "/images/people/creator-lifestyle.jpg", name: "Nadia", role: "Lifestyle", pos: "object-center", alt: "A lifestyle creator in a dramatically lit portrait" },
];

function PortraitCard({ p }: { p: (typeof people)[number] }) {
  return (
    <li className="relative w-[230px] shrink-0 overflow-hidden rounded-[20px] ring-1 ring-black/5 sm:w-[268px]">
      <Media
        src={p.src}
        alt={p.alt}
        width={610}
        height={766}
        sizes="268px"
        className={`aspect-[3/4] object-cover ${p.pos}`}
      />
      <span className="absolute bottom-3 left-3 flex items-center rounded-full bg-white px-3 py-2 font-mono text-[11px] uppercase leading-none tracking-[-0.12px] text-[#121212] shadow-card">
        {p.name} <span className="mx-1 text-brand">✳</span> {p.role}
      </span>
    </li>
  );
}

export function Community() {
  return (
    <section
      id="community"
      className="relative isolate scroll-mt-20 overflow-hidden bg-brand-100 py-20 sm:py-section"
    >
      {/* torn "cloud" edges */}
      <CloudEdge />
      <CloudEdge flip />

      {/* Blurred room backdrop across the WHOLE section (cloud to cloud), behind
          everything. A theme-aware scrim keeps text readable while the photo
          stays visible top to bottom. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/people/bg-room.jpg"
          alt=""
          className="size-full scale-110 object-cover blur-[6px]"
        />
        <div className="absolute inset-0 bg-brand-100 opacity-45" />
        {/* a touch more cover behind the heading / footer text for contrast */}
        <div className="absolute inset-0 [background:linear-gradient(to_bottom,var(--brand-100),var(--brand-100)_8%,transparent_32%,transparent_74%,var(--brand-100))] opacity-70" />
      </div>

      {/* soft-light noise grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[length:520px] bg-repeat opacity-50 mix-blend-soft-light [background-image:url('/images/people/noise.jpg')]"
      />

      {/* content */}
      <div className="relative z-10 flex flex-col gap-12">
        <Container>
          <SectionHeading
            eyebrow="Who it's for"
            title="A home for every kind of creator"
            description="From musicians to coaches to everyday storytellers — FAN FAM is built for people who want to share what they love and get paid for it."
          />
        </Container>

        {/* Self-scrolling carousel (pauses on hover; manual scroll if reduced motion) */}
        <div className="relative py-2">
          <div className="group relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)] motion-reduce:overflow-x-auto">
            <div className="flex w-max">
              {[0, 1].map((dup) => (
                <ul
                  key={dup}
                  aria-hidden={dup === 1}
                  className="marquee-track flex shrink-0 gap-4 pr-4 motion-reduce:[animation:none]"
                >
                  {people.map((p) => (
                    <PortraitCard key={p.name} p={p} />
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        <Container>
          <p className="mx-auto max-w-2xl text-center text-p2 text-ink-700">
            Join a global community of <strong className="text-ink-900">12,000+</strong>{" "}
            creators and millions of fans who show up every day.
          </p>
        </Container>
      </div>
    </section>
  );
}

/** Scalloped "cloud" edge filled with the page colour so the section tears into
 *  its neighbours. `flip` mirrors it for the bottom edge. */
function CloudEdge({ flip = false }: { flip?: boolean }) {
  const scallops = Array.from(
    { length: 12 },
    (_, i) => `A60,34 0 0 1 ${1320 - i * 120},10`,
  ).join(" ");
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 44"
      preserveAspectRatio="none"
      className={`absolute inset-x-0 z-20 h-[26px] w-full text-canvas sm:h-[40px] ${
        flip ? "bottom-0 rotate-180" : "top-0"
      }`}
    >
      <path d={`M0,0 H1440 V10 ${scallops} Z`} fill="currentColor" />
    </svg>
  );
}
