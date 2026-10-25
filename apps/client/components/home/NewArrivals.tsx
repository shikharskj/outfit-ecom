import ProductRail from "@/components/product/ProductRail";
import { toProductCardData } from "@/utils/productCardData";
import SectionHeader from "@/components/shared/SectionHeader";
import { getNewArrivals } from "@/utils/getNewArrivals";

const VIEW_ALL_HREF = "/new-arrivals";

// Shared with NewArrivalsSkeleton so the page doesn't shift once data loads.
// A full-width black band; everything inside uses the "dark" tone.
export const newArrivalsBandClassName =
  "w-full bg-gray-950 py-12 sm:py-16 md:py-20";

export const newArrivalsInnerClassName =
  "mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-12";

export function NewArrivalsHeader() {
  return (
    <SectionHeader
      id="new-arrivals-title"
      eyebrow="Just landed"
      title="New arrivals"
      description="Fresh picks across every category."
      link={{ label: "View all", href: VIEW_ALL_HREF }}
      tone="dark"
    />
  );
}

export default async function NewArrivals() {
  // Everything new, so the category chips can filter on the client instantly.
  const products = await getNewArrivals({ limit: 60 });

  // Nothing new: leave the section out rather than show an empty rail.
  if (products.length === 0) return null;

  return (
    <section
      aria-labelledby="new-arrivals-title"
      className={newArrivalsBandClassName}
    >
      <div className={newArrivalsInnerClassName}>
        <NewArrivalsHeader />

        <ProductRail
          products={products.map(toProductCardData)}
          showNewBadge={false}
          viewAll={{ label: "View all new arrivals", href: VIEW_ALL_HREF }}
          tone="dark"
        />
      </div>
    </section>
  );
}
