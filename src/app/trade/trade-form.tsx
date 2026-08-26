"use client";

import { useRef, useState } from "react";
import { categories } from "@/data/categories";
import { contact } from "@/data/site";

const BUSINESS_TYPES = [
  "Distributor",
  "Retailer",
  "Importer",
  "Spa or salon",
  "Online retailer",
  "Other",
];

type Status = "idle" | "sending" | "sent" | "failed";

/**
 * Posts to public/__forms.html, which is both where the form's shape is
 * declared for Netlify's build-time scan and the path Netlify's handler
 * intercepts. Verified against the live site: posting here records a
 * submission, posting to the site root does not. Success is only ever reported
 * when that POST actually succeeds — a form that silently swallows enquiries
 * would be worse than no form at all.
 */
export function TradeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const resultRef = useRef<HTMLParagraphElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const body = new URLSearchParams(
        // FormData handles the repeated `interest` checkboxes correctly.
        [...new FormData(form)].map(([k, v]) => [k, String(v)]),
      ).toString();

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("failed");
    } finally {
      requestAnimationFrame(() => resultRef.current?.focus());
    }
  }

  if (status === "sent") {
    return (
      <p
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className="border-t border-ink pt-8 text-lg leading-relaxed text-ink-soft"
      >
        <span className="block font-display text-2xl text-ink">Enquiry received.</span>
        <span className="mt-3 block">
          It has reached the INYVA team, who will follow up by email.
        </span>
      </p>
    );
  }

  return (
    <form name="trade-enquiry" onSubmit={onSubmit} noValidate={false}>
      <input type="hidden" name="form-name" value="trade-enquiry" />

      {/* Left empty by people, filled by bots. */}
      <p className="hidden">
        <label>
          Company website
          <input type="text" name="company-website" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field label="Company" name="company" required autoComplete="organization" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" optional />
        <Field label="Country" name="country" required autoComplete="country-name" />

        <label className="block">
          <span className="eyebrow text-muted">
            Business type <Required />
          </span>
          <select
            name="business-type"
            required
            defaultValue=""
            className="mt-3 h-12 w-full border border-line-strong bg-transparent px-3 text-ink transition-colors focus:border-ink"
          >
            <option value="" disabled>
              Select one
            </option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-9">
        <legend className="eyebrow text-muted">Products of interest</legend>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {[...categories.map((c) => c.name), "The full range"].map((option) => (
            <label key={option} className="flex min-h-11 items-center gap-3">
              <input
                type="checkbox"
                name="interest"
                value={option}
                className="size-4 shrink-0 accent-[#9c5c33]"
              />
              <span className="text-ink-soft">{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-7 grid gap-x-8 gap-y-7">
        <Field
          label="Indicative volumes"
          name="volumes"
          optional
          hint="Units per order, or per year — an estimate is fine."
        />

        <label className="block">
          <span className="eyebrow text-muted">
            Message <span className="normal-case tracking-normal">(optional)</span>
          </span>
          <textarea
            name="message"
            rows={4}
            className="mt-3 w-full resize-y border border-line-strong bg-transparent px-3 py-3 leading-relaxed text-ink transition-colors focus:border-ink"
          />
        </label>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="eyebrow bg-ink px-8 py-4 text-cream transition-colors duration-300 hover:bg-copper disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <p className="text-sm text-muted">Fields marked with an asterisk are required.</p>
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
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  hint?: string;
}) {
  const hintId = hint ? `${name}-hint` : undefined;
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
        aria-describedby={hintId}
        className="mt-3 h-12 w-full border border-line-strong bg-transparent px-3 text-ink transition-colors focus:border-ink"
      />
      {hint ? (
        <span id={hintId} className="mt-2 block text-sm text-muted">
          {hint}
        </span>
      ) : null}
    </label>
  );
}
