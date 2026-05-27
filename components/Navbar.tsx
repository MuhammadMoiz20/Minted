import Link from "next/link";
import { Pacifico } from "next/font/google";
import {
  Search,
  ChevronDown,
  Camera,
  Mail,
  Bell,
  Heart,
  HelpCircle,
} from "lucide-react";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b border-neutral-200 z-40">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-3">
        <Link
          href="/"
          className={`${pacifico.className} text-3xl text-brand shrink-0 leading-none`}
          aria-label="Minted home"
        >
          Minted
        </Link>

        <button
          type="button"
          className="hidden md:flex bg-neutral-100 hover:bg-neutral-200 rounded-md px-3 py-2 text-sm text-neutral-800 items-center gap-1 shrink-0"
        >
          Catalogue
          <ChevronDown size={16} />
        </button>

        <label className="hidden md:flex flex-1 max-w-3xl items-center bg-neutral-100 rounded-md px-3 py-2 gap-2">
          <Search size={18} className="text-neutral-500" aria-hidden />
          <input
            type="search"
            placeholder="Search for items"
            className="bg-transparent outline-none w-full text-sm placeholder:text-neutral-500"
          />
          <button
            type="button"
            aria-label="Search by image"
            className="text-neutral-500 hover:text-neutral-700 shrink-0"
          >
            <Camera size={18} />
          </button>
        </label>

        <nav className="ml-auto flex items-center gap-2 shrink-0">
          <button
            type="button"
            aria-label="Messages"
            className="hidden sm:inline-flex p-2 hover:bg-neutral-100 rounded-md text-neutral-700"
          >
            <Mail className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="relative p-2 hover:bg-neutral-100 rounded-md text-neutral-700"
          >
            <Bell className="size-5" />
            <span className="absolute top-0 right-0 min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center leading-none">
              30
            </span>
          </button>
          <button
            type="button"
            aria-label="Favourites"
            className="hidden sm:inline-flex p-2 hover:bg-neutral-100 rounded-md text-neutral-700"
          >
            <Heart className="size-5" />
          </button>
          <Link
            href="/profile"
            aria-label="Profile"
            className="flex items-center gap-1 shrink-0 hover:bg-neutral-100 rounded-md p-1"
          >
            <div className="size-8 rounded-full bg-[#6B4423] text-white text-sm font-bold flex items-center justify-center">
              M
            </div>
            <ChevronDown size={14} className="text-neutral-500" />
          </Link>
          <button
            type="button"
            className="bg-brand hover:bg-brand-dark text-white px-3 py-2 rounded-md text-sm font-semibold shrink-0"
          >
            Sell now
          </button>
          <button
            type="button"
            aria-label="Help"
            className="hidden sm:inline-flex p-2 hover:bg-neutral-100 rounded-md text-neutral-700"
          >
            <HelpCircle className="size-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}
