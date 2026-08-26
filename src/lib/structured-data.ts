import type { Product } from "@/data/products";
import { contact, site, siteUrl } from "@/data/site";
import { getCategory } from "@/lib/products";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
    logo: `${siteUrl}/brand/inyva-logo-ink.png`,
    description: site.description,
    email: contact.email,
    telephone: contact.phones.map((p) => p.display),
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.offices[0].lines[0],
      addressLocality: "Minneola",
      addressRegion: "FL",
      postalCode: "34755",
      addressCountry: "US",
    },
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} ${product.subtitle}`,
    description: product.shortDescription,
    image: `${siteUrl}${product.images[0].src}`,
    url: `${siteUrl}/products/${product.slug}`,
    sku: product.slug,
    category: getCategory(product.category).name,
    brand: { "@type": "Brand", name: site.name },
    ...(product.size ? { size: product.size } : {}),
    ...(typeof product.priceUsd === "number"
      ? {
          offers: {
            "@type": "Offer",
            price: product.priceUsd,
            priceCurrency: "USD",
            url: `${siteUrl}/products/${product.slug}`,
          },
        }
      : {}),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Key actives",
        value: product.keyActives.join(", "),
      },
      { "@type": "PropertyValue", name: "Ingredients", value: product.ingredients },
    ],
  };
}

export function breadcrumbSchema(product: Product) {
  const category = getCategory(product.category);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Collection", item: `${siteUrl}/products` },
      {
        "@type": "ListItem",
        position: 2,
        name: category.name,
        item: `${siteUrl}/products?category=${category.slug}`,
      },
      { "@type": "ListItem", position: 3, name: `${product.name} ${product.subtitle}` },
    ],
  };
}
