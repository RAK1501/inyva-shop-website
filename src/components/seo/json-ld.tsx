/**
 * Structured data. Deliberately omits `offers` and `aggregateRating`:
 * there are no prices and no reviews, and declaring either would be false.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Built from our own product data, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
