import Link from "next/link";
import Image from "next/image";
import { Search, Heart, Menu } from "lucide-react";
import { currentUser } from "@/lib/mockData";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b border-neutral-200 z-40">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        <Link
          href="/"
          className="text-2xl font-bold text-brand shrink-0"
          aria-label="Minted home"
        >
          Minted
        </Link>

        <div className="hidden md:flex flex-1 items-center">
          <label className="relative w-full">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
              size={18}
              aria-hidden
            />
            <input
              type="search"
              placeholder="Search for items"
              className="w-full rounded-full bg-neutral-100 pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-brand"
            />
          </label>
        </div>

        <div className="flex-1 md:hidden" />

        <nav className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Sell now
          </button>
          <button
            type="button"
            aria-label="Favourites"
            className="p-2 text-neutral-700 hover:text-brand"
          >
            <Heart size={20} />
          </button>
          <Link
            href="/profile"
            aria-label="Profile"
            className="shrink-0"
          >
            <Image
              src={currentUser.avatar}
              alt={currentUser.username}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          </Link>
          <button
            type="button"
            aria-label="Menu"
            className="md:hidden p-2 text-neutral-700"
          >
            <Menu size={20} />
          </button>
        </nav>
      </div>
    </header>
  );
}
