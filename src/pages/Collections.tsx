import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import CollectionCard from "../components/CollectionCard";
import FilterBar, { type Filters } from "../components/FilterBar";
import ProductGrid from "../components/ProductGrid";
import Reveal from "../components/Reveal";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { siteConfig } from "../config/site";
import { setPageMeta } from "../utils/meta";

const emptyFilters: Filters = {
  search: "",
  category: "",
  occasion: "",
  customizableOnly: false,
};

export default function Collections() {
  const [filters, setFilters] = useState<Filters>(emptyFilters);

  useEffect(() => {
    setPageMeta({
      title: `Collections | ${siteConfig.brandName}`,
      description:
        "Browse every handmade collection from Nicy Collection — flower jewellery, pearl jewellery, traditional Maharashtrian jewellery, Lippan art, wedding décor and home décor.",
    });
  }, []);

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    return products.filter((p) => {
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCategory = !filters.category || p.category === filters.category;
      const matchesOccasion =
        !filters.occasion || p.occasion.includes(filters.occasion as never);
      const matchesCustomizable = !filters.customizableOnly || p.customizable;
      return matchesSearch && matchesCategory && matchesOccasion && matchesCustomizable;
    });
  }, [filters]);

  const isFiltering =
    filters.search || filters.category || filters.occasion || filters.customizableOnly;

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 sm:pt-32 pb-10">
        <SectionHeading
          eyebrow="Collections"
          title="Explore Our Collections"
          subtitle="Six handmade collections, each customisable to your colours, occasion and style."
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, idx) => (
            <CollectionCard key={category.slug} category={category} delay={idx * 0.05} />
          ))}
        </div>
      </section>

      <section className="bg-cream/50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex flex-col gap-4 mb-8">
            <h2 className="font-display text-2xl sm:text-3xl text-ink">Browse All Products</h2>
            <FilterBar filters={filters} onChange={setFilters} />
          </Reveal>

          <ProductGrid
            products={filtered}
            onClearFilters={isFiltering ? () => setFilters(emptyFilters) : undefined}
          />
        </div>
      </section>
    </Layout>
  );
}
