"use client";

import { type FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchLg, TrendUp01 } from "@untitledui/icons";
import { EmptyState } from "@/components/application/empty-state/empty-state";
import { LoadingIndicator } from "@/components/application/loading-indicator/loading-indicator";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { MOBILE_GRID, productGridClassName } from "@/components/categories/ProductGrid";
import SearchPrice from "@/components/search/SearchPrice";
import { cx } from "@/utils/cx";
import { searchClient } from "@/utils/search/client";
import { TRENDING_SEARCHES, searchHref } from "@/utils/search/config";
import { categoryByKey } from "@/utils/categories";
import { BadgeWithButton } from "@/components/base/badges/badges";
import { addRecentSearch } from "@/utils/search/recentSearches";
import type { SearchProduct } from "@/utils/search/types";

function ResultCard({ product }: { product: SearchProduct }) {
  return (
    <Link
      href={product.href}
      className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-950"
    >
      <div className="relative aspect-3/4 overflow-hidden rounded-lg bg-gray-50">
        <Image
          src={product.image}
          alt=""
          fill
          sizes={MOBILE_GRID[2].sizes}
          className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.02]"
        />
      </div>
      <p className="mt-3 line-clamp-1 text-sm font-medium text-gray-950 sm:text-base">{product.name}</p>
      <p className="mt-1 text-sm">
        <SearchPrice price={product.price} />
      </p>
    </Link>
  );
}

function TrendingButtons() {
  const router = useRouter();
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {TRENDING_SEARCHES.map((term) => (
        <Button
          key={term}
          color="secondary"
          size="sm"
          iconLeading={TrendUp01}
          onPress={() => {
            addRecentSearch(term);
            router.push(searchHref(term));
          }}
        >
          {term}
        </Button>
      ))}
    </div>
  );
}

// The search box at the top of the page, prefilled with the current query.
// Keyed by the query so it resets when you navigate to another search.
function RefineSearch({ initial, category }: { initial: string; category: string | null }) {
  const router = useRouter();
  const [value, setValue] = useState(initial);
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!value.trim()) return;
    addRecentSearch(value);
    router.push(searchHref(value, category));
  };
  return (
    <form onSubmit={onSubmit} className="mb-8 max-w-xl">
      <Input
        size="lg"
        icon={SearchLg}
        aria-label="Search products"
        placeholder="Search for products, colours, categories"
        value={value}
        onChange={setValue}
      />
    </form>
  );
}

// Search results over the mock search client. Once the search service returns
// full product data, this grid is replaced by ProductListing (filters, sort,
// paging), as on the category pages.
export default function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();
  // Optional scope, e.g. ?category=women from search opened on a Women page.
  const scope = categoryByKey(searchParams.get("category") ?? "") ?? null;
  const category = scope?.key ?? null;
  const resultKey = `${category ?? ""}|${query}`;
  const [results, setResults] = useState<{ key: string; items: SearchProduct[] } | null>(null);
  const [featured, setFeatured] = useState<SearchProduct[]>([]);

  const current = query && results?.key === resultKey ? results.items : null;
  const loading = Boolean(query) && !current;

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();
    searchClient
      .search(query, { signal: controller.signal, category: category ?? undefined })
      .then((items) => setResults({ key: resultKey, items }))
      .catch(() => {});
    return () => controller.abort();
  }, [query, category, resultKey]);

  // Bestsellers to suggest when there's nothing to show.
  const needsFeatured = !query || (current !== null && current.length === 0);
  useEffect(() => {
    if (!needsFeatured || featured.length > 0) return;
    const controller = new AbortController();
    searchClient
      .featured({ signal: controller.signal })
      .then(setFeatured)
      .catch(() => {});
    return () => controller.abort();
  }, [needsFeatured, featured.length]);

  return (
    <main className="mx-auto w-full max-w-[1600px] px-5 pt-6 pb-16 sm:px-8 md:px-12 md:pt-8">
      <h1 className="mb-4 text-2xl font-semibold tracking-tight text-gray-950">
        {query ? <>Results for “{query}”</> : "Search"}
        {query && scope && <> in {scope.label}</>}
        {current && <span className="font-normal text-gray-500"> · {current.length} items</span>}
      </h1>

      <RefineSearch key={resultKey} initial={query} category={category} />

      {scope && (
        <div className="-mt-4 mb-8">
          <BadgeWithButton
            type="pill-color"
            color="gray"
            size="md"
            buttonLabel={`Search everything, not just ${scope.label}`}
            onButtonClick={() => router.push(searchHref(query, null))}
          >
            in {scope.label}
          </BadgeWithButton>
        </div>
      )}

      <p aria-live="polite" className="sr-only">
        {current ? `${current.length} results for ${query}` : ""}
      </p>

      {loading && (
        <div className="flex justify-center py-24">
          <LoadingIndicator type="line-spinner" size="md" />
        </div>
      )}

      {current && current.length > 0 && (
        <div className={cx(productGridClassName, MOBILE_GRID[2].columns, "lg:grid-cols-4")}>
          {current.map((product) => (
            <ResultCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {needsFeatured && (
        <div className="py-8">
          <EmptyState size="md">
            <EmptyState.Header pattern="none">
              <EmptyState.FeaturedIcon icon={SearchLg} color="gray" />
            </EmptyState.Header>
            <EmptyState.Content>
              <EmptyState.Title>
                {query ? <>No results for “{query}”</> : "What are you looking for?"}
              </EmptyState.Title>
              <EmptyState.Description>
                {query ? "Check the spelling, or try one of these:" : "Try one of these popular searches:"}
              </EmptyState.Description>
            </EmptyState.Content>
            <EmptyState.Footer>
              <TrendingButtons />
            </EmptyState.Footer>
          </EmptyState>

          {featured.length > 0 && (
            <section aria-labelledby="search-bestsellers" className="mt-16">
              <h2 id="search-bestsellers" className="mb-6 text-xl font-semibold tracking-tight text-gray-950">
                Bestsellers
              </h2>
              <div className={cx(productGridClassName, MOBILE_GRID[2].columns, "lg:grid-cols-4")}>
                {featured.map((product) => (
                  <ResultCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </main>
  );
}
