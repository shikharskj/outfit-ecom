import { MOBILE_GRID, productGridClassName } from "@/components/categories/ProductGrid";
import { cx } from "@/utils/cx";

const bar = "rounded-md bg-gray-100 motion-safe:animate-pulse";

// Shown while moving to a group page: breadcrumb, heading, chips, toolbar and
// a grid of cards, laid out like the real page.
export default function GroupLoading() {
  return (
    <main
      aria-busy="true"
      className="mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-8 md:px-12 md:py-14"
    >
      <div className={cx(bar, "mb-6 h-4 w-48")} />
      <div className={cx(bar, "h-9 w-56 sm:h-10")} />
      <div className={cx(bar, "mt-3 h-4 w-32")} />

      <div className="mt-8 mb-4 flex gap-2 overflow-hidden">
        {[12, 20, 16, 24].map((width, index) => (
          <div
            key={index}
            className={cx(bar, "h-9 shrink-0 rounded-full")}
            style={{ width: `${width * 4}px` }}
          />
        ))}
      </div>
      <div className={cx(bar, "mb-6 h-12 w-full")} />

      <div className={cx(productGridClassName, MOBILE_GRID[2].columns)}>
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index}>
            <div className={cx(bar, "aspect-3/4 rounded-lg")} />
            <div className={cx(bar, "mt-3 h-4 w-3/4")} />
            <div className={cx(bar, "mt-2 h-4 w-1/3")} />
          </div>
        ))}
      </div>

      <span className="sr-only">Loading products…</span>
    </main>
  );
}
