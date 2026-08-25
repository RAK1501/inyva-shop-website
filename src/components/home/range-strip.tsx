import Image from "next/image";
import Link from "next/link";
import { Button, Container, Eyebrow } from "@/components/ui/primitives";
import { getAllProducts } from "@/lib/products";

/**
 * The whole catalogue, full-bleed. Fourteen packs side by side say more about
 * the range than any amount of copy, and it scrolls rather than wrapping so the
 * row keeps reading as one continuous shelf.
 */
export function RangeStrip() {
  const products = getAllProducts();

  return (
    <section aria-labelledby="range-heading" className="reveal overflow-hidden py-20 md:py-28">
      <Container>
        <div className="md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <Eyebrow className="mb-6">The range</Eyebrow>
            <h2 id="range-heading" className="display-lg">
              All fourteen
            </h2>
          </div>
          <p className="mt-5 max-w-sm text-muted md:mt-0 md:text-right">
            Cleansers, weekly masks and scrubs, serums and creams, and body care.
          </p>
        </div>
      </Container>

      <ul className="mt-12 flex snap-x gap-4 overflow-x-auto pb-4 pe-5 md:mt-16 md:gap-6 md:pe-10 [padding-inline-start:max(var(--page-gutter),calc((100vw-var(--page-max))/2+var(--page-gutter)))] [scroll-padding-inline-start:max(var(--page-gutter),calc((100vw-var(--page-max))/2+var(--page-gutter)))]">
        {products.map((product) => (
          <li key={product.slug} className="w-40 shrink-0 snap-start md:w-56">
            <Link href={`/products/${product.slug}`} className="group block">
              <div className="relative aspect-4/5 overflow-hidden bg-shell">
                <Image
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  fill
                  sizes="(min-width: 768px) 14rem, 10rem"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
                />
              </div>
              <h3 className="mt-4 font-display text-base leading-snug text-ink transition-colors duration-300 group-hover:text-copper">
                {product.shortName ?? product.name}
              </h3>
              <p className="mt-0.5 text-sm leading-snug text-muted">{product.subtitle}</p>
            </Link>
          </li>
        ))}
      </ul>

      <Container className="mt-14 text-center md:mt-20">
        <h2 className="display-md mx-auto max-w-xl">
          Every formula, with its ingredients in full
        </h2>
        <div className="mt-9">
          <Button href="/products">View the collection</Button>
        </div>
      </Container>
    </section>
  );
}
