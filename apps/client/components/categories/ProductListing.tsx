"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronSelectorVertical, Grid01, Square } from "@untitledui/icons";
import type { ProductCardData } from "@/components/product/ProductCard";
import ProductGrid from "@/components/categories/ProductGrid";
import type { PromoTileContent } from "@/components/categories/PromoTile";
import { FALLBACK_LABEL, slugify } from "@/utils/categories";
import { cx } from "@/utils/cx";

export const PAGE_SIZE = 24;
const PRIORITY_COUNT = 4; // roughly the first row on desktop

// "recommended" keeps the catalogue's own order and stays out of the URL.
// There are no dates in the data yet, so "newest" puts new arrivals first.
const SORTS = {
  recommended: { label: "Recommended", compare: null },
  newest: {
    label: "Newest",
    compare: (a: ProductCardData, b: ProductCardData) =>
      Number(b.isNewArrival) - Number(a.isNewArrival),
  },
  "price-asc": {
    label: "Price: low to high",
    compare: (a: ProductCardData, b: ProductCardData) => a.price.current - b.price.current,
  },
  "price-desc": {
    label: "Price: high to low",
    compare: (a: ProductCardData, b: ProductCardData) => b.price.current - a.price.current,
  },
  discount: {
    label: "Biggest discount",
    compare: (a: ProductCardData, b: ProductCardData) => discountOf(b) - discountOf(a),
  },
} as const;

export type SortKey = keyof typeof SORTS;

const isSortKey = (value: string | null): value is SortKey =>
  value !== null && value in SORTS;

const discountOf = ({ price }: ProductCardData) =>
  price.regular > 0 ? (price.regular - price.current) / price.regular : 0;

type FilterType = { slug: string; label: string; count: number };

const chipClassName = (isSelected: boolean) =>
  cx(
    "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950",
    isSelected
      ? "bg-gray-950 text-white"
      : "text-gray-700 ring-1 ring-gray-300 ring-inset hover:bg-gray-100",
  );

const toggleClassName = (isSelected: boolean) =>
  cx(
    "grid size-9 place-items-center rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950",
    isSelected ? "bg-gray-950 text-white" : "text-gray-500 hover:bg-gray-100",
  );

const typeSlugOf = (product: ProductCardData) =>
  slugify(product.productType || FALLBACK_LABEL);

type ProductListingViewProps = {
  products: ProductCardData[];
  types?: FilterType[]; // type chips show when there are two or more
  selected?: Set<string>;
  shown?: number;
  sort?: SortKey;
  mobileColumns?: 1 | 2;
  promo?: PromoTileContent; // placed in the grid on unfiltered, unsorted views
  onToggleType?: (slug: string) => void;
  onClearTypes?: () => void;
  onLoadMore?: () => void;
  onSortChange?: (sort: SortKey) => void;
  onMobileColumnsChange?: (columns: 1 | 2) => void;
};

// Toolbar, grid and "Load more" without the URL wiring. Pages render this as
// the Suspense fallback, so the static HTML already shows the first page.
export function ProductListingView({
  products,
  types = [],
  selected = new Set(),
  shown = PAGE_SIZE,
  sort = "recommended",
  mobileColumns = 2,
  promo,
  onToggleType,
  onClearTypes,
  onLoadMore,
  onSortChange,
  onMobileColumnsChange,
}: ProductListingViewProps) {
  const filtered =
    selected.size === 0
      ? products
      : products.filter((product) => selected.has(typeSlugOf(product)));
  // Filter, then sort, then page.
  const { compare } = SORTS[sort];
  const sorted = compare ? [...filtered].sort(compare) : filtered;
  const visible = sorted.slice(0, shown);
  const total = filtered.length;
  // The promo tile only interrupts the plain, default view.
  const showPromo = selected.size === 0 && sort === "recommended";

  return (
    <>
      {types.length > 1 && (
        <div
          role="group"
          aria-label="Filter by type"
          className="-mx-5 mb-4 flex gap-2 overflow-x-auto px-5 scrollbar-none sm:mx-0 sm:flex-wrap sm:px-0"
        >
          <button
            type="button"
            aria-pressed={selected.size === 0}
            onClick={onClearTypes}
            className={chipClassName(selected.size === 0)}
          >
            All
          </button>
          {types.map((type) => (
            <button
              key={type.slug}
              type="button"
              aria-pressed={selected.has(type.slug)}
              onClick={() => onToggleType?.(type.slug)}
              className={chipClassName(selected.has(type.slug))}
            >
              {type.label}
              <span className="ml-1.5 opacity-60">{type.count}</span>
            </button>
          ))}
        </div>
      )}

      {/* Sticks under the navbar (h-20) so sorting stays in reach on long lists.
          The negative margins stretch its background to the page edges. */}
      <div className="sticky top-20 z-30 -mx-5 mb-6 flex items-center justify-between gap-4 border-b border-gray-200 bg-white/90 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8 md:-mx-12 md:px-12">
        <p aria-live="polite" className="text-sm text-gray-500">
          {total === products.length
            ? `${total} ${total === 1 ? "product" : "products"}`
            : `${total} of ${products.length} products`}
        </p>

        <div className="flex items-center gap-2">
          <label className="relative flex items-center">
            <span className="sr-only">Sort by</span>
            <select
              value={sort}
              onChange={(event) => onSortChange?.(event.target.value as SortKey)}
              className="appearance-none rounded-full bg-white py-2 pr-9 pl-4 text-sm font-medium text-gray-950 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
            >
              {Object.entries(SORTS).map(([key, option]) => (
                <option key={key} value={key}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronSelectorVertical
              aria-hidden="true"
              className="pointer-events-none absolute right-3 size-4 text-gray-500"
            />
          </label>

          {/* Phones only: one big card per row, or two. */}
          <div role="group" aria-label="Layout" className="flex gap-1 sm:hidden">
            <button
              type="button"
              aria-label="1 column"
              aria-pressed={mobileColumns === 1}
              onClick={() => onMobileColumnsChange?.(1)}
              className={toggleClassName(mobileColumns === 1)}
            >
              <Square aria-hidden="true" className="size-4" />
            </button>
            <button
              type="button"
              aria-label="2 columns"
              aria-pressed={mobileColumns === 2}
              onClick={() => onMobileColumnsChange?.(2)}
              className={toggleClassName(mobileColumns === 2)}
            >
              <Grid01 aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <ProductGrid
        products={visible}
        mobileColumns={mobileColumns}
        priorityCount={PRIORITY_COUNT}
        promo={showPromo ? promo : undefined}
      />

      {total > PAGE_SIZE && (
        <div className="mx-auto mt-12 flex max-w-xs flex-col items-center gap-3 text-center">
          <p className="text-sm text-gray-600">
            Showing {visible.length} of {total}
          </p>
          <div
            role="progressbar"
            aria-label="Products shown"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={visible.length}
            className="h-1 w-full overflow-hidden rounded-full bg-gray-200"
          >
            <div
              className="h-full rounded-full bg-gray-950 motion-safe:transition-[width]"
              style={{ width: `${(visible.length / total) * 100}%` }}
            />
          </div>
          {visible.length < total && (
            <button
              type="button"
              onClick={onLoadMore}
              className="mt-2 rounded-full px-8 py-3 text-sm font-semibold text-gray-950 ring-1 ring-gray-300 ring-inset hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
            >
              Load more
            </button>
          )}
        </div>
      )}
    </>
  );
}

type ProductListingProps = {
  products: ProductCardData[];
  types?: FilterType[];
  promo?: PromoTileContent;
};

// Product list with type chips (?type=a,b), sort (?sort=price-asc) and paging
// (?show=48), all kept in the URL so views can be shared and the back button
// returns to the same spot.
// Everything runs in the browser for now; with a real catalogue, the same URL
// parameters move to the server and the API pages and filters.
export default function ProductListing({ products, types = [], promo }: ProductListingProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mobileColumns, setMobileColumns] = useState<1 | 2>(2);
  // Where focus goes after "Load more": the first newly shown product.
  const [focusIndex, setFocusIndex] = useState<number | null>(null);

  const known = new Set(types.map((type) => type.slug));
  const selected = new Set(
    (searchParams.get("type") ?? "").split(",").filter((slug) => known.has(slug)),
  );
  const requested = Number(searchParams.get("show"));
  const shown = Number.isInteger(requested) && requested > PAGE_SIZE ? requested : PAGE_SIZE;
  const sortParam = searchParams.get("sort");
  const sort: SortKey = isSortKey(sortParam) ? sortParam : "recommended";

  const replaceParams = (changes: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(changes)) {
      if (value === null) params.delete(key);
      else params.set(key, value);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  // A new type selection starts back at the first page.
  const setTypes = (next: Set<string>) =>
    replaceParams({ type: next.size ? [...next].join(",") : null, show: null });

  const toggleType = (slug: string) => {
    const next = new Set(selected);
    if (next.has(slug)) next.delete(slug);
    else next.add(slug);
    setTypes(next);
  };

  // A new order starts back at the first page too.
  const setSort = (next: SortKey) =>
    replaceParams({ sort: next === "recommended" ? null : next, show: null });

  const loadMore = () => {
    setFocusIndex(shown);
    replaceParams({ show: String(shown + PAGE_SIZE) });
  };

  useEffect(() => {
    if (focusIndex === null) return;
    const links = containerRef.current?.querySelectorAll<HTMLElement>("[data-product-link]");
    const target = links?.[focusIndex];
    if (target) {
      target.focus();
      setFocusIndex(null);
    }
  }, [focusIndex, shown]);

  return (
    <div ref={containerRef}>
      <ProductListingView
        products={products}
        types={types}
        selected={selected}
        shown={shown}
        sort={sort}
        mobileColumns={mobileColumns}
        promo={promo}
        onToggleType={toggleType}
        onClearTypes={() => setTypes(new Set())}
        onLoadMore={loadMore}
        onSortChange={setSort}
        onMobileColumnsChange={setMobileColumns}
      />
    </div>
  );
}
