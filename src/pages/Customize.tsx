import { useEffect } from "react";
import Layout from "../components/Layout";
import CustomOrderForm from "../components/CustomOrderForm";
import Reveal from "../components/Reveal";
import SafeImage from "../components/SafeImage";
import { siteConfig } from "../config/site";
import { setPageMeta } from "../utils/meta";

export default function Customize() {
  useEffect(() => {
    setPageMeta({
      title: `Customize Your Order | ${siteConfig.brandName}`,
      description:
        "Design a custom piece of handmade jewellery or décor with Nicy Collection — tell us your colours, occasion and style, and we'll bring your idea to life.",
    });
  }, []);

  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 lg:px-10 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal className="flex flex-col gap-4">
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-dark font-medium">
              Customize
            </span>
            <h1 className="font-display text-4xl sm:text-5xl text-ink text-balance">
              Create Something Special ✨
            </h1>
            <p className="text-ink-soft max-w-md text-base sm:text-lg">
              Have something specific in mind? Tell us what you'd love, and
              we'll help bring your idea to life.
            </p>

            <div className="relative mt-4 aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-champagne hidden lg:block">
              <SafeImage
                src="/images/products/traditional/trad-nath-1.webp"
                alt="Handmade pearl and kundan nath by Nicy Collection"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="bg-ivory rounded-2xl ring-1 ring-champagne p-6 sm:p-8">
            <CustomOrderForm />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
