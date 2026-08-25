import type { CategorySlug } from "./categories";

export type ProductImage = { src: string; alt: string };

export type Product = {
  /** Name as printed on the pack. */
  name: string;
  /** Descriptor line as printed on the pack. */
  subtitle: string;
  /**
   * Used where a product is listed by name alone. Only needed where two
   * products share a name, as the Queen's Time Reverse pair do.
   */
  shortName?: string;
  slug: string;
  category: CategorySlug;
  /** Net content, included only where legible on the packaging. */
  size?: string;
  /** Retail price in whole US dollars. */
  priceUsd?: number;
  /** Actives listed on the pack front. */
  keyActives: string[];
  /**
   * The claim icons printed on this product's own pack, read from the
   * photography. Not a shared constant: the set genuinely varies, and a
   * vegan mark is omitted where the ingredient list contradicts it.
   */
  marks: string[];
  shortDescription: string;
  description: string;
  benefits: { title: string; body: string }[];
  /** Verbatim from the carton or tube. */
  howToUse: string;
  /** Verbatim from the updated ingredients document. */
  ingredients: string;
  images: ProductImage[];
  featured?: boolean;
};

const img = (slug: string, file: string, alt: string): ProductImage => ({
  src: `/products/${slug}/${file}.webp`,
  alt,
});

export const products: Product[] = [
  {
    name: "Queen's Time Reverse",
    subtitle: "Age Defying Rejuvenating Cream",
    shortName: "Queen's Time Reverse Cream",
    slug: "queens-time-reverse-anti-aging-cream",
    category: "moisturise",
    size: "50 ml / 1.69 fl.oz.",
    priceUsd: 24,
    keyActives: ["Hydrolyzed Collagen", "Hydrolyzed Elastin", "Hyaluronic Acid"],
    marks: ["Natural actives", "Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "A cream built on hydrolyzed collagen, elastin and hyaluronic acid, carried in a long list of Ayurvedic botanicals.",
    description:
      "Hydrolyzed collagen and elastin sit high in this formula, alongside sodium hyaluronate and glycerin. Behind them is a long bench of Ayurvedic extracts — Ashwagandha, Shatavari, Brahmi, Amla, Ginseng, Liquorice and Kigelia among them. The pack directs it onto face and neck after cleansing, and to let it absorb before anything else goes on.",
    benefits: [
      {
        title: "Advanced anti-aging formula",
        body: "Crafted with hydrolyzed collagen and elastin to significantly reduce the appearance of wrinkles and fine lines.",
      },
      {
        title: "Deep hydration with hyaluronic acid",
        body: "Provides intense hydration, keeping skin plump, smooth and radiantly youthful.",
      },
      {
        title: "Firmness and elasticity",
        body: "Ingredients designed to enhance skin elasticity and firmness, revealing a more revitalized complexion.",
      },
      {
        title: "Suitable for all skin types",
        body: "Gentle yet effective, and formulated for daily use in any skincare regimen.",
      },
    ],
    howToUse:
      "After cleansing and drying your face, dispense a small amount of Queen's Time Reverse Cream onto fingertips. Massage gently onto face and neck in upward motions. Allow absorption before applying other products.",
    ingredients:
      "Aqua (Water), Cetearyl Alcohol, Dicaprylyl Carbonate, Glycerin, Propanediol, Coco-Caprylate/Caprate, Hydrolyzed Collagen, Caprylic/Capric Triglyceride, Betaine, Cera Alba (Beeswax), Glyceryl Stearate, Saccharum Officinarum (Sugarcane) Extract, Hydrolyzed Elastin, Glyceryl Caprylate, Centella Asiatica Extract, Ginkgo Biloba Nut Extract, Emblica Officinalis Fruit Extract, Cinnamomum Zeylanicum Bark Extract, Bacopa Monnieri Extract, Pueraria Mirifica Root Extract, Asparagus Racemosus Root Extract, Boerhavia Diffusa Root Extract, Withania Somnifera Root Extract, Bambusa Arundinacea Stem Extract, Panax Ginseng Root Extract, Kigelia Africana Bark Extract, Parfum (Fragrance), Sodium Benzoate, Glycyrrhiza Glabra (Licorice) Stem Extract, Cyperus Rotundus Root Extract, Elettaria Cardamomum Fruit Extract, Solanum Xanthocarpum Extract, Ipomoea Digitata Tuber Extract, Stereospermum Suaveolens Root Extract, Leptadenia Reticulata Leaf Extract, Premna Serratifolia Root Extract, Desmodium Gangeticum Root Extract, Convolvulus Arvensis Flower/Leaf/Stem Extract, Sodium Stearoyl Glutamate, Benzyl Alcohol, Helianthus Annuus (Sunflower) Seed Oil, Tribulus Terrestris Fruit Extract, Sida Cordifolia Root Extract, Aegle Marmelos Fruit Extract, Terminalia Chebula Fruit Extract, Piper Longum Fruit Extract, Solanum Indicum Root Extract, Phaseolus Trilobus Seed Extract, Saccharum Spontaneum Extract, Embelia Ribes Fruit Extract, Polygonatum Multiflorum Rhizome/Root Extract, Clerodendron Trichotomum Leaf Extract, Potassium Sorbate, Lactic Acid, Glyceryl Undecylenate, Sodium Gluconate, Allantoin, Xanthan Gum, Butter Extract, Mel (Honey), Hydrolyzed Sericin, Curcuma Longa (Turmeric) Rhizome Extract, Mesua Ferrea Flower Extract, Olea Europaea (Olive) Leaf Extract, Tocopheryl Acetate, Cyperus Scariosus Root Extract, Gmelina Arborea Root Extract, Oroxylum Indicum Root Extract, Leuconostoc/Radish Root Ferment Filtrate, Stearic Acid, Potassium Sorbate, Sodium Hyaluronate, Tocopherol, Linalool, Limonene, Hydroxycitronellal, Alpha-Isomethyl Ionone, Hexyl Cinnamal.",
    images: [
      img(
        "queens-time-reverse-anti-aging-cream",
        "primary",
        "INYVA Queen's Time Reverse Age Defying Rejuvenating Cream in its airless pump bottle",
      ),
      img(
        "queens-time-reverse-anti-aging-cream",
        "gallery-1",
        "Queen's Time Reverse cream standing beside its carton",
      ),
      img(
        "queens-time-reverse-anti-aging-cream",
        "gallery-2",
        "Queen's Time Reverse carton showing the how-to-use panel",
      ),
      img(
        "queens-time-reverse-anti-aging-cream",
        "gallery-3",
        "Reverse of the Queen's Time Reverse cream bottle",
      ),
    ],
    featured: true,
  },
  {
    name: "Queen's Time Reverse",
    subtitle: "Elixir Youth Face Serum",
    shortName: "Queen's Time Reverse Serum",
    slug: "queens-time-reverse-face-serum",
    category: "moisturise",
    size: "50 ml / 1.69 fl.oz.",
    priceUsd: 22,
    keyActives: ["Hydrolyzed Collagen", "Hydrolyzed Elastin", "Hyaluronic Acid"],
    marks: ["Natural actives", "Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "The serum in the Queen's Time Reverse pair — the same actives in a lighter base.",
    description:
      "Hydrolyzed collagen and elastin again sit near the top of the list, here with sodium hyaluronate, arginine, camellia seed oil and moringa seed oil, and the same Ayurvedic bench behind them. The pack directs it onto face and neck after cleansing, before other products.",
    benefits: [
      {
        title: "Revolutionary anti-aging formula",
        body: "Hydrolyzed collagen and elastin are designed to visibly reduce signs of aging and rejuvenate the skin.",
      },
      {
        title: "Deep hydration with hyaluronic acid",
        body: "Enriched with hyaluronic acid to plump and smooth the skin, diminishing fine lines and wrinkles.",
      },
      {
        title: "Enhanced elasticity",
        body: "The skin-firming properties of elastin improve elasticity for a more youthful, resilient complexion.",
      },
      {
        title: "Safe for all skin types",
        body: "Formulated for all skin types, including sensitive skin. Gentle yet powerful, and free from harsh chemicals.",
      },
    ],
    howToUse:
      "After cleansing and drying your face, dispense a small amount of serum onto fingertips. Massage gently onto face and neck in upward motions. Allow absorption before applying other products.",
    ingredients:
      "Aqua (Water), Glycerin, Caprylic/Capric Triglyceride, Hydrolyzed Collagen, Hydrolyzed Elastin, Glyceryl Stearate, Saccharum Officinarum (Sugarcane) Extract, Propanediol, Cera Alba (Beeswax), Dicaprylyl Carbonate, Glyceryl Caprylate, Ginkgo Biloba Nut Extract, Centella Asiatica Extract, Emblica Officinalis Fruit Extract, Cinnamomum Zeylanicum Bark Extract, Bacopa Monnieri Extract, Pueraria Mirifica Root Extract, Asparagus Racemosus Root Extract, Boerhavia Diffusa Root Extract, Withania Somnifera Root Extract, Bambusa Arundinacea Stem Extract, Panax Ginseng Root Extract, Kigelia Africana Bark Extract, Cetyl Alcohol, Parfum (Fragrance), Acrylates Crosspolymer, Coco-Caprylate/Caprate, Sodium Benzoate, Glycyrrhiza Glabra (Licorice) Stem Extract, Cyperus Rotundus Root Extract, Elettaria Cardamomum Fruit Extract, Solanum Xanthocarpum Extract, Ipomoea Digitata Tuber Extract, Stereospermum Suaveolens Root Extract, Solanum Indicum Root Extract, Leptadenia Reticulata Leaf Extract, Premna Serratifolia Root Extract, Desmodium Gangeticum Root Extract, Convolvulus Arvensis Flower/Leaf/Stem Extract, Benzyl Alcohol, Arginine, Helianthus Annuus (Sunflower) Seed Oil, Sodium Hyaluronate, Camellia Japonica Seed Oil, Sodium Stearoyl Glutamate, Tribulus Terrestris Fruit Extract, Sida Cordifolia Root Extract, Aegle Marmelos Fruit Extract, Terminalia Chebula Fruit Extract, Piper Longum Fruit Extract, Phaseolus Trilobus Seed Extract, Saccharum Spontaneum Extract, Embelia Ribes Fruit Extract, Polygonatum Multiflorum Rhizome/Root Extract, Clerodendron Trichotomum Leaf Extract, Potassium Sorbate, Glyceryl Undecylenate, Sodium Gluconate, Moringa Oleifera Seed Oil, Shorea Robusta Seed Butter, Butter Extract, Sodium PCA, Curcuma Longa (Turmeric) Rhizome Extract, Mesua Ferrea Flower Extract, Olea Europaea (Olive) Leaf Extract, Cyperus Scariosus Root Extract, Gmelina Arborea Root Extract, Oroxylum Indicum Root Extract, Leuconostoc/Radish Root Ferment Filtrate, Stearic Acid, Potassium Sorbate, Hydrolyzed Sericin, Mel (Honey), Tocopherol, Linalool, Limonene, Hydroxycitronellal, Alpha-Isomethyl Ionone, Hexyl Cinnamal.",
    images: [
      img(
        "queens-time-reverse-face-serum",
        "primary",
        "INYVA Queen's Time Reverse Elixir Youth Face Serum in its airless pump bottle",
      ),
      img(
        "queens-time-reverse-face-serum",
        "gallery-1",
        "Queen's Time Reverse serum standing beside its carton",
      ),
      img(
        "queens-time-reverse-face-serum",
        "gallery-2",
        "Queen's Time Reverse serum carton showing the how-to-use panel",
      ),
      img(
        "queens-time-reverse-face-serum",
        "gallery-3",
        "Reverse of the Queen's Time Reverse serum bottle",
      ),
    ],
    featured: true,
  },
  {
    name: "Starlite Radiance",
    subtitle: "Night Cream",
    slug: "starlite-radiance-night-cream",
    category: "moisturise",
    size: "100 ml / 3.38 fl.oz.",
    priceUsd: 18,
    keyActives: ["Vitamin E", "Hyaluronic Acid", "Algae Extract"],
    marks: ["Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "A night cream with hyaluronic acid, vitamin E and algae extract.",
    description:
      "Formulated for the end of the evening. Sodium hyaluronate and tocopheryl acetate sit alongside cocoa and shea butters, rice bran and sweet almond oils, with Manjistha, lotus, orange flower and papaya extracts further down the list. The pack directs it onto the face before bed, and to let it absorb before sleeping.",
    benefits: [
      {
        title: "Intensive hydration",
        body: "Deeply hydrates with hyaluronic acid, leaving skin refreshed and revitalized by morning.",
      },
      {
        title: "Nourishing vitamin E",
        body: "Enriched with vitamin E to enhance the skin's natural glow and softness.",
      },
      {
        title: "Algae extract",
        body: "Provides essential nutrients and antioxidants, promoting healthy and radiant skin.",
      },
      {
        title: "Nourishing, not heavy",
        body: "Designed for maximum nourishment without a heavy feel, absorbing quickly on all skin types including sensitive skin.",
      },
    ],
    howToUse:
      "Before bed, cleanse skin. Take a small amount of cream onto fingertips, gently massage onto face in upward motions. Allow absorption before sleeping.",
    ingredients:
      "Aqua (Water), Caprylic/Capric Triglyceride, Cetearyl Alcohol, Glycerin, Glyceryl Stearate, Rubia Cordifolia (Manjishta) Root Extract, Aloe Barbadensis Leaf Juice, Citrus Aurantium Dulcis (Orange) Flower Extract, Nelumbo Nucifera (Lotus) Flower Extract, Theobroma Cacao (Cocoa) Seed Butter, Cera Alba (Beeswax), Butyrospermum Parkii (Shea) Butter Extract, Diheptyl Succinate, Carica Papaya (Papaya) Fruit Extract, Emblica Officinalis Fruit Extract, Caprylyl Glycol, Sodium Stearoyl Glutamate, Oryza Sativa (Rice) Bran Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Steareth-21, Ceteareth-20, Arachidyl Alcohol, Chlorophytes, Tocopheryl Acetate, Parfum (Fragrance), Behenyl Alcohol, Allantoin, Helianthus Annuus (Sunflower) Seed Oil, Arachidyl Glucoside, Caprylhydroxamic Acid, Sodium Gluconate, Arginine, Sodium Benzoate, Carbomer, Cetearyl Glucoside, Stearic Acid, Capryloyl Glycerin/Sebacic Acid Copolymer, Sodium Cocoamphoacetate, Lauryl Glucoside, Sodium Hyaluronate, Sodium Cocoyl Glutamate, Sodium Lauryl Glucose Carboxylate, Potassium Sorbate, Green Tea Extract, Dehydroacetic Acid, Linalool, Limonene, Geraniol, Hexyl Cinnamal, Coumarin, Hydroxycitronellal, Citronellol.",
    images: [
      img("starlite-radiance-night-cream", "primary", "INYVA Starlite Radiance Night Cream tube"),
      img(
        "starlite-radiance-night-cream",
        "gallery-1",
        "Starlite Radiance Night Cream standing beside its carton",
      ),
      img(
        "starlite-radiance-night-cream",
        "gallery-2",
        "Starlite Radiance carton showing the how-to-use panel",
      ),
      img("starlite-radiance-night-cream", "gallery-3", "Reverse of the Starlite Radiance tube"),
    ],
  },
  {
    name: "Silk Dew",
    subtitle: "Revitalizing Moisturizing Light Cream",
    slug: "silk-dew-light-cream",
    category: "moisturise",
    size: "100 ml / 3.38 fl.oz.",
    priceUsd: 17,
    keyActives: ["Vitamin E", "Hyaluronic Acid", "Peptides"],
    marks: ["Vegan", "Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "A light cream with peptides, hyaluronic acid and vitamin E, directed for use before makeup.",
    description:
      "A lighter texture built on glyceryl stearate and plant oils — sweet almond, apricot kernel, wheat germ and rice bran — with a peptide, sodium hyaluronate and tocopheryl acetate. The pack directs it onto clean, dry skin in upward motions, and to let it absorb before makeup.",
    benefits: [
      {
        title: "Peptide-infused revitalization",
        body: "Enriched with peptides to support collagen production, visibly reducing fine lines and enhancing firmness.",
      },
      {
        title: "Deep hydration with hyaluronic acid",
        body: "Infused with hyaluronic acid for deep, lasting hydration without a heavy feel.",
      },
      {
        title: "Antioxidant boost with vitamin E",
        body: "Vitamin E offers antioxidant protection while improving skin texture and radiance.",
      },
      {
        title: "Dermatologist-tested",
        body: "Dermatologist-tested and free from harsh chemicals, suited to all skin types including sensitive skin.",
      },
    ],
    howToUse:
      "Take a small amount onto fingertips. Gently massage onto clean, dry skin in upward motions. Focus on dry or dull areas. Allow absorption before makeup. Use daily for refreshed, radiant skin.",
    ingredients:
      "Aqua (Water), Glyceryl Stearate, Glycerin, Caprylic/Capric Triglyceride, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Helianthus Annuus (Sunflower) Seed Oil, Propanediol, Diheptyl Succinate, Glyceryl Caprylate, Aloe Barbadensis Leaf Juice, Steareth-21, Cetearyl Olivate, Prunus Armeniaca (Apricot) Kernel Oil, Tocopheryl Acetate, Triticum Vulgare (Wheat) Germ Oil, Carbomer, Arginine, Sorbitan Olivate, Parfum (Fragrance), Benzyl Alcohol, Olea Europaea (Olive) Fruit Oil, Sodium Benzoate, Potassium Sorbate, Sodium PCA, Glyceryl Undecylenate, Oryza Sativa (Rice) Bran Oil, Sodium Gluconate, Sodium Stearoyl Glutamate, Xanthan Gum, Stearic Acid, Capryloyl Glycerin/Sebacic Acid Copolymer, Sodium Hyaluronate, Peptide.",
    images: [
      img("silk-dew-light-cream", "primary", "INYVA Silk Dew Revitalizing Moisturizing Light Cream tube"),
      img("silk-dew-light-cream", "gallery-1", "Silk Dew light cream standing beside its carton"),
      img("silk-dew-light-cream", "gallery-2", "Silk Dew carton showing the ingredient panel"),
      img("silk-dew-light-cream", "gallery-3", "Reverse of the Silk Dew tube"),
    ],
  },
  {
    name: "Serene Cleanse",
    subtitle: "Himalayan Make-Up Remover Oil",
    slug: "serene-cleanse-makeup-remover-oil",
    category: "cleanse",
    size: "200 ml / 6.76 fl.oz.",
    priceUsd: 24,
    keyActives: ["Vitamin E", "Jojoba Oil"],
    marks: ["Vegan", "Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "A cleansing oil of olive, sesame, grapeseed, jojoba, castor and rosehip, with vitamin E.",
    description:
      "Twelve ingredients, and most of them are plant oils: olive, sesame, grapeseed, jojoba, hazelnut, castor, rosehip and sunflower, with caprylic/capric triglyceride, an emulsifier and tocopheryl acetate. The pack directs it onto dry skin, then to wet the hands or pad to emulsify and rinse.",
    benefits: [
      {
        title: "Effortless make-up removal",
        body: "Dissolves all traces of makeup, including waterproof mascara and long-wear foundation, without harsh rubbing.",
      },
      {
        title: "Nourishing vitamin E",
        body: "The antioxidant power of vitamin E helps protect and repair the skin against environmental stressors.",
      },
      {
        title: "Hydrating jojoba oil",
        body: "Jojoba closely mimics the skin's natural oils, balancing moisture levels for a soft, supple complexion.",
      },
      {
        title: "Pure and simple",
        body: "Made with high-quality natural ingredients, free from parabens, sulfates and artificial fragrances.",
      },
    ],
    howToUse:
      "Dispense oil onto dry hands or a cotton pad. Gently massage onto dry skin, focusing on makeup areas. Enjoy its melting texture. Wet hands or pad to emulsify, then rinse for refreshed skin.",
    ingredients:
      "Caprylic/Capric Triglyceride, Olea Europaea (Olive) Fruit Oil, Sorbeth-30 Tetraoleate, Sesamum Indicum (Sesame) Seed Oil, Vitis Vinifera (Grape) Seed Oil, Tocopheryl Acetate, Parfum/Fragrance, Simmondsia Chinensis (Jojoba) Seed Oil, Corylus Avellana (Hazel) Seed Oil, Ricinus Communis (Castor) Seed Oil, Rosa Moschata (Rose Hip) Seed Oil, Helianthus Annuus (Sunflower) Seed Oil.",
    images: [
      img(
        "serene-cleanse-makeup-remover-oil",
        "primary",
        "INYVA Serene Cleanse Himalayan Make-Up Remover Oil in its pump bottle",
      ),
      img("serene-cleanse-makeup-remover-oil", "gallery-1", "Serene Cleanse oil standing beside its carton"),
      img(
        "serene-cleanse-makeup-remover-oil",
        "gallery-2",
        "Serene Cleanse carton showing the ingredient panel",
      ),
      img("serene-cleanse-makeup-remover-oil", "gallery-3", "Reverse of the Serene Cleanse bottle"),
    ],
  },
  {
    name: "Deepdive",
    subtitle: "All-Skin Cleansing Gel",
    slug: "deepdive-cleansing-gel",
    category: "cleanse",
    size: "100 ml / 3.38 fl.oz.",
    priceUsd: 14,
    keyActives: ["Algae Extract", "Tea Tree Oil", "Salicylic Acid"],
    marks: ["Vegan", "Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "A gel cleanser with algae extracts, tea tree oil and salicylic acid.",
    description:
      "Built on glucoside surfactants rather than sulfates, with salicylic acid — under 2%, per the brochure — tea tree and neem, and algae, aloe, Manjistha and Brahmi extracts further down the list. Menthol and peppermint oil are in the formula. The pack directs it onto damp skin, focusing on oily areas, then a thorough rinse.",
    benefits: [
      {
        title: "Deep cleansing action",
        body: "Formulated with algae extracts, tea tree oil and salicylic acid to remove impurities and excess oil and unclog pores without stripping the skin.",
      },
      {
        title: "Gentle exfoliation",
        body: "Salicylic acid (under 2%) removes dead skin cells and promotes cell renewal, helping prevent future breakouts.",
      },
      {
        title: "Tea tree for blemishes",
        body: "Known for its natural antiseptic properties, tea tree oil helps reduce acne and skin blemishes.",
      },
      {
        title: "For all skin types",
        body: "A gentle yet effective daily cleanser, free from harsh chemicals and suitable for sensitive skin.",
      },
    ],
    howToUse:
      "Wet your face, dispense a small amount of the cleansing gel onto fingertips, massage onto damp skin focusing on oily areas, rinse thoroughly, pat dry, and follow with moisturizer.",
    ingredients:
      "Aqua (Water), Decyl Glucoside, Glycerin, Cocamidopropyl Betaine, Acrylates Copolymer, Sodium Cocoamphoacetate, Lauryl Glucoside, Sodium Cocoyl Glycinate, 1,3-Propanediol, Sodium Chloride, Benzyl Alcohol, Parfum (Fragrance), Sodium Cocoyl Glutamate, Sodium Lauryl Glucose Carboxylate, Agar, Sodium Hydroxide, Menthol, Sodium Gluconate, Ethylhexylglycerin, Salicylic Acid, Chlorophytes Extract, Aloe Barbadensis Leaf Juice, Rubia Cordifolia Stem Extract, Embelia Ribes Fruit Extract, Bacopa Monnieri Extract, Citrus Limon (Lemon) Peel Extract, Azadirachta Indica Leaf Extract, Cistus Ladaniferus Leaf/Stem Extract, Sodium Benzoate, Glycine, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Sorbic Acid, Cucumis Sativus (Cucumber) Seed Oil, Mentha Piperita (Peppermint) Leaf Oil, Green Tea Extract, Potassium Sorbate, Dehydroacetic Acid, CI 19140 (Yellow 5), CI 11680, CI 74160, CI 61570 (Green 5), Sodium Sulfate, Hydroxycitronellal, Linalool, Hexyl Cinnamal, Limonene.",
    images: [
      img("deepdive-cleansing-gel", "primary", "INYVA Deepdive All-Skin Cleansing Gel tube"),
      img("deepdive-cleansing-gel", "gallery-1", "Deepdive cleansing gel standing beside its carton"),
      img("deepdive-cleansing-gel", "gallery-2", "Deepdive carton showing the ingredient panel"),
      img("deepdive-cleansing-gel", "gallery-3", "Reverse of the Deepdive tube"),
    ],
  },
  {
    name: "Mild Mist",
    subtitle: "Micellar Foaming Cleanser",
    slug: "mild-mist-micellar-foaming-cleanser",
    category: "cleanse",
    size: "150 ml / 5.07 fl.oz.",
    priceUsd: 18,
    keyActives: ["Peptides", "Herbal Extracts"],
    marks: ["Vegan", "Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "A micellar foam, formulated with soothing properties for the delicate eye area.",
    description:
      "The pack describes a micellar foam that purifies, sweeps away makeup and lifts impurities, with soothing properties suited to the delicate eye area. The formula runs to twenty-six ingredients: glucoside and isethionate surfactants, glycerin and sorbitol, and chamomile, rosemary and green tea extracts with a peptide.",
    benefits: [
      {
        title: "Gentle yet effective cleansing",
        body: "Micellar technology attracts and lifts away dirt, oil and makeup without harsh rubbing.",
      },
      {
        title: "Infused with peptides",
        body: "Promotes skin elasticity and supports the skin's natural rejuvenation.",
      },
      {
        title: "Hydrating formula",
        body: "Hydrates and nourishes as it cleanses, so the face never feels stripped of moisture.",
      },
      {
        title: "Safe for all skin types",
        body: "Free from parabens, sulfates and artificial fragrances, with soothing properties suited to the delicate eye area.",
      },
    ],
    howToUse:
      "Wet face, dispense a small amount onto palm, generate foam, and gently massage onto damp face in circular motions, avoiding eyes. Rinse with lukewarm water, pat dry, and use twice daily.",
    ingredients:
      "Aqua (Water), Decyl Glucoside, Sorbitol, Sodium Cocoyl Isethionate, Glycerin, Propanediol, Cocamidopropyl Betaine, Sodium Cocoyl Glycinate, Sodium Chloride, Coco-Glucoside, Glyceryl Oleate, Benzyl Alcohol, Palm Kernel/Coco Glucoside, Sodium Isethionate, Parfum (Fragrance), Sodium Gluconate, Sodium Benzoate, Potassium Sorbate, Citric Acid, Chamomilla Recutita (Matricaria) Flower Extract, Glycine, Peptide, Rosmarinus Officinalis (Rosemary) Leaf Extract, Camellia Sinensis Leaf Extract, Benzyl Benzoate, Limonene.",
    images: [
      img(
        "mild-mist-micellar-foaming-cleanser",
        "primary",
        "INYVA Mild Mist Micellar Foaming Cleanser bottle",
      ),
      img(
        "mild-mist-micellar-foaming-cleanser",
        "gallery-1",
        "Mild Mist bottle with the cap removed, showing the foaming pump",
      ),
      img("mild-mist-micellar-foaming-cleanser", "gallery-2", "Reverse of the Mild Mist bottle"),
    ],
  },
  {
    name: "Cleanse Core",
    subtitle: "Detox Face Mask",
    slug: "cleanse-core-detox-face-mask",
    category: "mask-exfoliate",
    size: "100 ml / 3.38 fl.oz.",
    priceUsd: 18,
    keyActives: ["Green Tea", "Neem Leaf", "Algae", "Manjistha"],
    marks: ["Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "A cream-textured detox mask with algae, green tea, Manjistha and neem leaf.",
    description:
      "A cream rather than a clay: jojoba oil, beeswax and olive esters carry the formula, with Fuller's earth, and neem, Manjistha, tulsi, green tea and Amla extracts. The pack directs a generous layer over face and neck, left for ten to fifteen minutes, then rinsed and followed with a moisturiser.",
    benefits: [
      {
        title: "Deep detoxification",
        body: "Harnesses algae, green tea, Manjistha and neem leaf extract to remove impurities and toxins from the skin.",
      },
      {
        title: "Antioxidant-rich green tea",
        body: "Helps combat environmental stressors, reducing signs of aging and promoting a radiant complexion.",
      },
      {
        title: "Healing herbs for clear skin",
        body: "Manjistha and neem work together to clear blemishes, reduce acne and improve overall skin texture.",
      },
      {
        title: "Suitable for all skin types",
        body: "Gentle yet effective — a deeply cleansed, refreshed complexion without any harsh after-effects.",
      },
    ],
    howToUse:
      "Begin with clean, dry skin. Apply a generous layer of the mask on your face and neck. Leave for 10-15 minutes to detoxify. Rinse and moisturize for refreshed, hydrated skin.",
    ingredients:
      "Aqua (Water), Caprylic/Capric Triglyceride, Coco-Caprylate/Caprate, Propanediol, Cera Alba (Beeswax), Cetearyl Olivate, Glyceryl Citrate/Lactate/Linoleate/Oleate, Glyceryl Stearate, Glycerin, Cetearyl Alcohol, Sorbitan Olivate, Sodium Levulinate, Glyceryl Caprylate, Simmondsia Chinensis (Jojoba) Seed Oil, Parfum (Fragrance), Chlorophytes Extract, Azadirachta Indica Leaf Extract, Emblica Officinalis Fruit Extract, Acrylates Crosspolymer, Aloe Barbadensis Leaf Juice, Sodium Anisate, Ruscus Aculeatus Root Extract, Bacopa Monnieri Extract, Camellia Sinensis Leaf Extract, Citrus Limon (Lemon) Peel Extract, Embelia Ribes Fruit Extract, Rubia Cordifolia Stem Extract, Terminalia Chebula Fruit Extract, Allantoin, Fuller's Earth, Sodium Gluconate, Ocimum Tenuiflorum Extract, Olea Europaea (Olive) Leaf Extract, Corylus Avellana (Hazelnut) Seed Oil, Sodium Benzoate, Stearic Acid, Potassium Sorbate, Dehydroacetic Acid, CI 19140 (Yellow 5), CI 61570 (Green 5), Sodium Chloride, Sodium Sulfate, Hydroxycitronellal, Linalool, Citronellol, Hexyl Cinnamal, Limonene.",
    images: [
      img("cleanse-core-detox-face-mask", "primary", "INYVA Cleanse Core Detox Face Mask tube"),
      img("cleanse-core-detox-face-mask", "gallery-1", "Cleanse Core mask standing beside its carton"),
      img("cleanse-core-detox-face-mask", "gallery-2", "Cleanse Core carton showing the how-to-use panel"),
      img("cleanse-core-detox-face-mask", "gallery-3", "Reverse of the Cleanse Core tube"),
    ],
    featured: true,
  },
  {
    name: "Detox Glow",
    subtitle: "Activated Charcoal Face Mask",
    slug: "detox-glow-charcoal-face-mask",
    category: "mask-exfoliate",
    size: "100 ml / 3.38 fl.oz.",
    priceUsd: 18,
    keyActives: ["Mulberry Extract", "Niacinamide", "Kokum Butter", "Vitamin E"],
    marks: ["Vegan", "Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "An activated charcoal mask with mulberry extract, niacinamide, kokum butter and vitamin E.",
    description:
      "Activated charcoal with kaolin and bentonite, glycolic acid, and niacinamide alongside mulberry root and liquorice extracts. Kokum butter and apricot kernel oil are in the formula. The pack directs a thin layer over clean, dry skin, avoiding eyes and lips, left for ten to fifteen minutes and used two to three times a week.",
    benefits: [
      {
        title: "Powerful detoxification",
        body: "Activated charcoal draws out impurities, toxins and excess oil, leaving skin clean and refreshed.",
      },
      {
        title: "Brightening mulberry extract",
        body: "Known for its brightening properties, mulberry helps fade dark spots and even out skin tone.",
      },
      {
        title: "Barrier support with niacinamide",
        body: "Niacinamide strengthens the skin's barrier, improves texture and diminishes the appearance of pores, redness and fine lines.",
      },
      {
        title: "Kokum butter and vitamin E",
        body: "Deeply moisturize and nourish so skin stays soft and supple without feeling greasy.",
      },
    ],
    howToUse:
      "For best results, apply a thin layer of the charcoal mask on clean, dry skin, avoiding eyes and lips. Let it dry for 10-15 minutes, then rinse off with lukewarm water. Use 2-3 times weekly for clearer, brighter skin.",
    ingredients:
      "Aqua (Water), Cetearyl Alcohol, Kaolin, Charcoal Powder, Bentonite, Glycerin, Caprylic/Capric Triglyceride, Glycolic Acid, Ceteareth-20, Glycyrrhiza Glabra (Licorice) Stem Extract, Morus Alba Root Extract, Garcinia Indica (Kokum) Seed Butter, Polyhydroxystearic Acid, Glyceryl Citrate/Lactate/Linoleate/Oleate, Niacinamide, Magnesium Carbonate, Diheptyl Succinate, Parfum (Fragrance), Phenoxyethanol, Prunus Armeniaca (Apricot) Kernel Oil, Azadirachta Indica Seed Oil, Titanium Dioxide, Glyceryl Caprylate, CI 77499 (Iron Oxides), Sodium PCA, Sodium Stearoyl Glutamate, Tocopheryl Acetate, Dehydroxanthan Gum, Chlorphenesin, Allantoin, Sodium Gluconate, Olea Europaea (Olive) Leaf Extract, Glyceryl Undecylenate, Sodium Benzoate, Menthol, Capryloyl Glycerin/Sebacic Acid Copolymer, Sodium Chloride, Potassium Sorbate, Sodium Sulfate, Hydroxycitronellal, Linalool, Citronellol, Hexyl Cinnamal, Limonene.",
    images: [
      img("detox-glow-charcoal-face-mask", "primary", "INYVA Detox Glow Activated Charcoal Face Mask tube"),
      img("detox-glow-charcoal-face-mask", "gallery-1", "Detox Glow mask standing beside its carton"),
      img("detox-glow-charcoal-face-mask", "gallery-2", "Detox Glow carton showing the how-to-use panel"),
      img("detox-glow-charcoal-face-mask", "gallery-3", "Reverse of the Detox Glow tube"),
    ],
  },
  {
    name: "Sheer Glow",
    subtitle: "Exfoliating Scrub",
    slug: "sheer-glow-exfoliating-scrub",
    category: "mask-exfoliate",
    size: "100 ml / 3.38 fl.oz.",
    priceUsd: 16,
    keyActives: ["Algae", "Papaya", "Hibiscus Extract"],
    marks: ["Vegan", "Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "A scrub with walnut shell powder, papaya and hibiscus extracts, and algae.",
    description:
      "Finely milled walnut shell powder does the physical exfoliation, with papaya fruit and hibiscus flower extracts, malic acid, and sweet almond, apricot kernel and wheat germ oils folded through. The pack directs it onto clean, damp skin in circular motions, two to three times a week.",
    benefits: [
      {
        title: "Natural exfoliation",
        body: "Walnut shell powder gently removes dead skin cells, revealing smoother, glowing skin.",
      },
      {
        title: "Revitalising algae extract",
        body: "Rich in nutrients and antioxidants, algae nourishes the skin and helps it retain moisture.",
      },
      {
        title: "Papaya and hibiscus",
        body: "Papaya's natural enzymes gently exfoliate and reduce the appearance of dark spots; hibiscus, rich in AHAs, supports skin renewal.",
      },
      {
        title: "Gentle formula",
        body: "Free from harsh chemicals, making it suitable for even the most sensitive skin types.",
      },
    ],
    howToUse:
      "Start with clean, damp skin. Apply a small amount to fingertips, massage onto face in circular motions, focusing on rough areas. Rinse with lukewarm water, pat dry. Use 2-3 times weekly.",
    ingredients:
      "Aqua (Water), Cetearyl Alcohol, Glyceryl Stearate, Juglans Regia (Walnut) Shell Powder, Glycerin, Palmitic Acid, Propanediol, Isopropyl Myristate, Cetyl Alcohol, Heptyl Undecylenate, Stearic Acid, Glyceryl Caprylate, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Parfum (Fragrance), Ceteareth-20, Chlorophytes Extract, Carica Papaya (Papaya) Fruit Extract, Hibiscus Rosa-Sinensis Flower Extract, Triticum Vulgare (Wheat) Germ Oil, Benzyl Alcohol, Sodium Benzoate, Potassium Sorbate, Prunus Armeniaca (Apricot) Kernel Oil, Aloe Barbadensis Leaf Juice, Malic Acid, Glyceryl Undecylenate, Decyl Glucoside, Green Tea Extract, Dehydroacetic Acid, CI 77947 (Zinc Oxide), Titanium Dioxide, Sodium Chloride, Sodium Sulfate, Linalool, Hexyl Cinnamal, Limonene, Alpha-Isomethyl Ionone.",
    images: [
      img("sheer-glow-exfoliating-scrub", "primary", "INYVA Sheer Glow Exfoliating Scrub tube"),
      img("sheer-glow-exfoliating-scrub", "gallery-1", "Sheer Glow scrub standing beside its carton"),
      img("sheer-glow-exfoliating-scrub", "gallery-2", "Sheer Glow carton showing the how-to-use panel"),
      img("sheer-glow-exfoliating-scrub", "gallery-3", "Reverse of the Sheer Glow tube"),
    ],
  },
  {
    name: "Elixir Radiance",
    subtitle: "3-in-1 Dry Beauty Oil for Body, Face & Hair",
    slug: "elixir-radiance-dry-beauty-oil",
    category: "body",
    size: "100 ml / 3.38 fl.oz.",
    priceUsd: 19,
    keyActives: ["Macadamia Oil", "Vitamin E", "Multi Seed Oil"],
    marks: ["Vegan", "Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "A dry oil for body, face and hair — a blend of evening primrose, macadamia, Amla and Bhringraj.",
    description:
      "The pack describes a blend of evening primrose, macadamia, Amla and Bhringraj oils, for body, face and hair, suitable for all skin types. The base is coco-caprylate and dicaprylyl carbonate, with sesame, sweet almond, olive, sunflower, grapeseed, hazelnut, borage, blackcurrant and tomato seed oils behind them, and tocopheryl acetate throughout.",
    benefits: [
      {
        title: "Luxurious multi-purpose oil",
        body: "A versatile 3-in-1 dry oil for nourishing body, face and hair with vitamin E and macadamia oil.",
      },
      {
        title: "Deep nourishment with vitamin E",
        body: "Antioxidant-rich vitamin E helps protect and rejuvenate skin and hair against environmental stressors.",
      },
      {
        title: "Macadamia for hydration and softness",
        body: "Macadamia oil leaves skin and hair feeling silky smooth and deeply moisturized.",
      },
      {
        title: "Natural and gentle",
        body: "Crafted with natural ingredients, free from harmful chemicals and suitable for sensitive skin.",
      },
    ],
    howToUse:
      "Dispense a small amount onto palm. For face, massage onto clean, dry skin in upward motions. For body, apply to damp skin after bathing, focusing on dry areas. For hair, distribute evenly, focusing on ends. Use daily.",
    ingredients:
      "Coco-Caprylate/Caprate, Sesamum Indicum (Sesame) Seed Oil, Caprylic/Capric Triglyceride, Dicaprylyl Carbonate, Macadamia Ternifolia Seed Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Olea Europaea (Olive) Fruit Oil, Helianthus Annuus (Sunflower) Seed Oil, Parfum (Fragrance), Corylus Avellana (Hazel) Seed Oil, Vitis Vinifera (Grape) Seed Oil, Tocopheryl Acetate, Oenothera Biennis (Evening Primrose) Oil, Emblica Officinalis (Amla) Fruit Extract, Aloe Barbadensis (Aloe Vera) Extract, Borago Officinalis (Borage) Seed Oil, Eclipta Prostrata (Bhringraj) Leaf Oil, Ribes Nigrum (Blackcurrant) Seed Oil, Solanum Lycopersicum (Tomato) Seed Oil, Tocopherol, Geraniol.",
    images: [
      img(
        "elixir-radiance-dry-beauty-oil",
        "primary",
        "INYVA Elixir Radiance 3-in-1 Dry Beauty Oil in its glass bottle",
      ),
      img("elixir-radiance-dry-beauty-oil", "gallery-1", "Elixir Radiance oil standing beside its carton"),
      img("elixir-radiance-dry-beauty-oil", "gallery-2", "Elixir Radiance carton showing the ingredient panel"),
      img("elixir-radiance-dry-beauty-oil", "gallery-3", "Reverse of the Elixir Radiance bottle"),
    ],
    featured: true,
  },
  {
    name: "Contour Sculpt",
    subtitle: "Anti-Cellulite Slimming Oil",
    slug: "contour-sculpt-slimming-oil",
    category: "body",
    size: "200 ml / 6.76 fl.oz.",
    priceUsd: 30,
    keyActives: ["Omega 3 & 6", "Vitamin E", "Ginger"],
    marks: ["Vegan", "Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "A massage oil with ginger, clove, black pepper and caffeine, in a base of sesame and macadamia.",
    description:
      "Sesame, macadamia and sweet almond form the base. Ginger, clove, black pepper, rosemary, eucalyptus, camphor and menthol sit in the middle of the list, with caffeine, ivy, horsetail, guarana and butcher's broom further down. The pack directs it into cellulite-prone areas in circular motions after bathing, daily.",
    benefits: [
      {
        title: "Combat cellulite naturally",
        body: "Formulated with natural omega 3, 6 and vitamin E to target and reduce the appearance of cellulite for smoother, firmer skin.",
      },
      {
        title: "Nourishing fatty acids",
        body: "Rich in omega 3 and 6, hydrating and nourishing the skin while improving elasticity and firmness.",
      },
      {
        title: "Antioxidant protection",
        body: "Vitamin E supports skin repair and protects against environmental damage for healthier, more resilient skin.",
      },
      {
        title: "Suitable for all skin types",
        body: "Gentle yet effective, so everyone can benefit from its slimming and toning properties.",
      },
    ],
    howToUse:
      "After bathing, pat your skin dry and dispense a small amount of Contour Sculpt onto your palms. Massage into cellulite-prone areas using circular motions until fully absorbed. Use daily for optimal results.",
    ingredients:
      "Sesamum Indicum (Sesame) Seed Oil, Macadamia Ternifolia Seed Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Caprylic/Capric Triglyceride, Citrus Aurantium Dulcis (Orange) Oil, Citrus Medica Limonum (Lemon) Peel Oil, Helianthus Annuus (Sunflower) Seed Oil, Brassica Juncea (Mustard) Seed Oil, Menthol, Centella Asiatica Extract, Tocopheryl Acetate, Polyglyceryl-3 Oleate, Camphor, Rubia Cordifolia (Manjishta) Root Extract, Camellia Sinensis (Green Tea) Leaf Extract, Acorus Calamus Root Extract, Vitis Vinifera (Grape) Seed Oil, Ruscus Aculeatus (Butcher's Broom) Root Extract, Cupressus Sempervirens Oil, Piper Nigrum (Pepper) Seed Oil, Zingiber Officinale (Ginger) Root Oil, Eugenia Caryophyllus (Clove) Oil, Rosmarinus Officinalis (Rosemary) Leaf Oil, Pogostemon Cablin (Patchouli) Leaf Oil, Eucalyptus Globulus (Eucalyptus) Leaf Oil, Tocopheryl Acetate, Curcuma Longa (Turmeric) Rhizome Extract, Hedera Helix (Ivy) Leaf Extract, Ginkgo Biloba Leaf Extract, Paullinia Cupana (Guarana) Fruit Extract, Equisetum Arvense (Horsetail) Extract, Carum Copticum (Ajowan) Fruit Extract, Hydnocarpus Laurifolia (Chaulmoogra) Seed Extract, Crocus Sativus (Saffron) Flower Extract, Caffeine, Eugenol, Linalool, Limonene, Citral.",
    images: [
      img(
        "contour-sculpt-slimming-oil",
        "primary",
        "INYVA Contour Sculpt Anti-Cellulite Slimming Oil in its pump bottle",
      ),
      img("contour-sculpt-slimming-oil", "gallery-1", "Contour Sculpt oil standing beside its carton"),
      img("contour-sculpt-slimming-oil", "gallery-2", "Contour Sculpt carton showing the how-to-use panel"),
      img("contour-sculpt-slimming-oil", "gallery-3", "Reverse of the Contour Sculpt bottle"),
    ],
  },
  {
    name: "Floral Fresh",
    subtitle: "Jasmine Bloom Shower Gel",
    slug: "floral-fresh-jasmine-shower-gel",
    category: "body",
    size: "200 ml / 6.76 fl.oz.",
    priceUsd: 14,
    keyActives: ["Jasmine Extract", "Algae", "Gotu Kola"],
    marks: ["Vegan", "Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "A jasmine shower gel that turns to a creamy foam, with jasmine and Gotu Kola.",
    description:
      "The pack describes a gel that transforms into a creamy foam, infused with jasmine and Gotu Kola, leaving skin soft, hydrated and delicately scented, and suitable for all skin types. It is built on decyl glucoside and cocamidopropyl betaine rather than sulfates, with neem, sesame and algae extracts.",
    benefits: [
      {
        title: "Indulgent jasmine fragrance",
        body: "The fragrance of jasmine makes for a luxurious shower, leaving skin delicately scented.",
      },
      {
        title: "Hydrating algae extract",
        body: "Rich in nutrients and minerals, algae hydrates and revitalizes for a soft, smooth, refreshed feeling.",
      },
      {
        title: "Gentle cleansing formula",
        body: "A gentle yet effective cleanse that removes impurities without stripping the skin of its natural oils.",
      },
      {
        title: "Vegan and eco-friendly",
        body: "Vegan, free from harsh chemicals, and packaged in eco-friendly materials.",
      },
    ],
    howToUse:
      "For a luxurious shower experience, wet your skin thoroughly, then apply the shower gel onto your palm or loofah. Massage in circular motions to cleanse, enjoy the lather, rinse, and pat dry.",
    ingredients:
      "Aqua (Water), Decyl Glucoside, Cocamidopropyl Betaine, Glycerin, Acrylates/Beheneth-25 Methacrylate Copolymer, Sodium Cocoyl Glycinate, Ceteareth-60 Myristyl Glycol, Parfum (Fragrance), Sodium Chloride, Sodium Benzoate, Potassium Sorbate, Caprylyl Glycol, Citric Acid, Palm Kernel/Coco Glucoside, Sodium Gluconate, Caprylhydroxamic Acid, Coco-Glucoside, Glyceryl Oleate, Chlorophytes, Azadirachta Indica Leaf Extract, Centella Asiatica Extract, Jasminum Officinale (Jasmine) Flower Extract, Ricinus Communis (Castor) Root Extract, Sesamum Indicum (Sesame) Seed Extract, Glycine, Caramel, Green Tea Extract, Dehydroacetic Acid, CI 17200 (Red 33), Sodium Sulfate, Linalool.",
    images: [
      img("floral-fresh-jasmine-shower-gel", "primary", "INYVA Floral Fresh Jasmine Bloom Shower Gel tube"),
      img("floral-fresh-jasmine-shower-gel", "gallery-1", "Reverse of the Floral Fresh tube"),
      img("floral-fresh-jasmine-shower-gel", "gallery-2", "Floral Fresh shower gel dispensed from the tube"),
    ],
  },
  {
    name: "Himalayan Harmony",
    subtitle: "Body Scrub",
    slug: "himalayan-harmony-body-scrub",
    category: "body",
    size: "200 ml / 6.76 fl.oz.",
    priceUsd: 17,
    keyActives: ["Vitamin B & E", "Multi Seed Oils"],
    marks: ["Vegan", "Cruelty free", "Paraben free", "Made in India"],
    shortDescription:
      "A salt-and-walnut body scrub carried in plant oils.",
    description:
      "A salt scrub: sodium chloride leads the formula, with walnut shell powder and silica for grip. Around them sit grapeseed, sunflower, olive, sweet almond, castor, sesame and hazelnut oils, plus panthenol and calendula. The pack directs it onto a wet body in circular motions, focusing on dry spots, then a warm rinse.",
    benefits: [
      {
        title: "Gentle exfoliation",
        body: "A luxurious exfoliating experience that gently removes dead skin cells to reveal smooth, radiant skin.",
      },
      {
        title: "Rich in vitamins B and E",
        body: "Nourishing vitamins B and E mean the scrub deeply moisturizes and revitalizes as it exfoliates.",
      },
      {
        title: "Smoothing and revitalizing",
        body: "Improved skin texture and enhanced hydration, leaving the body feeling soft, smooth and fully rejuvenated.",
      },
      {
        title: "Suitable for all skin types",
        body: "Formulated to be gentle on the skin, for a soothing and enriching experience.",
      },
    ],
    howToUse:
      "Wet your body before applying the scrub. Massage generously in circular motions, focusing on dry spots like elbows and knees. Rinse with warm water, towel dry, then moisturize for hydrated, smooth skin.",
    ingredients:
      "Sodium Chloride, Vitis Vinifera (Grape) Seed Oil, Silica, Caprylic/Capric Triglyceride, Helianthus Annuus (Sunflower) Seed Oil, Glyceryl Citrate/Lactate/Linoleate/Oleate, Parfum (Fragrance), Propanediol, Olea Europaea (Olive) Fruit Oil, Heptyl Undecylenate, Juglans Regia (Walnut) Shell Powder, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Ricinus Communis (Castor) Seed Oil, Copernicia Cerifera (Carnauba) Wax, Sesamum Indicum (Sesame) Seed Oil, Corylus Avellana (Hazelnut) Seed Oil, Panthenol, Calendula Officinalis Flower Oil, Tocopheryl Acetate, Potassium Sorbate, Sodium Benzoate, Linalool.",
    images: [
      img("himalayan-harmony-body-scrub", "primary", "INYVA Himalayan Harmony Body Scrub tube"),
      img("himalayan-harmony-body-scrub", "gallery-1", "Reverse of the Himalayan Harmony tube"),
      img("himalayan-harmony-body-scrub", "gallery-2", "Himalayan Harmony body scrub dispensed from the tube"),
    ],
  },
];
