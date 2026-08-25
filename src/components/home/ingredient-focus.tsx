import { Container, Eyebrow } from "@/components/ui/primitives";

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

export function IngredientFocus() {
  return (
    <section aria-labelledby="formulation-heading" className="reveal bg-shell">
      <Container className="py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-6">Formulation</Eyebrow>
            <h2 id="formulation-heading" className="display-lg">
              Two lists, one formula
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-ink-soft">
              INYVA ingredient lists run long. The actives are named on the front of
              every pack; the botanicals sit further down the declaration. Both are set
              out in full on every product page.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-7 lg:gap-16">
            <div>
              <p className="eyebrow border-b border-line-strong pb-4 text-muted">
                The actives
              </p>
              <ul className="mt-6 space-y-3.5">
                {actives.map((item) => (
                  <li key={item} className="font-display text-lg text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow border-b border-line-strong pb-4 text-muted">
                The botanicals
              </p>
              <ul className="mt-6 space-y-3.5">
                {botanicals.map((item) => (
                  <li key={item} className="font-display text-lg text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
