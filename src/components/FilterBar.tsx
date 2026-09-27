import { Search } from "lucide-react";
import { categories } from "../data/categories";
import { occasions } from "../data/occasions";

export interface Filters {
  search: string;
  category: string;
  occasion: string;
  customizableOnly: boolean;
}

interface FilterBarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  showCategory?: boolean;
}

const selectClasses =
  "rounded-full border border-champagne bg-ivory px-4 py-2.5 text-sm text-ink focus:border-gold-dark focus:outline-none transition-colors";

export default function FilterBar({ filters, onChange, showCategory = true }: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:items-center">
      <div className="relative flex-1 min-w-[220px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft"
          aria-hidden="true"
        />
        <input
          type="search"
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          placeholder="Search products, categories, styles..."
          aria-label="Search products"
          className="w-full rounded-full border border-champagne bg-ivory pl-11 pr-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-gold-dark focus:outline-none transition-colors"
        />
      </div>

      {showCategory && (
        <select
          aria-label="Filter by category"
          className={selectClasses}
          value={filters.category}
          onChange={(e) => onChange({ ...filters, category: e.target.value })}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      )}

      <select
        aria-label="Filter by occasion"
        className={selectClasses}
        value={filters.occasion}
        onChange={(e) => onChange({ ...filters, occasion: e.target.value })}
      >
        <option value="">All Occasions</option>
        {occasions.map((o) => (
          <option key={o.slug} value={o.slug}>
            {o.name}
          </option>
        ))}
      </select>

      <label className="inline-flex items-center gap-2 text-sm text-ink-soft rounded-full border border-champagne px-4 py-2.5 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={filters.customizableOnly}
          onChange={(e) => onChange({ ...filters, customizableOnly: e.target.checked })}
          className="accent-gold-dark"
        />
        Customizable only
      </label>
    </div>
  );
}
