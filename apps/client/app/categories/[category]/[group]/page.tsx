import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackToTop from "@/components/shared/BackToTop";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import GroupShelf from "@/components/categories/GroupShelf";
import GroupTiles from "@/components/categories/GroupTiles";
import ProductListing, { ProductListingView } from "@/components/categories/ProductListing";
import { toProductCardData, type ProductCardData } from "@/utils/productCardData";
import { getCategoryProducts, getTaxonomy, groupLabelOf } from "@/utils/getTaxonomy";
import type { FacetKey } from "@/utils/productFilters";

// Group pages filter by type; category pages filter by group instead.
const FACETS: FacetKey[] = ["type", "size", "color", "price", "only"];

// Groups smaller than this get a "You might also like" row to fill the page.
const SMALL_GROUP = 8;
const SUGGESTIONS = 12;
const PER_GROUP = 3; // spread suggestions across the other groups

type GroupPageProps = {
  params: Promise<{ category: string; group: string }>;
};

// Every category/group pair (about 30) is prerendered.
export async function generateStaticParams() {
  const taxonomy = await getTaxonomy();
  return taxonomy.flatMap((category) =>
    category.groups.map((group) => ({
      category: category.slug,
      group: group.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: GroupPageProps): Promise<Metadata> {
  const { category: categorySlug, group: groupSlug } = await params;
  const result = await getCategoryProducts(categorySlug, groupSlug);
  if (!result?.group) return { title: "Not found" };

  const { category, group } = result;
  const types = group.types.map((type) => type.label.toLowerCase());
  return {
    title: `${group.label} · ${category.label}`,
    description: `Shop ${group.count} ${category.label.toLowerCase()} ${group.label.toLowerCase()}: ${types.join(", ")}.`,
    // ?type= and ?show= views are the same page for search engines.
    alternates: { canonical: group.href },
  };
}

export default async function GroupPage({ params }: GroupPageProps) {
  const { category: categorySlug, group: groupSlug } = await params;
  const result = await getCategoryProducts(categorySlug, groupSlug);
  if (!result?.group) notFound();

  const { category, group } = result;
  const products = result.products.map(toProductCardData);
  const otherGroups = category.groups.filter((entry) => entry.slug !== group.slug);
  // The rail's CATEGORY section: every group in this category, as links.
  const categoryLinks = category.groups.map((entry) => ({
    label: entry.label,
    href: entry.href,
    count: entry.count,
    current: entry.slug === group.slug,
  }));

  // A few products from each of the category's other groups, for small groups.
  let suggestions: ProductCardData[] = [];
  if (group.count < SMALL_GROUP && otherGroups.length > 0) {
    const all = await getCategoryProducts(categorySlug);
    suggestions = otherGroups
      .flatMap((entry) =>
        (all?.products ?? [])
          .filter((product) => groupLabelOf(product) === entry.label)
          .slice(0, PER_GROUP),
      )
      .slice(0, SUGGESTIONS)
      .map(toProductCardData);
  }

  return (
    <main className="mx-auto w-full max-w-[1600px] px-5 pt-6 pb-16 sm:px-8 md:px-12 md:pt-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: category.label, href: category.href },
          { label: group.label },
        ]}
      />

      {/* Moving between groups happens in the rail's CATEGORY list. */}
      {/* The live count sits in the top bar; phones hide it there, so show it here. */}
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-gray-950">
        {group.label}
        <span className="font-normal text-gray-500 md:hidden"> · {group.count} items</span>
      </h1>

      {/* Filters, sort and paging live in the URL, read at request time; until
          then the static HTML shows the first page, unfiltered. */}
      <Suspense
        fallback={
          <ProductListingView
            products={products}
            facetKeys={FACETS}
            categoryLinks={categoryLinks}
          />
        }
      >
        <ProductListing
          products={products}
          facetKeys={FACETS}
          categoryLinks={categoryLinks}
        />
      </Suspense>

      {/* Don't end on a dead end: suggestions for small groups, then the rest
          of the category. */}
      <div className="mt-16 border-t border-gray-200 pt-12">
        <GroupShelf
          id="suggestions-title"
          eyebrow={`More from ${category.label}`}
          title="You might also like"
          products={suggestions}
        />

        {otherGroups.length > 0 && (
          <section aria-labelledby="more-in-title">
            <h2
              id="more-in-title"
              className="mb-6 text-xl font-semibold tracking-tight text-gray-950"
            >
              More in {category.label}
            </h2>
            <GroupTiles groups={otherGroups} label={`More in ${category.label}`} />
          </section>
        )}
      </div>

      <BackToTop />
    </main>
  );
}
