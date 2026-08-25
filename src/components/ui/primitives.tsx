import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

export function Eyebrow({
  children,
  tone = "copper",
  className = "",
}: {
  children: ReactNode;
  tone?: "copper" | "muted" | "cream";
  className?: string;
}) {
  const colour =
    tone === "cream"
      ? "text-copper-warm"
      : tone === "muted"
        ? "text-muted"
        : "text-copper";
  return <p className={`eyebrow ${colour} ${className}`}>{children}</p>;
}

/** Primary action: a solid ink block. Deliberately square. */
export function Button({
  href,
  children,
  variant = "solid",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "outlineLight";
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  const base =
    "inline-flex items-center justify-center px-7 py-3.5 eyebrow transition-colors duration-300";
  const styles = {
    solid: "bg-ink text-cream hover:bg-copper",
    outline: "border border-line-strong text-ink hover:border-ink",
    outlineLight: "border border-cream/35 text-cream hover:border-cream",
  }[variant];

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/** A quiet text link with an underline that retracts on hover. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`link-underline eyebrow -my-3 inline-block py-3 ${className}`}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "items-start";
  return (
    <div className={`flex flex-col ${alignment} ${align === "center" ? "max-w-2xl" : "max-w-xl"}`}>
      {eyebrow ? (
        <Eyebrow tone={tone === "light" ? "cream" : "copper"} className="mb-5">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className={`display-lg ${tone === "light" ? "text-cream" : ""}`}>{title}</h2>
      {intro ? (
        <p className={`mt-5 text-balance ${tone === "light" ? "text-cream/70" : "text-muted"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
