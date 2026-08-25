import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/data/site";
import { CartLink } from "./cart-link";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    // No backdrop-filter here: it would make the header the containing block
    // for the fixed mobile menu panel, collapsing it to the header's height.
    <header className="sticky top-0 z-50 border-b border-line bg-cream">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6 md:h-[5.25rem]">
        <Link
          href="/"
          className="-my-3 shrink-0 py-3"
          aria-label={`${site.name} — home`}
        >
          <Image
            src="/brand/inyva-wordmark-ink.png"
            alt={site.name}
            width={620}
            height={291}
            priority
            className="h-[1.6rem] w-auto md:h-[1.9rem]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="eyebrow -my-3 block py-3 text-ink transition-colors duration-300 hover:text-copper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <CartLink />
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-5 md:hidden">
          <CartLink />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
