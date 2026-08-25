import { CategoryGrid } from "@/components/home/category-grid";
import { ClosingCta } from "@/components/home/closing-cta";
import { CollagenBand } from "@/components/home/collagen-band";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Hero } from "@/components/home/hero";
import { IngredientFocus } from "@/components/home/ingredient-focus";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <CollagenBand />
      <FeaturedProducts />
      <IngredientFocus />
      <ClosingCta />
    </>
  );
}
