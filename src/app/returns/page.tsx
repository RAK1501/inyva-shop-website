import type { Metadata } from "next";
import { LegalList, LegalPage } from "@/components/legal/legal-page";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description:
    "When an INYVA product can be returned, what condition it needs to be in, and how a refund or exchange is handled.",
};

const email = contact.email;

export default function ReturnsPage() {
  return (
    <LegalPage
      eyebrow="Returns"
      title="Returns & Refunds"
      intro="When a product can come back to us, what condition it needs to be in, and how a refund or exchange is handled."
      sections={[
        {
          heading: "Return eligibility",
          body: (
            <p>
              Products bought directly from us can be returned where they are unused, in
              their original packaging, and returned within the window agreed in your
              order confirmation. If something has arrived damaged or is not what you
              ordered, none of this applies — see below.
            </p>
          ),
        },
        {
          heading: "Return window",
          body: (
            <p>
              The period in which a product can be returned is confirmed with your order,
              since it varies with the destination and any local consumer law that gives
              you a longer right. Nothing here reduces a statutory right you have.
            </p>
          ),
        },
        {
          heading: "Condition of returned products",
          body: (
            <>
              <p>To be accepted, a returned product should be:</p>
              <LegalList
                items={[
                  "Unused and unopened, with any seal intact.",
                  "In its original packaging, including the carton where there was one.",
                  "Complete, with nothing missing from the pack.",
                ]}
              />
              <p>
                We may decline a return, or reduce a refund, where a product comes back in
                a condition that goes beyond what is needed to have examined it.
              </p>
            </>
          ),
        },
        {
          heading: "Non-returnable items",
          body: (
            <>
              <p>For reasons of hygiene and safety, we cannot accept back:</p>
              <LegalList
                items={[
                  "Products that have been opened, used or had their seal broken, unless they are faulty.",
                  "Products returned outside the agreed window.",
                  "Products not bought directly from us.",
                ]}
              />
            </>
          ),
        },
        {
          heading: "How to start a return",
          body: (
            <>
              <p>
                Write to{" "}
                <a href={`mailto:${email}`} className="link-underline text-copper">
                  {email}
                </a>{" "}
                before sending anything back, with your order details and what you would
                like to do. We will confirm the return address and how to send it.
              </p>
              <p>
                Please do not return a product without hearing from us first — an
                unannounced parcel is difficult to match to an order.
              </p>
            </>
          ),
        },
        {
          heading: "Refund processing",
          body: (
            <>
              <p>
                Once a returned product reaches us and has been checked, we confirm the
                refund by email and issue it by the same method the original payment was
                made.
              </p>
              <p>
                How long it then takes to appear is up to your bank or payment provider
                rather than us.
              </p>
            </>
          ),
        },
        {
          heading: "Exchanges",
          body: (
            <p>
              We are happy to exchange a product for another in the range, subject to
              availability and to any difference in price. Tell us what you would prefer
              when you write to start the return.
            </p>
          ),
        },
        {
          heading: "Damaged or incorrect items",
          body: (
            <>
              <p>
                If a product arrives damaged, or is not what you ordered, tell us within a
                reasonable time of receiving it. A photograph of the product and its
                packaging helps us sort it out quickly.
              </p>
              <p>
                In that case you will not be out of pocket: we will replace it or refund
                it in full, including what you paid for delivery, and we will cover the
                cost of returning it.
              </p>
            </>
          ),
        },
        {
          heading: "Contact us",
          body: (
            <p>
              Anything about a return can go to{" "}
              <a href={`mailto:${email}`} className="link-underline text-copper">
                {email}
              </a>
              , or to the phone number on our{" "}
              <a href="/contact" className="link-underline text-copper">
                contact page
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
