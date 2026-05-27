"use client";
import { useMemo, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FilterSidebar from "@/components/FilterSidebar";
import ItemGrid from "@/components/ItemGrid";
import SortDropdown, { type SortKey } from "@/components/SortDropdown";
import { items } from "@/lib/mockData";

export default function CatalogPage() {
  const [sort, setSort] = useState<SortKey>("relevance");

  const sortedItems = useMemo(() => {
    const arr = [...items];
    switch (sort) {
      case "newest":
        return arr.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
      case "price-asc":
        return arr.sort((a, b) => a.price - b.price);
      case "price-desc":
        return arr.sort((a, b) => b.price - a.price);
      default:
        return arr;
    }
  }, [sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Catalog" }]}
      />
      <h1 className="mb-6 mt-2 text-2xl font-bold md:text-3xl">Catalog</h1>

      <div className="grid gap-6 md:grid-cols-[240px_1fr]">
        <div className="hidden self-start md:sticky md:top-20 md:block">
          <FilterSidebar />
        </div>

        <div>
          <button
            type="button"
            className="mb-4 w-full rounded-full border border-neutral-300 py-2 text-sm font-semibold md:hidden"
          >
            Filters
          </button>

          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-neutral-600">
              Showing {sortedItems.length} items
            </p>
            <SortDropdown value={sort} onChange={setSort} />
          </div>

          <ItemGrid items={sortedItems} />
        </div>
      </div>
    </div>
  );
}
