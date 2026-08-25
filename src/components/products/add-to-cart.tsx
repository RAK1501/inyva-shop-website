"use client";

import { useState } from "react";
import { addToCart, useCart } from "@/lib/cart";

const MAX = 99;

export function AddToCart({ slug }: { slug: string }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const cart = useCart();
  const inBag = cart.find((l) => l.slug === slug)?.qty ?? 0;

  const change = (delta: number) => {
    setQty((q) => Math.min(MAX, Math.max(1, q + delta)));
    setAdded(false);
  };

  const submit = () => {
    addToCart(slug, qty);
    setAdded(true);
    setQty(1);
  };

  return (
    <div className="mt-9">
      <div className="flex flex-wrap items-stretch gap-3">
        <div
          className="flex items-center border border-line-strong"
          role="group"
          aria-label="Quantity"
        >
          <Step label="Decrease quantity" onClick={() => change(-1)} disabled={qty <= 1}>
            <span className="block h-px w-3 bg-current" />
          </Step>
          <output
            aria-live="polite"
            className="w-10 text-center font-display text-lg text-ink"
          >
            {qty}
          </output>
          <Step label="Increase quantity" onClick={() => change(1)} disabled={qty >= MAX}>
            <span className="relative block h-3 w-3">
              <span className="absolute left-0 top-1/2 block h-px w-3 -translate-y-1/2 bg-current" />
              <span className="absolute left-1/2 top-0 block h-3 w-px -translate-x-1/2 bg-current" />
            </span>
          </Step>
        </div>

        <button
          type="button"
          onClick={submit}
          className="eyebrow flex-1 bg-ink px-8 py-4 text-cream transition-colors duration-300 hover:bg-copper"
        >
          Add to bag
        </button>
      </div>

      <p aria-live="polite" className="mt-3 min-h-5 text-sm text-muted">
        {added
          ? `Added. ${inBag} in your bag.`
          : inBag > 0
            ? `${inBag} already in your bag.`
            : ""}
      </p>
    </div>
  );
}

function Step({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center text-ink transition-colors duration-300 hover:text-copper disabled:cursor-not-allowed disabled:text-line-strong"
    >
      <span aria-hidden="true">{children}</span>
    </button>
  );
}
