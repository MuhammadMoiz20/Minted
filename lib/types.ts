export type Category =
  | "Women"
  | "Men"
  | "Kids"
  | "Home"
  | "Electronics"
  | "Entertainment";

export type Condition =
  | "New with tags"
  | "Very good"
  | "Good"
  | "Satisfactory";

export type Seller = {
  id: string;
  username: string;
  avatar: string;
  rating: number;
  reviewCount: number;
};

export type Item = {
  id: string;
  title: string;
  brand: string;
  size: string;
  condition: Condition;
  price: number;
  currency: "GBP";
  images: string[];
  sellerId: string;
  category: Category;
  createdAt: string; // ISO
  description: string;
};
