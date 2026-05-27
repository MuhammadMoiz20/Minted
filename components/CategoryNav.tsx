import Link from "next/link";

const categories = [
  "Women",
  "Men",
  "Designer",
  "Kids",
  "Home",
  "Electronics",
  "Entertainment",
  "Hobbies & collectables",
  "Sports",
];

export default function CategoryNav() {
  return (
    <div className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-5 py-3 overflow-x-auto whitespace-nowrap text-sm">
        {categories.map((c) => (
          <Link
            key={c}
            href="/catalog"
            className="text-neutral-800 hover:text-brand font-medium"
          >
            {c}
          </Link>
        ))}
      </div>
    </div>
  );
}
