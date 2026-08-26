import Image from "next/image";
import { Container, Eyebrow, TextLink } from "@/components/ui/primitives";

/** Both lists are drawn from the products' own ingredient declarations. */
const actives = [
  "Hydrolyzed Collagen",
  "Hydrolyzed Elastin",
  "Hyaluronic Acid",
  "Niacinamide",
  "Peptides",
  "Salicylic Acid",
  "Vitamin E",
  "Panthenol",
];

const botanicals = [
  "Manjistha",
  "Neem",
  "Brahmi",
  "Amla",
  "Ashwagandha",
  "Shatavari",
  "Gotu Kola",
  "Tulsi",
  "Green Tea",
  "Liquorice",
];

/**
 * An ingredient manifesto: the statement and a supporting photograph across the
 * top, the two lists given the full width beneath. The type carries the
 * section, so the photograph is kept to an accent rather than a banner.
 */
export function IngredientFocus() {
  return (
    <section aria-labelledby="formulation-heading" className="reveal bg-shell">
      <Container className="py-24 md:py-32">
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-7">Formulation</Eyebrow>
            <h2 id="formulation-heading" className="display-lg">
              Two lists,
              <br />
              one formula
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
              INYVA ingredient lists run long. The actives are named on the front of
              every pack; the botanicals sit further down the declaration. Both are set
              out in full on every product page.
            </p>
            <div className="mt-8">
              <TextLink href="/ingredients" className="text-copper">
                The full glossary
              </TextLink>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden bg-cream lg:ml-auto">
              <Image
                src="/editorial/texture.webp"
                alt="Himalayan Harmony body scrub dispensed from the tube"
                fill
                sizes="(min-width: 1024px) 26vw, (min-width: 640px) 24rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-x-16 gap-y-14 border-t border-line pt-16 sm:grid-cols-2 md:mt-24 md:pt-20">
          <IngredientGroup
            label="The actives"
            note="Named on the front of the pack."
            items={actives}
          />
          <IngredientGroup
            label="The botanicals"
            note="Further down the declaration."
            items={botanicals}
          />
        </div>
      </Container>
    </section>
  );
}

function IngredientGroup({
  label,
  note,
  items,
}: {
  label: string;
  note: string;
  items: string[];
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-4">
        <p className="eyebrow text-ink">{label}</p>
        <p className="eyebrow text-copper">{String(items.length).padStart(2, "0")}</p>
      </div>
      <p className="mt-4 text-sm text-muted">{note}</p>
      <ul className="mt-8 space-y-5">
        {items.map((item) => (
          <li
            key={item}
            className="font-display text-2xl leading-snug text-ink md:text-[1.75rem]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
