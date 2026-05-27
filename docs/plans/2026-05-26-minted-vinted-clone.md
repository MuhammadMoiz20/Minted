# Minted (Vinted Clone) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a 3-page Vinted-inspired marketplace ("Minted") with Next.js + Tailwind, visually close to vinted.co.uk.

**Architecture:** Static Next.js App Router site. Mock data in `lib/mockData.ts`. No backend, no auth, no persistence. Only sort dropdown and heart toggle are functional. Three pages: `/`, `/catalog`, `/item/[id]`.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4, lucide-react.

**Reference design doc:** `docs/plans/2026-05-26-minted-vinted-clone-design.md`

**Note on TDD:** This is a static UI assignment — automated tests add little value. Verification is visual: each task ends with `npm run dev` + visual check + commit. No test framework setup.

---

## Task 1: Scaffold Next.js project

**Files:**
- Create: project skeleton via `create-next-app`

**Step 1:** Run scaffolder

```bash
npx --yes create-next-app@latest . --ts --tailwind --app --eslint --no-src-dir --import-alias "@/*" --turbopack --use-npm
```
When prompted about existing files (README/.gitignore/docs), keep our versions.

**Step 2:** Install icons

```bash
npm install lucide-react
```

**Step 3:** Verify dev server boots

```bash
npm run dev
```
Expected: http://localhost:3000 renders default Next.js page. Stop the server (Ctrl-C).

**Step 4:** Commit

```bash
git add -A
git commit -m "chore: scaffold Next.js app with Tailwind + TypeScript"
git push
```

---

## Task 2: Global styles and Tailwind theme tokens

**Files:**
- Modify: `app/globals.css` — set background white, base font, Vinted teal CSS variable
- Modify: `app/layout.tsx` — set metadata (title "Minted", description), use Inter font via `next/font/google`

**Step 1:** Edit `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minted | Buy & sell pre-loved fashion",
  description: "A student clone of Vinted built for CSDA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

**Step 2:** Append to `app/globals.css`:

```css
:root {
  --color-teal: #09B1BA;
  --color-teal-dark: #007782;
}

@theme inline {
  --color-brand: var(--color-teal);
  --color-brand-dark: var(--color-teal-dark);
}

body { font-feature-settings: "cv02","cv03","cv04","cv11"; }
```

**Step 3:** `npm run dev` → confirm white background, Inter font loads, no console errors.

**Step 4:** Commit & push: `git add -A && git commit -m "chore: configure Tailwind theme + base layout" && git push`

---

## Task 3: Mock data

**Files:**
- Create: `lib/types.ts`
- Create: `lib/mockData.ts`

**Step 1:** Create `lib/types.ts` with the `Item` and `Seller` types from the design doc.

**Step 2:** Create `lib/mockData.ts` exporting:
- `sellers: Seller[]` — 10 sellers, each with a `https://i.pravatar.cc/100?u=<id>` avatar
- `items: Item[]` — 32 items distributed across all 6 categories
  - Image URLs: `https://picsum.photos/seed/<unique-seed>/600/800` (2–3 images per item)
  - Realistic brands: Zara, H&M, Nike, Adidas, Uniqlo, Mango, ASOS, Levi's, COS, Arket
  - Prices £3–£120
  - Mix of conditions and sizes
  - `createdAt` ISO dates spread across last 30 days
- Helper: `getItemById(id)`, `getRelatedItems(item, count=4)`, `getSeller(id)`

**Step 3:** Commit & push: `git add -A && git commit -m "feat: add mock items and sellers" && git push`

---

## Task 4: Navbar + Footer

**Files:**
- Create: `components/Navbar.tsx`
- Create: `components/Footer.tsx`

**Step 1:** Build `Navbar.tsx`:
- Sticky top, white, bottom border
- Left: "Minted" wordmark linking to `/`, teal color, bold
- Center: search input with magnifier icon (visual only, not functional)
- Right: "Sell now" teal button, "Sign up | Log in" text, heart and user icons
- Mobile: collapse search; show hamburger (visual only)

**Step 2:** Build `Footer.tsx`:
- 4-column link list: About, Help, Selling, Discover (each with 4–5 placeholder links)
- Bottom row: copyright, language switcher (text "🇬🇧 English"), social icons (Facebook/Instagram/Twitter from lucide)

**Step 3:** Add to `app/layout.tsx` so they wrap `{children}`.

**Step 4:** `npm run dev` → confirm navbar sticks, footer at bottom, both pages have nav.

**Step 5:** Commit & push: `git commit -am "feat: add Navbar and Footer" && git push`

---

## Task 5: Homepage `/`

**Files:**
- Modify: `app/page.tsx`
- Create: `components/CategoryTile.tsx`
- Create: `components/ItemCard.tsx`
- Create: `components/ItemGrid.tsx`

**Step 1:** `ItemCard.tsx` — image (aspect-[3/4], `next/image`), brand line, size line, price bold, heart icon top-right that toggles filled/outline on click using `useState` ("use client"). Wraps in `<Link href={`/item/${item.id}`}>`.

**Step 2:** `ItemGrid.tsx` — server component, `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3`, maps items → `ItemCard`.

**Step 3:** `CategoryTile.tsx` — square card with category image background, dark gradient, white centered label. Links to `/catalog?category=<name>`.

**Step 4:** `app/page.tsx`:
- Hero section: full-width teal-tinted band, headline "Buy and sell pre-loved fashion", subheading, "Sell now" CTA button
- "Shop by category" — 6 `CategoryTile` in `grid-cols-2 md:grid-cols-3 lg:grid-cols-6`
- "Popular brands" — horizontal row of brand chips
- "Newly listed" — heading + `ItemGrid` showing first 10 items + "See all" link to `/catalog`

**Step 5:** `next.config.ts` — allow remote images:

```ts
images: { remotePatterns: [
  { protocol: "https", hostname: "picsum.photos" },
  { protocol: "https", hostname: "i.pravatar.cc" },
]}
```

**Step 6:** `npm run dev` → home page renders correctly, images load, hearts toggle.

**Step 7:** Commit & push: `git commit -am "feat: build homepage with hero, categories, item grid" && git push`

---

## Task 6: Catalog page `/catalog`

**Files:**
- Create: `app/catalog/page.tsx` ("use client")
- Create: `components/FilterSidebar.tsx` (visual only)
- Create: `components/SortDropdown.tsx` (functional)
- Create: `components/Breadcrumbs.tsx`

**Step 1:** `Breadcrumbs.tsx` — accepts `items: {label, href?}[]`, renders chevron-separated nav.

**Step 2:** `FilterSidebar.tsx` — collapsible sections: Category (checkboxes), Size (chips), Brand (search + checkboxes), Condition (radio), Price (two number inputs). All visual only. Sticky on desktop, hidden on mobile behind "Filters" button (button can be non-functional).

**Step 3:** `SortDropdown.tsx` — `<select>` with options: Relevance, Newest first, Price: Low to high, Price: High to low. Accepts `value` + `onChange` props.

**Step 4:** `app/catalog/page.tsx`:
- Client component
- `useState` for sort key
- Computes sorted item list with `useMemo`:
  - newest → sort by `createdAt` desc
  - price-asc / price-desc → sort by price
  - relevance → original order
- Layout: breadcrumbs at top, two columns (sidebar 1/4, grid 3/4 on md+), header row with "Showing X items" + `SortDropdown`, then `ItemGrid`

**Step 5:** `npm run dev` → visit `/catalog`, change sort, confirm grid reorders.

**Step 6:** Commit & push: `git commit -am "feat: add catalog page with sort + filter UI" && git push`

---

## Task 7: Item detail `/item/[id]`

**Files:**
- Create: `app/item/[id]/page.tsx`
- Create: `components/ImageGallery.tsx` ("use client")
- Create: `components/SellerCard.tsx`

**Step 1:** `ImageGallery.tsx` — main image + thumbnail strip. Clicking a thumbnail swaps main image (`useState`).

**Step 2:** `SellerCard.tsx` — avatar, username, star rating (lucide `Star`), review count, "View profile" link (no-op).

**Step 3:** `app/item/[id]/page.tsx`:
- Async server component, params: `{ id: string }`
- Calls `getItemById`; if missing, `notFound()`
- Two-column layout on md+: gallery left, info right
- Info column: brand · size, title, price (large bold), "incl. Buyer Protection" small grey, condition badge, description paragraph, `SellerCard`
- Buttons: "Buy now" (teal solid full-width), "Make offer" (outline), "Message" (outline)
- Below: "You might also like" — `ItemGrid` of `getRelatedItems(item)`

**Step 4:** `npm run dev` → click an item from `/catalog`, confirm detail page renders, thumbnails switch the main image.

**Step 5:** Commit & push: `git commit -am "feat: add item detail page with gallery and seller card" && git push`

---

## Task 8: Responsive polish + final pass

**Files:** any that need tweaks.

**Step 1:** Test at 375px, 768px, 1280px widths in browser. Fix any overflow, broken grids, illegible text.

**Step 2:** Add `loading.tsx` for `/item/[id]` with a skeleton (optional but cheap).

**Step 3:** Update root `README.md`:
- Project name, screenshot placeholder
- How to run: `npm install && npm run dev`
- Tech stack
- Known limitations (no real auth, mock data, etc.)

**Step 4:** `npm run build` — confirm production build succeeds with no errors.

**Step 5:** Commit & push: `git commit -am "docs: README + responsive polish" && git push`

---

## Done criteria

- [ ] `npm run build` passes
- [ ] All 3 pages render, navigable from each other
- [ ] Sort dropdown reorders the catalog
- [ ] Heart icons toggle on click
- [ ] Image gallery thumbnails work on item detail page
- [ ] Responsive at 375px / 768px / 1280px
- [ ] Repo pushed to GitHub with clean commit history
