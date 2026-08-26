import type { ReactNode } from "react";

/**
 * Thin line glyphs for the contact page, drawn on the same 24px grid and at the
 * same weight as the ingredient index so the two sets read as one family.
 * Decorative throughout — every one sits beside a label that carries the
 * meaning — so they are hidden from assistive technology.
 */
function Glyph({ children, className = "" }: { children: ReactNode; className?: string }) {
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
      {children}
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <rect x="2.5" y="5" width="19" height="14" rx="0.5" />
      <path d="m2.5 6.4 9.5 6.6 9.5-6.6" />
    </Glyph>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M8.2 3.5 10 7.4l-2 1.6a11 11 0 0 0 5.6 5.6l1.6-2 3.9 1.8v3.4c0 .8-.7 1.4-1.5 1.3C10.4 19.9 4.6 14.1 3.7 6.7c-.1-.8.5-1.5 1.3-1.5h3.2z" />
    </Glyph>
  );
}

/* ---- the four marks ---- */

// A leaf and its stem: the botanical half of the formula.
export function AyurvedaIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M4.5 19.5c0-8 5.5-13.5 15-15-1.5 9.5-7 15-15 15z" />
      <path d="M4.5 19.5C8 16 13 11 19.5 4.5" />
    </Glyph>
  );
}

// A flask: the tested half.
export function ScienceIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M9.5 3v6.2L4.8 17.6A2 2 0 0 0 6.5 20.7h11a2 2 0 0 0 1.7-3.1L14.5 9.2V3" />
      <path d="M8.6 3h6.8" />
      <path d="M7.1 14.4h9.8" />
    </Glyph>
  );
}

// A shoot breaking ground: nothing in the formula that need not be there.
export function CleanIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M12 20.5v-8.2" />
      <path d="M12 13.4c0-3.4-2.6-6-6-6 0 3.4 2.6 6 6 6z" />
      <path d="M12 13.4c0-3.4 2.6-6 6-6 0 3.4-2.6 6-6 6z" />
      <path d="M6.6 20.5h10.8" />
    </Glyph>
  );
}

// The rabbit that appears on every pack.
export function CrueltyFreeIcon({ className }: { className?: string }) {
  return (
    <Glyph className={className}>
      <path d="M9.1 9.6C8.3 7.6 8 5.7 8.2 4c1.7.5 3 1.9 3.8 3.9" />
      <path d="M14.9 9.6c.8-2 1.1-3.9.9-5.6-1.7.5-3 1.9-3.8 3.9" />
      <path d="M12 9.4a5 5 0 0 1 5 5v2.4a3.6 3.6 0 0 1-3.6 3.6h-2.8A3.6 3.6 0 0 1 7 16.8v-2.4a5 5 0 0 1 5-5z" />
      <path d="M10.6 14.2h.01M13.4 14.2h.01" />
    </Glyph>
  );
}

/**
 * A sprig, set very low in tone. Purely decorative furniture for the corner of
 * a text block, so it never competes with the type in front of it.
 */
export function BotanicalSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path d="M20 150C40 110 62 76 108 44" />
      <path d="M52 104c-4-14 1-26 14-31 3 14-2 26-14 31z" />
      <path d="M62 88c11-9 23-9 33 1-11 9-23 9-33-1z" />
      <path d="M76 70c-5-13-1-25 12-31 4 13 0 25-12 31z" />
      <path d="M86 56c11-10 23-11 34-2-10 10-23 11-34 2z" />
      <path d="M100 38c-4-13 1-25 14-30 3 13-2 25-14 30z" />
    </svg>
  );
}
