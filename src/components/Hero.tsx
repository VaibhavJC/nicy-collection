import { motion, type Variants } from "framer-motion";
import Button from "./Button";
import SafeImage from "./SafeImage";
import { asset } from "../utils/asset";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-champagne/40 via-ivory to-ivory" />
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-gold/10 blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 -left-20 w-64 h-64 rounded-full bg-rose/10 blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 items-start text-left order-2 lg:order-1"
        >
          <motion.span
            variants={item}
            className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold-dark font-medium"
          >
            Nicy Collection
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-ink text-balance"
          >
            Handmade With Love <span aria-hidden="true">✨</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-display text-xl sm:text-2xl text-ink-soft italic text-balance"
          >
            Beautiful Jewellery &amp; Décor Made Especially For You
          </motion.p>

          <motion.p variants={item} className="text-ink-soft max-w-md text-base sm:text-lg">
            Handcrafted pieces for your celebrations, special moments and
            beautiful spaces.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <Button to="/collections" variant="primary">
              Explore Collection
            </Button>
            <Button to="/customize" variant="secondary">
              Customize Your Order
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-xl shadow-ink/10 ring-1 ring-champagne">
            <SafeImage
              src={asset("/images/products/traditional/trad-tassel-necklace-2.webp")}
              alt="Handmade pearl tassel bhikbali necklace by Nicy Collection"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-ivory rounded-2xl shadow-lg shadow-ink/10 px-5 py-4 ring-1 ring-champagne">
            <span className="text-2xl" aria-hidden="true">🪷</span>
            <div>
              <p className="font-display text-lg leading-none text-ink">Customised</p>
              <p className="text-xs text-ink-soft mt-1">for every occasion</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
