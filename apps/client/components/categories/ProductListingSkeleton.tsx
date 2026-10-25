import { MOBILE_GRID, productGridClassName } from "@/components/categories/ProductGrid";
import { cx } from "@/utils/cx";

const bar = "rounded-md bg-gray-100 motion-safe:animate-pulse";

// Mirrors ProductListing: FILTERS header and flat sections on the left (lg
// up), then the Size/Sort bar and the grid.
export default function ProductListingSkeleton() {
  return (
    <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[16rem_minmax(0,1fr)]">
      <div className="hidden border-r border-gray-100 pr-6 lg:block">
        <div className="flex h-16 items-center">
          <div className={cx(bar, "h-4 w-20")} />
        </div>
        {[5, 2, 6, 3].map((rows, index) => (
          <div key={index} className="space-y-3 border-t border-gray-200 py-6">
            <div className={cx(bar, "h-3 w-24")} />
            {Array.from({ length: rows }, (_, row) => (
              <div key={row} className={cx(bar, "h-4 w-40")} />
            ))}
          </div>
        ))}
      </div>

      <div>
        <div className="mb-4 flex h-16 items-center justify-between border-b border-gray-200">
          <div className="flex gap-2">
            <div className={cx(bar, "h-9 w-24 lg:hidden")} />
            <div className={cx(bar, "h-9 w-20")} />
          </div>
          <div className={cx(bar, "h-9 w-44 sm:w-52")} />
        </div>
        <div className={cx(productGridClassName, MOBILE_GRID[2].columns)}>
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index}>
              <div className={cx(bar, "aspect-3/4 rounded-lg")} />
              <div className={cx(bar, "mt-3 h-4 w-3/4")} />
              <div className={cx(bar, "mt-2 h-4 w-1/3")} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
