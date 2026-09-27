import type { CategorySlug } from "./categories";
import type { OccasionSlug } from "./occasions";

export interface ProductImage {
  full: string;
  thumb: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategorySlug;
  subcategory: string;
  description: string;
  images: ProductImage[];
  featured: boolean;
  customizable: boolean;
  occasion: OccasionSlug[];
  materials: string[];
  colours: string[];
  price: number | null;
  priceLabel: string;
  tags: string[];
}

function img(path: string, alt: string): ProductImage {
  return {
    full: `/images/products/${path}.webp`,
    thumb: `/images/products/${path}-thumb.webp`,
    alt,
  };
}

export const products: Product[] = [
  // ---------------- TRADITIONAL JEWELLERY ----------------
  {
    id: "trad-pearl-tassel-necklace",
    name: "Pearl Tassel Bhikbali Necklace",
    category: "traditional-jewellery",
    subcategory: "Bhikbali",
    description:
      "A statement handmade choker with layered pearl strands, a round kundan-style medallion and flowing pearl tassels — inspired by traditional Maharashtrian bhikbali jewellery. Handcrafted for weddings, haldi and festive occasions.",
    images: [
      img("traditional/trad-tassel-necklace-1", "Pearl tassel bhikbali necklace held in hand"),
      img("traditional/trad-tassel-necklace-2", "Pearl tassel bhikbali necklace, close view"),
      img("traditional/trad-tassel-necklace-3", "Pearl tassel bhikbali necklace medallion detail"),
      img("traditional/trad-tassel-necklace-4", "Pearl tassel bhikbali necklace draped"),
    ],
    featured: true,
    customizable: true,
    occasion: ["wedding", "festivals"],
    materials: ["Pearls", "Kundan stones", "Gold-tone metal"],
    colours: ["Ivory", "Gold", "Maroon accent"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["bhikbali", "necklace", "tassel", "bridal", "pearl"],
  },
  {
    id: "trad-pearl-medallion-earrings",
    name: "Pearl & Kundan Medallion Earrings",
    category: "traditional-jewellery",
    subcategory: "Bugdi",
    description:
      "Matching round medallion earrings with pearl drop tassels, handcrafted to pair beautifully with our bhikbali necklace or worn on their own for a traditional festive look.",
    images: [
      img("traditional/trad-tassel-earrings-1", "Pearl and kundan medallion earrings, pair"),
      img("traditional/trad-tassel-earrings-2", "Pearl and kundan medallion earrings, close view"),
    ],
    featured: false,
    customizable: true,
    occasion: ["wedding", "festivals"],
    materials: ["Pearls", "Kundan stones", "Gold-tone metal"],
    colours: ["Ivory", "Gold"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["bugdi", "earrings", "pearl", "traditional"],
  },
  {
    id: "trad-red-chandbali-earrings",
    name: "Red Chandbali Pearl Tassel Earrings",
    category: "traditional-jewellery",
    subcategory: "Traditional Earrings",
    description:
      "Crescent-shaped chandbali earrings finished in deep red kundan stones with long, hand-strung pearl and glass-bead tassels — a bold traditional pick for mehendi and festive wear.",
    images: [
      img("traditional/trad-chandbali-earrings-1", "Red chandbali pearl tassel earrings in hand"),
      img("traditional/trad-chandbali-earrings-2", "Red chandbali pearl tassel earrings, alternate view"),
    ],
    featured: true,
    customizable: true,
    occasion: ["mehendi", "festivals"],
    materials: ["Kundan stones", "Glass beads", "Pearls", "Gold-tone metal"],
    colours: ["Red", "Gold", "Ivory"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["chandbali", "earrings", "red", "tassel"],
  },
  {
    id: "trad-kundan-chandbali-earrings",
    name: "Kundan Chandbali Drop Earrings",
    category: "traditional-jewellery",
    subcategory: "Traditional Earrings",
    description:
      "Elegant gold-tone chandbali earrings set with red and white kundan stones, finished with a single pearl drop — handmade for an everyday-festive traditional look.",
    images: [
      img("traditional/trad-kundan-earrings-1", "Kundan chandbali drop earrings"),
      img("traditional/trad-kundan-earrings-2", "Kundan chandbali drop earrings on wood"),
    ],
    featured: false,
    customizable: true,
    occasion: ["festivals", "gifting"],
    materials: ["Kundan stones", "Gold-tone metal", "Pearl"],
    colours: ["Red", "White", "Gold"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["chandbali", "earrings", "kundan"],
  },
  {
    id: "trad-gold-tassel-earrings",
    name: "Kundan Gold Tassel Earrings",
    category: "traditional-jewellery",
    subcategory: "Bugdi",
    description:
      "Long kundan-topped earrings with cascading gold-tone chain tassels — handcrafted for brides and bridesmaids who love a dramatic traditional silhouette.",
    images: [
      img("traditional/trad-gold-tassel-earrings-1", "Kundan gold tassel earrings on fabric"),
      img("traditional/trad-gold-tassel-earrings-2", "Kundan gold tassel earrings on dark background"),
    ],
    featured: true,
    customizable: true,
    occasion: ["wedding", "engagement"],
    materials: ["Kundan stones", "Gold-tone chain"],
    colours: ["Red", "Gold"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["earrings", "tassel", "bridal", "gold"],
  },
  {
    id: "trad-kundan-red-tassel-earrings",
    name: "Kundan Red Tassel Earrings",
    category: "traditional-jewellery",
    subcategory: "Bugdi",
    description:
      "Delicate kundan drop earrings finished with fine gold-tone tassel strands — a lighter traditional option for everyday festive wear.",
    images: [img("traditional/trad-kundan-tassel-earrings-1", "Kundan red tassel earrings on dark background")],
    featured: false,
    customizable: true,
    occasion: ["festivals", "gifting"],
    materials: ["Kundan stones", "Gold-tone metal"],
    colours: ["Red", "Gold"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["earrings", "tassel", "kundan"],
  },
  {
    id: "trad-pearl-kundan-nath",
    name: "Pearl & Kundan Nath",
    category: "traditional-jewellery",
    subcategory: "Nath",
    description:
      "A traditional Maharashtrian nath, hand-strung with pearls and finished with a crescent kundan centrepiece — handmade to complete your festive or bridal look.",
    images: [
      img("traditional/trad-nath-1", "Pearl and kundan nath on leaves"),
      img("traditional/trad-nath-2", "Pearl and kundan nath, close detail"),
      img("traditional/trad-nath-3", "Pearl and kundan nath worn on hand"),
      img("traditional/trad-nath-4", "Pearl and kundan nath, alternate angle"),
    ],
    featured: true,
    customizable: true,
    occasion: ["wedding", "festivals"],
    materials: ["Pearls", "Kundan stones", "Gold-tone wire"],
    colours: ["Ivory", "Pink", "Gold"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["nath", "nose ring", "bridal", "traditional"],
  },
  {
    id: "trad-pearl-kundan-bajuband",
    name: "Pearl & Kundan Bajuband Set",
    category: "traditional-jewellery",
    subcategory: "Other Maharashtrian Jewellery",
    description:
      "A hand-strung pearl bajuband (armlet) set with three green kundan medallions and gold-tone ties — a graceful traditional accessory for weddings and festive draping.",
    images: [
      img("traditional/trad-bajuband-1", "Pearl and kundan bajuband set on fabric"),
      img("traditional/trad-bajuband-2", "Pearl and kundan bajuband set on dark background"),
    ],
    featured: false,
    customizable: true,
    occasion: ["wedding", "festivals"],
    materials: ["Pearls", "Kundan stones", "Gold-tone metal"],
    colours: ["Ivory", "Green", "Gold"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["bajuband", "armlet", "bridal", "pearl"],
  },

  // ---------------- PEARL JEWELLERY ----------------
  {
    id: "pearl-kundan-pendant-necklace",
    name: "Pearl Necklace with Kundan Pendant",
    category: "pearl-jewellery",
    subcategory: "Pearl Necklaces",
    description:
      "A double-strand hand-strung pearl necklace centred with a green kundan pendant and matching earrings — a timeless traditional pearl set finished with care.",
    images: [
      img("pearl/pearl-kundan-necklace-1", "Pearl necklace with green kundan pendant"),
      img("pearl/pearl-kundan-necklace-2", "Pearl necklace with green kundan pendant, alternate view"),
    ],
    featured: true,
    customizable: true,
    occasion: ["wedding", "festivals", "gifting"],
    materials: ["Pearls", "Kundan stone", "Gold-tone metal"],
    colours: ["Ivory", "Green", "Gold"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["pearl", "necklace", "kundan", "pendant"],
  },
  {
    id: "pearl-drop-earrings",
    name: "Pearl Drop Earrings",
    category: "pearl-jewellery",
    subcategory: "Earrings",
    description:
      "Long hand-strung pearl drop earrings finished with red and green bead accents — a graceful traditional companion piece for our pearl necklace sets.",
    images: [img("pearl/pearl-drop-earrings-1", "Pearl drop earrings with red and green beads")],
    featured: false,
    customizable: true,
    occasion: ["wedding", "festivals"],
    materials: ["Pearls", "Glass beads", "Gold-tone metal"],
    colours: ["Ivory", "Red", "Green"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["pearl", "earrings"],
  },
  {
    id: "pearl-layered-kundan-necklace",
    name: "Layered Pearl Necklace with Kundan Pendant",
    category: "pearl-jewellery",
    subcategory: "Customised Sets",
    description:
      "A double-layered pearl necklace finished with an emerald-green kundan pendant and matching tassel — hand-strung for a rich, traditional bridal look.",
    images: [
      img("pearl/pearl-layered-necklace-1", "Layered pearl necklace with kundan pendant, on leaves"),
      img("pearl/pearl-layered-necklace-2", "Layered pearl necklace with kundan pendant, draped"),
      img("pearl/pearl-layered-necklace-3", "Layered pearl necklace with kundan pendant, close view"),
    ],
    featured: true,
    customizable: true,
    occasion: ["wedding", "festivals", "gifting"],
    materials: ["Pearls", "Kundan stone", "Gold-tone metal"],
    colours: ["Ivory", "Green", "Gold"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["pearl", "necklace", "layered", "bridal"],
  },

  // ---------------- LIPPAN ART ----------------
  {
    id: "lippan-peacock-round-1",
    name: "Peacock Lippan Wall Décor",
    category: "lippan-art",
    subcategory: "Lippan Wall Décor",
    description:
      "A handmade round Lippan mirror-work piece featuring a hand-painted peacock, finished with traditional mirror inlay — a striking, customisable piece for your walls.",
    images: [
      img("lippan/lippan-peacock-1", "Round peacock Lippan mirror-work wall décor"),
      img("lippan/lippan-peacock-2", "Round peacock Lippan mirror-work wall décor, alternate angle"),
    ],
    featured: true,
    customizable: true,
    occasion: ["home-decor", "festivals", "gifting"],
    materials: ["Mirror inlay", "Hand-painted clay/mud base"],
    colours: ["White", "Green", "Gold"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["lippan", "wall decor", "peacock", "mirror work"],
  },
  {
    id: "lippan-peacock-round-2",
    name: "Peacock Lippan Art Plate",
    category: "lippan-art",
    subcategory: "Handmade Decorative Pieces",
    description:
      "A companion piece to our peacock Lippan décor — hand-crafted mirror-work detailing around a hand-painted peacock motif, made to order in your preferred size.",
    images: [img("lippan/lippan-peacock-3", "Peacock Lippan art plate held in hand")],
    featured: false,
    customizable: true,
    occasion: ["home-decor", "gifting"],
    materials: ["Mirror inlay", "Hand-painted clay/mud base"],
    colours: ["White", "Green", "Gold"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["lippan", "wall decor", "peacock", "mirror work"],
  },

  // ---------------- ENGAGEMENT & WEDDING ----------------
  {
    id: "floral-ring-platter",
    name: "Floral Engagement Ring Platter",
    category: "engagement-wedding",
    subcategory: "Engagement Ring Platters",
    description:
      "A handmade ring platter finished with fabric flowers and mirror detailing in rich pink tones — designed to make your ring exchange moment even more beautiful. Fully customisable in colour and flower choice.",
    images: [img("wedding/ring-platter-1", "Floral engagement ring platter with mirror detailing")],
    featured: true,
    customizable: true,
    occasion: ["engagement", "wedding"],
    materials: ["Fabric flowers", "Mirror work", "Decorative base"],
    colours: ["Pink", "Gold", "White"],
    price: null,
    priceLabel: "Contact for price",
    tags: ["ring platter", "engagement", "wedding decor"],
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: CategorySlug) {
  return products.filter((p) => p.category === category);
}

export function getProductsByOccasion(occasion: OccasionSlug) {
  return products.filter((p) => p.occasion.includes(occasion));
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}
