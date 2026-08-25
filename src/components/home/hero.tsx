import Image from "next/image";
import { Button, Container, Eyebrow } from "@/components/ui/primitives";
import { site } from "@/data/site";

/**
 * The photograph was shot with its left third left empty, so from lg upwards
 * the type sits inside that space rather than beside it. Its ground is within a
 * point or two of the page cream, so the section takes the photograph's own
 * ground and nothing frames it: the two read as a single surface. Below lg
 * there is no room to overlay, and the type stacks above.
 */
export function Hero() {
  return (
    <section className="overflow-hidden bg-[#fcf5ee] pb-16 pt-8 md:pb-24 md:pt-12">
      <Container>
        <div className="relative">
          {/*
            Below lg the type stacks above rather than over, so the empty third
            the photograph reserves for it is cropped away and the frame closes
            in on the product. From lg the full width is shown again.
          */}
          <div className="relative aspect-square w-full overflow-hidden lg:aspect-16/9">
            <Image
              src="/editorial/hero-lifestyle.webp"
              alt="INYVA Queen's Time Reverse Age Defying Rejuvenating Cream, held up to the light"
              fill
              priority
              sizes="(min-width: 1256px) 1176px, 100vw"
              className="object-cover object-[100%_50%] lg:object-[50%_55%]"
            />
          </div>

          <div className="mt-10 lg:absolute lg:inset-y-0 lg:left-0 lg:mt-0 lg:flex lg:w-[46%] lg:flex-col lg:justify-center">
            <Eyebrow className="mb-6">{site.badge}</Eyebrow>
            <h1 className="text-[clamp(2.5rem,1rem+3.4vw,3.9rem)] leading-[1.04] tracking-[-0.02em]">
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
        </div>
      </Container>
    </section>
  );
}
