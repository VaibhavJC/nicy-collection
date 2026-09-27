import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import FilterBar, { type Filters } from "../components/FilterBar";
import ProductGrid from "../components/ProductGrid";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { getOccasion } from "../data/occasions";
import { getProductsByOccasion } from "../data/products";
import { siteConfig } from "../config/site";
import { setPageMeta } from "../utils/meta";

const emptyFilters: Filters = {
  search: "",
  category: "",
  occasion: "",
  customizableOnly: false,
};

export default function OccasionDetail() {
  const { occasionSlug } = useParams<{ occasionSlug: string }>();
  const occasion = getOccasion(occasionSlug ?? "");
  const [filters, setFilters] = useState<Filters>(emptyFilters);

  useEffect(() => {
    if (!occasion) return;
    setPageMeta({
      title: `${occasion.name} | ${siteConfig.brandName}`,
      description: occasion.description,
    });
  }, [occasion]);

  const allProducts = useMemo(
    () => (occasion ? getProductsByOccasion(occasion.slug) : []),
    [occasion]
  );

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    return allProducts.filter((p) => {
      const matchesCategory = !filters.category || p.category === filters.category;
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCustomizable = !filters.customizableOnly || p.customizable;
      return matchesCategory && matchesSearch && matchesCustomizable;
    });
  }, [allProducts, filters]);

  if (!occasion) {
    return <Navigate to="/occasions" replace />;
  }

  const isFiltering = filters.search || filters.category || filters.customizableOnly;

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-soft flex items-center gap-1.5 mb-6">
          <Link to="/occasions" className="hover:text-ink">
            Occasions
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-ink">{occasion.name}</span>
        </nav>

        <SectionHeading
          eyebrow={occasion.emoji + " Occasion"}
          title={occasion.name}
          subtitle={occasion.description}
          align="left"
        />

        <Reveal className="mt-8">
          <FilterBar filters={filters} onChange={setFilters} />
        </Reveal>

        <div className="mt-10">
          <ProductGrid
            products={filtered}
            onClearFilters={isFiltering ? () => setFilters(emptyFilters) : undefined}
          />
        </div>

        {allProducts.length === 0 && (
          <Reveal className="text-center py-10">
            <p className="text-ink-soft mb-6">
              We don't have ready pieces for this occasion listed yet — as a
              custom/pre-order handmade brand, we'd love to create something
              especially for it.
            </p>
            <Button to="/customize" variant="primary">
              Customize Your Order
            </Button>
          </Reveal>
        )}
      </section>
    </Layout>
  );
}
