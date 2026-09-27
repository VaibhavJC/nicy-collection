import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import type { ProductImage } from "../data/products";
import SafeImage from "./SafeImage";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const safeImages = images.length > 0 ? images : [];

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + safeImages.length) % safeImages.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, safeImages.length]);

  if (safeImages.length === 0) {
    return (
      <div className="aspect-square rounded-2xl bg-cream flex items-center justify-center text-ink-soft">
        Image coming soon
      </div>
    );
  }

  const current = safeImages[active];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) go(delta > 0 ? -1 : 1);
    touchStartX.current = null;
  };

  return (
    <div>
      <div
        className="relative aspect-square rounded-2xl overflow-hidden bg-cream ring-1 ring-champagne group"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <SafeImage
              src={current.full}
              alt={current.alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label="Expand image"
          className="absolute top-3 right-3 bg-ivory/90 p-2 rounded-full text-ink hover:bg-ivory transition-colors"
        >
          <Expand size={18} />
        </button>

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={`Previous image of ${productName}`}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-ivory/85 hover:bg-ivory p-2 rounded-full text-ink transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={`Next image of ${productName}`}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-ivory/85 hover:bg-ivory p-2 rounded-full text-ink transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {safeImages.length > 1 && (
        <div className="flex gap-3 mt-4 overflow-x-auto no-scrollbar pb-1">
          {safeImages.map((image, idx) => (
            <button
              key={image.thumb}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Show image ${idx + 1} of ${productName}`}
              aria-current={idx === active}
              className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden ring-2 transition-colors ${
                idx === active ? "ring-gold-dark" : "ring-transparent hover:ring-champagne"
              }`}
            >
              <SafeImage src={image.thumb} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${productName} image viewer`}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close image viewer"
              className="absolute top-4 right-4 text-ivory p-2 hover:bg-ivory/10 rounded-full"
            >
              <X size={26} />
            </button>

            {safeImages.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label="Previous image"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-ivory p-2 hover:bg-ivory/10 rounded-full"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <SafeImage
                src={current.full}
                alt={current.alt}
                className="w-full h-full object-contain max-h-[85vh] rounded-lg"
              />
            </motion.div>

            {safeImages.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label="Next image"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-ivory p-2 hover:bg-ivory/10 rounded-full"
              >
                <ChevronRight size={28} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
