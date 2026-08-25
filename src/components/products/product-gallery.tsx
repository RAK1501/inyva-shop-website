"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/data/products";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [index, setIndex] = useState(0);
  const active = images[index];

  return (
    <div className="mx-auto max-w-lg lg:max-w-none">
      <div className="relative aspect-4/5 overflow-hidden bg-shell">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          priority
          sizes="(min-width: 1024px) 44vw, (min-width: 640px) 32rem, 100vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 ? (
        <ul
          className={`mt-3 grid gap-3 ${
            images.length === 3 ? "grid-cols-3" : "grid-cols-4"
          }`}
        >
          {images.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View image ${i + 1} of ${images.length}`}
                aria-current={i === index}
                className={`relative block aspect-4/5 w-full overflow-hidden bg-shell transition-opacity duration-300 ${
                  i === index ? "opacity-100" : "opacity-55 hover:opacity-85"
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="140px"
                  className="object-cover"
                />
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-px transition-colors duration-300 ${
                    i === index ? "bg-ink" : "bg-transparent"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
