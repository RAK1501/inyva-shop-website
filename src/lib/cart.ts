"use client";

import { useSyncExternalStore } from "react";

export type CartLine = { slug: string; qty: number };

const KEY = "inyva.cart.v1";
export const MAX_QTY = 99;

let lines: CartLine[] = [];
const listeners = new Set<() => void>();

/** Stable reference for SSR and for the hydration pass, so React sees no mismatch. */
const EMPTY: CartLine[] = [];

function read(): CartLine[] {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    return parsed.filter(
      (l): l is CartLine =>
        typeof l === "object" &&
        l !== null &&
        typeof (l as CartLine).slug === "string" &&
        Number.isFinite((l as CartLine).qty),
    );
  } catch {
    return EMPTY;
  }
}

if (typeof window !== "undefined") {
  lines = read();
  // Keep other tabs in step.
  window.addEventListener("storage", (e) => {
    if (e.key === KEY) {
      lines = read();
      listeners.forEach((l) => l());
    }
  });
}

function commit(next: CartLine[]) {
  lines = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // A full or blocked store should not break the page.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const getSnapshot = () => lines;
const getServerSnapshot = () => EMPTY;

export function addToCart(slug: string, qty = 1) {
  const existing = lines.find((l) => l.slug === slug);
  commit(
    existing
      ? lines.map((l) =>
          l.slug === slug ? { ...l, qty: Math.min(MAX_QTY, l.qty + qty) } : l,
        )
      : [...lines, { slug, qty: Math.min(MAX_QTY, Math.max(1, qty)) }],
  );
}

export function setQty(slug: string, qty: number) {
  if (qty < 1) return removeFromCart(slug);
  commit(lines.map((l) => (l.slug === slug ? { ...l, qty: Math.min(MAX_QTY, qty) } : l)));
}

export function removeFromCart(slug: string) {
  commit(lines.filter((l) => l.slug !== slug));
}

export function clearCart() {
  commit([]);
}

export function useCart(): CartLine[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useCartCount(): number {
  return useCart().reduce((n, l) => n + l.qty, 0);
}
