import ProductRail from "@/components/product/ProductRail";
import { toProductCardData } from "@/utils/productCardData";
import SectionHeader from "@/components/shared/SectionHeader";
import { getSaleItems } from "@/utils/getSaleItems";

const VIEW_ALL_HREF = "/sale";

// Shared with OnSaleItemsSkeleton so the page doesn't shift once data loads.
// A full-width tinted band sets the sale apart from the sections around it.
// Bands stack flush, each with its own padding.
export const onSaleBandClassName = "w-full bg-red-50 py-12 sm:py-16 md:py-20";

export const onSaleInnerClassName =
  "mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-12";

export function OnSaleItemsHeader() {
  return (
    <SectionHeader
      id="on-sale-title"
      eyebrow="Limited time"
      eyebrowClassName="text-red-700"
      title="On sale"
      description="Our biggest savings, while stocks last."
      link={{ label: "View all", href: VIEW_ALL_HREF }}
    />
  );
}

export default async function OnSaleItems() {
  // Everything on sale, so the category chips can filter on the client instantly.
  const products = await getSaleItems({ limit: 60 });

  // No sale running: leave the section out rather than show an empty rail.
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="on-sale-title" className={onSaleBandClassName}>
      <div className={onSaleInnerClassName}>
        <OnSaleItemsHeader />

        <ProductRail
          products={products.map(toProductCardData)}
          showSavings
          hideBadge="sale"
          viewAll={{ label: "View all sale items", href: VIEW_ALL_HREF }}
        />
      </div>
    </section>
  );
}
