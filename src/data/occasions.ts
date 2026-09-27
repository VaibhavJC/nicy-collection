export type OccasionSlug =
  | "haldi"
  | "mehendi"
  | "engagement"
  | "wedding"
  | "festivals"
  | "gifting"
  | "home-decor";

export interface Occasion {
  slug: OccasionSlug;
  name: string;
  emoji: string;
  description: string;
  image: string;
}

export const occasions: Occasion[] = [
  {
    slug: "haldi",
    name: "Haldi",
    emoji: "🌼",
    description: "Bright floral and pearl pieces for haldi mornings.",
    image: "/images/products/pearl/pearl-drop-earrings-1-thumb.webp",
  },
  {
    slug: "mehendi",
    name: "Mehendi",
    emoji: "🌿",
    description: "Statement earrings and sets to match your mehendi look.",
    image: "/images/products/traditional/trad-chandbali-earrings-1-thumb.webp",
  },
  {
    slug: "engagement",
    name: "Engagement",
    emoji: "💍",
    description: "Ring platters and delicate jewellery for the big proposal.",
    image: "/images/products/wedding/ring-platter-1-thumb.webp",
  },
  {
    slug: "wedding",
    name: "Wedding",
    emoji: "👰",
    description: "Bridal sets, tassels and traditional pieces for the big day.",
    image: "/images/products/traditional/trad-tassel-necklace-2-thumb.webp",
  },
  {
    slug: "festivals",
    name: "Festivals",
    emoji: "🪔",
    description: "Festive jewellery and décor for every celebration.",
    image: "/images/products/lippan/lippan-peacock-1-thumb.webp",
  },
  {
    slug: "gifting",
    name: "Gifting",
    emoji: "🎁",
    description: "Thoughtful handmade pieces, made to gift someone special.",
    image: "/images/products/pearl/pearl-layered-necklace-1-thumb.webp",
  },
  {
    slug: "home-decor",
    name: "Home Décor",
    emoji: "🏡",
    description: "Handmade décor to bring warmth to your space.",
    image: "/images/products/lippan/lippan-peacock-3-thumb.webp",
  },
];

export function getOccasion(slug: string) {
  return occasions.find((o) => o.slug === slug);
}
