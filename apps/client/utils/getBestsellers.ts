import { cacheLife, cacheTag } from "next/cache";
import { CACHE_TAGS } from "@/utils/cacheTags";
import { getProducts, type Product } from "@/utils/getProducts";

// Mocks a "top sellers" API. Returns the products flagged `isBestSeller`,
// taking turns across categories so the list is a mix; that order is the
// ranking. Swap the body for the real ranked endpoint later; callers already
// treat the order as the ranking.
export const getBestsellers = async ({ limit = 30 }: { limit?: number } = {}): Promise<
  Product[]
> => {
  "use cache";
  cacheLife("hours");
  cacheTag(CACHE_TAGS.products);

  const groups = await getProducts();
  const byCategory = groups.map((group) =>
    group.products.filter((product) => product.isBestSeller),
  );

  const ranked: Product[] = [];
  for (let i = 0; ranked.length < limit; i++) {
    const round = byCategory
      .map((products) => products[i])
      .filter((product): product is Product => product !== undefined);
    if (round.length === 0) break;
    ranked.push(...round);
  }

  return ranked.slice(0, limit);
};
