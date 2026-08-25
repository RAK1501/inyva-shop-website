"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { contact, nav } from "@/data/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Lock the page behind the panel, move focus into it, and close on Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="-mr-2 flex h-11 w-11 items-center justify-center"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className="relative block h-3 w-6">
          <span
            className={`absolute left-0 block h-px w-6 bg-ink transition-all duration-300 ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 block h-px w-6 bg-ink transition-all duration-300 ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 flex flex-col justify-between overflow-y-auto bg-cream px-5 pb-10 pt-12"
      >
        <nav aria-label="Primary mobile">
          <ul className="flex flex-col gap-7">
            <li>
              <Link href="/" onClick={close} className="display-md block font-display text-ink">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close} className="display-md block font-display text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16 border-t border-line pt-7">
          <p className="eyebrow text-copper">Get in touch</p>
          <a href={`mailto:${contact.email}`} className="mt-3 block text-ink-soft">
            {contact.email}
          </a>
          <a href={`tel:${contact.phones[0].href}`} className="mt-1 block text-ink-soft">
            {contact.phones[0].display}
          </a>
        </div>
      </div>
    </div>
  );
}
