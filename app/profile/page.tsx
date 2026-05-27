import Image from "next/image";
import {
  Star,
  MapPin,
  Clock,
  Users,
  BadgeCheck,
  Pencil,
  TrendingUp,
  Sparkles,
  Upload,
  Zap,
  ChevronRight,
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
    <div className="rounded-2xl bg-brand/5 border border-brand/10 p-4 flex gap-3">
      <div className="text-brand shrink-0 mt-0.5">{icon}</div>
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-neutral-600">{body}</p>
      </div>
      <ChevronRight className="text-neutral-400 shrink-0" size={20} />
    </div>
  );
}

export default function ProfilePage() {
  const listings = getCurrentUserListings();
  const filled = Math.round(currentUser.rating);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-6">
          <Image
            src={currentUser.avatar}
            alt={currentUser.username}
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{currentUser.username}</h1>
            <div className="mt-1 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < filled
                      ? "fill-yellow-400 stroke-yellow-400"
                      : "stroke-neutral-300"
                  }
                />
              ))}
              <span className="ml-1 text-sm text-neutral-600">
                {currentUser.reviewCount} reviews
              </span>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm text-neutral-700">
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">
                  About
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={14} className="text-neutral-500" />
                  {currentUser.location}
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={14} className="text-neutral-500" />
                  Last seen {currentUser.lastSeenMinutes} minutes ago
                </p>
                <p className="flex items-center gap-2">
                  <Users size={14} className="text-neutral-500" />
                  {currentUser.followers} followers &middot;{" "}
                  {currentUser.following} following
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">
                  Verified info
                </p>
                {currentUser.verifiedGoogle && (
                  <p className="flex items-center gap-2">
                    <BadgeCheck size={14} className="text-brand" />
                    Google
                  </p>
                )}
                {currentUser.verifiedEmail && (
                  <p className="flex items-center gap-2">
                    <BadgeCheck size={14} className="text-brand" />
                    Email
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="border border-neutral-300 rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2 hover:bg-neutral-50"
        >
          <Pencil size={14} />
          Edit profile
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-8 border-b border-neutral-200">
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="border-b-2 border-neutral-900 -mb-px font-semibold pb-3"
          >
            Listings
          </button>
          <button type="button" className="text-neutral-500 pb-3">
            Reviews
          </button>
        </div>
      </div>

      {/* Info banner grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        <Banner
          icon={<TrendingUp size={20} />}
          title="Bump your items"
          body="Push an item to the top and reach the right buyers. Get insights."
        />
        <Banner
          icon={<Sparkles size={20} />}
          title="Stand out with Showcase"
          body="Get a bigger visibility boost for all your listings."
        />
        <Banner
          icon={<Upload size={20} />}
          title="Frequent Uploads: earned"
          body="Encourage buyers to check out more items — don't lose your listing streak!"
        />
        <Banner
          icon={<Zap size={20} />}
          title="Speedy-ish: 2 day shipping time"
          body="To earn this badge, try to send your items a little faster next time."
        />
      </div>

      {/* Listings header */}
      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{listings.length} items</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="bg-neutral-900 text-white rounded-full px-4 py-1.5 text-sm font-semibold"
          >
            Active
          </button>
          <button
            type="button"
            className="bg-white border border-neutral-300 rounded-full px-4 py-1.5 text-sm font-medium"
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
