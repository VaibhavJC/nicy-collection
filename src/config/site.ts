// Central configuration for all brand / business details.
// Update the placeholder values below as needed — nothing else in the
// codebase should hard-code brand details outside this file.

export const siteConfig = {
  brandName: "Nicy Collection",
  tagline: "Handmade with Love",
  shortDescription:
    "Customised & beautiful handmade jewellery and décor, handcrafted for your celebrations and special moments.",

  // Used for wa.me links. Digits only, with country code, no + or spaces.
  whatsappNumber: "919022350529",

  instagramUrl: "https://www.instagram.com/nicy.collection/",

  locations: ["Nagpur", "Bhandara", "Lakhni"],
  locationsLabel: "Nagpur • Bhandara • Lakhni, Maharashtra",

  // Placeholder — replace with a real email if/when available.
  email: "",

  copyrightYear: new Date().getFullYear(),

  seo: {
    title: "Nicy Collection | Handmade Jewellery & Décor",
    description:
      "Nicy Collection is a handmade jewellery and décor brand from Nagpur, Bhandara & Lakhni — customised flower jewellery, pearl jewellery, traditional Maharashtrian jewellery, Lippan art and wedding décor, handcrafted with love.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
