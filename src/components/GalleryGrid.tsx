import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import SafeImage from "./SafeImage";
import Reveal from "./Reveal";

interface GalleryImageItem {
  src: string;
  full: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImageItem[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {images.map((image, idx) => (
          <Reveal key={image.src} delay={Math.min(idx, 8) * 0.04} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="group relative block w-full rounded-xl overflow-hidden ring-1 ring-champagne"
              aria-label={`View ${image.alt}`}
            >
              <SafeImage
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 bg-ivory/95 text-ink text-xs font-medium px-3 py-1.5 rounded-full">
                  <Eye size={14} aria-hidden="true" /> View
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="absolute top-4 right-4 text-ivory p-2 hover:bg-ivory/10 rounded-full"
            >
              <X size={26} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
              }}
              aria-label="Previous"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-ivory p-2 hover:bg-ivory/10 rounded-full"
            >
              <ChevronLeft size={28} />
            </button>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <SafeImage
                src={images[activeIndex].full}
                alt={images[activeIndex].alt}
                className="w-full h-full object-contain max-h-[85vh] rounded-lg"
              />
            </motion.div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
              }}
              aria-label="Next"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-ivory p-2 hover:bg-ivory/10 rounded-full"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
