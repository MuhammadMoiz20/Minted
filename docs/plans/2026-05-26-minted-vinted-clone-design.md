# Minted — Vinted Clone (Design)

**Date:** 2026-05-26
**Course:** CSDA Assignment 1
**Goal:** A 3-page Vinted-inspired marketplace UI ("Minted"), visually close to the real site.

## Scope

Three pages only:

1. `/` — Homepage
2. `/catalog` — Item listing with sort + (visual) filters
3. `/item/[id]` — Item detail

Out of scope: authentication, persistence, real favourites, messaging, checkout.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** for styling
- **lucide-react** for icons
- Mock data in `lib/mockData.ts` (~30–40 items, ~10 sellers)
- No backend, no DB, no API routes

## Pages

### `/` Homepage
- Sticky top nav: logo "Minted", search input, Sell-now button, Sign-up / Log-in links, user/heart icons
- Hero banner with CTA ("Sell now")
- Category tile grid: Women, Men, Kids, Home, Electronics, Entertainment
- Popular brands strip (logos as text chips)
- "Newly listed" item grid preview (~8 items) linking into `/catalog`
- Footer (links, language switcher visual only)

### `/catalog`
- Breadcrumbs + results count
- Left sidebar: visual filter UI (category, size, brand, price, condition) — non-functional except the sort dropdown
- Sort dropdown: Relevance / Newest / Price asc / Price desc — functional, reorders the grid client-side
- Responsive item grid (2 cols mobile → 5 cols desktop)
- `ItemCard`: image, brand, size, price, heart icon (toggles visual state only)

### `/item/[id]`
- Image gallery (main image + thumbnails)
- Title, brand, size, condition, price (incl. "buyer protection" line)
- Seller card (avatar, username, rating, review count)
- Description paragraph
- Buttons: "Buy now", "Make offer", "Message"
- "You might also like" — 4 related cards

## Components

- `Navbar`, `Footer`
- `ItemCard`, `ItemGrid`
- `CategoryTile`, `BrandChip`
- `FilterSidebar`, `SortDropdown`
- `ImageGallery`, `SellerCard`, `Breadcrumbs`

## Data shape

```ts
type Item = {
  id: string;
  title: string;
  brand: string;
  size: string;
  condition: "New with tags" | "Very good" | "Good" | "Satisfactory";
  price: number;
  currency: "GBP";
  images: string[];
  sellerId: string;
  category: "Women" | "Men" | "Kids" | "Home" | "Electronics" | "Entertainment";
  createdAt: string; // ISO
  description: string;
};

type Seller = {
  id: string;
  username: string;
  avatar: string;
  rating: number; // 0–5
  reviewCount: number;
};
```

Images sourced from Unsplash / placehold.co URLs.

## Visual style

- White background, teal accent (~`#09B1BA`)
- Inter / system sans-serif
- Rounded cards (`rounded-xl`), subtle shadows, generous whitespace
- Mobile-first responsive

## Interactivity (only these are functional)

- Sort dropdown reorders catalog
- Heart toggles fill/outline (component-local state, no persistence)
- Navigation between the 3 pages

Everything else (filters, search, buy/offer/message buttons, login) is visual only.

## Success criteria

- Three pages render without errors
- Visually recognisable as a Vinted-style marketplace
- Sort works; hearts toggle; nav works
- Responsive from 375px upward
