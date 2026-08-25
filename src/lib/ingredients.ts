import { ingredients, type Ingredient } from "@/data/ingredients";
import type { Product } from "@/data/products";
import { getAllProducts } from "@/lib/products";

export type IngredientEntry = Ingredient & { products: Product[] };

/** Matches an ingredient against the products whose declaration contains it. */
export function getIngredientEntries(): IngredientEntry[] {
  const products = getAllProducts();
  return ingredients
    .map((ingredient) => ({
      ...ingredient,
      products: products.filter((product) =>
        ingredient.inci.some((name) =>
          product.ingredients.toLowerCase().includes(name.toLowerCase()),
        ),
      ),
    }))
    .filter((entry) => entry.products.length > 0);
}
