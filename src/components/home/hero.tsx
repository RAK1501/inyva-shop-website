import Image from "next/image";
import { Button, Container, Eyebrow } from "@/components/ui/primitives";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="overflow-hidden pb-20 pt-12 md:pb-28 md:pt-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
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

          {/* Two frames, staggered, so the eye travels rather than stopping. */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto grid max-w-md grid-cols-5 items-end gap-4 sm:max-w-xl lg:ml-auto lg:mr-0 lg:max-w-none lg:gap-6">
              <div className="col-span-3 lg:col-start-1">
                <div className="relative aspect-4/5 overflow-hidden bg-shell">
                  <Image
                    src="/editorial/hero.webp"
                    alt="INYVA Queen's Time Reverse Age Defying Rejuvenating Cream"
                    fill
                    priority
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 22rem, 55vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="col-span-2 pb-8 lg:pb-16">
                <div className="relative aspect-4/5 overflow-hidden bg-shell">
                  <Image
                    src="/editorial/hero-2.webp"
                    alt="INYVA Elixir Radiance 3-in-1 Dry Beauty Oil"
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 15rem, 37vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 hidden text-sm leading-snug text-muted lg:block">
                  Fourteen formulations, each declared in full.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
