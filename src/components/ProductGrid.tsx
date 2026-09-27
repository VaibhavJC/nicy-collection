import type { Product } from "../data/products";
import ProductCard from "./ProductCard";
import EmptyState from "./EmptyState";

interface ProductGridProps {
  products: Product[];
  onClearFilters?: () => void;
}

export default function ProductGrid({ products, onClearFilters }: ProductGridProps) {
  if (products.length === 0) {
    return <EmptyState onAction={onClearFilters} />;
  }

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
      {products.map((product, idx) => (
        <ProductCard key={product.id} product={product} delay={Math.min(idx, 6) * 0.05} />
      ))}
    </div>
  );
}
