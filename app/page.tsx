import Image from "next/image";
import Link from "next/link";
import CategoryTile from "@/components/CategoryTile";
import ItemGrid from "@/components/ItemGrid";
import { items } from "@/lib/mockData";
import type { Category } from "@/lib/types";

const CATEGORIES: Category[] = [
  "Women",
  "Men",
  "Kids",
  "Home",
  "Electronics",
  "Entertainment",
];

const BRANDS = [
  "Zara",
  "H&M",
  "Nike",
  "Adidas",
  "Uniqlo",
  "Mango",
  "ASOS",
  "Levi's",
  "COS",
  "Arket",
];

export default function Home() {
  const newlyListed = [...items]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 10);

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand/10">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Buy and sell pre-loved fashion
              </h1>
              <p className="mt-4 max-w-xl text-lg text-neutral-700">
                Give your wardrobe a second life. Buy from real people, sell
                what you don&apos;t wear.
              </p>
              <Link
                href="#"
                className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white"
              >
                Sell now
              </Link>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://picsum.photos/seed/minted-hero/800/600"
                alt="Pre-loved fashion"
                width={800}
                height={600}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shop by category */}
      <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <h2 className="mb-6 text-2xl font-bold">Shop by category</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {CATEGORIES.map((name) => (
            <CategoryTile
              key={name}
              name={name}
              image={`https://picsum.photos/seed/cat-${name.toLowerCase()}/400/400`}
              href={`/catalog?category=${name}`}
            />
          ))}
        </div>
      </section>

      {/* Popular brands */}
      <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <h2 className="mb-6 text-2xl font-bold">Popular brands</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {BRANDS.map((brand) => (
            <a
              key={brand}
              href="#"
              className="shrink-0 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:border-brand hover:text-brand"
            >
              {brand}
            </a>
          ))}
        </div>
      </section>

      {/* Newly listed */}
      <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Newly listed</h2>
          <Link href="/catalog" className="text-sm font-semibold text-brand">
            See all →
          </Link>
        </div>
        <ItemGrid items={newlyListed} />
      </section>
    </div>
  );
}
