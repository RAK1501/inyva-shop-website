/** The live brand domain. Every other address the site runs on is staging. */
export const productionUrl = "https://www.inyva.shop";

/**
 * Where this build is actually served from, used for canonical, sitemap and
 * Open Graph URLs. NEXT_PUBLIC_SITE_URL wins where it is set; Netlify sets URL
 * on its own deploys, so staging describes itself rather than production; and
 * a production build with neither falls back to the brand domain rather than
 * to localhost, so a missing variable cannot publish a broken canonical.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  (process.env.NODE_ENV === "production" ? productionUrl : "http://localhost:3000");

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

/** Policy pages. Kept out of the primary nav, always reachable from the foot. */
export const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/shipping", label: "Shipping Policy" },
  { href: "/returns", label: "Returns & Refunds" },
  { href: "/accessibility", label: "Accessibility" },
] as const;

/** The company the range is marketed by, and how to reach it. */
export const contact = {
  email: "info@inyva.shop",
  phones: [{ display: "+1 (917) 499-4303", href: "+19174994303" }],
  company: "INYVA SHOP",
  offices: [
    {
      label: "Florida",
      lines: ["135 W Washington St #1988", "Minneola, FL 34755", "USA"],
    },
  ],
} as const;

/**
 * Marks carried by all fourteen packs, verified frame by frame in the product
 * photography. "Vegan" is deliberately not here: it appears on most packs but
 * not on Queen's Time Reverse, so it belongs to the individual product.
 */
export const brandMarks = ["Cruelty free", "Paraben free"] as const;
