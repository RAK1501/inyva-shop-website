import type { Metadata } from "next";
import { LegalList, LegalPage } from "@/components/legal/legal-page";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms on which INYVA makes this site available, and what applies when you send an order request or a trade enquiry.",
};

const email = contact.email;

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms & Conditions"
      intro="The terms on which this site is made available, and what applies when you send us an order request or a trade enquiry."
      sections={[
        {
          heading: "Acceptance of terms",
          body: (
            <p>
              By using this site you agree to these terms. If you do not agree with them,
              please do not use the site.
            </p>
          ),
        },
        {
          heading: "Use of the website",
          body: (
            <p>
              This site is provided for information about the INYVA range and for getting
              in touch with us. You may browse it and share links to it freely. You may
              not use it in any way that damages it, interferes with anyone else&rsquo;s
              use of it, or breaks the law.
            </p>
          ),
        },
        {
          heading: "Product information",
          body: (
            <>
              <p>
                Every product page publishes that product&rsquo;s full ingredient
                declaration exactly as it appears on the pack, so a formula can be checked
                against a known sensitivity before you get in touch. Net contents, marks
                and directions are likewise taken from the packaging.
              </p>
              <p>
                Nothing on this site is medical advice, and no product here is intended to
                diagnose, treat, cure or prevent any condition. Colours may render
                differently between screens.
              </p>
            </>
          ),
        },
        {
          heading: "Pricing and payment",
          body: (
            <>
              <p>
                Prices shown are in US dollars and are indicative. They may change without
                notice, and a price is confirmed only when we confirm your order to you in
                writing.
              </p>
              <p>
                There is no online payment on this site. No card details are collected
                anywhere, and submitting an order request does not charge you.
              </p>
            </>
          ),
        },
        {
          heading: "Orders and acceptance",
          body: (
            <>
              <p>
                Sending an order request is an invitation for us to make you an offer, not
                a completed purchase. It creates no contract between us.
              </p>
              <p>
                A contract only comes into being when we confirm your order to you in
                writing, having checked availability and agreed the price and terms with
                you. We may decline any request.
              </p>
            </>
          ),
        },
        {
          heading: "Shipping and delivery",
          body: (
            <p>
              Where an order is confirmed, delivery arrangements, costs and timings are
              agreed with you as part of that confirmation. Our{" "}
              <a href="/shipping" className="link-underline text-copper">
                shipping policy
              </a>{" "}
              sets out how that works.
            </p>
          ),
        },
        {
          heading: "Returns and refunds",
          body: (
            <p>
              Where an order has been confirmed and fulfilled, our{" "}
              <a href="/returns" className="link-underline text-copper">
                returns and refunds policy
              </a>{" "}
              applies. It does not affect any statutory rights you have.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              The INYVA name, logo, product names, packaging designs, photography and the
              text on this site belong to us or are used with permission. You may not
              reproduce them commercially without our written consent.
            </p>
          ),
        },
        {
          heading: "User conduct",
          body: (
            <>
              <p>When using the forms on this site, you agree not to:</p>
              <LegalList
                items={[
                  "Submit false, misleading or impersonating information.",
                  "Send unsolicited commercial messages through them.",
                  "Attempt to gain unauthorised access to the site or its systems.",
                  "Use automated means to submit them.",
                ]}
              />
            </>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              This site is provided as it is. To the fullest extent the law allows, we are
              not liable for indirect or consequential loss arising from your use of it.
              Nothing in these terms limits liability that cannot lawfully be limited,
              including for death or personal injury caused by negligence, or for fraud.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: (
            <p>
              These terms are governed by the laws applying at our registered place of
              business, and any dispute is subject to the courts there.
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          body: (
            <p>
              We may revise these terms from time to time. The version published on this
              page is the one that applies.
            </p>
          ),
        },
        {
          heading: "Contact information",
          body: (
            <p>
              Questions about these terms can go to{" "}
              <a href={`mailto:${email}`} className="link-underline text-copper">
                {email}
              </a>
              . Our postal address and phone number are on the{" "}
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
