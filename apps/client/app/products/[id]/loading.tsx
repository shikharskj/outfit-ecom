import { cx } from "@/utils/cx";

const bar = "rounded-md bg-gray-100 motion-safe:animate-pulse";

// Shown while moving to a product page: breadcrumb, gallery, then details.
export default function ProductLoading() {
  return (
    <main
      aria-busy="true"
      className="mx-auto w-full max-w-[1600px] px-5 pt-6 pb-16 sm:px-8 md:px-12 md:pt-8"
    >
      <div className={cx(bar, "mb-4 h-4 w-48")} />
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12">
        <div className="grid gap-2 md:grid-cols-2">
          <div className={cx(bar, "aspect-3/4 rounded-lg")} />
          <div className={cx(bar, "hidden aspect-3/4 rounded-lg md:block")} />
        </div>
        <div className="space-y-4">
          <div className={cx(bar, "h-8 w-3/4")} />
          <div className={cx(bar, "h-6 w-24")} />
          <div className={cx(bar, "mt-8 h-9 w-40")} />
          <div className={cx(bar, "h-10 w-full")} />
          <div className={cx(bar, "mt-6 h-12 w-full")} />
        </div>
      </div>
      <span className="sr-only">Loading product…</span>
    </main>
  );
}
