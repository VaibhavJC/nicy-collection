import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import FilterBar, { type Filters } from "../components/FilterBar";
import ProductGrid from "../components/ProductGrid";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { getCategory } from "../data/categories";
import { getProductsByCategory } from "../data/products";
import { siteConfig } from "../config/site";
import { setPageMeta } from "../utils/meta";

const emptyFilters: Filters = {
  search: "",
  category: "",
  occasion: "",
  customizableOnly: false,
};

export default function Category() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = getCategory(categorySlug ?? "");
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [subcategory, setSubcategory] = useState<string>("All");

  useEffect(() => {
    if (!category) return;
    setPageMeta({
      title: `${category.name} | ${siteConfig.brandName}`,
      description: category.description,
    });
  }, [category]);

  const allProducts = useMemo(
    () => (category ? getProductsByCategory(category.slug) : []),
    [category]
  );

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    return allProducts.filter((p) => {
      const matchesSub = subcategory === "All" || p.subcategory === subcategory;
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      const matchesOccasion =
        !filters.occasion || p.occasion.includes(filters.occasion as never);
      const matchesCustomizable = !filters.customizableOnly || p.customizable;
      return matchesSub && matchesSearch && matchesOccasion && matchesCustomizable;
    });
  }, [allProducts, subcategory, filters]);

  if (!category) {
    return <Navigate to="/collections" replace />;
  }

  const isFiltering =
    filters.search || filters.occasion || filters.customizableOnly || subcategory !== "All";

  const clearAll = () => {
    setFilters(emptyFilters);
    setSubcategory("All");
  };

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 sm:pt-32 pb-10">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-soft flex items-center gap-1.5 mb-6">
          <Link to="/collections" className="hover:text-ink">
            Collections
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-ink">{category.name}</span>
        </nav>

        <SectionHeading
          eyebrow={category.emoji + " " + category.tagline}
          title={category.name}
          subtitle={category.description}
          align="left"
        />

        <Reveal className="flex flex-wrap gap-2 mt-8">
          {["All", ...category.subcategories].map((sub) => (
            <button
              key={sub}
              type="button"
              onClick={() => setSubcategory(sub)}
              className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                subcategory === sub
                  ? "bg-ink text-ivory border-ink"
                  : "border-champagne text-ink-soft hover:border-gold-dark"
              }`}
            >
              {sub}
            </button>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <FilterBar filters={filters} onChange={setFilters} showCategory={false} />
        </Reveal>

        <div className="mt-10">
          <ProductGrid
            products={filtered}
            onClearFilters={isFiltering ? clearAll : undefined}
          />
        </div>

        {allProducts.length === 0 && (
          <Reveal className="text-center py-10">
            <p className="text-ink-soft mb-6">
              New designs for this collection are coming soon — this is a
              custom/pre-order handmade business, so we'd love to create
              something just for you in the meantime.
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
