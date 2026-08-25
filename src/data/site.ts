export const site = {
  name: "INYVA",
  badge: "Collagen Boost Skincare",
  title: "INYVA — Collagen Boost Skincare",
  description:
    "Ayurvedic botanicals and scientifically backed actives in the same formula. Discover the INYVA collection of cleansers, masks, serums, creams and body care.",
  url: "https://www.inyva-skincare.com",
} as const;

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Every value below is printed on the packaging or in the brochure. */
export const contact = {
  email: "info@inyva.com",
  phones: [
    { display: "+91 99530 54413", href: "+919953054413" },
    { display: "+91 91407 91215", href: "+919140791215" },
  ],
  website: { display: "www.inyva-skincare.com", href: "https://www.inyva-skincare.com" },
  company: "NeuraNest Retail Pvt Ltd",
  address: [
    "3rd Floor, Orchid Centre",
    "Golf Course Road, Sector 53",
    "Gurugram 122002, Haryana",
    "India",
  ],
} as const;

/**
 * Marks carried by all fourteen packs, verified frame by frame in the product
 * photography. "Vegan" is deliberately not here: it appears on most packs but
 * not on Queen's Time Reverse, so it belongs to the individual product.
 */
export const brandMarks = ["Cruelty free", "Paraben free", "Made in India"] as const;
