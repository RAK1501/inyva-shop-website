import type { Metadata } from "next";
import { CategoryGrid } from "@/components/home/category-grid";
import { CollagenBand } from "@/components/home/collagen-band";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Hero } from "@/components/home/hero";
import { IngredientFocus } from "@/components/home/ingredient-focus";
import { RangeStrip } from "@/components/home/range-strip";

/** The home page inherits its title and description from the root layout. */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <CollagenBand />
      <FeaturedProducts />
      <IngredientFocus />
      <RangeStrip />
    </>
  );
}
