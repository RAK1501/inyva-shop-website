import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  priority = false,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw",
}: {
  product: Product;
  priority?: boolean;
  sizes?: string;
}) {
  const [primary] = product.images;

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-4/5 overflow-hidden bg-shell">
        <Image
          src={primary.src}
          alt={primary.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
        />
      </div>
      <div className="mt-5">
        <h3 className="font-display text-lg leading-snug text-ink transition-colors duration-300 group-hover:text-copper md:text-xl">
          {product.name}
        </h3>
        <p className="mt-1 text-sm leading-snug text-muted">{product.subtitle}</p>
      </div>
    </Link>
  );
}
