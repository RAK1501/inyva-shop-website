import Image from "next/image";
import { Button, Container, Eyebrow } from "@/components/ui/primitives";
import { site } from "@/data/site";

/**
 * The photograph runs the full width of the viewport, and from lg upwards the
 * type sits inside the empty third the shot reserves for it rather than beside
 * it. The section carries the photograph's own ground so no edge shows where
 * one ends and the other begins. Below lg there is no room to overlay: the type
 * stacks under a square crop that closes in on the product.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fcf5ee] pb-16 md:pb-20 lg:pb-0">
      <div className="relative aspect-square w-full lg:aspect-16/9 lg:max-h-[46rem]">
        <Image
          src="/editorial/hero-lifestyle-v2.webp"
          alt="INYVA Queen's Time Reverse Age Defying Rejuvenating Cream, held up to the light"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-[100%_50%] lg:object-[50%_55%]"
        />
      </div>

      <div className="lg:absolute lg:inset-0">
        <Container className="mt-10 lg:mt-0 lg:h-full">
          <div className="lg:flex lg:h-full lg:w-[44%] lg:flex-col lg:justify-center">
            <Eyebrow className="mb-6">{site.badge}</Eyebrow>
            <h1 className="text-[clamp(2.5rem,1rem+3.2vw,3.75rem)] leading-[1.04] tracking-[-0.02em]">
              Nature&rsquo;s wisdom.
              <br />
              <span className="text-copper">Scientific innovation.</span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft lg:max-w-sm lg:text-base">
              Named actives — collagen, elastin, hyaluronic acid, niacinamide,
              peptides — formulated alongside Ayurvedic botanicals, with the full list
              printed on every pack.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/products">Explore the collection</Button>
              <Button href="/about" variant="outline">
                Our story
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
