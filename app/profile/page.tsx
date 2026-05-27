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
import ItemGrid from "@/components/ItemGrid";

type BannerProps = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

function Banner({ icon, title, body }: BannerProps) {
  return (
    <div className="relative flex items-start gap-3 rounded-2xl bg-[#e6fbfa] p-4">
      <div className="size-10 rounded-md bg-white flex items-center justify-center shrink-0">
        <div className="text-brand">{icon}</div>
      </div>
      <div className="flex-1">
        <p className="font-semibold text-sm text-neutral-900">{title}</p>
        <p className="text-sm text-neutral-700 mt-0.5">{body}</p>
      </div>
      <Info size={16} className="text-neutral-400 absolute top-3 right-3" />
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
        <Banner
          icon={<TrendingUp className="size-5" />}
          title="Bump your items"
          body="Push an item to the top and reach the right buyers. Get insights."
        />
        <Banner
          icon={<Sparkles className="size-5" />}
          title="Stand out with Showcase"
          body="Get a bigger visibility boost for all your listings."
        />
        <Banner
          icon={<Upload className="size-5" />}
          title="Frequent Uploads: earned"
          body="Encourage buyers to check out more items — don't lose your listing streak!"
        />
        <Banner
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

      {/* Item grid */}
      <div className="mt-4">
        <ItemGrid items={listings} />
      </div>
    </div>
  );
}
