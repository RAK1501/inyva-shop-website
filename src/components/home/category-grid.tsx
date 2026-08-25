import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { categories } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section aria-labelledby="categories-heading" className="reveal border-t border-line">
      <Container className="py-16 md:py-24">
        <div className="md:flex md:items-end md:justify-between md:gap-10">
          <SectionHeading eyebrow="Four steps" title="Find where to begin" />
          <p className="mt-5 max-w-sm text-muted md:mt-0 md:text-right">
            The range is built as a routine — cleanse, treat weekly, moisturise, and carry
            it through to the body.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-16 md:gap-x-7 lg:grid-cols-4">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link href={`/products?category=${category.slug}`} className="group block">
                <div className="relative aspect-4/5 overflow-hidden bg-shell">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 23vw, 45vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink transition-colors duration-300 group-hover:text-copper md:text-xl">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{category.tagline}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
