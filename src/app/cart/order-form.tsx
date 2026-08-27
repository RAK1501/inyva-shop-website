"use client";

import { useRef, useState } from "react";
import type { Product } from "@/data/products";
import { contact } from "@/data/site";
import { formatPrice } from "@/lib/price";
import { submitEnquiry } from "@/lib/submit-enquiry";

type Item = { line: { qty: number }; product: Product };
type Status = "idle" | "sending" | "sent" | "failed";

/** The bag written out as plain text, so the order reads straight out of the
 *  notification without needing the site to interpret it. */
function summarise(items: Item[]): string {
  return items
    .map(({ line, product }) => {
      const name = product.shortName ?? product.name;
      const price =
        typeof product.priceUsd === "number"
          ? formatPrice(product.priceUsd * line.qty)
          : "price on request";
      return `${line.qty} x ${name} — ${product.subtitle}${
        product.size ? `, ${product.size}` : ""
      } — ${price}`;
    })
    .join("\n");
}

/**
 * Captures the order so there is a record of it, through the same
 * host-independent endpoint the trade form uses. Nothing is charged and
 * nothing claims to be: this records a request, and success is only reported
 * when the submission is actually accepted.
 */
export function OrderForm({
  items,
  total,
  unpriced,
}: {
  items: Item[];
  total: number;
  unpriced: number;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const resultRef = useRef<HTMLParagraphElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    const result = await submitEnquiry(form, { subject: "New order request — INYVA" });
    setStatus(result);
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  if (status === "sent") {
    return (
      <p
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className="border-t border-ink pt-8 leading-relaxed text-ink-soft"
      >
        <span className="block font-display text-2xl text-ink">Order request received.</span>
        <span className="mt-3 block">
          Nothing has been charged. The INYVA team has the list and will confirm
          availability and how to pay by email.
        </span>
      </p>
    );
  }

  return (
    <form name="order-request" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="order-request" />

      {/* The bag travels with the enquiry, so the record is complete on its own. */}
      <input type="hidden" name="order" value={summarise(items)} />
      <input
        type="hidden"
        name="order-total"
        value={`${formatPrice(total)}${unpriced > 0 ? ` + ${unpriced} to be priced` : ""}`}
      />
      <input
        type="hidden"
        name="item-count"
        value={String(items.reduce((n, i) => n + i.line.qty, 0))}
      />

      {/* Left empty by people, filled by bots. */}
      <p className="hidden">
        <label>
          Company website
          <input type="text" name="company-website" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" optional autoComplete="tel" />
        <Field label="City" name="city" required autoComplete="address-level2" />
        <Field label="Country" name="country" required autoComplete="country-name" />
      </div>

      <label className="mt-7 block">
        <span className="eyebrow text-muted">
          Anything else <span className="normal-case tracking-normal">(optional)</span>
        </span>
        <textarea
          name="notes"
          rows={3}
          className="mt-3 w-full resize-y border border-line-strong bg-transparent px-3 py-3 leading-relaxed text-ink transition-colors focus:border-ink"
        />
      </label>

      <div className="mt-9 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="eyebrow bg-ink px-8 py-4 text-cream transition-colors duration-300 hover:bg-copper disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send order request"}
        </button>
        <p className="text-sm text-muted">
          Fields marked with an asterisk are required. We use what you send only to
          reply &mdash; see our{" "}
          <a href="/privacy" className="link-underline text-copper">
            privacy policy
          </a>
          .
        </p>
      </div>

      {status === "failed" ? (
        <p
          ref={resultRef}
          tabIndex={-1}
          role="alert"
          className="mt-7 border-t border-copper pt-5 leading-relaxed text-ink-soft"
        >
          That did not send. Please try again, or email us directly at{" "}
          <a href={`mailto:${contact.email}`} className="link-underline text-copper">
            {contact.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}

function Required() {
  return (
    <span aria-hidden="true" className="text-copper">
      *
    </span>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  optional = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-muted">
        {label} {required ? <Required /> : null}
        {optional ? <span className="normal-case tracking-normal">(optional)</span> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="mt-3 h-12 w-full border border-line-strong bg-transparent px-3 text-ink transition-colors focus:border-ink"
      />
    </label>
  );
}
