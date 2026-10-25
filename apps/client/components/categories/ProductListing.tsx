"use client";

import {
  type RefObject,
  useEffect,
  useOptimistic,
  useRef,
  useState,
  useTransition,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SwitchVertical01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Select } from "@/components/base/select/select";
import type { ProductCardData } from "@/components/product/ProductCard";
import ActiveFilters from "@/components/categories/ActiveFilters";
import FilterRail, {
  type CategoryLink,
} from "@/components/categories/FilterRail";
import FilterSheet from "@/components/categories/FilterSheet";
import ProductGrid from "@/components/categories/ProductGrid";
import type { BadgeKind } from "@/utils/productCardData";
import SizeDropdown from "@/components/categories/SizeDropdown";
import { cx } from "@/utils/cx";
import {
  type FacetKey,
  type FilterState,
  activeFilterCount,
  activeFilterList,
  applyFilters,
  buildFacets,
  emptyFilters,
  parseFilters,
  sanitizeFilters,
  serializeFilters,
  setPriceRange,
  toggleFilter,
} from "@/utils/productFilters";

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
    compare: (a: ProductCardData, b: ProductCardData) =>
      a.price.current - b.price.current,
  },
  "price-desc": {
    label: "Price: high to low",
    compare: (a: ProductCardData, b: ProductCardData) =>
      b.price.current - a.price.current,
  },
  discount: {
    label: "Biggest discount",
    compare: (a: ProductCardData, b: ProductCardData) =>
      discountOf(b) - discountOf(a),
  },
} as const;

export type SortKey = keyof typeof SORTS;

const SORT_ITEMS = Object.entries(SORTS).map(([id, sort]) => ({
  id,
  label: sort.label,
}));

const isSortKey = (value: string | null): value is SortKey =>
  value !== null && value in SORTS;

const discountOf = ({ price }: ProductCardData) =>
  price.regular > 0 ? (price.regular - price.current) / price.regular : 0;

type ProductListingViewProps = {
  products: ProductCardData[];
  facetKeys: FacetKey[]; // which filters this page offers
  categoryLinks?: CategoryLink[]; // group pages: sibling groups in the rail
  showSavings?: boolean; // "Save ₹X" on cards, e.g. on the sale page
  hideBadge?: BadgeKind; // the badge the page itself is about, e.g. "sale" on /sale
  filters?: FilterState;
  shown?: number;
  sort?: SortKey;
  onToggleFilter?: (key: FacetKey, value: string) => void;
  onSizeChange?: (sizes: Set<string>) => void;
  onPriceChange?: (min: number | null, max: number | null) => void;
  onClearFilters?: () => void;
  onSheetOpenChange?: (open: boolean) => void;
  isPending?: boolean; // results are updating after a change
  resultsRef?: RefObject<HTMLDivElement | null>; // scrolled to after filtering
  onLoadMore?: () => void;
  onSortChange?: (sort: SortKey) => void;
};

// Filter rail, top bar, grid and "Load more" without the URL wiring. Pages
// render this as the Suspense fallback, so the static HTML already shows the
// first page and the filters.
export function ProductListingView({
  products,
  facetKeys,
  categoryLinks,
  showSavings,
  hideBadge,
  filters: requestedFilters = emptyFilters(),
  shown = PAGE_SIZE,
  sort = "recommended",
  onToggleFilter = () => {},
  onSizeChange = () => {},
  onPriceChange = () => {},
  onClearFilters = () => {},
  onSheetOpenChange,
  isPending = false,
  resultsRef,
  onLoadMore,
  onSortChange,
}: ProductListingViewProps) {
  // Options come from all products, so they don't depend on the filters; only
  // the counts do. Ignore URL values the page doesn't offer.
  const filters = sanitizeFilters(
    requestedFilters,
    buildFacets(products, requestedFilters, facetKeys),
  );
  const facets = buildFacets(products, filters, facetKeys);
  // Size sits in the top bar; everything else goes in the rail.
  const sizeFacet = facets.find((facet) => facet.key === "size");
  const railFacets = facets.filter((facet) => facet.key !== "size");
  const active = activeFilterList(filters, facets);
  const activeCount = activeFilterCount(filters);

  // Filter, then sort, then page.
  const filtered = applyFilters(products, filters);
  const { compare } = SORTS[sort];
  const sorted = compare ? [...filtered].sort(compare) : filtered;
  const visible = sorted.slice(0, shown);
  const total = filtered.length;

  // With no results, suggest the single removal that brings back the most.
  const rescue =
    total === 0 && active.length > 0
      ? active
          .map((filter) => ({
            filter,
            count: applyFilters(
              products,
              toggleFilter(filters, filter.key, filter.value),
            ).length,
          }))
          .sort((a, b) => b.count - a.count)[0]
      : null;

  const rail = (
    <FilterRail
      facets={railFacets}
      state={filters}
      categoryLinks={categoryLinks}
      onToggle={onToggleFilter}
      onPriceChange={onPriceChange}
    />
  );

  return (
    <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[16rem_minmax(0,1fr)]">
      {/* Desktop: the rail stays in view under the navbar while products
          scroll, and scrolls on its own if it's taller than the screen. */}
      <aside
        aria-label="Filters"
        className="sticky top-20 hidden max-h-[calc(100dvh-5rem)] self-start overflow-y-auto border-r border-gray-200 pr-6 pb-6 scrollbar-none lg:block"
      >
        {/* Same height as the top bar, so FILTERS lines up with Size and Sort. */}
        <div className="flex h-16 items-center justify-between">
          <h2 className="text-sm font-bold tracking-wider text-gray-950 uppercase">
            Filters
          </h2>
          {activeCount > 0 && (
            <Button color="link-gray" size="sm" onPress={onClearFilters}>
              Clear all
            </Button>
          )}
        </div>
        {rail}
      </aside>

      <div className="min-w-0">
        {/* Size and Sort above the products, sticky under the navbar (h-20).
            Below lg it stretches to the page edges. */}
        <div className="sticky top-20 z-30 -mx-5 mb-4 flex h-16 items-center justify-between gap-2 border-b border-gray-200 bg-white px-5 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 lg:mx-0 lg:px-0">
          <div className="flex items-center gap-2">
            <FilterSheet
              activeCount={activeCount}
              resultCount={total}
              onClearAll={onClearFilters}
              onOpenChange={onSheetOpenChange}
            >
              {rail}
            </FilterSheet>
            {sizeFacet && (
              <SizeDropdown
                facet={sizeFacet}
                selected={filters.size}
                onChange={onSizeChange}
              />
            )}
          </div>

          <div className="flex items-center gap-4">
            <p
              aria-live="polite"
              className="hidden text-sm text-gray-500 md:block"
            >
              {total === products.length
                ? `${total} ${total === 1 ? "item" : "items"}`
                : `${total} of ${products.length} items`}
            </p>
            <Select
              aria-label="Sort by"
              size="sm"
              icon={SwitchVertical01}
              items={SORT_ITEMS}
              selectedKey={sort}
              onSelectionChange={(key) => {
                if (key !== null && isSortKey(String(key)))
                  onSortChange?.(String(key) as SortKey);
              }}
              className="w-44 sm:w-52"
            >
              {(item) => <Select.Item id={item.id} label={item.label} />}
            </Select>
          </div>
        </div>

        <ActiveFilters
          filters={active}
          onRemove={onToggleFilter}
          onClearAll={onClearFilters}
        />

        {/* Results: dimmed while an update is in flight, and the scroll target
            after a filter change (scroll-mt clears the sticky navbar + top bar). */}
        <div
          ref={resultsRef}
          aria-busy={isPending}
          className={cx(
            "scroll-mt-40 motion-safe:transition-opacity",
            isPending && "opacity-60",
          )}
        >
          {total === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-gray-300 px-6 py-16 text-center">
              <p className="text-base font-semibold text-gray-950">
                No products match these filters
              </p>
              {rescue && rescue.count > 0 && (
                <Button
                  color="primary"
                  size="md"
                  onPress={() =>
                    onToggleFilter(rescue.filter.key, rescue.filter.value)
                  }
                >
                  Remove “{rescue.filter.label}” to see {rescue.count}{" "}
                  {rescue.count === 1 ? "product" : "products"}
                </Button>
              )}
              <Button color="secondary" size="md" onPress={onClearFilters}>
                Clear all filters
              </Button>
            </div>
          ) : (
            <ProductGrid
              products={visible}
              priorityCount={PRIORITY_COUNT}
              hideBadge={hideBadge}
              showSavings={showSavings}
            />
          )}

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
                <Button
                  color="secondary"
                  size="lg"
                  className="mt-2"
                  onPress={onLoadMore}
                >
                  Load more
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type ProductListingProps = {
  products: ProductCardData[];
  facetKeys: FacetKey[];
  categoryLinks?: CategoryLink[];
  showSavings?: boolean;
  hideBadge?: BadgeKind;
};

// Product list with filters (?size=m&color=black…), sort (?sort=price-asc) and
// paging (?show=48), all kept in the URL so views can be shared and the back
// button returns to the same spot. Changing filters or sort starts back at the
// first page.
export default function ProductListing({
  products,
  facetKeys,
  categoryLinks,
  showSavings,
  hideBadge,
}: ProductListingProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  // Where focus goes after "Load more": the first newly shown product.
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  // URL updates run in a transition. Meanwhile the optimistic copy shows the
  // new filters straight away, so checkboxes and counts react on click.
  const [isPending, startTransition] = useTransition();
  const [filters, setOptimisticFilters] = useOptimistic(
    parseFilters(searchParams, facetKeys),
  );
  const requested = Number(searchParams.get("show"));
  const shown =
    Number.isInteger(requested) && requested > PAGE_SIZE
      ? requested
      : PAGE_SIZE;
  const sortParam = searchParams.get("sort");
  const sort: SortKey = isSortKey(sortParam) ? sortParam : "recommended";

  const replaceParams = (changes: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(changes)) {
      if (value === null) params.delete(key);
      else params.set(key, value);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  // If the shopper has scrolled past the top of the results, bring them back
  // so they see the new results rather than the middle of a changed list.
  const scrollToResults = () => {
    const results = resultsRef.current;
    if (!results || results.getBoundingClientRect().top >= 0) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    results.scrollIntoView({
      block: "start",
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const setFilters = (next: FilterState) => {
    startTransition(() => {
      setOptimisticFilters(next);
      replaceParams({ ...serializeFilters(next), show: null });
    });
    // From the phone sheet, scroll once it closes instead (the page is locked).
    if (!sheetOpen) scrollToResults();
  };

  const setSort = (next: SortKey) =>
    startTransition(() =>
      replaceParams({ sort: next === "recommended" ? null : next, show: null }),
    );

  const loadMore = () => {
    setFocusIndex(shown);
    replaceParams({ show: String(shown + PAGE_SIZE) });
  };

  useEffect(() => {
    if (focusIndex === null) return;
    const links = containerRef.current?.querySelectorAll<HTMLElement>(
      "[data-product-link]",
    );
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
        facetKeys={facetKeys}
        categoryLinks={categoryLinks}
        showSavings={showSavings}
        hideBadge={hideBadge}
        filters={filters}
        shown={shown}
        sort={sort}
        onToggleFilter={(key, value) =>
          setFilters(toggleFilter(filters, key, value))
        }
        onSizeChange={(sizes) => setFilters({ ...filters, size: sizes })}
        onPriceChange={(min, max) =>
          setFilters(setPriceRange(filters, min, max))
        }
        onClearFilters={() => setFilters(emptyFilters())}
        onSheetOpenChange={(open) => {
          setSheetOpen(open);
          if (!open) scrollToResults();
        }}
        isPending={isPending}
        resultsRef={resultsRef}
        onLoadMore={loadMore}
        onSortChange={setSort}
      />
    </div>
  );
}
