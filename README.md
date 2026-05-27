# Minted

A student CSDA assignment: a Vinted-inspired clone of a peer-to-peer pre-loved fashion marketplace.

## Screenshots

Screenshots coming soon.

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- lucide-react (icons)

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production build

```bash
npm run build && npm start
```

## Project structure

```
app/
  page.tsx              # homepage
  catalog/page.tsx      # catalog listing
  item/[id]/page.tsx    # item detail
  layout.tsx            # root layout with Navbar + Footer
  globals.css           # Tailwind + theme tokens
components/             # Navbar, Footer, ItemCard, ItemGrid, FilterSidebar,
                        # SortDropdown, ImageGallery, SellerCard, etc.
lib/
  mockData.ts           # in-memory seed data (items, sellers)
  types.ts              # shared TS types
```

## Routes

| Route          | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `/`            | Homepage with hero, categories, brands, newly listed         |
| `/catalog`     | Catalog grid with filter sidebar and sort                    |
| `/item/[id]`   | Item detail page with gallery, seller card, related items    |

## Known limitations

- All data is mocked in `lib/mockData.ts`; nothing persists.
- Authentication, search, filters, and the Buy/Make offer/Message buttons are visual only.
- Favourite hearts toggle locally but do not persist across reloads or routes.

## Acknowledgement

Built for the CSDA assignment. UI inspired by [vinted.co.uk](https://www.vinted.co.uk).
