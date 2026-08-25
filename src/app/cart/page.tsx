import type { Metadata } from "next";
import { CartView } from "./cart-view";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Your Bag",
  description: "The INYVA products you have selected.",
  robots: { index: false },
};

export default function CartPage() {
  return <CartView products={getAllProducts()} />;
}
