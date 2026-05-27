import type { Category, Condition, Item, Seller } from "./types";

export const sellers: Seller[] = [
  { id: "s1", username: "ellie_88", avatar: "https://i.pravatar.cc/100?u=s1", rating: 4.9, reviewCount: 212 },
  { id: "s2", username: "vintage_mark", avatar: "https://i.pravatar.cc/100?u=s2", rating: 4.7, reviewCount: 145 },
  { id: "s3", username: "thrift_queen", avatar: "https://i.pravatar.cc/100?u=s3", rating: 5.0, reviewCount: 87 },
  { id: "s4", username: "london_lou", avatar: "https://i.pravatar.cc/100?u=s4", rating: 4.5, reviewCount: 32 },
  { id: "s5", username: "preloved_pete", avatar: "https://i.pravatar.cc/100?u=s5", rating: 4.8, reviewCount: 178 },
  { id: "s6", username: "sara_styles", avatar: "https://i.pravatar.cc/100?u=s6", rating: 4.6, reviewCount: 64 },
  { id: "s7", username: "retro_rachel", avatar: "https://i.pravatar.cc/100?u=s7", rating: 4.3, reviewCount: 19 },
  { id: "s8", username: "city_closet", avatar: "https://i.pravatar.cc/100?u=s8", rating: 4.9, reviewCount: 245 },
  { id: "s9", username: "neon_nora", avatar: "https://i.pravatar.cc/100?u=s9", rating: 4.2, reviewCount: 8 },
  { id: "s10", username: "the_wardrobe", avatar: "https://i.pravatar.cc/100?u=s10", rating: 4.8, reviewCount: 132 },
];

const REF = new Date("2026-05-26T12:00:00.000Z").getTime();
const day = 24 * 60 * 60 * 1000;
const daysAgo = (n: number) => new Date(REF - n * day).toISOString();

const makeImages = (id: string): string[] => [
  `https://picsum.photos/seed/${id}-a/600/800`,
  `https://picsum.photos/seed/${id}-b/600/800`,
  `https://picsum.photos/seed/${id}-c/600/800`,
];

type Seed = {
  id: string;
  title: string;
  brand: string;
  size: string;
  condition: Condition;
  price: number;
  sellerId: string;
  category: Category;
  daysOld: number;
  description: string;
};

const seeds: Seed[] = [
  // Women (6)
  { id: "i1", title: "Floral midi dress", brand: "Zara", size: "M", condition: "Very good", price: 22, sellerId: "s1", category: "Women", daysOld: 2, description: "Lovely floral midi dress, worn twice. Perfect for spring weddings and garden parties." },
  { id: "i2", title: "Cropped denim jacket", brand: "Levi's", size: "S", condition: "Good", price: 35, sellerId: "s3", category: "Women", daysOld: 5, description: "Classic Levi's cropped denim jacket in light wash. A versatile layering piece." },
  { id: "i3", title: "High-waisted mom jeans", brand: "H&M", size: "L", condition: "Very good", price: 18, sellerId: "s6", category: "Women", daysOld: 9, description: "Comfortable high-waisted mom jeans. Barely worn, no signs of wear." },
  { id: "i4", title: "Knit cardigan", brand: "COS", size: "M", condition: "New with tags", price: 45, sellerId: "s8", category: "Women", daysOld: 1, description: "Brand new with tags. Soft wool blend cardigan in oatmeal." },
  { id: "i5", title: "Pleated mini skirt", brand: "Mango", size: "S", condition: "Good", price: 14, sellerId: "s2", category: "Women", daysOld: 12, description: "Cute pleated mini skirt, great with tights for autumn." },
  { id: "i6", title: "Silk blouse", brand: "Arket", size: "M", condition: "Satisfactory", price: 19, sellerId: "s10", category: "Women", daysOld: 18, description: "Soft silk blouse, small mark on hem (see photos), priced to sell." },

  // Men (6)
  { id: "i7", title: "Slim fit chinos", brand: "Uniqlo", size: "L", condition: "Very good", price: 16, sellerId: "s2", category: "Men", daysOld: 3, description: "Smart slim fit chinos in navy. Worn a handful of times." },
  { id: "i8", title: "Vintage leather jacket", brand: "Levi's", size: "L", condition: "Good", price: 95, sellerId: "s5", category: "Men", daysOld: 7, description: "Genuine vintage leather jacket with the perfect amount of patina. A real statement piece." },
  { id: "i9", title: "Striped Oxford shirt", brand: "H&M", size: "M", condition: "Very good", price: 12, sellerId: "s4", category: "Men", daysOld: 11, description: "Crisp Oxford shirt with thin blue stripes. Office-ready." },
  { id: "i10", title: "Wool overcoat", brand: "COS", size: "L", condition: "Very good", price: 75, sellerId: "s8", category: "Men", daysOld: 14, description: "Heavy wool overcoat in charcoal. Excellent condition, dry-cleaned." },
  { id: "i11", title: "Running trainers", brand: "Nike", size: "9 / 43", condition: "Good", price: 38, sellerId: "s5", category: "Men", daysOld: 20, description: "Nike Pegasus runners. Plenty of miles left in them." },
  { id: "i12", title: "Graphic tee", brand: "ASOS", size: "M", condition: "New with tags", price: 9, sellerId: "s7", category: "Men", daysOld: 4, description: "Brand new with tags. Oversized graphic tee." },

  // Kids (5)
  { id: "i13", title: "Kids puffer jacket", brand: "Zara", size: "S", condition: "Very good", price: 20, sellerId: "s1", category: "Kids", daysOld: 6, description: "Cosy puffer jacket for ages 5-6. Excellent condition." },
  { id: "i14", title: "Toddler dungarees", brand: "H&M", size: "XS", condition: "Good", price: 8, sellerId: "s6", category: "Kids", daysOld: 13, description: "Adorable denim dungarees, age 2-3. Some softening from washes." },
  { id: "i15", title: "School plimsolls", brand: "Adidas", size: "S", condition: "Satisfactory", price: 5, sellerId: "s4", category: "Kids", daysOld: 22, description: "School plimsolls, used for one term. Cheap and cheerful." },
  { id: "i16", title: "Striped pyjama set", brand: "Uniqlo", size: "S", condition: "Very good", price: 10, sellerId: "s10", category: "Kids", daysOld: 8, description: "Soft cotton pyjamas, age 6-7. Outgrown, still lovely." },
  { id: "i17", title: "Kids waterproof coat", brand: "Mango", size: "M", condition: "New with tags", price: 24, sellerId: "s3", category: "Kids", daysOld: 2, description: "New with tags, kids waterproof coat in mustard yellow." },

  // Home (5)
  { id: "i18", title: "Ceramic plant pot", brand: "Arket", size: "One size", condition: "New with tags", price: 18, sellerId: "s8", category: "Home", daysOld: 5, description: "Hand-thrown ceramic plant pot in matte white. Never used." },
  { id: "i19", title: "Linen cushion cover", brand: "COS", size: "One size", condition: "Very good", price: 12, sellerId: "s1", category: "Home", daysOld: 10, description: "Stonewashed linen cushion cover, 45x45cm. Like new." },
  { id: "i20", title: "Vintage table lamp", brand: "ASOS", size: "N/A", condition: "Good", price: 28, sellerId: "s2", category: "Home", daysOld: 17, description: "Mid-century style table lamp. Works perfectly, UK plug." },
  { id: "i21", title: "Cotton throw blanket", brand: "Uniqlo", size: "One size", condition: "Very good", price: 15, sellerId: "s6", category: "Home", daysOld: 21, description: "Soft cotton throw, taupe colour. Washed once." },
  { id: "i22", title: "Set of 4 wine glasses", brand: "Mango", size: "N/A", condition: "Satisfactory", price: 7, sellerId: "s9", category: "Home", daysOld: 26, description: "Four wine glasses, one has a small chip on the foot. Free for a coffee really." },

  // Electronics (5)
  { id: "i23", title: "Wireless earbuds", brand: "Nike", size: "N/A", condition: "Good", price: 32, sellerId: "s5", category: "Electronics", daysOld: 6, description: "Wireless earbuds with charging case. Battery still great." },
  { id: "i24", title: "Bluetooth speaker", brand: "ASOS", size: "N/A", condition: "Very good", price: 40, sellerId: "s8", category: "Electronics", daysOld: 11, description: "Portable Bluetooth speaker, loud and clear. Comes with USB-C cable." },
  { id: "i25", title: "Smart watch strap", brand: "Adidas", size: "One size", condition: "New with tags", price: 11, sellerId: "s7", category: "Electronics", daysOld: 3, description: "Brand new silicone smart watch strap, fits 42mm watches." },
  { id: "i26", title: "USB-C hub", brand: "Uniqlo", size: "N/A", condition: "Very good", price: 18, sellerId: "s10", category: "Electronics", daysOld: 15, description: "7-in-1 USB-C hub. HDMI, SD, 3x USB-A. Works flawlessly." },
  { id: "i27", title: "Mechanical keyboard", brand: "ASOS", size: "N/A", condition: "Good", price: 55, sellerId: "s2", category: "Electronics", daysOld: 19, description: "Tenkeyless mechanical keyboard, brown switches, white backlight." },

  // Entertainment (5)
  { id: "i28", title: "Box of paperback novels", brand: "ASOS", size: "N/A", condition: "Good", price: 12, sellerId: "s3", category: "Entertainment", daysOld: 4, description: "Twelve assorted paperback novels, mostly thrillers and contemporary fiction." },
  { id: "i29", title: "Vinyl record - jazz", brand: "Arket", size: "N/A", condition: "Very good", price: 22, sellerId: "s4", category: "Entertainment", daysOld: 9, description: "Classic jazz LP, original pressing. Plays without skips." },
  { id: "i30", title: "Board game bundle", brand: "Mango", size: "N/A", condition: "Satisfactory", price: 18, sellerId: "s9", category: "Entertainment", daysOld: 16, description: "Three board games, well-loved. All pieces present per last check." },
  { id: "i31", title: "Acoustic guitar capo", brand: "COS", size: "One size", condition: "New with tags", price: 6, sellerId: "s7", category: "Entertainment", daysOld: 1, description: "Brand new capo, fits standard acoustic guitars." },
  { id: "i32", title: "Retro game controller", brand: "H&M", size: "N/A", condition: "Good", price: 25, sellerId: "s5", category: "Entertainment", daysOld: 24, description: "USB retro game controller, plug-and-play on PC and Mac." },
];

export const items: Item[] = seeds.map((s) => ({
  id: s.id,
  title: s.title,
  brand: s.brand,
  size: s.size,
  condition: s.condition,
  price: s.price,
  currency: "GBP",
  images: makeImages(s.id),
  sellerId: s.sellerId,
  category: s.category,
  createdAt: daysAgo(s.daysOld),
  description: s.description,
}));

export function getItemById(id: string): Item | undefined {
  return items.find((it) => it.id === id);
}

export function getSeller(id: string): Seller | undefined {
  return sellers.find((s) => s.id === id);
}

export function getRelatedItems(item: Item, count = 4): Item[] {
  return items
    .filter((it) => it.category === item.category && it.id !== item.id)
    .slice(0, count);
}

export const currentUser: Seller & {
  location: string;
  lastSeenMinutes: number;
  followers: number;
  following: number;
  verifiedGoogle: boolean;
  verifiedEmail: boolean;
} = {
  id: "me",
  username: "markhor9",
  avatar: "https://i.pravatar.cc/200?u=me",
  rating: 5,
  reviewCount: 3,
  location: "Allerton Bywater, United Kingdom",
  lastSeenMinutes: 36,
  followers: 0,
  following: 0,
  verifiedGoogle: true,
  verifiedEmail: true,
};

export function getCurrentUserListings(): Item[] {
  return items.slice(0, 10);
}
