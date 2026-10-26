import { formatRupees } from "@/utils/productFilters";
import type { SearchProduct } from "@/utils/search/types";

// Price as on product cards: the sale price in red with the old price struck through.
export default function SearchPrice({ price }: { price: SearchProduct["price"] }) {
  if (!price.onSale || price.regular <= price.current) {
    return <span className="font-semibold text-gray-950">{formatRupees(price.current)}</span>;
  }
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <span className="sr-only">Sale price</span>
      <span className="font-semibold text-red-700">{formatRupees(price.current)}</span>
      <span className="sr-only">Regular price</span>
      <s className="text-gray-500">{formatRupees(price.regular)}</s>
    </span>
  );
}
