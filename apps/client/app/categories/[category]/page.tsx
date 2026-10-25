import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProductListing, { ProductListingView } from "@/components/categories/ProductListing";
import { toProductCardData } from "@/utils/productCardData";
import { CATEGORIES } from "@/utils/categories";
import { getCategoryProducts, groupLabelOf } from "@/utils/getTaxonomy";
import type { FacetKey } from "@/utils/productFilters";

// Category pages filter by group; group pages filter by type instead.
const FACETS: FacetKey[] = ["group", "size", "color", "price", "only"];

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

// Every category is known up front, so all of them are prerendered.
export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const result = await getCategoryProducts(slug);
  if (!result) return { title: "Category not found" };

  const { category } = result;
  const groups = category.groups.map((group) => group.label.toLowerCase());
  return {
    title: category.label,
    description: `Shop ${category.count} ${category.label.toLowerCase()} products across ${groups.join(", ")}.`,
    // Any query string (tracking links, etc.) is the same page for search engines.
    alternates: { canonical: category.href },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const result = await getCategoryProducts(slug);
  if (!result) notFound();

  const { category } = result;

  // Recommended order: each group together, in the rail's group order.
  const groupOrder = category.groups.map((group) => group.label);
  const products = [...result.products]
    .sort(
      (a, b) =>
        groupOrder.indexOf(groupLabelOf(a)) - groupOrder.indexOf(groupLabelOf(b)),
    )
    .map(toProductCardData);

  return (
    <main className="mx-auto w-full max-w-[1600px] px-5 pt-6 pb-16 sm:px-8 md:px-12 md:pt-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.label }]} />

      {/* Groups are picked in the rail's CATEGORY filter, so no tiles up here. */}
      {/* The live count sits in the top bar; phones hide it there, so show it here. */}
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-gray-950">
        {category.label}
        <span className="font-normal text-gray-500 md:hidden"> · {category.count} items</span>
      </h1>

      {/* Filters, sort and paging live in the URL, read at request time; until
          then the static HTML shows the first page, unfiltered. */}
      <Suspense
        fallback={<ProductListingView products={products} facetKeys={FACETS} />}
      >
        <ProductListing products={products} facetKeys={FACETS} />
      </Suspense>
    </main>
  );
}
