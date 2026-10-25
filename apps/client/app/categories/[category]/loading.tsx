import ProductListingSkeleton from "@/components/categories/ProductListingSkeleton";
import { cx } from "@/utils/cx";

const bar = "rounded-md bg-gray-100 motion-safe:animate-pulse";

// Shown while moving to a category page: breadcrumb, title, then the filter
// rail and grid.
export default function CategoryLoading() {
  return (
    <main
      aria-busy="true"
      className="mx-auto w-full max-w-[1600px] px-5 pt-6 pb-16 sm:px-8 md:px-12 md:pt-8"
    >
      <div className={cx(bar, "mb-4 h-4 w-32")} />
      <div className={cx(bar, "mb-6 h-8 w-40")} />
      <ProductListingSkeleton />
      <span className="sr-only">Loading products…</span>
    </main>
  );
}
