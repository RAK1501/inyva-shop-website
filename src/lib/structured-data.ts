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

/* Prices are reviewed rather than fixed, so the offer carries a validity a
   year out from the build. Google warns on an offer without one, and a date
   that quietly ages is worse than one that moves with each deploy. */
const priceValidUntil = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

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
            /* The range is available to buy; the last step is confirmed by email
               rather than by card, which is a checkout detail rather than a
               stock one. Without this a search engine will not show the price
               at all, which serves nobody. */
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            priceValidUntil,
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 14,
              returnMethod: "https://schema.org/ReturnByMail",
              /* returnFees is deliberately absent. The policy covers postage on
                 a damaged or incorrect item, and says nothing about who pays on
                 an ordinary return, so claiming free returns here would promise
                 something the page beside it does not. */
            },
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
