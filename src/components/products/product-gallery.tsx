"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ProductImage } from "@/data/products";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const active = images[index];

  const openZoom = () => setZoomed(true);
  const closeZoom = useCallback(() => setZoomed(false), []);
  const step = useCallback(
    (delta: number) => setIndex((i) => (i + delta + images.length) % images.length),
    [images.length],
  );

  return (
    <div>
      <button
        type="button"
        onClick={openZoom}
        aria-label={`Enlarge image: ${active.alt}`}
        className="relative block aspect-4/5 w-full cursor-zoom-in overflow-hidden bg-shell"
      >
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          priority
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover"
        />
      </button>

      {images.length > 1 ? (
        <ul className="mt-3 grid grid-cols-4 gap-3">
          {images.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View image ${i + 1} of ${images.length}`}
                aria-current={i === index}
                className={`relative block aspect-4/5 w-full overflow-hidden bg-shell transition-opacity duration-300 ${
                  i === index ? "opacity-100" : "opacity-55 hover:opacity-85"
                }`}
              >
                <Image src={image.src} alt="" fill sizes="140px" className="object-cover" />
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-px transition-colors duration-300 ${
                    i === index ? "bg-ink" : "bg-transparent"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {zoomed ? (
        <Lightbox
          images={images}
          index={index}
          onClose={closeZoom}
          onStep={step}
          onSelect={setIndex}
        />
      ) : null}
    </div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onStep,
  onSelect,
}: {
  images: ProductImage[];
  index: number;
  onClose: () => void;
  onStep: (delta: number) => void;
  onSelect: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = images[index];

  // Lock the page, take focus, and wire the keyboard for as long as this is open.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [onClose, onStep]);

  // Rendered into <body>: the gallery lives inside a sticky wrapper, which
  // creates a stacking context an overlay could never escape. Only ever
  // constructed after a click, so document is guaranteed to exist.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Product images"
      className="fixed inset-0 z-[100] flex flex-col bg-ink"
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-8">
        <p className="eyebrow text-cream/60">
          {index + 1} / {images.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-cream/70 transition-colors hover:text-cream"
        >
          <span className="sr-only">Close</span>
          <span aria-hidden="true" className="relative block h-4 w-4">
            <span className="absolute left-0 top-1/2 block h-px w-4 rotate-45 bg-current" />
            <span className="absolute left-0 top-1/2 block h-px w-4 -rotate-45 bg-current" />
          </span>
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 pb-2 md:px-16">
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={1800}
          height={2250}
          quality={82}
          // The point of this view is detail, so ask for the largest candidate
          // rather than one sized to the box. It is only fetched on open.
          sizes="100vw"
          className="h-full max-h-full w-auto max-w-full object-contain"
        />

        {images.length > 1 ? (
          <>
            <ArrowButton side="left" onClick={() => onStep(-1)} />
            <ArrowButton side="right" onClick={() => onStep(1)} />
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="flex justify-center gap-1 px-5 pb-2">
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => onSelect(i)}
                aria-label={`View image ${i + 1}`}
                aria-current={i === index}
                className="group flex h-11 w-11 items-center justify-center"
              >
                <span
                  aria-hidden="true"
                  className={`block h-1 w-8 transition-colors duration-300 ${
                    i === index
                      ? "bg-copper-warm"
                      : "bg-cream/25 group-hover:bg-cream/50"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>,
    document.body,
  );
}

function ArrowButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-cream/60 transition-colors hover:text-cream ${
        side === "left" ? "left-0 md:left-2" : "right-0 md:right-2"
      }`}
    >
      <span className="sr-only">{side === "left" ? "Previous image" : "Next image"}</span>
      <span
        aria-hidden="true"
        className={`block h-3 w-3 border-current ${
          side === "left" ? "rotate-45 border-b border-l" : "-rotate-45 border-b border-r"
        }`}
      />
    </button>
  );
}
