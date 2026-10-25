import ProductRail from "@/components/product/ProductRail";
import SectionHeader from "@/components/shared/SectionHeader";
import type { ProductCardData } from "@/utils/productCardData";

type GroupShelfProps = {
  id: string; // unique on the page, for the heading
  eyebrow: string;
  title: string;
  products: ProductCardData[];
  viewAll?: { label: string; href: string };
};

// A titled row of products with an optional "View all" link: one per group on
// category pages, and "You might also like" on small group pages.
export default function GroupShelf({ id, eyebrow, title, products, viewAll }: GroupShelfProps) {
  if (products.length === 0) return null;

  return (
    <section aria-labelledby={id} className="mb-14 sm:mb-16">
      <SectionHeader id={id} eyebrow={eyebrow} title={title} link={viewAll} />
      <ProductRail products={products} />
    </section>
  );
}
