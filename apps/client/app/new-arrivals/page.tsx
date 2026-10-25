import type { Metadata } from "next";
import CollectionPage from "@/components/categories/CollectionPage";
import { getNewArrivals } from "@/utils/getNewArrivals";
import { toProductCardData } from "@/utils/productCardData";

export const metadata: Metadata = {
  title: "New arrivals",
  description: "Fresh picks across women, men, kids, home and beauty.",
  alternates: { canonical: "/new-arrivals" },
};

// Newly added: a mix across every category.
export default async function NewArrivalsPage() {
  const products = await getNewArrivals({ limit: 200 });
  return (
    <CollectionPage
      title="New arrivals"
      products={products.map(toProductCardData)}
      hideBadge="new"
    />
  );
}
