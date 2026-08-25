import { Button, Container, Eyebrow } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <Container className="py-32 text-center md:py-44">
      <Eyebrow className="mb-6">Page not found</Eyebrow>
      <h1 className="display-lg mx-auto max-w-lg">
        We could not find the page you were looking for
      </h1>
      <div className="mt-10">
        <Button href="/products">View the collection</Button>
      </div>
    </Container>
  );
}
