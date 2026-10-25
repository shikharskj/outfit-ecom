import type { Metadata } from "next";
import CollectionPage from "@/components/categories/CollectionPage";
import { getSaleItems } from "@/utils/getSaleItems";
import { toProductCardData } from "@/utils/productCardData";

export const metadata: Metadata = {
  title: "Sale",
  description: "Discounted styles across every category, biggest savings first.",
  alternates: { canonical: "/sale" },
};

// Everything on sale, biggest discount first.
export default async function SalePage() {
  const products = await getSaleItems({ limit: 200 });
  return (
    <CollectionPage
      title="Sale"
      products={products.map(toProductCardData)}
      showSavings
      hideBadge="sale"
    />
  );
}
