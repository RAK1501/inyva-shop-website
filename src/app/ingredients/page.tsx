import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { Button, Container, Eyebrow } from "@/components/ui/primitives";
import { ingredientGroups } from "@/data/ingredients";
import { getIngredientEntries } from "@/lib/ingredients";

export const metadata: Metadata = {
  alternates: { canonical: "/ingredients" },
  title: "Ingredient Glossary",
  description:
    "The actives, Ayurvedic botanicals and oils that recur across the INYVA range — what each one is, and which of the fourteen formulas it appears in.",
};

export default function IngredientsPage() {
  const entries = getIngredientEntries();

  return (
    <>
      <section className="pb-12 pt-16 md:pb-16 md:pt-24">
        <Container>
          <Eyebrow className="mb-7">Glossary</Eyebrow>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <h1 className="display-hero lg:col-span-7">
              What&rsquo;s in the
              <br />
              <span className="text-copper">formulas</span>
            </h1>
            <p className="max-w-md self-end text-lg leading-relaxed text-ink-soft lg:col-span-5">
              {entries.length} ingredients that recur across the range, each one shown
              with the products it actually appears in. The complete declaration for any
              product is on its own page.
            </p>
          </div>
        </Container>
      </section>

      {ingredientGroups.map((group, groupIndex) => {
        const groupEntries = entries.filter((e) => e.group === group.slug);
        if (groupEntries.length === 0) return null;

        return (
          <section
            key={group.slug}
            aria-labelledby={`${group.slug}-heading`}
            className={`reveal border-t border-line ${groupIndex % 2 === 1 ? "bg-shell" : ""}`}
          >
            <Container className="py-16 md:py-20">
              <div className="md:flex md:items-baseline md:justify-between md:gap-10">
                <h2 id={`${group.slug}-heading`} className="display-md">
                  {group.name}
                </h2>
                <p className="mt-3 text-muted md:mt-0">{group.note}</p>
              </div>

              <ul className="mt-10 grid gap-x-10 gap-y-9 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
                {groupEntries.map((entry) => (
                  <li key={entry.name} className="border-t border-line-strong pt-5">
                    <h3 className="font-display text-xl text-ink">{entry.name}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                      {entry.what}
                    </p>
                    <p className="mt-3 text-sm text-muted">
                      In{" "}
                      {entry.products.map((product, i) => (
                        <Fragment key={product.slug}>
                          {i > 0 ? ", " : ""}
                          <Link
                            href={`/products/${product.slug}`}
                            className="link-underline text-copper"
                          >
                            {product.shortName ?? product.name}
                          </Link>
                        </Fragment>
                      ))}
                    </p>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}

      <section className="reveal border-t border-line">
        <Container className="py-20 text-center md:py-28">
          <h2 className="display-md mx-auto max-w-xl">
            Every formula, declared in full
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-muted">
            This glossary covers what recurs. Each product page carries its complete
            ingredient declaration, exactly as printed.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/products">View the collection</Button>
            <Button href="/faq" variant="outline">
              Questions
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
