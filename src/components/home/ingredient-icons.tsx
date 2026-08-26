import type { ReactNode } from "react";

/**
 * Thin line glyphs for the ingredient index. They are decorative — the name
 * set beneath each one carries the meaning — so they are hidden from assistive
 * technology and inherit their colour from the item.
 */
export function IngredientIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      className={className}
    >
      {glyphs[name] ?? glyphs.__fallback}
    </svg>
  );
}

/** Shared outlines, so the family stays consistent across the two rows. */
const DROPLET = "M12 3s-6 6.6-6 10.5a6 6 0 0 0 12 0C18 9.6 12 3 12 3z";
const LEAF = "M4.5 19.5c0-8 5.5-13.5 15-15-1.5 9.5-7 15-15 15z";
const LEAF_VEIN = "M4.5 19.5C8 16 13 11 19.5 4.5";

const wave = (y: number) => `M3.5 ${y}c1.7-2 3.4-2 5.1 0s3.4 2 5.1 0 3.4-2 5.1 0`;

const glyphs: Record<string, ReactNode> = {
  /* ---------------- actives ---------------- */

  // Triple helix, read as three running waves.
  "Hydrolyzed Collagen": (
    <>
      <path d={wave(8)} />
      <path d={wave(12)} />
      <path d={wave(16)} />
    </>
  ),

  // The elastic lattice.
  "Hydrolyzed Elastin": (
    <>
      <path d="M12 3.5 20.5 12 12 20.5 3.5 12z" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5v17" />
    </>
  ),

  // Water held: a drop within a drop.
  "Hyaluronic Acid": (
    <>
      <path d={DROPLET} />
      <path d="M12 11s-2 2.2-2 3.5a2 2 0 0 0 4 0c0-1.3-2-3.5-2-3.5z" />
    </>
  ),

  // Vitamin B3, drawn as its ring.
  Niacinamide: (
    <>
      <path d="M12 3.2 19.6 7.6v8.8L12 20.8 4.4 16.4V7.6z" />
      <circle cx="12" cy="12" r="2.4" />
    </>
  ),

  // Amino acids in a chain.
  Peptides: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="5" cy="7" r="1.4" />
      <circle cx="19" cy="7" r="1.4" />
      <circle cx="5" cy="17" r="1.4" />
      <circle cx="19" cy="17" r="1.4" />
      <path d="m10.2 10.7-3.8-2.6m7.4 2.6 3.8-2.6m-7.4 5.2-3.8 2.6m7.4-2.6 3.8 2.6" />
    </>
  ),

  // Willow-derived: a leaf inside the drop.
  "Salicylic Acid": (
    <>
      <path d={DROPLET} />
      <path d="M9.4 16.1c0-2.6 1.6-4.2 4.2-4.2 0 2.6-1.6 4.2-4.2 4.2z" />
    </>
  ),

  // Tocopherol, an oil drop.
  "Vitamin E": (
    <>
      <path d={DROPLET} />
      <path d="M9.2 14.4a2.8 2.8 0 0 0 2.8 2.8" />
    </>
  ),

  // Provitamin B5.
  Panthenol: (
    <>
      <path d={DROPLET} />
      <path d="M6.4 14.2h11.2" />
    </>
  ),

  /* ---------------- botanicals ---------------- */

  // Madder: leaves in a whorl.
  Madder: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12.5c0-4-3-7-7-7 0 4 3 7 7 7z" />
      <path d="M12 12.5c0-4 3-7 7-7 0 4-3 7-7 7z" />
    </>
  ),

  // A compound leaf, leaflets paired along the rib.
  Neem: (
    <>
      <path d="M12 21V4" />
      <path d="M12 9c-2.6 0-4.4-1.6-4.8-4.2C9.8 4.3 11.6 5.9 12 9z" />
      <path d="M12 9c.4-3.1 2.2-4.7 4.8-4.2C16.4 7.4 14.6 9 12 9z" />
      <path d="M12 15c-2.6 0-4.4-1.6-4.8-4.2 2.6-.5 4.4 1.1 4.8 4.2z" />
      <path d="M12 15c.4-3.1 2.2-4.7 4.8-4.2C16.4 13.4 14.6 15 12 15z" />
    </>
  ),

  // Round leaves stepping up the stem.
  "Water Hyssop": (
    <>
      <path d="M12 21V7" />
      <circle cx="8.2" cy="9.4" r="2.9" />
      <circle cx="15.8" cy="13.6" r="2.9" />
    </>
  ),

  // The gooseberry, ribbed, with its leaf.
  Emblic: (
    <>
      <circle cx="12" cy="14.2" r="5.8" />
      <path d="M9.4 9.2c-.9 3.3-.9 6.7 0 10m5.2-10c.9 3.3.9 6.7 0 10" />
      <path d="M12 8.4V5" />
      <path d="M12 6.4c1.4-1.9 3.3-2.4 4.8-1.9-.1 1.9-1.6 3.3-3.4 3.4" />
    </>
  ),

  // Winter cherry: berries above, root below.
  "Winter Cherry": (
    <>
      <circle cx="9.4" cy="6.6" r="2.4" />
      <circle cx="14.8" cy="8.4" r="1.9" />
      <path d="M12 10.6V21" />
      <path d="M12 14.4c-1.9 1.1-3 2.8-3.4 5.2m3.4-2.4c1.9 1.1 3 2.8 3.4 5.2" />
    </>
  ),

  // Feathered, like the plant's fine foliage.
  "Wild Asparagus": (
    <>
      <path d="M12 21V3.6" />
      <path d="M12 7.4 7.6 5m4.4 2.4L16.4 5m-4.4 6.6L7 9.2m5 2.4 5-2.4m-5 6.6-4.4-2.4m4.4 2.4 4.4-2.4" />
    </>
  ),

  // The pennywort's round leaf.
  "Centella": (
    <>
      <circle cx="12" cy="9.8" r="5.9" />
      <path d="M12 15.7V21" />
      <path d="M12 9.8 7.8 6.2m4.2 3.6 4.2-3.6m-4.2 3.6v5.9" />
    </>
  ),

  // A single pointed leaf.
  "Holy Basil": (
    <>
      <path d={LEAF} />
      <path d={LEAF_VEIN} />
    </>
  ),

  // Two leaves and a bud, the way the leaf is picked.
  "Green Tea": (
    <>
      <path d="M12 20.5c-4.8-1.9-7.6-5.7-7.6-10.6 4.8 1 7.6 4.8 7.6 10.6z" />
      <path d="M12 20.5c0-5.8 2.8-9.6 7.6-10.6 0 4.9-2.8 8.7-7.6 10.6z" />
      <path d="M12 10.4V6.6" />
      <circle cx="12" cy="4.8" r="1.7" />
    </>
  ),

  // The root, branching.
  Liquorice: (
    <>
      <path d="M6.4 3.8c2.9 3 2.9 6 5.8 8.2s3 5.2 5.6 8.2" />
      <path d="m12.2 12-4.4 1.4m6.6 3.2 3.8-1.4M9.4 7.2 5.2 8.4" />
    </>
  ),

  __fallback: (
    <>
      <path d={LEAF} />
      <path d={LEAF_VEIN} />
    </>
  ),
};
