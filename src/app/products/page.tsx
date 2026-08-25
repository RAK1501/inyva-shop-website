import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/products/product-card";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { categories, type CategorySlug } from "@/data/categories";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "Fourteen INYVA formulations across cleansers, masks and scrubs, serums and creams, and body care, each with its full ingredient list and directions.",
};

const isCategory = (value: unknown): value is CategorySlug =>
  categories.some((c) => c.slug === value);

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = isCategory(category) ? category : null;

  const all = getAllProducts();
  const shown = active ? all.filter((p) => p.category === active) : all;
  const activeCategory = active ? categories.find((c) => c.slug === active)! : null;

  return (
    <>
      <section className="border-b border-line pb-12 pt-16 md:pb-16 md:pt-24">
        <Container>
          <Eyebrow className="mb-6">The Collection</Eyebrow>
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <h1 className="display-lg md:col-span-7">
              {activeCategory ? activeCategory.name : "Fourteen formulations"}
            </h1>
            <p className="max-w-md text-muted md:col-span-5">
              {activeCategory
                ? activeCategory.description
                : "Every product carries its complete ingredient list and the directions printed on its pack."}
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-8 md:py-10">
        <nav aria-label="Filter by category">
          <ul className="-mx-1 flex flex-wrap items-center gap-x-1 gap-y-2">
            <FilterLink href="/products" active={!active} label={`All (${all.length})`} />
            {categories.map((c) => {
              const count = all.filter((p) => p.category === c.slug).length;
              return (
                <FilterLink
                  key={c.slug}
                  href={`/products?category=${c.slug}`}
                  active={active === c.slug}
                  label={`${c.name} (${count})`}
                />
              );
            })}
          </ul>
        </nav>
      </Container>

      <Container className="pb-24 md:pb-32">
        <ul className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {shown.map((product, i) => (
            <li key={product.slug} className="reveal">
              <ProductCard product={product} priority={i < 4} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

function FilterLink({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <li>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={`eyebrow inline-flex items-center px-3 py-2.5 transition-colors duration-300 sm:px-4 ${
          active ? "bg-ink text-cream" : "text-muted hover:text-ink"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}
