import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import InstagramIcon from "../components/icons/InstagramIcon";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import CollectionCard from "../components/CollectionCard";
import OccasionCard from "../components/OccasionCard";
import ProductCard from "../components/ProductCard";
import FeatureCard from "../components/FeatureCard";
import GalleryGrid from "../components/GalleryGrid";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import SafeImage from "../components/SafeImage";
import { asset } from "../utils/asset";
import { categories } from "../data/categories";
import { occasions } from "../data/occasions";
import { getFeaturedProducts, products } from "../data/products";
import { siteConfig } from "../config/site";
import { setPageMeta } from "../utils/meta";

export default function Home() {
  useEffect(() => {
    setPageMeta({
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
    });
  }, []);

  const featured = getFeaturedProducts().slice(0, 8);
  const galleryImages = products.slice(0, 10).map((p) => ({
    src: p.images[0].thumb,
    full: p.images[0].full,
    alt: p.images[0].alt,
  }));

  return (
    <Layout>
      <Hero />

      {/* Shop by Collection */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Shop By Collection"
          title="Explore Our Collections"
          subtitle="Every piece is handcrafted — browse by collection to find your perfect match."
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, idx) => (
            <CollectionCard key={category.slug} category={category} delay={idx * 0.05} />
          ))}
        </div>
      </section>

      {/* Shop by Occasion */}
      <section className="bg-cream/60 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Shop By Occasion"
            title="Made For Your Special Moments ✨"
            subtitle="From haldi mornings to wedding day sparkle — find pieces made for the moment."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {occasions.map((occasion, idx) => (
              <OccasionCard key={occasion.slug} occasion={occasion} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Customer Favourites"
          title="Handpicked, Handmade ✨"
          subtitle="A few of our most-loved pieces — each one made to order, just for you."
        />
        <div className="mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featured.map((product, idx) => (
            <ProductCard key={product.id} product={product} delay={idx * 0.05} />
          ))}
        </div>
        <Reveal className="flex justify-center mt-12">
          <Button to="/collections" variant="secondary" icon={<ArrowRight size={18} />}>
            View All Collections
          </Button>
        </Reveal>
      </section>

      {/* Why Nicy Collection */}
      <section className="bg-ink py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why Nicy Collection"
            title="Made By Hand, Made With Love"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="[&_h3]:text-ink [&_p]:text-ink-soft [&>div]:bg-ivory">
              <FeatureCard icon="🤲" title="Handmade" description="Thoughtfully crafted by hand." />
            </div>
            <div className="[&_h3]:text-ink [&_p]:text-ink-soft [&>div]:bg-ivory">
              <FeatureCard
                icon="🎨"
                title="Custom Designs"
                description="Made to match your occasion and preferences."
                delay={0.05}
              />
            </div>
            <div className="[&_h3]:text-ink [&_p]:text-ink-soft [&>div]:bg-ivory">
              <FeatureCard
                icon="💝"
                title="Made With Love"
                description="Every piece is created with care and attention to detail."
                delay={0.1}
              />
            </div>
            <div className="[&_h3]:text-ink [&_p]:text-ink-soft [&>div]:bg-ivory">
              <FeatureCard
                icon="📍"
                title="Local Handmade Brand"
                description={siteConfig.locationsLabel}
                delay={0.15}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wedding & Engagement */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal className="order-2 lg:order-1 relative aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-champagne">
            <SafeImage
              src={asset("/images/products/wedding/ring-platter-1.webp")}
              alt="Handmade floral engagement ring platter by Nicy Collection"
              className="w-full h-full object-cover"
            />
          </Reveal>
          <div className="order-1 lg:order-2 flex flex-col gap-5 items-start">
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-dark font-medium">
              Wedding &amp; Engagement
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
              Your Special Moments Deserve Something Handmade 💍
            </h2>
            <p className="text-ink-soft max-w-md">
              Ring holders, ring platters, floral and traditional jewellery,
              and custom wedding décor — handcrafted for engagements,
              weddings and every ceremony in between.
            </p>
            <Button to="/customize" variant="primary">
              Plan Your Custom Order
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream/60 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="From Our Studio"
            title="From Our Studio ✨"
            subtitle="A glimpse into our handmade process and finished pieces."
          />
          <div className="mt-12">
            <GalleryGrid images={galleryImages} />
          </div>
          <Reveal className="flex justify-center mt-10">
            <Button
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              icon={<InstagramIcon size={18} />}
            >
              Follow us on Instagram
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16 sm:py-24 text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
            Have Something Special In Mind?
          </h2>
          <p className="text-ink-soft max-w-md">
            Tell us what you'd love, and we'll help bring your idea to life —
            customised, handmade, just for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/customize" variant="primary">
              Create Something Special
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </section>

      <p className="sr-only">
        <Link to="/collections">Browse all handmade jewellery collections</Link>
      </p>
    </Layout>
  );
}
