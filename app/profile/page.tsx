import {
  Star,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  Pencil,
  TrendingUp,
  Sparkles,
  Upload,
  Zap,
  Info,
} from "lucide-react";
import { currentUser, getCurrentUserListings } from "@/lib/mockData";
import ListingCard from "@/components/ListingCard";

type BannerProps = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

function PromoBanner({ icon, title, body }: BannerProps) {
  return (
    <div className="relative flex items-start gap-4 rounded-2xl bg-[#e6fbfa] p-5">
      <div className="size-12 flex items-center justify-center shrink-0 text-brand">
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-sm text-neutral-900">{title}</p>
        <p className="text-sm text-neutral-700 mt-0.5">{body}</p>
      </div>
    </div>
  );
}

function BadgeBanner({ icon, title, body }: BannerProps) {
  return (
    <div className="relative flex items-start gap-4 rounded-2xl bg-white border border-neutral-200 p-5">
      <div className="size-12 rounded-full border-2 border-brand flex items-center justify-center shrink-0 text-brand">
        {icon}
      </div>
      <div className="flex-1 pr-6">
        <p className="font-semibold text-sm text-neutral-900">{title}</p>
        <p className="text-sm text-neutral-700 mt-0.5">{body}</p>
      </div>
      <Info size={18} className="text-neutral-400 absolute top-4 right-4" />
    </div>
  );
}

export default function ProfilePage() {
  const listings = getCurrentUserListings();
  const filled = Math.round(currentUser.rating);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex items-start gap-8">
          <div className="size-32 md:size-36 rounded-full bg-[#6B4423] flex items-center justify-center text-white text-6xl md:text-7xl font-bold leading-none">
            M
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
              {currentUser.username}
            </h1>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={
                    i < filled
                      ? "size-4 fill-yellow-400 text-yellow-400"
                      : "size-4 text-neutral-300 fill-none"
                  }
                />
              ))}
              <span className="text-sm text-neutral-700 underline underline-offset-2">
                {currentUser.reviewCount} reviews
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                  About
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <MapPin className="size-4 text-neutral-500" />
                  {currentUser.location}
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <Clock className="size-4 text-neutral-500" />
                  Last seen {currentUser.lastSeenMinutes} minutes ago
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <Users className="size-4 text-neutral-500" />
                  <span>
                    <a className="underline underline-offset-2">{currentUser.followers}</a> followers,{" "}
                    <a className="underline underline-offset-2">{currentUser.following}</a> following
                  </span>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                  Verified info
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <CheckCircle2 className="size-4 text-neutral-500" />
                  Google
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <CheckCircle2 className="size-4 text-neutral-500" />
                  Email
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="border border-neutral-300 rounded-md px-4 py-2 text-sm font-semibold flex items-center gap-2 text-neutral-800 hover:bg-neutral-50"
        >
          <Pencil className="size-4" />
          Edit profile
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-8 border-b border-neutral-200 flex gap-6">
        <button
          type="button"
          className="py-3 border-b-2 border-neutral-900 -mb-px text-sm font-semibold text-neutral-900"
        >
          Listings
        </button>
        <button type="button" className="py-3 text-sm text-neutral-500">
          Reviews
        </button>
      </div>

      {/* Info banner grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <PromoBanner
          icon={<TrendingUp className="size-6" />}
          title="Bump your items"
          body="Push an item to the top and reach the right buyers. Get insights."
        />
        <PromoBanner
          icon={<Sparkles className="size-6" />}
          title="Stand out with Showcase"
          body="Get a bigger visibility boost for all your listings."
        />
        <BadgeBanner
          icon={<Upload className="size-5" />}
          title="Frequent Uploads: earned"
          body="Encourage buyers to check out more items — don't lose your listing streak!"
        />
        <BadgeBanner
          icon={<Zap className="size-5" />}
          title="Speedy-ish: 2 day shipping time"
          body="To earn this badge, try to send your items a little faster next time."
        />
      </div>

      {/* Listings header */}
      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-neutral-900">
          {listings.length} items
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="border border-neutral-300 rounded-full px-4 py-1.5 text-sm font-semibold text-neutral-900 bg-white"
          >
            Active
          </button>
          <button
            type="button"
            className="border border-neutral-300 rounded-full px-4 py-1.5 text-sm font-medium text-neutral-600 bg-white"
          >
            Sold
          </button>
        </div>
      </div>

      {/* Listings grid */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">
        {listings.map((l, i) => (
          <ListingCard key={`${l.id}-${i}`} listing={l} />
        ))}
      </div>
    </div>
  );
}
