import Image from "next/image";
import { Button, Container, Eyebrow } from "@/components/ui/primitives";

/**
 * The single dark editorial moment on the homepage. Copy is the
 * "INYVA Expertise" paragraph printed on every carton.
 */
export function CollagenBand() {
  return (
    <section aria-labelledby="collagen-heading" className="bg-ink text-cream/75">
      <Container className="py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden bg-ink-soft lg:max-w-none">
              <Image
                src="/editorial/collagen.webp"
                alt="INYVA Queen's Time Reverse Elixir Youth Face Serum"
                fill
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 24rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <Eyebrow tone="cream" className="mb-7">
              Collagen Boost Skincare
            </Eyebrow>
            <h2 id="collagen-heading" className="display-lg text-cream">
              One idea, printed on every pack
            </h2>
            <span className="rule-copper mt-8" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed">
              Bioactive collagen, meeting trendsetting ingredients. A commitment to science
              and nature that is meant to show as natural radiance, enhanced vitality and
              results that hold.
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-cream/60">
              In practice that means hydrolyzed collagen and elastin alongside hyaluronic
              acid and peptides — and, sitting beside them in the same formula, Ashwagandha,
              Shatavari, Brahmi, Manjistha and Amla.
            </p>
            <div className="mt-11">
              <Button href="/about" variant="outlineLight">
                Read our story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
