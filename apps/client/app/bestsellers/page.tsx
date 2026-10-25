import type { Metadata } from "next";
import CollectionPage from "@/components/categories/CollectionPage";
import { getBestsellers } from "@/utils/getBestsellers";
import { toProductCardData } from "@/utils/productCardData";

export const metadata: Metadata = {
  title: "Bestsellers",
  description: "Our most-loved styles across every category.",
  alternates: { canonical: "/bestsellers" },
};

// Ranked by the bestsellers API (mocked for now).
export default async function BestsellersPage() {
  const products = await getBestsellers({ limit: 200 });
  return (
    <CollectionPage
      title="Bestsellers"
      products={products.map(toProductCardData)}
      hideBadge="bestseller"
    />
  );
}
