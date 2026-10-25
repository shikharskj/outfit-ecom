import { cacheLife, cacheTag } from "next/cache";
import { CACHE_TAGS } from "@/utils/cacheTags";
import { getProducts, type CategoryGroup, type Product } from "@/utils/getProducts";

type GetNewArrivalsOptions = {
  limit?: number;
  category?: CategoryGroup["category"];
};

// Mocks a call to the new arrivals API. Swap the body for a real fetch later;
// callers already treat it as async. For now it picks products flagged
// `isNewArrival` from the products mock, which supplies the simulated latency.
// Cached so the page can be prerendered; the options are part of the cache key.
export const getNewArrivals = async ({
  limit = 8,
  category,
}: GetNewArrivalsOptions = {}): Promise<Product[]> => {
  "use cache";
  cacheLife("hours");
  cacheTag(CACHE_TAGS.products);

  const groups = await getProducts(category);
  const newByCategory = groups.map((group) =>
    group.products.filter((product) => product.isNewArrival),
  );

  // Take one from each category in turn so the row shows a mix, not just the
  // first category's products.
  const mixed: Product[] = [];
  for (let i = 0; mixed.length < limit; i++) {
    const round = newByCategory
      .map((products) => products[i])
      .filter((product): product is Product => product !== undefined);
    if (round.length === 0) break;
    mixed.push(...round);
  }

  return mixed.slice(0, limit);
};
