import { Link } from "react-router-dom";
import { Wand2 } from "lucide-react";
import type { Product } from "../data/products";
import { getProductEnquiryUrl } from "../utils/whatsapp";
import SafeImage from "./SafeImage";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export default function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const cover = product.images[0];

  return (
    <Reveal delay={delay} className="h-full">
      <div className="group flex flex-col h-full bg-ivory rounded-2xl overflow-hidden ring-1 ring-champagne hover:ring-gold/60 transition-colors">
        <Link
          to={`/product/${product.id}`}
          className="relative block aspect-square overflow-hidden bg-cream"
        >
          <SafeImage
            src={cover.thumb}
            alt={cover.alt}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {product.customizable && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-ivory/95 text-ink text-[11px] font-medium px-2.5 py-1 rounded-full ring-1 ring-champagne">
              <Wand2 size={12} aria-hidden="true" /> Customizable
            </span>
          )}
        </Link>

        <div className="flex flex-col flex-1 p-4 sm:p-5 gap-2">
          <p className="text-[11px] uppercase tracking-[0.15em] text-gold-dark">
            {product.subcategory}
          </p>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-display text-xl text-ink leading-snug hover:text-gold-dark transition-colors text-balance">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-ink-soft">{product.priceLabel}</p>

          <div className="mt-auto pt-3 flex flex-col gap-2">
            <Link
              to={`/product/${product.id}`}
              className="text-center text-sm font-medium border border-ink rounded-full py-2.5 hover:bg-ink hover:text-ivory transition-colors"
            >
              View Details
            </Link>
            <WhatsAppButton
              url={getProductEnquiryUrl(product)}
              label="Enquire"
              className="w-full py-2.5 text-sm"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
