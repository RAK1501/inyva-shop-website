import type { Metadata } from "next";
import { LegalList, LegalPage } from "@/components/legal/legal-page";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/shipping" },
  title: "Shipping Policy",
  description:
    "How an INYVA order is processed, where we ship, and how delivery costs and timings are confirmed.",
};

const email = contact.email;

export default function ShippingPage() {
  return (
    <LegalPage
      eyebrow="Shipping"
      title="Shipping Policy"
      intro="How an order moves from request to confirmation to dispatch, and how costs and timings are agreed."
      sections={[
        {
          heading: "Order processing",
          body: (
            <>
              <p>
                An order request sent from this site reaches us as an enquiry. We check
                availability and come back to you by email to confirm the items, the
                price and the delivery arrangements.
              </p>
              <p>
                Nothing is dispatched, and nothing is charged, until that confirmation has
                been agreed with you.
              </p>
            </>
          ),
        },
        {
          heading: "Shipping destinations",
          body: (
            <p>
              We are able to ship to a number of destinations, and the options available
              to you depend on where you are. Tell us your delivery city and country in
              your order request and we will confirm what we can offer.
            </p>
          ),
        },
        {
          heading: "Estimated delivery times",
          body: (
            <>
              <p>
                Delivery timing depends on the destination and the carrier, so we confirm
                an estimate with you when we confirm the order rather than quoting one in
                advance.
              </p>
              <p>
                Any estimate we give is exactly that. It is not a guaranteed delivery
                date.
              </p>
            </>
          ),
        },
        {
          heading: "Shipping costs",
          body: (
            <p>
              Shipping is quoted per order, based on destination, weight and the service
              used. The cost is set out in your order confirmation before anything is
              agreed, so you will never be asked to accept a charge you have not seen.
            </p>
          ),
        },
        {
          heading: "Order tracking",
          body: (
            <p>
              Where the service used provides tracking, we send the details by email once
              the order is dispatched.
            </p>
          ),
        },
        {
          heading: "Delays and exceptions",
          body: (
            <>
              <p>Some things are outside our control, among them:</p>
              <LegalList
                items={[
                  "Customs clearance and any duties or taxes applied on import.",
                  "Carrier delays, severe weather and other disruption.",
                  "Public holidays in the destination country.",
                  "Failed delivery attempts where no one is available to receive the parcel.",
                ]}
              />
              <p>
                Where an order is held up, we will tell you as soon as we know and keep
                you posted.
              </p>
            </>
          ),
        },
        {
          heading: "Incorrect shipping information",
          body: (
            <p>
              Please check the delivery details you give us. An address that is incomplete
              or incorrect can delay an order or cause it to be returned, and any cost of
              redelivery may be passed on. If you spot a mistake, write to us straight
              away — we can usually correct it before dispatch.
            </p>
          ),
        },
        {
          heading: "Lost or damaged packages",
          body: (
            <p>
              If your order arrives damaged, or does not arrive at all, tell us as soon as
              you can and keep the packaging where there is any. We will investigate with
              the carrier and put it right. Our{" "}
              <a href="/returns" className="link-underline text-copper">
                returns and refunds policy
              </a>{" "}
              sets out what happens next.
            </p>
          ),
        },
        {
          heading: "Contact us",
          body: (
            <p>
              Questions about shipping can go to{" "}
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
