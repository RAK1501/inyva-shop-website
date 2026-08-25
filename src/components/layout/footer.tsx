import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { categories } from "@/data/categories";
import { contact, nav, packMarks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-px bg-ink text-cream/70">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Image
              src="/brand/inyva-logo-cream.png"
              alt={site.name}
              width={760}
              height={682}
              className="h-16 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              Ayurvedic botanicals and proven actives, formulated together.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-5">
            <div className="grid grid-cols-2 gap-10">
              <div>
                <p className="eyebrow text-copper-warm">Explore</p>
                <ul className="mt-5 space-y-3 text-sm">
                  <li>
                    <Link href="/" className="transition-colors hover:text-cream">
                      Home
                    </Link>
                  </li>
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="transition-colors hover:text-cream">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow text-copper-warm">Collection</p>
                <ul className="mt-5 space-y-3 text-sm">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/products?category=${c.slug}`}
                        className="transition-colors hover:text-cream"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          <div className="md:col-span-3">
            <p className="eyebrow text-copper-warm">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-cream">
                  {contact.email}
                </a>
              </li>
              {contact.phones.map((p) => (
                <li key={p.href}>
                  <a href={`tel:${p.href}`} className="transition-colors hover:text-cream">
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-cream/12 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {contact.company}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {packMarks.map((m) => (
              <li key={m} className="eyebrow">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
