import {
  NewArrivalsHeader,
  newArrivalsBandClassName,
  newArrivalsInnerClassName,
} from "@/components/home/NewArrivals";
import ProductRailSkeleton from "@/components/product/ProductRailSkeleton";

// Mirrors the NewArrivals layout so the page doesn't shift once data loads.
export default function NewArrivalsSkeleton() {
  return (
    <section
      aria-labelledby="new-arrivals-title"
      aria-busy="true"
      className={newArrivalsBandClassName}
    >
      <div className={newArrivalsInnerClassName}>
        <NewArrivalsHeader />
        <ProductRailSkeleton tone="dark" />
        <span className="sr-only">Loading new arrivals…</span>
      </div>
    </section>
  );
}
