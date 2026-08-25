import { Button, Container, Eyebrow } from "@/components/ui/primitives";

export function ClosingCta() {
  return (
    <section className="reveal">
      <Container className="py-24 text-center md:py-32">
        <Eyebrow className="mb-7">The full range</Eyebrow>
        <h2 className="display-lg mx-auto max-w-2xl">
          Fourteen formulations, each with its ingredients in full
        </h2>
        <p className="mx-auto mt-7 max-w-lg text-muted">
          Cleansers, masks and scrubs, serums and creams, and body care — with benefits and
          directions taken straight from the pack.
        </p>
        <div className="mt-11">
          <Button href="/products">View the collection</Button>
        </div>
      </Container>
    </section>
  );
}
