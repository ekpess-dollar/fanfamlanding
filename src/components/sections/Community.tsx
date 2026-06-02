import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Placeholder } from "@/components/ui/Placeholder";

/**
 * "Who it's for" — humanising section. Each tile is a real person using FAN FAM.
 * Swap each Placeholder for a portrait at the noted dimensions.
 */
const people = [
  { role: "Musicians", aspect: "aspect-[3/4]", label: "Musician portrait 600×800 — performing / with instrument" },
  { role: "Streamers", aspect: "aspect-square", label: "Streamer portrait 600×600 — at desk, headset, smiling" },
  { role: "Coaches", aspect: "aspect-square", label: "Fitness coach 600×600 — mid-session, energetic" },
  { role: "Artists", aspect: "aspect-[3/4]", label: "Visual artist 600×800 — in studio with work" },
  { role: "Models", aspect: "aspect-[3/4]", label: "Lifestyle creator 600×800 — candid, natural light" },
  { role: "Chefs", aspect: "aspect-square", label: "Food creator 600×600 — cooking, plating a dish" },
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
          {people.map((p) => (
            <li key={p.role} className="group relative overflow-hidden rounded-md">
              <Placeholder
                kind="image"
                label={p.label}
                className={`w-full ${p.aspect}`}
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/70 to-transparent p-3 text-p2 font-semibold text-white">
                {p.role}
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
