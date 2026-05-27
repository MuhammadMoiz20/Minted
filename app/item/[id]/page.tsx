import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageGallery from "@/components/ImageGallery";
import ItemGrid from "@/components/ItemGrid";
import SellerCard from "@/components/SellerCard";
import { getItemById, getRelatedItems, getSeller } from "@/lib/mockData";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getItemById(id);
  if (!item) notFound();
  const seller = getSeller(item.sellerId);
  const related = getRelatedItems(item, 4);

  const priceFormatted = `£${item.price.toFixed(2)}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Catalog", href: "/catalog" },
          { label: item.title },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2 md:gap-12">
        <ImageGallery images={item.images} alt={item.title} />

        <div className="space-y-4">
          <p className="text-sm text-neutral-500">
            {item.brand} · Size {item.size}
          </p>
          <h1 className="text-2xl font-bold md:text-3xl">{item.title}</h1>
          <p className="text-3xl font-bold">{priceFormatted}</p>
          <p className="text-xs text-neutral-500">incl. Buyer Protection</p>
          <span className="inline-block rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-800">
            {item.condition}
          </span>
          <p className="pt-2 leading-relaxed text-neutral-700">
            {item.description}
          </p>

          {seller && <SellerCard seller={seller} />}

          <div className="space-y-2">
            <button
              type="button"
              className="w-full rounded-full bg-brand py-3 font-semibold text-white"
            >
              Buy now
            </button>
            <button
              type="button"
              className="w-full rounded-full border border-neutral-300 py-3 font-semibold"
            >
              Make offer
            </button>
            <button
              type="button"
              className="w-full rounded-full border border-neutral-300 py-3 font-semibold"
            >
              Message
            </button>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">You might also like</h2>
        <ItemGrid items={related} />
      </section>
    </div>
  );
}
