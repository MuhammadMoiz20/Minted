import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Seller } from "@/lib/types";

export default function SellerCard({ seller }: { seller: Seller }) {
  const filled = Math.round(seller.rating);
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 p-4">
      <Image
        src={seller.avatar}
        alt={seller.username}
        width={48}
        height={48}
        className="rounded-full object-cover"
      />
      <div className="flex-1">
        <p className="font-semibold">{seller.username}</p>
        <div className="mt-0.5 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < filled
                  ? "fill-yellow-400 stroke-yellow-400"
                  : "stroke-neutral-300"
              }
            />
          ))}
          <span className="ml-1 text-sm text-neutral-500">
            {seller.reviewCount} reviews
          </span>
        </div>
        <Link
          href="#"
          className="mt-1 inline-block text-sm font-semibold text-brand"
        >
          View profile
        </Link>
      </div>
    </div>
  );
}
