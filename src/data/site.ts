/**
 * Where this build is actually served from, used for canonical and Open Graph
 * URLs. Netlify sets URL to the site's primary address, so previews and the
 * production deploy each describe themselves correctly. Set
 * NEXT_PUBLIC_SITE_URL once the brand domain points here.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? "http://localhost:3000";

export const site = {
  name: "INYVA",
  badge: "Collagen Boost Skincare",
  title: "INYVA — Collagen Boost Skincare",
  description:
    "Ayurvedic botanicals and scientifically backed actives in the same formula. Discover the INYVA collection of cleansers, masks, serums, creams and body care.",
  url: siteUrl,
} as const;

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** The company the range is marketed by, and how to reach it. */
export const contact = {
  email: "info@inyva.shop",
  phones: [{ display: "+1 (973) 687-4765", href: "+19736874765" }],
  company: "CommerceV3 Inc",
  offices: [
    {
      label: "Florida",
      lines: ["131 W Washington St #1988", "Minneola, FL 34755", "USA"],
    },
    {
      label: "New York",
      lines: ["110 E 25th St", "New York, NY 10010", "USA"],
    },
  ],
} as const;

/**
 * Marks carried by all fourteen packs, verified frame by frame in the product
 * photography. "Vegan" is deliberately not here: it appears on most packs but
 * not on Queen's Time Reverse, so it belongs to the individual product.
 */
export const brandMarks = ["Cruelty free", "Paraben free"] as const;
