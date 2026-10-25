import { BestsellersHeader, bestsellersSectionClassName } from "@/components/home/Bestsellers";
import ProductRailSkeleton from "@/components/product/ProductRailSkeleton";

// Mirrors the Bestsellers layout so the page doesn't shift once data loads.
export default function BestsellersSkeleton() {
  return (
    <section
      aria-labelledby="bestsellers-title"
      aria-busy="true"
      className={bestsellersSectionClassName}
    >
      <BestsellersHeader />
      <ProductRailSkeleton />
      <span className="sr-only">Loading bestsellers…</span>
    </section>
  );
}
