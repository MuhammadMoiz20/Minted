"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Item } from "@/lib/types";

export default function ItemCard({ item }: { item: Item }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked((v) => !v);
  };

  return (
    <Link href={`/item/${item.id}`} className="group block">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={item.images[0]}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover"
        />
        <button
          type="button"
          onClick={toggleLike}
          aria-label={liked ? "Unlike" : "Like"}
          className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur transition hover:bg-white"
        >
          <Heart
            className={`h-4 w-4 ${liked ? "fill-brand stroke-brand" : "stroke-neutral-700"}`}
          />
        </button>
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium text-neutral-900">{item.brand}</p>
        <p className="text-xs text-neutral-500">{item.size}</p>
        <p className="mt-1 text-sm font-bold text-neutral-900">
          £{item.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
