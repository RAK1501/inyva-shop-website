export const categories = [
  {
    slug: "cleanse",
    name: "Cleanse",
    tagline: "Oils, gels and foams",
    description: "Melt away the day without stripping the skin.",
    image: "/editorial/category-cleanse.webp",
    imageAlt: "INYVA Serene Cleanse Himalayan Make-Up Remover Oil",
  },
  {
    slug: "mask-exfoliate",
    name: "Mask & Exfoliate",
    tagline: "Weekly resets",
    description: "Draw out what the day leaves behind.",
    image: "/editorial/category-mask.webp",
    imageAlt: "INYVA Cleanse Core Detox Face Mask",
  },
  {
    slug: "moisturise",
    name: "Serums & Creams",
    tagline: "Day and night",
    description: "Collagen, elastin and hyaluronic acid, held in botanicals.",
    image: "/editorial/category-moisturise.webp",
    imageAlt: "INYVA Starlite Radiance Night Cream",
  },
  {
    slug: "body",
    name: "Body & Bath",
    tagline: "Oils, scrubs and gels",
    description: "The ritual, extended past the face.",
    image: "/editorial/category-body.webp",
    imageAlt: "INYVA Elixir Radiance 3-in-1 Dry Beauty Oil",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];
