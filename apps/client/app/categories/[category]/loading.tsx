import ProductRailSkeleton from "@/components/product/ProductRailSkeleton";
import { cx } from "@/utils/cx";

const bar = "rounded-md bg-gray-100 motion-safe:animate-pulse";

// Shown while moving to a category page: breadcrumb, heading, group tiles and
// two product rows.
export default function CategoryLoading() {
  return (
    <main
      aria-busy="true"
      className="mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-8 md:px-12 md:py-14"
    >
      <div className={cx(bar, "mb-6 h-4 w-32")} />
      <div className={cx(bar, "h-9 w-48 sm:h-10")} />
      <div className={cx(bar, "mt-3 h-4 w-40")} />

      <div className="mt-8 mb-12 flex gap-3 overflow-hidden">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="w-36 shrink-0 sm:w-40">
            <div className={cx(bar, "aspect-square rounded-lg")} />
            <div className={cx(bar, "mt-2 h-4 w-3/4")} />
          </div>
        ))}
      </div>

      {Array.from({ length: 2 }, (_, index) => (
        <div key={index} className="mb-14">
          <div className={cx(bar, "mb-8 h-8 w-56")} />
          <ProductRailSkeleton showChips={false} />
        </div>
      ))}

      <span className="sr-only">Loading products…</span>
    </main>
  );
}
