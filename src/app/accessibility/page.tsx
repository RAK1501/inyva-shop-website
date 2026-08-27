import type { Metadata } from "next";
import { LegalList, LegalPage } from "@/components/legal/legal-page";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/accessibility" },
  title: "Accessibility",
  description:
    "How this site is built to be usable with a keyboard and a screen reader, what has been tested, and how to tell us where it falls short.",
};

const email = contact.email;

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Accessibility"
      intro="How this site is built to be usable however you browse, what has been tested, and how to tell us where it falls short."
      sections={[
        {
          heading: "Our aim",
          body: (
            <p>
              We want this site to be usable whether you browse with a mouse, a keyboard,
              a screen reader, a magnifier, or with motion turned off. We work to the Web
              Content Accessibility Guidelines 2.1 at level AA, which is the standard most
              widely used for consumer websites.
            </p>
          ),
        },
        {
          heading: "What is in place",
          body: (
            <>
              <p>Across every page:</p>
              <LegalList
                items={[
                  "Every image carries alternative text, and images that would only repeat a nearby label are hidden from screen readers rather than described twice.",
                  "Each page has one main heading, headings run in order, and the header, navigation, main content and footer are marked as landmarks.",
                  "A “Skip to content” link is the first thing a keyboard reaches.",
                  "Every form field has a label, and errors are announced rather than shown only in colour.",
                  "Text and background colours are checked against the 4.5:1 contrast requirement.",
                  "Layouts reflow without horizontal scrolling from small phones to wide desktops.",
                  "Animation is reduced automatically if your system asks for that.",
                ]}
              />
            </>
          ),
        },
        {
          heading: "How this is tested",
          body: (
            <p>
              Pages are checked with a keyboard alone, against automated contrast and
              structure tests, and at a range of screen widths. Testing is not a
              substitute for real use, which is why the note below matters more than any
              of it.
            </p>
          ),
        },
        {
          heading: "Where we know we fall short",
          body: (
            <p>
              We have not tested this site with every combination of assistive technology
              and browser, and we have not had it audited independently. If something here
              does not work for you, that is a fault on our side rather than yours.
            </p>
          ),
        },
        {
          heading: "Tell us",
          body: (
            <>
              <p>
                If any part of this site is difficult or impossible to use, please write to{" "}
                <a href={`mailto:${email}`} className="link-underline text-copper">
                  {email}
                </a>{" "}
                and tell us what you were trying to do and what got in the way. It helps
                to know the page and the browser or assistive technology you were using,
                but do not let missing detail stop you writing.
              </p>
              <p>
                We will reply, and if you need the information on a page in another format
                so you can use it in the meantime, ask and we will send it.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
