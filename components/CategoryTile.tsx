import Image from "next/image";
import Link from "next/link";

export default function CategoryTile({
  name,
  image,
  href,
}: {
  name: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="relative block aspect-square overflow-hidden rounded-2xl"
    >
      <Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 16vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex justify-center p-3">
        <span className="text-lg font-bold uppercase tracking-wide text-white">
          {name}
        </span>
      </div>
    </Link>
  );
}
