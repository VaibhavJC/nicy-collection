import { useEffect } from "react";
import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import OccasionCard from "../components/OccasionCard";
import { occasions } from "../data/occasions";
import { siteConfig } from "../config/site";
import { setPageMeta } from "../utils/meta";

export default function Occasions() {
  useEffect(() => {
    setPageMeta({
      title: `Occasions | ${siteConfig.brandName}`,
      description:
        "Shop handmade jewellery and décor by occasion — haldi, mehendi, engagement, wedding, festivals, gifting and home décor.",
    });
  }, []);

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <SectionHeading
          eyebrow="Occasions"
          title="Made For Your Special Moments ✨"
          subtitle="Every celebration deserves something handmade — browse by occasion to find your piece."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {occasions.map((occasion, idx) => (
            <OccasionCard key={occasion.slug} occasion={occasion} delay={idx * 0.05} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
