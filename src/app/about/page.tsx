import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { packMarks } from "@/data/site";

export const metadata: Metadata = {
  title: "About INYVA",
  description:
    "INYVA was built on a single idea: that nature's wisdom and scientific innovation belong in the same formula. Our story, our philosophy and what goes on every pack.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-16 pt-16 md:pb-24 md:pt-24">
        <Container>
          <Eyebrow className="mb-7">About INYVA</Eyebrow>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <h1 className="display-hero lg:col-span-7">
              Two traditions,
              <br />
              <span className="text-copper">one formula</span>
            </h1>
            <p className="max-w-md self-end text-lg leading-relaxed text-ink-soft lg:col-span-5">
              INYVA began with a conviction that radiant, healthy skin sits at the
              intersection of nature&rsquo;s wisdom and scientific innovation — and that a
              formula should not have to choose between the two.
            </p>
          </div>
        </Container>
      </section>

      <section className="reveal">
        <Container>
          <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 md:gap-6">
            {[
              {
                src: "/editorial/about-1.webp",
                alt: "INYVA Queen's Time Reverse cream beside its carton",
              },
              {
                src: "/editorial/about-2.webp",
                alt: "INYVA Elixir Radiance dry beauty oil beside its carton",
              },
              {
                src: "/editorial/about-3.webp",
                alt: "INYVA Sheer Glow exfoliating scrub beside its carton",
              },
            ].map((image, i) => (
              <li
                key={image.src}
                className="relative aspect-4/5 w-[68vw] shrink-0 snap-start overflow-hidden bg-shell sm:w-auto"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 31vw, 68vw"
                  priority={i === 0}
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="story-heading" className="reveal">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Our story" title="Built to break the mould" />
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-7">
              <p>
                INYVA was founded by a team carrying more than thirty years of combined
                experience across beauty and personal care — long enough to know what the
                category does well, and where it repeats itself.
              </p>
              <p>
                The line began with a commitment to lead rather than follow, harnessing the
                potential of ingredients like peptides, collagen, hyaluronic acid,
                niacinamide, natural omega and salicylic acid. Integrating those
                scientifically backed actives with the healing properties of botanicals is
                the whole proposition.
              </p>
              <p>
                Every product is made in India, in the Himalayas, and carries its full
                ingredient list on the pack and on this site.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="philosophy-heading" className="bg-ink text-cream/75">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Eyebrow tone="cream" className="mb-6">
                Our philosophy
              </Eyebrow>
              <h2 id="philosophy-heading" className="display-lg text-cream">
                Results without compromise
              </h2>
              <span className="rule-copper mt-8" />
            </div>
            <div className="space-y-6 text-lg leading-relaxed lg:col-span-7">
              <p>
                Each product is a composition of botanical extracts and scientifically
                validated ingredients, designed to nourish, rejuvenate and transform the
                skin — without giving up natural integrity to do it.
              </p>
              <p>
                We believe in transparency, sustainability and efficacy. Formulas are
                crafted so that every ingredient serves a purpose, and ingredients are
                sourced to be both effective and ethically obtained.
              </p>
              <p className="text-cream/60">
                INYVA products are PETA certified vegan and are not tested on animals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="gap-heading" className="reveal">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="The gap" title="What we set out to fix" />
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-7">
              <p>
                The skincare market often falls short of blending nature&rsquo;s healing
                elements with scientific efficacy, leaving a choice between products that
                respect the skin&rsquo;s natural balance and products that are grounded in
                research.
              </p>
              <p>
                INYVA exists to close that gap — a line built around collagen-boosting
                ingredients like hyaluronic acid, niacinamide, peptides, omega and
                salicylic acid, formulated so that they rejuvenate and nourish at once.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="pack-heading" className="reveal bg-shell">
        <Container className="py-20 md:py-24">
          <h2 id="pack-heading" className="display-md">
            On every pack
          </h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line-strong pt-10 md:grid-cols-4">
            {packMarks.map((mark) => (
              <li key={mark}>
                <p className="font-display text-xl text-ink">{mark}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-xl text-muted">
            Alongside the full INCI list, a 12-month period-after-opening mark, and the
            directions printed for each individual formula.
          </p>
        </Container>
      </section>

      <section className="reveal">
        <Container className="py-24 text-center md:py-32">
          <h2 className="display-lg mx-auto max-w-xl">See how it comes together</h2>
          <div className="mt-10">
            <Button href="/products">Explore the collection</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
