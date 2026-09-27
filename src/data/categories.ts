import { asset } from "../utils/asset";
export type CategorySlug =
  | "flower-jewellery"
  | "pearl-jewellery"
  | "traditional-jewellery"
  | "lippan-art"
  | "engagement-wedding"
  | "home-decor";

export interface Category {
  slug: CategorySlug;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  subcategories: string[];
  image: string;
}

export const categories: Category[] = [
  {
    slug: "flower-jewellery",
    name: "Flower Jewellery",
    emoji: "🌸",
    tagline: "Fresh, floral & made to order",
    description:
      "Delicate handmade floral jewellery for haldi, mehendi and festive occasions — every set customised to your colours and outfit.",
    subcategories: [
      "Flower Jewellery Sets",
      "Flower & Pearl Jewellery",
      "Haldi / Mehendi Jewellery",
      "Customised Floral Designs",
    ],
    image: asset("/images/products/pearl/pearl-drop-earrings-1-thumb.webp"),
  },
  {
    slug: "pearl-jewellery",
    name: "Pearl Jewellery",
    emoji: "🤍",
    tagline: "Timeless pearls, handcrafted",
    description:
      "Classic pearl necklaces, earrings and traditional sets, hand-strung and finished with kundan accents.",
    subcategories: [
      "Pearl Necklaces",
      "Earrings",
      "Traditional Pearl Jewellery",
      "Customised Sets",
    ],
    image: asset("/images/products/pearl/pearl-kundan-necklace-1-thumb.webp"),
  },
  {
    slug: "traditional-jewellery",
    name: "Traditional Jewellery",
    emoji: "👑",
    tagline: "Maharashtrian craft, made by hand",
    description:
      "Bhikbali, bugdi, nath and other traditional Maharashtrian jewellery pieces, handcrafted with pearls, kundan and gold-tone detailing.",
    subcategories: [
      "Bhikbali",
      "Bugdi",
      "Nath",
      "Traditional Earrings",
      "Other Maharashtrian Jewellery",
    ],
    image: asset("/images/products/traditional/trad-nath-1-thumb.webp"),
  },
  {
    slug: "lippan-art",
    name: "Lippan Art",
    emoji: "🪷",
    tagline: "Mirror-work wall décor",
    description:
      "Handmade Lippan mirror-work art pieces for your walls — traditional mud-and-mirror craft, customised to your theme.",
    subcategories: [
      "Lippan Wall Décor",
      "Handmade Decorative Pieces",
      "Customised Lippan Artwork",
    ],
    image: asset("/images/products/lippan/lippan-peacock-1-thumb.webp"),
  },
  {
    slug: "engagement-wedding",
    name: "Engagement & Wedding",
    emoji: "💍",
    tagline: "For your most special day",
    description:
      "Ring holders, ring platters and wedding accessories, handmade and customised for engagements, weddings and haldi ceremonies.",
    subcategories: [
      "Engagement Ring Holders",
      "Engagement Ring Platters",
      "Wedding Accessories",
      "Customised Wedding Décor",
    ],
    image: asset("/images/products/wedding/ring-platter-1-thumb.webp"),
  },
  {
    slug: "home-decor",
    name: "Home Décor",
    emoji: "🏡",
    tagline: "Handmade pieces for your space",
    description:
      "Decorative handmade pieces for festivals and everyday beauty — customised to fit your home and colour palette.",
    subcategories: [
      "Handmade Decorative Items",
      "Festive Décor",
      "Customised Décor Pieces",
    ],
    image: asset("/images/products/lippan/lippan-peacock-2-thumb.webp"),
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
