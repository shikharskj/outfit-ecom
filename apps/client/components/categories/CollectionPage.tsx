import { Suspense } from "react";
import ProductListing, { ProductListingView } from "@/components/categories/ProductListing";
import BackToTop from "@/components/shared/BackToTop";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import type { BadgeKind, ProductCardData } from "@/utils/productCardData";
import type { FacetKey } from "@/utils/productFilters";

// Collections span every category, so they filter by category first.
export const COLLECTION_FACETS: FacetKey[] = ["category", "size", "color", "price", "only"];

type CollectionPageProps = {
  title: string;
  products: ProductCardData[]; // in the collection's own recommended order
  showSavings?: boolean;
  hideBadge?: BadgeKind; // the badge this collection is about
};

// Layout for cross-category lists (New arrivals, Sale, Bestsellers): the same
// filter rail, top bar and grid as the category pages.
export default function CollectionPage({
  title,
  products,
  showSavings,
  hideBadge,
}: CollectionPageProps) {
  return (
    <main className="mx-auto w-full max-w-[1600px] px-5 pt-6 pb-16 sm:px-8 md:px-12 md:pt-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />

      {/* The live count sits in the top bar; phones hide it there, so show it here. */}
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-gray-950">
        {title}
        <span className="font-normal text-gray-500 md:hidden"> · {products.length} items</span>
      </h1>

      {/* Filters, sort and paging live in the URL, read at request time; until
          then the static HTML shows the first page, unfiltered. */}
      <Suspense
        fallback={
          <ProductListingView
            products={products}
            facetKeys={COLLECTION_FACETS}
            showSavings={showSavings}
            hideBadge={hideBadge}
          />
        }
      >
        <ProductListing
          products={products}
          facetKeys={COLLECTION_FACETS}
          showSavings={showSavings}
          hideBadge={hideBadge}
        />
      </Suspense>

      <BackToTop />
    </main>
  );
}
