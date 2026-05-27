import type { Category, Condition } from "@/lib/types";

const CATEGORIES: Category[] = [
  "Women",
  "Men",
  "Kids",
  "Home",
  "Electronics",
  "Entertainment",
];

const SIZES = ["XS", "S", "M", "L", "XL", "One size"];

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

const CONDITIONS: Condition[] = [
  "New with tags",
  "Very good",
  "Good",
  "Satisfactory",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <summary className="mb-2 cursor-pointer list-none text-sm font-semibold uppercase tracking-wide text-neutral-900">
      {children}
    </summary>
  );
}

export default function FilterSidebar() {
  return (
    <aside className="bg-white text-sm">
      <details open className="border-b border-neutral-200 py-4">
        <SectionHeading>Category</SectionHeading>
        <ul className="space-y-2">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-brand" />
                <span>{c}</span>
              </label>
            </li>
          ))}
        </ul>
      </details>

      <details open className="border-b border-neutral-200 py-4">
        <SectionHeading>Size</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <label
              key={s}
              className="cursor-pointer rounded-full border border-neutral-300 px-3 py-1 text-xs has-[:checked]:border-brand has-[:checked]:bg-brand has-[:checked]:text-white"
            >
              <input type="checkbox" className="hidden" />
              {s}
            </label>
          ))}
        </div>
      </details>

      <details open className="border-b border-neutral-200 py-4">
        <SectionHeading>Brand</SectionHeading>
        <input
          type="text"
          placeholder="Search brands"
          className="mb-3 w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
        />
        <ul className="space-y-2">
          {BRANDS.map((b) => (
            <li key={b}>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-brand" />
                <span>{b}</span>
              </label>
            </li>
          ))}
        </ul>
      </details>

      <details open className="border-b border-neutral-200 py-4">
        <SectionHeading>Condition</SectionHeading>
        <ul className="space-y-2">
          {CONDITIONS.map((c) => (
            <li key={c}>
              <label className="flex items-center gap-2">
                <input type="radio" name="condition" className="accent-brand" />
                <span>{c}</span>
              </label>
            </li>
          ))}
        </ul>
      </details>

      <details open className="py-4">
        <SectionHeading>Price</SectionHeading>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute inset-y-0 left-2 flex items-center text-neutral-500">
              £
            </span>
            <input
              type="number"
              placeholder="Min"
              className="w-full rounded-md border border-neutral-300 py-1 pl-6 pr-2 text-sm"
            />
          </div>
          <div className="relative flex-1">
            <span className="pointer-events-none absolute inset-y-0 left-2 flex items-center text-neutral-500">
              £
            </span>
            <input
              type="number"
              placeholder="Max"
              className="w-full rounded-md border border-neutral-300 py-1 pl-6 pr-2 text-sm"
            />
          </div>
        </div>
      </details>
    </aside>
  );
}
