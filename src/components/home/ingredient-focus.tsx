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
 * Reads down one path rather than across three equal columns. The statement
 * holds the left; the right runs from the formula itself to what is in it. The
 * photograph carries the full width of that column and runs off the right edge
 * of the page, so it anchors the composition instead of sitting beneath the
 * copy as a tile.
 */
export function IngredientFocus() {
  return (
    <section
      aria-labelledby="formulation-heading"
      className="reveal overflow-hidden bg-shell"
    >
      <Container className="py-24 md:py-32">
        <div className="grid gap-x-12 gap-y-14 lg:grid-cols-12">
          {/* Runs the height of the column so the glossary link anchors its foot
              rather than leaving the statement stranded at the top. */}
          <div className="flex flex-col lg:col-span-4">
            <Eyebrow className="mb-6">Formulation</Eyebrow>
            <h2 id="formulation-heading" className="display-lg">
              Two lists,
              <br />
              one formula
            </h2>
            <span className="rule-copper mt-8" />
            <p className="mt-8 max-w-sm leading-relaxed text-ink-soft">
              INYVA ingredient lists run long. The actives are named on the front of
              every pack; the botanicals sit further down the declaration. Both are set
              out in full on every product page.
            </p>

            <div className="mt-10 lg:mt-auto lg:pt-16">
              <TextLink href="/ingredients" className="text-copper">
                The full glossary
              </TextLink>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="relative aspect-3/2 w-full overflow-hidden bg-cream lg:[width:calc(100%+var(--bleed))]">
              <Image
                src="/editorial/texture.webp"
                alt="Himalayan Harmony body scrub dispensed from the tube"
                fill
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 md:mt-16">
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
          </div>
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
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="font-display text-xl leading-snug text-ink md:text-2xl"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
