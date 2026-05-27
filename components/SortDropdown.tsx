"use client";

export type SortKey = "relevance" | "newest" | "price-asc" | "price-desc";

type Props = {
  value: SortKey;
  onChange: (key: SortKey) => void;
};

export default function SortDropdown({ value, onChange }: Props) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="text-neutral-600">Sort by:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortKey)}
        className="rounded-md border border-neutral-300 px-2 py-1 text-sm"
      >
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
        <option value="price-asc">Price: low to high</option>
        <option value="price-desc">Price: high to low</option>
      </select>
    </label>
  );
}
