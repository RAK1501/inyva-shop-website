import Image from "next/image";
import { Button, Container, Eyebrow } from "@/components/ui/primitives";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Eyebrow className="mb-7">{site.badge}</Eyebrow>
            <h1 className="display-hero">
              Nature&rsquo;s wisdom.
              <br />
              <span className="text-copper">Scientific innovation.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
              Named actives — collagen, elastin, hyaluronic acid, niacinamide,
              peptides — formulated alongside Ayurvedic botanicals, with the full list
              printed on every pack.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/products">Explore the collection</Button>
              <Button href="/about" variant="outline">
                Our story
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden bg-shell lg:max-w-none">
              <Image
                src="/editorial/hero.webp"
                alt="INYVA Queen's Time Reverse Age Defying Rejuvenating Cream"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, (min-width: 640px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
