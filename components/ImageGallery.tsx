"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);
  const main = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
        {main && (
          <Image
            src={main}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {images.map((src, idx) => (
            <button
              key={src + idx}
              type="button"
              onClick={() => setActive(idx)}
              className={`relative aspect-square w-16 shrink-0 cursor-pointer overflow-hidden rounded-md ${
                idx === active
                  ? "ring-2 ring-brand"
                  : "ring-1 ring-neutral-200"
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={src}
                alt={`${alt} thumbnail ${idx + 1}`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
