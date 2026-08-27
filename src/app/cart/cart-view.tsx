"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/primitives";
import type { Product } from "@/data/products";
import { MAX_QTY, removeFromCart, setQty, useCart } from "@/lib/cart";
import { OrderForm } from "./order-form";
import { formatPrice } from "@/lib/price";

export function CartView({ products }: { products: Product[] }) {
  const lines = useCart();
  const bySlug = new Map(products.map((p) => [p.slug, p]));

  const items = lines
    .map((line) => ({ line, product: bySlug.get(line.slug) }))
    .filter((i): i is { line: (typeof lines)[number]; product: Product } => !!i.product);

  const count = items.reduce((n, i) => n + i.line.qty, 0);
  const priced = items.filter((i) => typeof i.product.priceUsd === "number");
  const total = priced.reduce((sum, i) => sum + i.product.priceUsd! * i.line.qty, 0);
  const unpriced = items.length - priced.length;

  if (items.length === 0) {
    return (
      <Container className="py-24 text-center md:py-32">
        <Eyebrow className="mb-6">Your bag</Eyebrow>
        <h1 className="display-lg mx-auto max-w-lg">Your bag is empty</h1>
        <p className="mx-auto mt-6 max-w-md text-muted">
          Fourteen formulations, each with its full ingredient list.
        </p>
        <Link
          href="/products"
          className="eyebrow mt-10 inline-flex bg-ink px-7 py-3.5 text-cream transition-colors duration-300 hover:bg-copper"
        >
          View the collection
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-14 md:py-20">
      <Eyebrow className="mb-6">Your bag</Eyebrow>
      <h1 className="display-lg">
        {count} {count === 1 ? "item" : "items"}
      </h1>

      <ul className="mt-12 border-t border-line">
        {items.map(({ line, product }) => (
          <li
            key={product.slug}
            className="flex gap-5 border-b border-line py-6 md:gap-8 md:py-8"
          >
            <Link
              href={`/products/${product.slug}`}
              className="relative aspect-4/5 w-24 shrink-0 overflow-hidden bg-shell md:w-32"
            >
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                fill
                sizes="128px"
                className="object-cover"
              />
            </Link>

            <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div className="min-w-0">
                <Link
                  href={`/products/${product.slug}`}
                  className="font-display text-lg text-ink transition-colors hover:text-copper md:text-xl"
                >
                  {product.shortName ?? product.name}
                </Link>
                <p className="mt-1 text-sm text-muted">{product.subtitle}</p>
                {product.size ? (
                  <p className="mt-1 text-sm text-muted">{product.size}</p>
                ) : null}
                <button
                  type="button"
                  onClick={() => removeFromCart(product.slug)}
                  className="eyebrow mt-3 inline-flex min-h-11 items-center text-muted transition-colors hover:text-ink"
                >
                  Remove
                </button>
              </div>

              <div className="flex shrink-0 items-center gap-5">
                <div
                  className="flex items-center border border-line-strong"
                  role="group"
                  aria-label={`Quantity for ${product.name}`}
                >
                  {/* Stops at one. Dropping below used to delete the line,
                      which is a surprising way to lose a product when there is
                      a Remove control right beside it. */}
                  <QtyStep
                    label="Decrease quantity"
                    onClick={() => setQty(product.slug, line.qty - 1)}
                    disabled={line.qty <= 1}
                  >
                    <span className="block h-px w-3 bg-current" />
                  </QtyStep>
                  <output className="w-9 text-center font-display text-ink">{line.qty}</output>
                  <QtyStep
                    label="Increase quantity"
                    onClick={() => setQty(product.slug, line.qty + 1)}
                    disabled={line.qty >= MAX_QTY}
                  >
                    <span className="relative block h-3 w-3">
                      <span className="absolute left-0 top-1/2 block h-px w-3 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-0 block h-3 w-px -translate-x-1/2 bg-current" />
                    </span>
                  </QtyStep>
                </div>

                <p className="w-24 text-right font-display text-lg text-ink">
                  {typeof product.priceUsd === "number"
                    ? formatPrice(product.priceUsd * line.qty)
                    : "—"}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row md:justify-between">
        <p className="max-w-md text-sm leading-relaxed text-muted">
          {unpriced > 0
            ? `Online checkout is not open yet. Send this list through and we will come back to you with pricing and availability${
                priced.length > 0 ? " for the items still to be priced" : ""
              }.`
            : "Online checkout is not open yet. Send this list through and we will come back to you to confirm."}
        </p>

        <div className="w-full md:w-auto md:min-w-72">
          <div className="flex items-baseline justify-between border-t border-line-strong pt-5">
            <span className="eyebrow text-muted">
              {unpriced > 0 ? "Priced items" : "Total"}
            </span>
            <span className="font-display text-2xl text-ink">{formatPrice(total)}</span>
          </div>
          {unpriced > 0 ? (
            <p className="mt-2 text-right text-sm text-muted">
              {unpriced} {unpriced === 1 ? "item" : "items"} still to be priced
            </p>
          ) : null}

          <a
            href="#order-request"
            className="eyebrow mt-6 flex w-full items-center justify-center bg-ink px-8 py-4 text-cream transition-colors duration-300 hover:bg-copper"
          >
            Request this order
          </a>
          <Link
            href="/products"
            className="eyebrow mt-3 flex w-full items-center justify-center border border-line-strong px-8 py-4 text-ink transition-colors duration-300 hover:border-ink"
          >
            Keep looking
          </Link>
        </div>
      </div>

      <section
        id="order-request"
        aria-labelledby="order-request-heading"
        className="mt-16 scroll-mt-28 border-t border-line pt-12 md:mt-20 md:pt-16"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>Request this order</Eyebrow>
            <h2 id="order-request-heading" className="display-md mt-6">
              Tell us where it goes
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Online payment is not open yet, so nothing is charged here. Send the bag
              through and the team will come back to confirm availability and how to pay.
            </p>
          </div>
          <div className="lg:col-span-8">
            <OrderForm items={items} total={total} unpriced={unpriced} />
          </div>
        </div>
      </section>
    </Container>
  );
}

function QtyStep({
  label,
  onClick,
  disabled = false,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center text-ink transition-colors duration-300 hover:text-copper disabled:cursor-not-allowed disabled:text-line-strong disabled:hover:text-line-strong"
    >
      <span aria-hidden="true">{children}</span>
    </button>
  );
}
