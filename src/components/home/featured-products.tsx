import { ProductCard } from "@/components/products/product-card";
import { Container, SectionHeading, TextLink } from "@/components/ui/primitives";
import { getFeaturedProducts } from "@/lib/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section aria-labelledby="featured-heading" className="reveal">
      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Selected" title="Four to start with" />
          <TextLink href="/products" className="text-copper">
            All 14 products
          </TextLink>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:mt-16 md:gap-x-7 lg:grid-cols-4">
          {featured.map((product) => (
            <li key={product.slug}>
              <ProductCard
                product={product}
                sizes="(min-width: 1024px) 23vw, 45vw"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
