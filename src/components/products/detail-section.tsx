import type { ReactNode } from "react";

/**
 * An expandable panel on the product page. Native <details> so it works
 * without JavaScript and is keyboard-operable by default.
 */
export function DetailSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details open={defaultOpen} className="group border-b border-line">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
        <span className="eyebrow text-ink">{title}</span>
        <span aria-hidden="true" className="relative block h-3 w-3 shrink-0">
          <span className="absolute left-0 top-1/2 block h-px w-3 -translate-y-1/2 bg-copper" />
          <span className="absolute left-1/2 top-0 block h-3 w-px -translate-x-1/2 bg-copper transition-transform duration-300 group-open:scale-y-0" />
        </span>
      </summary>
      <div className="pb-7 text-[0.975rem] leading-relaxed text-ink-soft">{children}</div>
    </details>
  );
}
