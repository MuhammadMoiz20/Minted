import Link from "next/link";
import { Search, ChevronDown, Users, Mail, Bell, Heart, HelpCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b border-neutral-200 z-40">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">
        <Link
          href="/"
          className="text-2xl font-bold italic text-brand shrink-0"
          aria-label="Minted home"
        >
          Minted
        </Link>

        <button
          type="button"
          className="hidden md:flex border border-neutral-300 rounded-md px-3 py-1.5 text-sm text-neutral-700 items-center gap-1 shrink-0"
        >
          Catalogue
          <ChevronDown size={14} />
        </button>

        <label className="hidden md:flex flex-1 max-w-2xl items-center bg-neutral-100 rounded-md px-3 py-2 gap-2">
          <Search size={16} className="text-neutral-500" aria-hidden />
          <input
            type="search"
            placeholder="Search for items"
            className="bg-transparent outline-none w-full text-sm"
          />
        </label>

        <nav className="ml-auto flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            aria-label="Members"
            className="hidden md:inline-flex p-2 hover:bg-neutral-100 rounded-md text-neutral-700"
          >
            <Users className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Messages"
            className="hidden md:inline-flex p-2 hover:bg-neutral-100 rounded-md text-neutral-700"
          >
            <Mail className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="p-2 hover:bg-neutral-100 rounded-md text-neutral-700"
          >
            <span className="relative inline-flex">
              <Bell className="size-5" />
              <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-red-500" />
            </span>
          </button>
          <button
            type="button"
            aria-label="Favourites"
            className="p-2 hover:bg-neutral-100 rounded-md text-neutral-700"
          >
            <Heart className="size-5" />
          </button>
          <Link href="/profile" aria-label="Profile" className="shrink-0">
            <div className="size-8 rounded-full bg-[#6B4423] text-white text-sm font-bold flex items-center justify-center">
              M
            </div>
          </Link>
          <button
            type="button"
            className="bg-brand text-white px-3 py-1.5 rounded-md text-sm font-semibold"
          >
            Sell now
          </button>
          <button
            type="button"
            aria-label="Help"
            className="p-2 hover:bg-neutral-100 rounded-md text-neutral-700"
          >
            <HelpCircle className="size-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}
