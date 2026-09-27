import { useEffect } from "react";
import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import SafeImage from "../components/SafeImage";
import FeatureCard from "../components/FeatureCard";
import Button from "../components/Button";
import { siteConfig } from "../config/site";
import { setPageMeta } from "../utils/meta";

export default function About() {
  useEffect(() => {
    setPageMeta({
      title: `Our Story | ${siteConfig.brandName}`,
      description:
        "Nicy Collection is a handmade jewellery and décor brand crafting customised flower jewellery, pearl jewellery, traditional Maharashtrian jewellery and Lippan art from Nagpur, Bhandara & Lakhni.",
    });
  }, []);

  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 lg:px-10 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="flex flex-col gap-5 items-start">
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-dark font-medium">
              Our Story
            </span>
            <h1 className="font-display text-4xl sm:text-5xl text-ink text-balance">
              Made by Hand. Made with Love. <span aria-hidden="true">❤️</span>
            </h1>
            <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
              Nicy Collection is a handmade jewellery and décor brand, rooted
              in {siteConfig.locationsLabel}. Every piece — from delicate
              pearl necklaces to traditional Maharashtrian nath and bajuband,
              from Lippan mirror-work wall art to wedding ring platters — is
              handcrafted, one detail at a time.
            </p>
            <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
              We work closely with each customer to create pieces that feel
              personal: customised colours, styles and sizing for haldi
              mornings, mehendi celebrations, weddings and everyday festive
              moments. Traditional craft, floral jewellery, and handcrafted
              décor come together under one handmade brand.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-champagne">
            <SafeImage
              src="/images/products/lippan/lippan-peacock-1.webp"
              alt="Handmade Lippan peacock wall décor by Nicy Collection"
              className="w-full h-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream/60 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon="🤲" title="Handmade" description="Thoughtfully crafted by hand." />
            <FeatureCard
              icon="🎨"
              title="Custom Designs"
              description="Made to match your occasion and preferences."
              delay={0.05}
            />
            <FeatureCard
              icon="💝"
              title="Made With Love"
              description="Every piece is created with care and attention to detail."
              delay={0.1}
            />
            <FeatureCard
              icon="📍"
              title="Local Handmade Brand"
              description={siteConfig.locationsLabel}
              delay={0.15}
            />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 sm:py-20 text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-ink-soft max-w-md">
            Whether it's a custom piece or a question about an existing
            design, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/customize" variant="primary">
              Customize Your Order
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
