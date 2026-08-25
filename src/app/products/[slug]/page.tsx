import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DetailSection } from "@/components/products/detail-section";
import { ProductCard } from "@/components/products/product-card";
import { ProductGallery } from "@/components/products/product-gallery";
import { JsonLd } from "@/components/seo/json-ld";
import { Container, Eyebrow } from "@/components/ui/primitives";
import {
  fullName,
  getAllProducts,
  getCategory,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";
import { breadcrumbSchema, productSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: fullName(product),
    description: product.shortDescription,
    openGraph: {
      title: `${fullName(product)} | INYVA`,
      description: product.shortDescription,
      images: [{ url: product.images[0].src }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <JsonLd data={breadcrumbSchema(product)} />
      <Container className="pt-8 md:pt-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
            <li>
              <Link href="/products" className="transition-colors hover:text-ink">
                Collection
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/products?category=${category.slug}`}
                className="transition-colors hover:text-ink"
              >
                {category.name}
              </Link>
            </li>
          </ol>
        </nav>
      </Container>

      <article>
        <Container className="pb-20 pt-8 md:pb-28 md:pt-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">
            <div className="lg:col-span-6">
              <div className="lg:sticky lg:top-28">
                <ProductGallery images={product.images} />
              </div>
            </div>

            <div className="lg:col-span-6">
              <Eyebrow className="mb-5">{category.name}</Eyebrow>
              <h1 className="display-lg">{product.name}</h1>
              <p className="mt-3 font-display text-xl text-copper md:text-2xl">
                {product.subtitle}
              </p>

              <p className="mt-7 text-lg leading-relaxed text-ink-soft">
                {product.shortDescription}
              </p>

              <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-y border-line py-6">
                <div>
                  <dt className="eyebrow text-muted">Key actives</dt>
                  <dd className="mt-2 text-sm text-ink-soft">
                    {product.keyActives.join(" · ")}
                  </dd>
                </div>
                {product.size ? (
                  <div>
                    <dt className="eyebrow text-muted">Size</dt>
                    <dd className="mt-2 text-sm text-ink-soft">{product.size}</dd>
                  </div>
                ) : null}
              </dl>

              <div className="mt-10">
                <DetailSection title="About the product" defaultOpen>
                  <p>{product.description}</p>
                </DetailSection>

                <DetailSection title="Benefits">
                  <ul className="space-y-5">
                    {product.benefits.map((b) => (
                      <li key={b.title}>
                        <p className="font-display text-base text-ink">{b.title}</p>
                        <p className="mt-1.5">{b.body}</p>
                      </li>
                    ))}
                  </ul>
                </DetailSection>

                <DetailSection title="How to use">
                  <p>{product.howToUse}</p>
                </DetailSection>

                <DetailSection title="Ingredients">
                  <p className="text-sm leading-relaxed text-muted">{product.ingredients}</p>
                  <p className="mt-4">
                    <Link
                      href="/ingredients"
                      className="link-underline eyebrow inline-flex min-h-11 items-center text-copper"
                    >
                      What these ingredients are
                    </Link>
                  </p>
                </DetailSection>
              </div>

              <div className="mt-10 border-t border-line pt-6">
                <p className="eyebrow text-muted">Printed on the pack</p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {product.marks.map((mark) => (
                    <li key={mark} className="eyebrow text-ink-soft">
                      {mark}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 ? (
        <section aria-labelledby="related-heading" className="border-t border-line">
          <Container className="py-16 md:py-24">
            <h2 id="related-heading" className="display-md">
              More from {category.name}
            </h2>
            <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-14 md:grid-cols-3 md:gap-x-8">
              {related.map((p) => (
                <li key={p.slug}>
                  <ProductCard
                    product={p}
                    sizes="(min-width: 768px) 33vw, 50vw"
                  />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}
