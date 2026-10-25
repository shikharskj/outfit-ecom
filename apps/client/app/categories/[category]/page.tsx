import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import GroupShelf from "@/components/categories/GroupShelf";
import GroupTiles from "@/components/categories/GroupTiles";
import SaleStrip from "@/components/categories/SaleStrip";
import { toProductCardData } from "@/utils/productCardData";
import { CATEGORIES } from "@/utils/categories";
import { getCategoryProducts, groupLabelOf } from "@/utils/getTaxonomy";

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

  const { category, products } = result;

  return (
    <main className="mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-8 md:px-12 md:py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.label }]} />

      <Suspense fallback={null}>
        <SaleStrip />
      </Suspense>

      <h1 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
        {category.label}
      </h1>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">
        {category.count} products · {category.groups.length} groups
      </p>

      <GroupTiles
        groups={category.groups}
        label={`${category.label} groups`}
        className="mt-8 mb-14"
      />

      {/* A landing page: one row per group, in the same order as the tiles.
          Each group's full grid, sort and paging live on its own page. */}
      {category.groups.map((group) => (
        <GroupShelf
          key={group.slug}
          id={`shelf-${group.slug}`}
          eyebrow={`${group.count} ${group.count === 1 ? "product" : "products"}`}
          title={group.label}
          products={products
            .filter((product) => groupLabelOf(product) === group.label)
            .map(toProductCardData)}
          viewAll={{ label: "View all", href: group.href }}
        />
      ))}
    </main>
  );
}
