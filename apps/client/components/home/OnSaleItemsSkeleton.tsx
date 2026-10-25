import {
  OnSaleItemsHeader,
  onSaleBandClassName,
  onSaleInnerClassName,
} from "@/components/home/OnSaleItems";
import ProductRailSkeleton from "@/components/product/ProductRailSkeleton";

// Mirrors the OnSaleItems layout so the page doesn't shift once data loads.
export default function OnSaleItemsSkeleton() {
  return (
    <section
      aria-labelledby="on-sale-title"
      aria-busy="true"
      className={onSaleBandClassName}
    >
      <div className={onSaleInnerClassName}>
        <OnSaleItemsHeader />
        <ProductRailSkeleton />
        <span className="sr-only">Loading sale items…</span>
      </div>
    </section>
  );
}
