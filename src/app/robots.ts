import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

/**
 * Only the brand domain is offered to search engines. Staging serves the same
 * pages, and each build canonicalises to itself, so an indexed staging deploy
 * would compete with production for the same terms. Matching on the domain
 * rather than on one exact address keeps apex and www both crawlable, and
 * follows the site if it is ever moved to a different host.
 */
const isProduction = new URL(siteUrl).hostname.endsWith("inyva.shop");

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
