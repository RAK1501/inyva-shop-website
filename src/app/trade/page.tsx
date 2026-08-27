import type { Metadata } from "next";
import { TradeForm } from "./trade-form";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/trade" },
  title: "Trade Enquiries",
  description:
    "Wholesale and distribution enquiries for the INYVA range — fourteen formulations across cleansers, masks and scrubs, serums and creams, and body care.",
};

export default function TradePage() {
  return (
    <>
      <section className="pb-12 pt-16 md:pb-16 md:pt-24">
        <Container>
          <Eyebrow className="mb-7">Trade</Eyebrow>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <h1 className="display-hero lg:col-span-7">
              Stock the
              <br />
              <span className="text-copper">collection</span>
            </h1>
            <p className="max-w-md self-end text-lg leading-relaxed text-ink-soft lg:col-span-5">
              Fourteen formulations, every ingredient declared in full. Tell us about
              your business and we will come back to you.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-14 md:py-20">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <TradeForm />
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <p className="eyebrow text-muted">Or reach us directly</p>
              <a
                href={`mailto:${contact.email}`}
                className="link-underline mt-5 inline-block font-display text-2xl text-ink transition-colors hover:text-copper"
              >
                {contact.email}
              </a>
              <ul className="mt-5 space-y-1">
                {contact.phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={`tel:${phone.href}`}
                      className="link-underline inline-flex min-h-11 items-center text-ink-soft transition-colors hover:text-copper"
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-line pt-6">
                <p className="eyebrow text-muted">Marketed by</p>
                <p className="mt-4 font-display text-lg text-ink">{contact.company}</p>
                <div className="mt-4 space-y-4">
                  {contact.offices.map((office) => (
                    <address
                      key={office.label}
                      className="not-italic text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="eyebrow block text-muted">{office.label}</span>
                      {office.lines.map((line) => (
                        <span key={line} className="mt-1 block">
                          {line}
                        </span>
                      ))}
                    </address>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
