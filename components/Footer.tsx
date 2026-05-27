import { Globe, AtSign, Send } from "lucide-react";

type Column = { heading: string; links: string[] };

const columns: Column[] = [
  {
    heading: "About",
    links: ["About Minted", "How it works", "Careers", "Press", "Sustainability"],
  },
  {
    heading: "Help",
    links: ["Help Centre", "Trust & Safety", "Selling", "Buying", "Contact us"],
  },
  {
    heading: "Selling",
    links: ["List an item", "Seller fees", "Shipping", "Verified sellers"],
  },
  {
    heading: "Discover",
    links: ["Women", "Men", "Kids", "Home", "Electronics"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 mb-3">
                {col.heading}
              </h3>
              <ul>
                {col.links.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-sm text-neutral-600 hover:text-brand block py-1"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-200 mt-8 pt-6 flex items-center justify-between flex-wrap gap-3">
          <span className="text-sm text-neutral-600">© 2026 Minted</span>
          <span className="text-sm text-neutral-600">🇬🇧 English (UK)</span>
          <div className="flex items-center gap-3 text-neutral-600">
            <a href="#" aria-label="Facebook" className="hover:text-brand">
              <Globe size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-brand">
              <AtSign size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-brand">
              <Send size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
