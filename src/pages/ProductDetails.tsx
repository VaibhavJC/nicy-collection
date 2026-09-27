import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronRight, Wand2, Heart } from "lucide-react";
import Layout from "../components/Layout";
import ProductGallery from "../components/ProductGallery";
import WhatsAppButton from "../components/WhatsAppButton";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import { getProduct, getRelatedProducts } from "../data/products";
import { getCategory } from "../data/categories";
import { getProductEnquiryUrl } from "../utils/whatsapp";
import { siteConfig } from "../config/site";
import { setPageMeta } from "../utils/meta";

export default function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const product = getProduct(productId ?? "");
  const category = product ? getCategory(product.category) : undefined;

  useEffect(() => {
    if (!product) return;
    setPageMeta({
      title: `${product.name} | ${siteConfig.brandName}`,
      description: product.description,
    });
    window.scrollTo({ top: 0 });
  }, [product]);

  if (!product) {
    return <Navigate to="/collections" replace />;
  }

  const related = getRelatedProducts(product);

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 sm:pt-32 pb-16 sm:pb-24">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-soft flex items-center flex-wrap gap-1.5 mb-8">
          <Link to="/collections" className="hover:text-ink">
            Collections
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          {category && (
            <>
              <Link to={`/collections/${category.slug}`} className="hover:text-ink">
                {category.name}
              </Link>
              <ChevronRight size={14} aria-hidden="true" />
            </>
          )}
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <Reveal>
            <ProductGallery images={product.images} productName={product.name} />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold-dark mb-2">
                {product.subcategory}
              </p>
              <h1 className="font-display text-3xl sm:text-4xl text-ink text-balance">
                {product.name}
              </h1>
            </div>

            <p className="text-ink-soft leading-relaxed">{product.description}</p>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs bg-champagne/60 text-ink px-3 py-1.5 rounded-full">
                <Heart size={12} aria-hidden="true" /> Handmade
              </span>
              {product.customizable && (
                <span className="inline-flex items-center gap-1.5 text-xs bg-champagne/60 text-ink px-3 py-1.5 rounded-full">
                  <Wand2 size={12} aria-hidden="true" /> Customizable
                </span>
              )}
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 py-5 border-y border-champagne">
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-soft mb-1">Materials</dt>
                <dd className="text-sm text-ink">{product.materials.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-soft mb-1">Colours</dt>
                <dd className="text-sm text-ink">{product.colours.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-soft mb-1">Occasion</dt>
                <dd className="text-sm text-ink capitalize">
                  {product.occasion.join(", ").replace(/-/g, " ")}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-soft mb-1">Price</dt>
                <dd className="text-sm text-ink">{product.priceLabel}</dd>
              </div>
            </dl>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <WhatsAppButton
                url={getProductEnquiryUrl(product)}
                className="w-full sm:w-auto"
              />
              <Button to="/customize" variant="secondary" className="w-full sm:w-auto">
                Customize This Design
              </Button>
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="mt-20 sm:mt-28">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {related.map((p, idx) => (
                <ProductCard key={p.id} product={p} delay={idx * 0.05} />
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
