/**
 * The ingredient glossary.
 *
 * Every entry has to clear two bars: the ingredient must appear in at least one
 * of the fourteen products' declarations, and what it does must be traceable to
 * the brochure or to the packaging. Nothing here is written from general
 * knowledge — where a source says nothing, there is no entry.
 *
 * `inci` lists the names to match against a product's ingredient declaration,
 * so "found in" counts are computed rather than maintained by hand.
 */

export type IngredientGroup = "actives" | "botanicals" | "oils";

export type Ingredient = {
  name: string;
  group: IngredientGroup;
  /** Names as they appear in the declarations. */
  inci: string[];
  /** Traceable to the brochure or the packaging. */
  what: string;
};

export const ingredientGroups: { slug: IngredientGroup; name: string; note: string }[] = [
  {
    slug: "actives",
    name: "The actives",
    note: "Named on the front of the packs they appear on.",
  },
  {
    slug: "botanicals",
    name: "Botanicals & extracts",
    note: "Mostly Ayurvedic, and mostly further down the declaration.",
  },
  {
    slug: "oils",
    name: "Oils, butters & minerals",
    note: "What carries the rest of the formula.",
  },
];

export const ingredients: Ingredient[] = [
  // ---- actives -------------------------------------------------------------
  {
    name: "Hydrolyzed Collagen",
    group: "actives",
    inci: ["Hydrolyzed Collagen"],
    what: "Works with elastin to reduce the appearance of wrinkles and fine lines.",
  },
  {
    name: "Hydrolyzed Elastin",
    group: "actives",
    inci: ["Hydrolyzed Elastin"],
    what: "Skin-firming, and used to improve elasticity for a more resilient complexion.",
  },
  {
    name: "Hyaluronic Acid",
    group: "actives",
    inci: ["Sodium Hyaluronate"],
    what: "Provides intense hydration, keeping skin plump and smooth.",
  },
  {
    name: "Niacinamide",
    group: "actives",
    inci: ["Niacinamide"],
    what: "Vitamin B3. Strengthens the skin's barrier, improves texture, and diminishes the appearance of pores, redness and fine lines.",
  },
  {
    name: "Peptides",
    group: "actives",
    inci: ["Peptide"],
    what: "A long-standing active in firming formulas, for the look of fine lines and firmness.",
  },
  {
    name: "Salicylic Acid",
    group: "actives",
    inci: ["Salicylic Acid"],
    what: "A BHA, used at under 2%. Gently exfoliates, removing dead skin cells and helping unclog pores.",
  },
  {
    name: "Vitamin E",
    group: "actives",
    inci: ["Tocopheryl Acetate", "Tocopherol"],
    what: "Antioxidant protection, helping skin look replenished and defending against environmental stressors.",
  },
  {
    name: "Panthenol",
    group: "actives",
    inci: ["Panthenol"],
    what: "Pro-vitamin B5, and the vitamin B in the Himalayan Harmony scrub's on-pack claim.",
  },
  {
    name: "Caffeine",
    group: "actives",
    inci: ["Caffeine"],
    what: "Natural lifting properties, used to help decrease puffiness.",
  },
  {
    name: "Glycolic Acid",
    group: "actives",
    inci: ["Glycolic Acid"],
    what: "An AHA, in the charcoal mask alongside the clays.",
  },

  // ---- botanicals ----------------------------------------------------------
  {
    name: "Madder",
    group: "botanicals",
    inci: ["Rubia Cordifolia"],
    what: "Works alongside neem on the look of blemishes and the evenness of skin texture.",
  },
  {
    name: "Neem",
    group: "botanicals",
    inci: ["Azadirachta Indica"],
    what: "A botanical with a long history in skincare, paired here with Madder for clarity.",
  },
  {
    name: "Water Hyssop",
    group: "botanicals",
    inci: ["Bacopa Monnieri"],
    what: "Bacopa. One of the Ayurvedic extracts carried through the range.",
  },
  {
    name: "Emblic",
    group: "botanicals",
    inci: ["Emblica Officinalis"],
    what: "Antioxidant-rich, and one of the oils named on the Elixir Radiance pack.",
  },
  {
    name: "Winter Cherry",
    group: "botanicals",
    inci: ["Withania Somnifera"],
    what: "Among the rare botanicals in the Queen's Time Reverse pair.",
  },
  {
    name: "Wild Asparagus",
    group: "botanicals",
    inci: ["Asparagus Racemosus"],
    what: "Another of the Ayurvedic roots in the Queen's Time Reverse formulas.",
  },
  {
    name: "Centella",
    group: "botanicals",
    inci: ["Centella Asiatica"],
    what: "A long-established skincare botanical, used here for the appearance of firmness and elasticity.",
  },
  {
    name: "Holy Basil",
    group: "botanicals",
    inci: ["Ocimum Tenuiflorum"],
    what: "In the detox mask.",
  },
  {
    name: "Green Tea",
    group: "botanicals",
    inci: ["Camellia Sinensis", "Green Tea Extract"],
    what: "Potent antioxidant properties, helping combat environmental stressors.",
  },
  {
    name: "Liquorice",
    group: "botanicals",
    inci: ["Glycyrrhiza Glabra"],
    what: "In the charcoal mask and the Queen's Time Reverse pair.",
  },
  {
    name: "Algae",
    group: "botanicals",
    inci: ["Chlorophytes"],
    what: "Rich in minerals and antioxidants. Clarifies and revitalises while helping skin retain moisture.",
  },
  {
    name: "Aloe Vera",
    group: "botanicals",
    inci: ["Aloe Barbadensis"],
    what: "Through the cleansers, masks and lighter creams.",
  },
  {
    name: "Papaya",
    group: "botanicals",
    inci: ["Carica Papaya"],
    what: "Natural enzymatic properties that gently exfoliate, reducing the appearance of dark spots and uneven tone.",
  },
  {
    name: "Hibiscus",
    group: "botanicals",
    inci: ["Hibiscus Rosa-Sinensis"],
    what: "Rich in AHAs, supporting skin renewal for a smoother complexion.",
  },
  {
    name: "Mulberry",
    group: "botanicals",
    inci: ["Morus Alba"],
    what: "Known for brightening, helping fade dark spots and even out skin tone.",
  },
  {
    name: "Tea Tree",
    group: "botanicals",
    inci: ["Melaleuca Alternifolia"],
    what: "A clarifying botanical, long used on skin that looks congested or uneven.",
  },
  {
    name: "Jasmine",
    group: "botanicals",
    inci: ["Jasminum Officinale"],
    what: "The fragrance of the shower gel, and what gives it its name.",
  },
  {
    name: "Turmeric",
    group: "botanicals",
    inci: ["Curcuma Longa"],
    what: "In the Queen's Time Reverse pair and the slimming oil.",
  },
  {
    name: "Ginger",
    group: "botanicals",
    inci: ["Zingiber Officinale"],
    what: "Named on the Contour Sculpt pack, with clove, black pepper and rosemary.",
  },
  {
    name: "Activated Charcoal",
    group: "botanicals",
    inci: ["Charcoal Powder"],
    what: "Draws out impurities and excess oil.",
  },

  // ---- oils, butters and minerals -----------------------------------------
  {
    name: "Macadamia Oil",
    group: "oils",
    inci: ["Macadamia Ternifolia"],
    what: "Hydration and softness, leaving skin and hair silky smooth.",
  },
  {
    name: "Jojoba Oil",
    group: "oils",
    inci: ["Simmondsia Chinensis"],
    what: "Closely mimics the skin's natural oils, balancing moisture levels.",
  },
  {
    name: "Sweet Almond Oil",
    group: "oils",
    inci: ["Prunus Amygdalus Dulcis"],
    what: "One of the most widely used carriers across the range.",
  },
  {
    name: "Sesame Oil",
    group: "oils",
    inci: ["Sesamum Indicum"],
    what: "The base of the slimming oil and a carrier in the dry oil.",
  },
  {
    name: "Evening Primrose Oil",
    group: "oils",
    inci: ["Oenothera Biennis"],
    what: "Named on the Elixir Radiance pack, with macadamia, Emblic and False Daisy.",
  },
  {
    name: "False Daisy",
    group: "oils",
    inci: ["Eclipta Prostrata"],
    what: "Traditionally a hair oil, and one of the four named on the dry oil's pack.",
  },
  {
    name: "Shea Butter",
    group: "oils",
    inci: ["Butyrospermum Parkii"],
    what: "Deep moisturising and nourishing, for dry and rough skin.",
  },
  {
    name: "Garcinia Butter",
    group: "oils",
    inci: ["Garcinia Indica"],
    what: "Deeply moisturises and nourishes so skin stays soft without feeling greasy.",
  },
  {
    name: "Walnut Shell Powder",
    group: "oils",
    inci: ["Juglans Regia"],
    what: "Finely milled, and the physical exfoliant in both scrubs.",
  },
  {
    name: "Salt",
    group: "oils",
    inci: ["Sodium Chloride"],
    what: "Leads the body scrub's declaration, where it is the exfoliant. Elsewhere in the range it appears far lower down, adjusting the texture of a cleanser.",
  },
  {
    name: "Beeswax",
    group: "oils",
    inci: ["Cera Alba"],
    what: "In four of the richer formulas, and the reason those four carry no vegan mark.",
  },
];
