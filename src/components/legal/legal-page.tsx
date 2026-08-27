import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/primitives";

export type LegalSection = { heading: string; body: ReactNode };

/**
 * The date all four policies took effect. One constant rather than four
 * literals, so a revision moves them together and none is left behind.
 */
export const policyEffectiveDate = "27 February 2025";

/**
 * The shared frame for the policy pages. It borrows the questions page's
 * opening — eyebrow, display heading, a short statement set beside it — so the
 * legal pages read as part of the site rather than as something bolted on.
 * The measure is held narrow: these are pages to be read, not scanned.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="pb-12 pt-16 md:pb-16 md:pt-24">
        <Container>
          <Eyebrow className="mb-7">{eyebrow}</Eyebrow>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <h1 className="display-hero lg:col-span-7">{title}</h1>
            <div className="max-w-md self-end lg:col-span-5">
              <p className="text-lg leading-relaxed text-ink-soft">{intro}</p>
              <p className="eyebrow mt-6 text-muted">
                Effective {policyEffectiveDate}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-14 md:py-20">
          <div className="max-w-2xl">
            {sections.map(({ heading, body }, i) => (
              <section
                key={heading}
                className={
                  i === 0 ? "" : "mt-12 border-t border-line pt-12 md:mt-14 md:pt-14"
                }
              >
                <h2 className="font-display text-2xl leading-snug text-ink md:text-[1.75rem]">
                  {heading}
                </h2>
                <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">{body}</div>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

/** A list within a policy section, set to match the surrounding prose. */
export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 pl-5">
      {items.map((item) => (
        <li key={item} className="list-disc marker:text-copper-warm">
          {item}
        </li>
      ))}
    </ul>
  );
}
