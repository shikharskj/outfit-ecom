import ProductCard, { type ProductCardData } from "@/components/product/ProductCard";
import type { BadgeKind } from "@/utils/productCardData";
import { cx } from "@/utils/cx";

// No hooks, so both server pages and client listings can render it. Sits beside
// the filter rail from lg up, so 3 columns there and 4 on very wide screens.
export const productGridClassName =
  "grid gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 2xl:grid-cols-4";

// Phones can show one big card or two per row; wider screens are unaffected.
export const MOBILE_GRID = {
  1: { columns: "grid-cols-1", sizes: "(min-width: 1536px) 20vw, (min-width: 640px) 33vw, 100vw" },
  2: { columns: "grid-cols-2", sizes: "(min-width: 1536px) 20vw, (min-width: 640px) 33vw, 50vw" },
};

type ProductGridProps = {
  products: ProductCardData[];
  mobileColumns?: 1 | 2;
  priorityCount?: number; // first N images load right away (above the fold)
  hideBadge?: BadgeKind; // the badge the page itself is about, e.g. "sale" on /sale
  showSavings?: boolean; // "Save ₹X" under sale prices, e.g. on the sale page
};

export default function ProductGrid({
  products,
  mobileColumns = 2,
  priorityCount = 0,
  hideBadge,
  showSavings = false,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 px-6 py-16 text-center">
        <p className="text-base font-semibold text-gray-950">
          No products match these filters
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Try another type, or clear the filters.
        </p>
      </div>
    );
  }

  const mobile = MOBILE_GRID[mobileColumns];

  return (
    <div className={cx(productGridClassName, mobile.columns)}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          sizes={mobile.sizes}
          priority={index < priorityCount}
          hideBadge={hideBadge}
          showSavings={showSavings}
          swipeImages
        />
      ))}
    </div>
  );
}
