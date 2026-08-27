# INYVA — Collagen Boost Skincare

Version 1 of the INYVA brand and product discovery website. Fourteen products across
four categories, each with its benefits, directions and complete ingredient list.

Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

## Running it

```bash
npm install
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server on http://localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Routes

```
/                      Home
/products              All 14, filterable by category
/products/[slug]       14 statically generated product pages
/about                 Brand story and philosophy
/contact               Contact details
```

## Structure

```
src/
├─ app/                routes, metadata, global styles, favicon
├─ components/
│  ├─ layout/          header, mobile nav, footer
│  ├─ home/            homepage sections
│  ├─ products/        card, gallery, expandable detail sections
│  └─ ui/              container, button, headings, labels
├─ data/               products, categories, site and contact details
└─ lib/                product lookups
public/
├─ products/<slug>/    3–4 optimised WebP images per product
├─ editorial/          homepage and about imagery
└─ brand/              logo, wordmark and mark, in three colourways
```

`src/data/products.ts` is the single source of truth for the catalogue — product
listing, featured products, category filtering and the dynamic product pages all
read from it.

## Content

Every word and image comes from the supplied source material:

- **Names, descriptors, key actives, sizes** — read off the packaging in the product
  photography.
- **Benefits and positioning** — the INYVA brochure, rewritten for the web.
- **Directions** — verbatim from the "How to use" panel on each carton or tube.
- **Ingredients** — verbatim from the updated ingredients document, which takes
  precedence over anything else.
- **Contact details and the marketed-by address** — the brochure's back page and
  the regulatory panel printed on the packs.
- **Claim marks** — read icon by icon off each product's own pack. The set is not
  uniform: Queen's Time Reverse carries "Natural actives" where the rest carry
  "Vegan". A vegan mark is also withheld from Starlite Radiance and Cleanse Core,
  whose packs show it but whose ingredient lists contain beeswax — the ingredients
  document is the source of truth, so the claim is not repeated here.

Nothing is invented. Where information does not exist — prices, reviews, ratings,
stock, social accounts, a net content for five of the products — it is simply absent
rather than filled in.

## Images

The raw photography (350 frames, ~2 GB) lives outside the repository and is never
copied into `public/`. Around fifty frames were selected, then framed and exported
by a one-off script:

- **One shared crop for every frame.** The shoot is tripod-consistent — one product
  at a time, on the same mark, on a white surface against a grey wall. Measured
  across the selected frames the surface's back edge sits at 0.729 of frame height
  and the product's centre at 0.500 of frame width. A single crop therefore keeps
  every product's true relative size while giving the whole grid one floor line.
- **A bounded tone balance.** A gamma curve pulls the grey wall towards a common
  value; the exponent is clamped so the white surface stays white and product
  colours barely move.
- Output is WebP at 1100px on the long edge — 62 files, about 2.6 MB in total.

## Licence

Brand assets, product photography and copy are the property of NeuraNest Retail Pvt Ltd.

## Deployment

Hosted on Vercel and deployed from `main` — every push to that branch builds and promotes to production.

The deploying repository is `RAK1501/inyva-shop-website` and the Vercel project is `inyva-shop-website`. On the Hobby plan a production build only runs when the tip commit on `main` is authored by the account owner, so other contributors' work lands through pull requests merged there.

Production is https://www.inyva.shop; the apex `inyva.shop` 308-redirects to it. DNS stays at GoDaddy: an A record on `@` and a CNAME on `www` point at Vercel, alongside the existing mail records.

`NEXT_PUBLIC_WEB3FORMS_KEY` must be set on the host — Production, Preview and Development. Without it the enquiry forms have no endpoint.
