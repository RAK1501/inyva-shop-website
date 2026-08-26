import type { Metadata } from "next";
import { Button, Container, Eyebrow } from "@/components/ui/primitives";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach INYVA by email or phone, and the offices the range is marketed from.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pb-14 pt-16 md:pb-20 md:pt-24">
        <Container>
          <Eyebrow className="mb-7">Contact</Eyebrow>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <h1 className="display-hero lg:col-span-7">Talk to us</h1>
            <p className="max-w-md self-end text-lg leading-relaxed text-ink-soft lg:col-span-5">
              Questions about a formula or one of its ingredients? Reach the team on
              any of the details below.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-10">
            <div>
              <p className="eyebrow text-muted">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="link-underline mt-5 inline-block font-display text-2xl text-ink transition-colors hover:text-copper md:text-3xl"
              >
                {contact.email}
              </a>
            </div>

            <div>
              <p className="eyebrow text-muted">Phone</p>
              <ul className="mt-5 space-y-2">
                {contact.phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={`tel:${phone.href}`}
                      className="link-underline inline-block font-display text-2xl text-ink transition-colors hover:text-copper md:text-3xl"
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-shell">
        <Container className="py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="eyebrow text-muted">Marketed by</p>
              <p className="mt-5 font-display text-xl text-ink">{contact.company}</p>
              <div className="mt-6 space-y-6">
                {contact.offices.map((office) => (
                  <address
                    key={office.label}
                    className="not-italic leading-relaxed text-ink-soft"
                  >
                    <span className="eyebrow block text-copper">{office.label}</span>
                    {office.lines.map((line) => (
                      <span key={line} className="mt-1 block">
                        {line}
                      </span>
                    ))}
                  </address>
                ))}
              </div>
            </div>

            <div className="md:col-span-7">
              <p className="eyebrow text-muted">Ingredient enquiries</p>
              <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
                The complete ingredient list for every INYVA product is published on its
                own page, exactly as it appears in the product’s ingredient
                declaration — so a formula can be checked against a known sensitivity
                before getting in touch.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/trade">Trade enquiries</Button>
                <Button href="/products" variant="outline">
                  Browse the collection
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
