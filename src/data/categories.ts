export const categories = [
  {
    slug: "cleanse",
    name: "Cleanse",
    tagline: "Oils, gels and foams",
    description: "An oil, a gel and a foam for the first step.",
    image: "/editorial/category-cleanse.webp",
    imageAlt: "INYVA Serene Cleanse Himalayan Make-Up Remover Oil",
  },
  {
    slug: "mask-exfoliate",
    name: "Mask & Exfoliate",
    tagline: "Weekly resets",
    description: "Masks and a scrub, for two or three times a week.",
    image: "/editorial/category-mask.webp",
    imageAlt: "INYVA Cleanse Core Detox Face Mask",
  },
  {
    slug: "moisturise",
    name: "Serums & Creams",
    tagline: "Day and night",
    description: "Collagen, elastin and hyaluronic acid, alongside botanicals.",
    image: "/editorial/category-moisturise.webp",
    imageAlt: "INYVA Starlite Radiance Night Cream",
  },
  {
    slug: "body",
    name: "Body & Bath",
    tagline: "Oils, scrubs and gels",
    description: "Two oils, a scrub and a shower gel.",
    image: "/editorial/category-body.webp",
    imageAlt: "INYVA Elixir Radiance 3-in-1 Dry Beauty Oil",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];
