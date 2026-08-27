import type { Metadata } from "next";
import { LegalList, LegalPage } from "@/components/legal/legal-page";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description:
    "What INYVA collects when you use this site or get in touch, how it is used, and how to ask for it to be removed.",
};

const email = contact.email;

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="What we collect when you use this site or get in touch, what we do with it, and how to ask us to remove it."
      sections={[
        {
          heading: "Information we collect",
          body: (
            <>
              <p>
                This site is operated by {contact.company}, of{" "}
                {contact.offices[0].lines.join(", ")}, which is responsible for the
                information described here.
              </p>
              <p>
                We only collect what you choose to give us. Both forms on this site ask
                for the details we need to reply:
              </p>
              <LegalList
                items={[
                  "Trade enquiries: your name, company, email address, country, business type, and anything else you write in the message.",
                  "Order requests: your name, email address, delivery city and country, and the products you have selected.",
                  "A phone number, if you choose to give one. It is never required.",
                ]}
              />
              <p>
                We do not ask for payment details anywhere on this site, and there is no
                way to enter them. Nothing here processes a payment.
              </p>
            </>
          ),
        },
        {
          heading: "How we use your information",
          body: (
            <>
              <p>
                To answer you. A trade enquiry is used to respond about stocking the
                range; an order request is used to confirm availability and to arrange
                how an order would be completed.
              </p>
              <p>
                We do not sell your information, and we do not add you to a mailing list
                on the strength of an enquiry.
              </p>
            </>
          ),
        },
        {
          heading: "Cookies and analytics",
          body: (
            <>
              <p>
                This site sets no advertising or tracking cookies, and runs no analytics
                or third-party tracking scripts.
              </p>
              <p>
                Your basket is kept in your own browser&rsquo;s local storage so it
                survives a page reload. It stays on your device, is never sent to us
                until you submit an order request, and clearing your browser data removes
                it.
              </p>
            </>
          ),
        },
        {
          heading: "Do Not Track signals",
          body: (
            <>
              <p>
                Some browsers can send a &ldquo;Do Not Track&rdquo; signal asking sites
                not to follow you across the web. There is no agreed standard for how a
                site should answer one, so many say nothing at all. Ours is simple:
              </p>
              <p>
                We do not track you across other websites or over time, whether or not
                you send the signal, because there is nothing here that does it. No
                analytics, no advertising network and no tracking cookie is present on
                this site, so a Do Not Track signal has nothing to switch off.
              </p>
            </>
          ),
        },
        {
          heading: "How we share information",
          body: (
            <>
              <p>
                Form submissions are delivered to us by Web3Forms, which handles the message
                in transit and passes it to our inbox. Beyond that, we share what you send
                us only where we are required to by law.
              </p>
              <p>
                We do not share your information with advertisers, data brokers or
                marketing networks.
              </p>
            </>
          ),
        },
        {
          heading: "Data retention",
          body: (
            <p>
              We keep enquiries for as long as we need them to deal with your request and
              to keep a record of our correspondence. If you would like yours deleted
              sooner, write to us and we will remove it.
            </p>
          ),
        },
        {
          heading: "Your privacy rights",
          body: (
            <>
              <p>
                Depending on where you live, you may have the right to ask what we hold
                about you, to have it corrected, to have it deleted, or to object to our
                using it. You can exercise any of these by writing to us.
              </p>
              <p>
                We will not treat you differently for asking, and we will not charge you
                for it.
              </p>
            </>
          ),
        },
        {
          heading: "Data security",
          body: (
            <p>
              This site is served over an encrypted connection, and form submissions are
              encrypted in transit. No method of transmission over the internet is
              completely secure, so while we take reasonable measures to protect what you
              send us, we cannot guarantee absolute security.
            </p>
          ),
        },
        {
          heading: "Third-party services",
          body: (
            <p>
              We use Web3Forms to deliver form submissions, and the platform hosting this
              site processes the requests your browser makes to it. Each operates under
              its own privacy terms. We do not embed advertising networks, social media
              trackers or analytics providers.
            </p>
          ),
        },
        {
          heading: "Children's privacy",
          body: (
            <p>
              This site is not directed at children, and we do not knowingly collect
              information from anyone under 13. If you believe a child has sent us their
              details, write to us and we will delete them.
            </p>
          ),
        },
        {
          heading: "Changes to this policy",
          body: (
            <p>
              We may update this policy as the business changes. Any revised version will
              be published on this page.
            </p>
          ),
        },
        {
          heading: "Contact us",
          body: (
            <p>
              Questions about this policy, or a request about your own information, can go
              to{" "}
              <a href={`mailto:${email}`} className="link-underline text-copper">
                {email}
              </a>{" "}
              or to the address on our{" "}
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
