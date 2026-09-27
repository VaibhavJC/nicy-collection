import { siteConfig } from "../config/site";
import type { Product } from "../data/products";

function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

/** Generic product enquiry message, generated dynamically from product data. */
export function getProductEnquiryUrl(product: Product): string {
  const message = [
    `Hi ${siteConfig.brandName} ✨`,
    "",
    "I'm interested in:",
    "",
    product.name,
    "",
    "I would like to know:",
    "- Price",
    "- Availability",
    "- Customization options",
    "- Delivery time",
    "",
    "Thank you!",
  ].join("\n");

  return buildWhatsAppUrl(message);
}

/** General enquiry (not tied to a specific product), e.g. from the contact page. */
export function getGeneralEnquiryUrl(): string {
  const message = [
    `Hi ${siteConfig.brandName} ✨`,
    "",
    "I'd love to know more about your handmade jewellery and décor.",
  ].join("\n");

  return buildWhatsAppUrl(message);
}

export interface CustomOrderDetails {
  name: string;
  category: string;
  occasion: string;
  colour: string;
  style: string;
  requiredDate: string;
  quantity: string;
  requirements: string;
}

/** Builds the WhatsApp enquiry message for the Customize Your Order form. */
export function getCustomOrderUrl(details: CustomOrderDetails): string {
  const lines = [
    `Hi ${siteConfig.brandName} ✨`,
    "",
    "I would like to enquire about a customised order.",
    "",
    `Name: ${details.name || "-"}`,
    `Category: ${details.category || "-"}`,
    `Occasion: ${details.occasion || "-"}`,
    `Preferred Colour: ${details.colour || "-"}`,
    `Preferred Style: ${details.style || "-"}`,
    `Required Date: ${details.requiredDate || "-"}`,
    `Quantity: ${details.quantity || "-"}`,
    "",
    "My requirements:",
    details.requirements || "-",
  ];

  return buildWhatsAppUrl(lines.join("\n"));
}
