import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/lib/mockData";

type Props = { listing: Listing };

export default function ListingCard({ listing }: Props) {
  const { id, title, images, price, views, favourites, sold } = listing;

  return (
    <div className="flex flex-col">
      <Link
        href={`/item/${id}`}
        className="relative block aspect-[3/4] overflow-hidden rounded-md bg-neutral-100"
      >
        <Image
          src={images[0]}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover"
        />
        {sold && (
          <div className="absolute bottom-0 left-0 right-0 bg-[#3a8a4a] text-white text-sm font-semibold px-3 py-1.5">
            Sold
          </div>
        )}
      </Link>

      <div className="mt-2 text-xs text-neutral-700 leading-5">
        <div>{views} {views === 1 ? "view" : "views"}</div>
        <div>{favourites} {favourites === 1 ? "favourite" : "favourites"}</div>
      </div>

      <div className="mt-1 text-sm font-semibold text-neutral-900">
        £{price.toFixed(2)}
      </div>

      <button
        type="button"
        disabled={sold}
        className={
          sold
            ? "mt-2 w-full rounded-md border border-neutral-200 text-neutral-400 text-sm font-semibold py-2 cursor-not-allowed"
            : "mt-2 w-full rounded-md border border-brand text-brand text-sm font-semibold py-2 hover:bg-brand/5"
        }
      >
        Bump
      </button>
    </div>
  );
}
