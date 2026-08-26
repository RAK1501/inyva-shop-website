import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { contact } from "@/data/site";
import {
  AyurvedaIcon,
  BotanicalSprig,
  CleanIcon,
  CrueltyFreeIcon,
  MailIcon,
  PhoneIcon,
  ScienceIcon,
} from "./contact-icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach INYVA by email or phone, and the offices the range is marketed from.",
};

/** Each one is already claimed elsewhere on the site or printed on the packs. */
const marks = [
  { label: "Ayurvedic wisdom", Icon: AyurvedaIcon },
  { label: "Science backed", Icon: ScienceIcon },
  { label: "Clean ingredients", Icon: CleanIcon },
  { label: "Cruelty free", Icon: CrueltyFreeIcon },
];

export default function ContactPage() {
  const phone = contact.phones[0];

  return (
    <>
      {/* The statement and the photograph share the row, so neither is left
          holding an empty half of the screen. */}
      <section className="border-b border-line">
        <Container className="py-14 md:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Contact</Eyebrow>
              <h1 className="display-hero mt-6">Talk to us</h1>
              <span className="rule-copper mt-8" />
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
                Questions about a formula or one of its ingredients? Reach the team and
                we&rsquo;ll be happy to help.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-3/2 w-full overflow-hidden bg-shell">
                <Image
                  src="/editorial/contact-hero.webp"
                  alt="INYVA Queen’s Time Reverse Elixir Youth Face Serum on a travertine slab, with an olive sprig, a ceramic dish and a linen cloth"
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The two details someone came for, given the full width between them. */}
      <section>
        <Container className="py-10 md:py-12">
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
            <DetailCard
              label="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
              icon={<MailIcon className="h-5 w-5" />}
            />
            <DetailCard
              label="Phone"
              value={phone.display}
              href={`tel:${phone.href}`}
              icon={<PhoneIcon className="h-5 w-5" />}
            />
          </div>
        </Container>
      </section>

      <section>
        <Container className="pb-16 md:pb-24">
          <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
            <div className="relative overflow-hidden border border-line bg-shell p-8 md:p-10 lg:col-span-5">
              <Eyebrow tone="muted">Marketed by</Eyebrow>
              <p className="mt-6 font-display text-2xl text-ink">{contact.company}</p>
              <span className="mt-7 block h-px w-full bg-line-strong" />

              <div className="mt-9 space-y-8">
                {contact.offices.map((office) => (
                  <address key={office.label} className="not-italic leading-relaxed">
                    <span className="eyebrow mb-3 block text-copper">{office.label}</span>
                    {office.lines.map((line) => (
                      <span key={line} className="block leading-relaxed text-ink-soft">
                        {line}
                      </span>
                    ))}
                  </address>
                ))}
              </div>

              <BotanicalSprig
                className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 text-copper-warm/20"
              />
            </div>

            <div className="flex flex-col border border-line p-8 md:p-10 lg:col-span-7">
              <Eyebrow tone="muted">Ingredient enquiries</Eyebrow>
              <p className="mt-5 max-w-[40rem] leading-relaxed text-ink-soft">
                The complete ingredient list for every INYVA product is published on its
                own page, exactly as it appears in the product&rsquo;s ingredient
                declaration — so a formula can be checked against a known sensitivity
                before getting in touch.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ArrowLink href="/trade" variant="solid">
                  Trade enquiries
                </ArrowLink>
                <ArrowLink href="/products" variant="outline">
                  Browse the collection
                </ArrowLink>
              </div>

              <ul className="mt-auto grid grid-cols-2 gap-y-8 border-t border-line pt-8 sm:grid-cols-4 md:pt-10">
                {marks.map(({ label, Icon }, i) => (
                  <li
                    key={label}
                    className={`flex flex-col items-center px-2 text-center ${
                      i % 2 === 1 ? "border-l border-line" : ""
                    } sm:border-l sm:first:border-l-0`}
                  >
                    <Icon className="h-7 w-7 text-copper-warm" />
                    <span className="eyebrow mt-4 text-ink">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/**
 * One contact detail. The whole block is the target rather than the address
 * alone, so it stays comfortable to hit on a phone.
 */
function DetailCard({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group flex flex-col items-center justify-center border border-line bg-shell px-6 py-7 text-center transition-colors duration-300 hover:border-line-strong md:py-7"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong text-copper transition-colors duration-300 group-hover:border-copper">
        {icon}
      </span>
      <span className="eyebrow mt-5 text-muted">{label}</span>
      <span className="link-underline mt-4 font-display text-xl text-ink transition-colors duration-300 group-hover:text-copper md:text-2xl">
        {value}
      </span>
    </a>
  );
}

/** The site's button, with an arrow that steps forward on hover. */
function ArrowLink({
  href,
  children,
  variant,
}: {
  href: string;
  children: ReactNode;
  variant: "solid" | "outline";
}) {
  const styles =
    variant === "solid"
      ? "bg-ink text-cream hover:bg-copper"
      : "border border-line-strong text-ink hover:border-ink";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 px-9 py-4 eyebrow transition-colors duration-300 ${styles}`}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}
