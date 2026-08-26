"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/site";

/**
 * The primary links, marking the section being read. Split out of the header
 * so only this much has to run on the client: knowing the current route is the
 * one thing the header cannot do while rendering on the server.
 */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {nav.map((item) => {
        // A section counts as current from its own page down, so a product page
        // still marks Products.
        const current = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              className="eyebrow -my-3 block py-3 text-ink transition-colors duration-300 hover:text-copper"
            >
              <span
                className={`block border-b pb-1.5 transition-colors duration-300 ${
                  current ? "border-copper" : "border-transparent"
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        );
      })}
    </>
  );
}
