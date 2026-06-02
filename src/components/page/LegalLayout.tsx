import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/page/PageHero";
import { Prose } from "@/components/page/Prose";

export type LegalSection = {
  id: string;
  heading: string;
  body: React.ReactNode;
};

type LegalLayoutProps = {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

/** Long-form legal page: header, sticky table of contents, and prose body. */
export function LegalLayout({ title, intro, updated, sections }: LegalLayoutProps) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={intro} align="left" />

      {/* Template-copy disclaimer */}
      <div className="border-b border-amber-200 bg-amber-50">
        <Container className="py-3">
          <p className="text-p3 text-amber-800">
            <strong>Template notice:</strong> this is placeholder legal copy for
            layout purposes. Replace with text reviewed by qualified legal counsel
            before launch.
          </p>
        </Container>
      </div>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-[240px_1fr]">
          {/* TOC */}
          <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 text-p3 font-bold uppercase tracking-wide text-ink-500">
              On this page
            </p>
            <ul className="flex flex-col gap-2 border-l border-ink-10">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px block border-l-2 border-transparent pl-4 text-p2 text-ink-500 transition-colors hover:border-brand hover:text-ink-900"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content */}
          <div>
            <p className="mb-8 text-p2 text-ink-500">Last updated: {updated}</p>
            <Prose>
              {sections.map((s) => (
                <section key={s.id} id={s.id}>
                  <h2>{s.heading}</h2>
                  {s.body}
                </section>
              ))}
            </Prose>
          </div>
        </Container>
      </section>
    </>
  );
}
