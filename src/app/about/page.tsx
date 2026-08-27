import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui/primitives";
import { brandMarks } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description:
    "INYVA was built on a single idea: that nature's wisdom and scientific innovation belong in the same formula. Our story, our philosophy and what goes on every pack.",
};

/**
 * What the fourteen packs carry, each with the one line that describes it.
 * The first two read from the shared marks, so the footer and this list can
 * never drift apart.
 */
const packDetails = [
  {
    title: brandMarks[0],
    note: "Marked on all fourteen packs. INYVA products are not tested on animals.",
  },
  {
    title: brandMarks[1],
    note: "Marked on all fourteen packs, alongside the rest of the declaration.",
  },
  {
    title: "The full ingredient list",
    note: "Printed in full on the pack, and published on the product's own page.",
  },
  {
    title: "Period after opening",
    note: "The open-jar mark, showing twelve months from the day it is opened.",
  },
  {
    title: "How to use",
    note: "The directions, printed for each individual formula rather than the range.",
  },
  {
    title: "Net contents",
    note: "The size in millilitres and fluid ounces, on the front of every pack.",
  },
];

const team = [
  {
    name: "Aarohi Mehta",
    role: "Head of Operations",
    image: "/leadership/aarohi-mehta.webp",
    bio: "Aarohi oversees day-to-day operations and helps ensure every part of the INYVA experience runs seamlessly, from internal processes to the journey behind each product.",
  },
  {
    name: "Olivia Bennett",
    role: "Head of Customer Experience",
    image: "/leadership/olivia-bennett-v2.webp",
    bio: "Olivia focuses on creating a thoughtful and seamless customer experience, helping ensure every interaction with INYVA reflects the care and attention behind the brand.",
  },
  {
    name: "Greg Thomson",
    role: "Director of Product Development",
    image: "/leadership/greg.webp",
    bio: "Greg leads product development at INYVA, bringing together thoughtful formulation, innovation, and a commitment to creating effective skincare experiences.",
  },
];

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
                experience across beauty and personal care.
              </p>
              <p>
                The line began with a commitment to lead rather than follow, harnessing the
                potential of ingredients like peptides, collagen, hyaluronic acid,
                niacinamide, natural omega and salicylic acid. Integrating those
                scientifically backed actives with the healing properties of botanicals is
                the proposition.
              </p>
              <p>
                Every product carries its full ingredient list on the pack and on this
                site.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="leadership-heading" className="reveal border-t border-line">
        <Container className="py-20 md:py-28">
          <Eyebrow className="mb-6">Leadership</Eyebrow>
          <h2 id="leadership-heading" className="display-lg">
            The team
          </h2>

          {/* The two officers lead the section; the wider setting is theirs. */}
          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-20 md:mt-16">
            <div className="lg:col-span-4">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden bg-shell">
                <Image
                  src="/leadership/rahul.webp"
                  alt="Rahul Amarendra, Chief Executive Officer of INYVA SHOP"
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 24rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h3 className="display-lg">Rahul Amarendra</h3>
              <p className="eyebrow mt-5 text-copper">
                Chief Executive Officer, INYVA SHOP
              </p>
              <span className="rule-copper mt-7" />
              <p className="mt-8 text-lg leading-relaxed text-ink-soft">
                An IIM Ahmedabad and IIT Delhi graduate and an operator with twenty years
                of experience, Rahul Amarendra leads INYVA SHOP. His focus is on
                growing the range&rsquo;s reach, on the customer
                relationships that sustain it, and on the operating discipline behind
                both.
              </p>
            </div>
          </div>


          {/* Mirrored, so two wide profiles in a row do not read as a column. */}
          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-20 md:mt-20">
            <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden bg-shell lg:ml-auto">
                <Image
                  src="/leadership/david.webp"
                  alt="David Bonthrone, Vice President of Sales at INYVA SHOP"
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 24rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
              <h3 className="display-lg">David Bonthrone</h3>
              <p className="eyebrow mt-5 text-copper">Vice President of Sales, INYVA SHOP</p>
              <span className="rule-copper mt-7" />
              <p className="mt-8 text-lg leading-relaxed text-ink-soft">
                A sales leader with 30+ years of experience building creative and media
                solutions for brands, agencies, and startups. Via an extensive
                network, David has the uncanny ability to uncover and engage with decision
                makers, influencers, and buyers. He thrives on building strategic
                relationships and driving new business growth.
              </p>
            </div>
          </div>

          <ul className="mt-20 grid gap-x-8 gap-y-14 border-t border-line pt-16 sm:grid-cols-2 lg:grid-cols-3 md:mt-24 md:pt-20">
            {team.map((person) => (
              <li key={person.name}>
                <div className="relative aspect-square w-full overflow-hidden bg-shell">
                  <Image
                    src={person.image}
                    alt={`${person.name}, ${person.role}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-7 font-display text-2xl text-ink">{person.name}</h3>
                <p className="eyebrow mt-3 text-copper">{person.role}</p>
                <span className="rule-copper mt-5" />
                <p className="mt-5 leading-relaxed text-ink-soft">{person.bio}</p>
              </li>
            ))}
          </ul>
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
                INYVA products are not tested on animals. Every pack carries a
                cruelty-free mark, and most also carry a vegan mark — though not all of
                them, so it is set out product by product.
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
          <ul className="mt-10 grid gap-x-10 gap-y-10 border-t border-line-strong pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {packDetails.map(({ title, note }) => (
              <li key={title}>
                <p className="font-display text-xl text-ink">{title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-12 max-w-xl text-sm leading-relaxed text-muted">
            A vegan mark appears on most of the range, and is listed on each
            product&rsquo;s own page.
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
