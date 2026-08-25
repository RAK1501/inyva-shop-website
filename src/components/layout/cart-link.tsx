"use client";

import Link from "next/link";
import { useCartCount } from "@/lib/cart";

export function CartLink({ className = "" }: { className?: string }) {
  const count = useCartCount();
  return (
    <Link
      href="/cart"
      className={`eyebrow inline-flex min-h-11 items-center text-ink transition-colors duration-300 hover:text-copper ${className}`}
    >
      Bag{count > 0 ? ` (${count})` : ""}
    </Link>
  );
}
