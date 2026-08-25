import { products, type Product } from "@/data/products";
import { categories, type CategorySlug } from "@/data/categories";

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getCategory(slug: CategorySlug) {
  return categories.find((c) => c.slug === slug)!;
}

/** Products in the same category, excluding the one being viewed. */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = products.filter(
    (p) => p.category !== product.category && p.slug !== product.slug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

/** Full display name, e.g. "Queen's Time Reverse — Age Defying Rejuvenating Cream". */
export function fullName(product: Product): string {
  return `${product.name} — ${product.subtitle}`;
}
