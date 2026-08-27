import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DetailSection } from "@/components/products/detail-section";
import { Button, Container, Eyebrow } from "@/components/ui/primitives";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "Questions",
  description:
    "What is printed on an INYVA pack, which products carry a vegan mark, where they are made, and where to find each full ingredient list.",
};

/**
 * Every answer is traceable to the packaging, the brochure or the ingredient
 * declarations. Where the sources say nothing, there is no entry — which is why
 * there is no guidance here on patch testing, storage or sensitivities.
 */
const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Who markets INYVA?",
    a: (
      <p>
        The range is marketed by {contact.company}, with offices in Florida and New
        York. Every formula&rsquo;s full ingredient declaration is published on its own
        product page.
      </p>
    ),
  },
  {
    q: "Are INYVA products vegan?",
    a: (
      <>
        <p>
          Most of them, but not all — so it is set out product by product rather than
          claimed across the range.
        </p>
        <p className="mt-4">
          Queen&rsquo;s Time Reverse Cream and Serum carry a &ldquo;natural
          actives&rdquo; mark rather than a vegan one; their formulas contain beeswax,
          honey and hydrolyzed sericin. Starlite Radiance Night Cream and Cleanse Core
          Detox Face Mask also contain beeswax.
        </p>
        <p className="mt-4">
          Each product page lists the marks printed on that product&rsquo;s own pack.
        </p>
      </>
    ),
  },
  {
    q: "Are they tested on animals?",
    a: (
      <p>
        No. All fourteen packs carry a cruelty-free mark, and the brochure states that
        INYVA products are not tested on animals.
      </p>
    ),
  },
  {
    q: "Do they contain parabens?",
    a: (
      <p>
        No. Every pack carries a paraben-free mark, and no paraben appears in any of the
        fourteen ingredient declarations published on this site.
      </p>
    ),
  },
  {
    q: "How long does a product last once opened?",
    a: (
      <p>
        Twelve months. Every pack carries the 12M period-after-opening symbol, and a
        best-before date is printed on the individual pack.
      </p>
    ),
  },
  {
    q: "Where can I see the full ingredient list?",
    a: (
      <p>
        On each product&rsquo;s own page, under Ingredients — reproduced in full, exactly
        as it appears in the product&rsquo;s ingredient declaration. The glossary covers
        the ingredients that recur across the range.
      </p>
    ),
  },
  {
    q: "How do I use a particular product?",
    a: (
      <p>
        Each product page carries the directions printed on that product&rsquo;s own
        carton or tube, under How to use. They differ — the masks are used two or three
        times a week, the creams daily.
      </p>
    ),
  },
  {
    q: "Which skin types are they for?",
    a: (
      <p>
        The brochure describes most of the range as suitable for all skin types,
        including sensitive skin. What is claimed for each formula is set out under
        Benefits on its own page.
      </p>
    ),
  },
  {
    q: "How do I get in touch?",
    a: (
      <p>
        By email at{" "}
        <a href={`mailto:${contact.email}`} className="link-underline text-copper">
          {contact.email}
        </a>
        , or by phone on {contact.phones.map((p) => p.display).join(" or ")}.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="pb-12 pt-16 md:pb-16 md:pt-24">
        <Container>
          <Eyebrow className="mb-7">Questions</Eyebrow>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <h1 className="display-hero lg:col-span-7">Good to know</h1>
            <p className="max-w-md self-end text-lg leading-relaxed text-ink-soft lg:col-span-5">
              What is printed on the packs, and what is in the formulas. Anything more
              specific is on the individual product page.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-10 md:py-14">
          <div className="max-w-3xl">
            {faqs.map((faq, i) => (
              <DetailSection key={faq.q} title={faq.q} defaultOpen={i === 0}>
                {faq.a}
              </DetailSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="reveal">
        <Container className="py-20 text-center md:py-28">
          <h2 className="display-md mx-auto max-w-lg">
            Everything else is on the product pages
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/products">View the collection</Button>
            <Button href="/ingredients" variant="outline">
              Ingredient glossary
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
