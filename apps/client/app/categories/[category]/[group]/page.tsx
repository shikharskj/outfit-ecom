import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackToTop from "@/components/shared/BackToTop";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import GroupShelf from "@/components/categories/GroupShelf";
import GroupTiles from "@/components/categories/GroupTiles";
import ProductListing, { ProductListingView } from "@/components/categories/ProductListing";
import { toProductCardData, type ProductCardData } from "@/utils/productCardData";
import { cx } from "@/utils/cx";
import { getListingPromo } from "@/utils/getListingPromo";
import { getCategoryProducts, getTaxonomy, groupLabelOf } from "@/utils/getTaxonomy";

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
  const promo = await getListingPromo();

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
    <main className="mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-8 md:px-12 md:py-14">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: category.label, href: category.href },
          { label: group.label },
        ]}
      />

      <h1 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
        {group.label}
      </h1>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">
        {category.label} · {group.count} {group.count === 1 ? "product" : "products"}
      </p>

      {/* Jump between groups without going back to the category page. */}
      {category.groups.length > 1 && (
        <nav aria-label={`Other ${category.label} groups`} className="mt-6 mb-10">
          <ul className="-mx-5 flex gap-x-6 overflow-x-auto border-b border-gray-200 px-5 scrollbar-none sm:mx-0 sm:px-0">
            {category.groups.map((entry) => {
              const isCurrent = entry.slug === group.slug;
              return (
                <li key={entry.slug} className="shrink-0">
                  <Link
                    href={entry.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={cx(
                      "-mb-px block border-b-2 py-3 text-sm font-medium whitespace-nowrap transition-colors",
                      isCurrent
                        ? "border-gray-950 text-gray-950"
                        : "border-transparent text-gray-500 hover:text-gray-950",
                    )}
                  >
                    {entry.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* Filters, sort and paging live in the URL, read at request time; until
          then the static HTML shows the first page, unfiltered. */}
      <Suspense
        fallback={
          <ProductListingView products={products} types={group.types} promo={promo} />
        }
      >
        <ProductListing products={products} types={group.types} promo={promo} />
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
