import { cacheLife, cacheTag } from "next/cache";
import { CACHE_TAGS } from "@/utils/cacheTags";
import { getProducts, type CategoryGroup, type Product } from "@/utils/getProducts";

type GetSaleItemsOptions = {
  limit?: number;
  category?: CategoryGroup["category"];
};

const discountOf = ({ price }: Product) =>
  price.regular > 0 ? (price.regular - price.current) / price.regular : 0;

// Mocks a call to the sale items API. Swap the body for a real fetch later;
// callers already treat it as async. For now it picks products with
// `price.onSale` from the products mock, which supplies the simulated latency.
// Cached so the page can be prerendered; the options are part of the cache key.
export const getSaleItems = async ({
  limit = 8,
  category,
}: GetSaleItemsOptions = {}): Promise<Product[]> => {
  "use cache";
  cacheLife("hours");
  cacheTag(CACHE_TAGS.products);

  const groups = await getProducts(category);
  const saleByCategory = groups.map((group) =>
    group.products.filter((product) => product.price.onSale),
  );

  // Take one from each category in turn so the row shows a mix, not just the
  // first category's products.
  const mixed: Product[] = [];
  for (let i = 0; mixed.length < limit; i++) {
    const round = saleByCategory
      .map((products) => products[i])
      .filter((product): product is Product => product !== undefined);
    if (round.length === 0) break;
    mixed.push(...round);
  }

  // Biggest savings first. The sort is stable, so equal discounts keep the mix.
  return mixed
    .slice(0, limit)
    .sort((a, b) => discountOf(b) - discountOf(a));
};
