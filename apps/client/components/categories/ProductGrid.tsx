import { Fragment } from "react";
import ProductCard, { type ProductCardData } from "@/components/product/ProductCard";
import PromoTile, { type PromoTileContent } from "@/components/categories/PromoTile";
import { cx } from "@/utils/cx";

// No hooks, so both server pages and client listings can render it.
export const productGridClassName =
  "grid gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4";

// Phones can show one big card or two per row; wider screens are unaffected.
export const MOBILE_GRID = {
  1: { columns: "grid-cols-1", sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw" },
  2: { columns: "grid-cols-2", sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" },
};

// The promo tile goes after the 8th product, then after every 12th.
const PROMO_FIRST = 8;
const PROMO_EVERY = 12;
const isPromoSlot = (position: number) =>
  position >= PROMO_FIRST && (position - PROMO_FIRST) % PROMO_EVERY === 0;

type ProductGridProps = {
  products: ProductCardData[];
  mobileColumns?: 1 | 2;
  priorityCount?: number; // first N images load right away (above the fold)
  promo?: PromoTileContent; // only placed when there are enough products
};

export default function ProductGrid({
  products,
  mobileColumns = 2,
  priorityCount = 0,
  promo,
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
        <Fragment key={product.id}>
          <ProductCard
            product={product}
            sizes={mobile.sizes}
            priority={index < priorityCount}
            swipeImages
          />
          {promo && isPromoSlot(index + 1) && <PromoTile promo={promo} />}
        </Fragment>
      ))}
    </div>
  );
}
