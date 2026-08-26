import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { IngredientIcon } from "./ingredient-icons";

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
  "Madder",
  "Neem",
  "Water Hyssop",
  "Emblic",
  "Winter Cherry",
  "Wild Asparagus",
  "Centella",
  "Holy Basil",
  "Green Tea",
  "Liquorice",
];

/**
 * An ingredient manifesto. The photograph runs to the top and right edges and
 * the statement is held in the left third against the bare ground. Beneath, the
 * two declarations are set as an index — one row each, read across rather than
 * down, so the whole formula is taken in at a glance.
 */
export function IngredientFocus() {
  return (
    <section aria-labelledby="formulation-heading" className="reveal bg-shell">
      <Container className="pt-20 lg:pt-0">
        <div className="grid items-center gap-y-12 lg:grid-cols-12 lg:gap-y-0">
          <div className="lg:col-span-4 lg:py-24 lg:pr-12">
            <Eyebrow>Formulation</Eyebrow>
            <span className="rule-copper mt-5" />
            <h2
              id="formulation-heading"
              className="mt-8 text-[clamp(2.25rem,1.2rem+3vw,3.75rem)] leading-[1.06]"
            >
              Two lists,
              <br />
              one formula
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-ink-soft">
              INYVA ingredient lists run long. The actives are named on the front of
              every pack; the botanicals sit further down the declaration. Both are set
              out in full on every product page.
            </p>
            <Link
              href="/ingredients"
              className="group mt-10 inline-flex flex-col gap-3 text-copper"
            >
              <span className="eyebrow inline-flex items-center gap-3">
                The full glossary
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </span>
              <span className="h-px w-full bg-copper-warm" />
            </Link>
          </div>

          {/*
            Widened by the page bleed so the photograph reaches the viewport
            edge, and framed to its own 3:2 so nothing it was composed with is
            cropped away.
          */}
          <div className="lg:col-span-8 lg:col-start-5 lg:[width:calc(100%+var(--bleed))]">
            {/* No placeholder ground: the section's own colour has to show
                through where the photograph dissolves into it. */}
            <div className="relative aspect-3/2 w-full overflow-hidden lg:image-dissolve-left">
              <Image
                src="/editorial/formulation.webp"
                alt="INYVA Sheer Glow Exfoliating Scrub laid out with emblic, leaves and a swatch of the scrub"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>

      <Container className="pb-20 md:pb-24">
        <IngredientRow
          label="The actives"
          note="Named on the front of the pack."
          items={actives}
        />
        <IngredientRow
          label="The botanicals"
          note="Further down the declaration."
          items={botanicals}
          className="mt-12 md:mt-14"
        />
      </Container>
    </section>
  );
}

/**
 * One declaration, read across. The names sit in a wrapping grid until there is
 * room to give each an equal share of a single line, at which point hairlines
 * divide them the way an index is ruled.
 */
function IngredientRow({
  label,
  note,
  items,
  className = "",
}: {
  label: string;
  note: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={`border-t border-line pt-9 md:pt-11 ${className}`}>
      <div className="grid gap-y-9 md:grid-cols-[9.5rem_1fr] md:gap-x-8 lg:grid-cols-[11rem_1fr] lg:gap-x-10">
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <p className="eyebrow text-ink">{label}</p>
            <p className="eyebrow text-copper">{String(items.length).padStart(2, "0")}</p>
          </div>
          <span className="rule-copper mt-4" />
          <p className="mt-4 text-sm leading-snug text-muted">{note}</p>
        </div>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 md:grid-cols-5 lg:flex lg:gap-0">
          {items.map((item) => (
            <li
              key={item}
              className="flex flex-col items-center px-1 text-center lg:flex-1 lg:border-l lg:border-line lg:px-2 lg:first:border-l-0"
            >
              <IngredientIcon name={item} className="h-7 w-7 text-copper-warm" />
              <span className="mt-3.5 font-display text-[0.95rem] leading-snug text-ink lg:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
