import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { getAllProducts } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/products", priority: 0.9 },
    { path: "/ingredients", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/trade", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/shipping", priority: 0.3 },
    { path: "/returns", priority: 0.3 },
    { path: "/accessibility", priority: 0.3 },
  ].map((r) => ({
    url: `${siteUrl}${r.path}`,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));

  const productRoutes = getAllProducts().map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
