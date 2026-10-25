import ProductRail from "@/components/product/ProductRail";
import SectionHeader from "@/components/shared/SectionHeader";
import { getBestsellers } from "@/utils/getBestsellers";
import { toProductCardData } from "@/utils/productCardData";

const VIEW_ALL_HREF = "/bestsellers";

// Shared with BestsellersSkeleton so the page doesn't shift once data loads.
// On the white page, after the black New arrivals band.
export const bestsellersSectionClassName =
  "mx-auto w-full max-w-[1600px] px-5 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20";

export function BestsellersHeader() {
  return (
    <SectionHeader
      id="bestsellers-title"
      eyebrow="Most loved"
      title="Bestsellers"
      description="The styles everyone's picking up right now."
      link={{ label: "View all", href: VIEW_ALL_HREF }}
    />
  );
}

export default async function Bestsellers() {
  const products = await getBestsellers({ limit: 16 });

  // No ranking available: leave the section out rather than show an empty rail.
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="bestsellers-title" className={bestsellersSectionClassName}>
      <BestsellersHeader />
      <ProductRail
        products={products.map(toProductCardData)}
        hideBadge="bestseller"
        viewAll={{ label: "View all bestsellers", href: VIEW_ALL_HREF }}
      />
    </section>
  );
}
