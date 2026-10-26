import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GroupShelf from "@/components/categories/GroupShelf";
import ProductViewFromUrl, { ProductView } from "@/components/product/ProductView";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { categoryByKey, categoryHref, groupHref, slugify } from "@/utils/categories";
import { getAllProductIds, getProductById } from "@/utils/getProduct";
import { getProducts } from "@/utils/getProducts";
import { groupLabelOf } from "@/utils/getTaxonomy";
import { toProductCardData } from "@/utils/productCardData";

const RELATED_LIMIT = 12;

const summaryClassName =
  "flex cursor-pointer list-none items-center justify-between py-4 text-xs font-semibold tracking-wider text-gray-950 uppercase [&::-webkit-details-marker]:hidden";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

// Every product is known up front, so all of them are prerendered.
export async function generateStaticParams() {
  const ids = await getAllProductIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.description ?? `Shop ${product.name}.`,
    // ?color= shows the same product, so it shares one canonical URL.
    alternates: { canonical: `/products/${product.id}` },
  };
}

function InfoSection({ title, open, children }: { title: string; open?: boolean; children: React.ReactNode }) {
  return (
    <details open={open} className="group border-b border-gray-200">
      <summary className={summaryClassName}>
        {title}
        <span aria-hidden="true" className="text-lg leading-none font-normal group-open:rotate-45 motion-safe:transition-transform">
          +
        </span>
      </summary>
      <div className="pb-5 text-sm leading-6 text-gray-700">{children}</div>
    </details>
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  const category = categoryByKey(product.category);
  const group = groupLabelOf(product);
  const related = (await getProducts())
    .flatMap((entry) => entry.products)
    .filter(
      (entry) =>
        entry.id !== product.id &&
        entry.category === product.category &&
        groupLabelOf(entry) === group,
    )
    .slice(0, RELATED_LIMIT)
    .map(toProductCardData);

  // compositions and materials often repeat the same line ("Polyester 100%").
  const composition = [
    ...new Set([...product.compositions, ...product.materials.map((m) => `${m.name} ${m.amount}`)]),
  ];

  return (
    <main className="mx-auto w-full max-w-[1600px] px-5 pt-6 pb-16 sm:px-8 md:px-12 md:pt-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          ...(category
            ? [
                { label: category.label, href: categoryHref(category.slug) },
                { label: group, href: groupHref(category.slug, slugify(group)) },
              ]
            : []),
          { label: product.name },
        ]}
      />

      {/* The colour comes from ?color=; until it's read, show the default colour. */}
      <Suspense fallback={<ProductView product={product} colorCode={product.id} />}>
        <ProductViewFromUrl product={product} />
      </Suspense>

      <div className="mt-10 max-w-2xl border-t border-gray-200 md:mt-14">
        {product.description && (
          <InfoSection title="Description" open>
            <p>{product.description}</p>
          </InfoSection>
        )}
        {composition.length > 0 && (
          <InfoSection title="Composition">
            <ul className="space-y-1">
              {composition.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoSection>
        )}
        {product.careInstructions.length > 0 && (
          <InfoSection title="Care">
            <ul className="list-disc space-y-1 pl-5">
              {product.careInstructions.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoSection>
        )}
        {product.measurements && product.measurements.length > 0 && (
          <InfoSection title="Measurements">
            <ul className="space-y-1">
              {[...new Set(product.measurements)].map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </InfoSection>
        )}
      </div>

      <div className="mt-14">
        <GroupShelf
          id="related"
          eyebrow={group}
          title="You might also like"
          products={related}
          viewAll={category ? { label: `View all ${group.toLowerCase()}`, href: groupHref(category.slug, slugify(group)) } : undefined}
        />
      </div>
    </main>
  );
}
