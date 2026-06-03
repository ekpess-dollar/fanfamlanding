import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";

/**
 * "Who it's for" — humanising section. Real creator portraits exported from the
 * FAN FAM Figma design (node 10006:4663), with the source's "NAME * ROLE"
 * monospace caption pill. `pos` frames each face within the portrait crop.
 */
const people = [
  { src: "/images/people/creator-podcaster.jpg", name: "Marcus", role: "Podcaster", pos: "object-top", alt: "A podcaster recording at his laptop with a studio microphone" },
  { src: "/images/people/creator-sculptor.jpg", name: "Maryann", role: "Sculptor", pos: "object-top", alt: "A sculptor shaping a clay bust in her studio" },
  { src: "/images/people/creator-vlogger.jpg", name: "Tobi", role: "Vlogger", pos: "object-top", alt: "A vlogger filming himself on a phone gimbal at home" },
  { src: "/images/people/creator-streamer.jpg", name: "Elena", role: "Streamer", pos: "object-center", alt: "A creator taking a selfie under studio lighting" },
  { src: "/images/people/creator-coach.jpg", name: "Dembe", role: "Fitness coach", pos: "object-top", alt: "A fitness coach standing confidently outdoors" },
  { src: "/images/people/creator-traveler.jpg", name: "Aisha", role: "Travel creator", pos: "object-center", alt: "A travel creator relaxing in a natural hot spring overlooking mountains" },
];

export function Community() {
  return (
    <section id="community" className="scroll-mt-20 bg-brand-100 py-20 sm:py-section">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Who it's for"
          title="A home for every kind of creator"
          description="From musicians to coaches to everyday storytellers — FAN FAM is built for people who want to share what they love and get paid for it."
        />

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {people.map((p, i) => (
            <li key={p.name} className="group relative overflow-hidden rounded-[20px]">
              <Media
                src={p.src}
                alt={p.alt}
                width={610}
                height={766}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                className={`aspect-[3/4] object-cover ${p.pos} transition-transform duration-500 group-hover:scale-105`}
              />
              {/* Figma-style caption pill — alternates top/bottom like the source */}
              <span
                className={`absolute left-3 flex items-center rounded-full bg-white px-3 py-2 font-mono text-[11px] uppercase leading-none tracking-[-0.12px] text-[#121212] shadow-card ${
                  i % 2 === 0 ? "bottom-3" : "top-3"
                }`}
              >
                {p.name} <span className="mx-1 text-brand">✳</span> {p.role}
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto max-w-2xl text-center text-p2 text-ink-500">
          Join a global community of <strong className="text-ink-900">12,000+</strong>{" "}
          creators and millions of fans who show up every day.
        </p>
      </Container>
    </section>
  );
}
