"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Autocomplete, MenuItem } from "react-aria-components";
import { ArrowRight, Clock, LayoutGrid01, SearchLg, TrendUp01, XClose } from "@untitledui/icons";
import { EmptyState } from "@/components/application/empty-state/empty-state";
import { LoadingIndicator } from "@/components/application/loading-indicator/loading-indicator";
import { Dialog, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { BadgeWithButton } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { Input } from "@/components/base/input/input";
import Highlight from "@/components/search/Highlight";
import SearchPrice from "@/components/search/SearchPrice";
import { cx } from "@/utils/cx";
import { searchClient } from "@/utils/search/client";
import {
  MIN_QUERY_LENGTH,
  SUGGEST_DEBOUNCE_MS,
  TRENDING_SEARCHES,
  searchHref,
} from "@/utils/search/config";
import {
  addRecentSearch,
  clearRecentSearches,
  removeRecentSearch,
  useRecentSearches,
} from "@/utils/search/recentSearches";
import type { SearchProduct, SearchSuggestions } from "@/utils/search/types";

export type SearchScope = { key: string; label: string };

type SearchPanelProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  scope?: SearchScope | null; // the category page it was opened from
};

const MAX_RECENT_SHOWN = 5;

const sectionLabelClassName =
  "px-4 pt-3 pb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase";

// A product as a menu item: a compact row on phones, an image card on
// desktop. The kit Dropdown.Item has no product layout, so this uses the
// React Aria item it wraps; arrow keys reach it like any other item.
function ProductItem({
  product,
  query,
  onSelect,
}: {
  product: SearchProduct;
  query: string;
  onSelect: () => void;
}) {
  return (
    <MenuItem
      id={`product-${product.id}`}
      textValue={product.name}
      href={product.href}
      onAction={onSelect}
      className="block cursor-pointer px-1.5 py-px outline-hidden"
    >
      {({ isFocused }) => (
        <div
          className={cx(
            "flex items-center gap-3 rounded-md p-2 sm:flex-col sm:items-stretch sm:gap-2",
            isFocused && "bg-gray-100 ring-2 ring-gray-950",
          )}
        >
          <div className="relative h-14 w-11 shrink-0 overflow-hidden rounded-sm bg-gray-50 sm:aspect-3/4 sm:h-auto sm:w-full">
            <Image
              src={product.image}
              alt=""
              fill
              sizes="(min-width: 640px) 160px, 44px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 text-sm">
            <p className="truncate text-gray-700">
              <Highlight text={product.name} query={query} />
            </p>
            <SearchPrice price={product.price} />
          </div>
        </div>
      )}
    </MenuItem>
  );
}

// The navbar search: a panel pinned to the top on desktop and full screen on
// phones. Built from Untitled UI's free modal, input, badge, dropdown menu,
// button, empty state and loading indicator; React Aria's Autocomplete gives
// arrow-key navigation from the input into the results. Data comes from
// searchClient (a mock until the search service exists).
export default function SearchPanel({ isOpen, onOpenChange, scope }: SearchPanelProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [scoped, setScoped] = useState(true); // the "in Women" chip is on
  const [latest, setLatest] = useState<{ key: string; data: SearchSuggestions } | null>(null);
  const [featured, setFeatured] = useState<SearchProduct[]>([]);
  const cache = useRef(new Map<string, SearchSuggestions>());
  const recent = useRecentSearches();

  const trimmed = query.trim();
  const category = scope && scoped ? scope.key : undefined;
  const active = trimmed.length >= MIN_QUERY_LENGTH;
  const key = `${category ?? ""}|${trimmed}`;

  // Keep showing the last answer while the next one loads, so the panel never
  // blanks between keystrokes; only the very first query shows a spinner.
  const upToDate = active && latest?.key === key;
  const shown = active ? latest?.data ?? null : null;
  const pending = active && !upToDate;

  useEffect(() => {
    if (!active) return;
    const cached = cache.current.get(key);
    const controller = new AbortController();
    const timer = setTimeout(
      () => {
        if (cached) {
          setLatest({ key, data: cached });
          return;
        }
        searchClient
          .suggest(trimmed, { signal: controller.signal, category })
          .then((data) => {
            cache.current.set(key, data);
            setLatest({ key, data });
          })
          .catch(() => {}); // aborted: a newer query took over
      },
      cached ? 0 : SUGGEST_DEBOUNCE_MS,
    );
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [active, key, trimmed, category]);

  // Bestsellers for the empty state, fetched once when the panel first opens.
  useEffect(() => {
    if (!isOpen || featured.length > 0) return;
    const controller = new AbortController();
    searchClient
      .featured({ signal: controller.signal })
      .then(setFeatured)
      .catch(() => {});
    return () => controller.abort();
  }, [isOpen, featured.length]);

  const close = () => onOpenChange(false);

  const goToSearch = (term: string) => {
    if (term.trim().length === 0) return;
    addRecentSearch(term);
    close();
    router.push(searchHref(term, category));
  };

  // Enter with nothing highlighted searches for what's typed; with an item
  // highlighted, Autocomplete runs that item instead and this doesn't fire.
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    goToSearch(query);
  };

  const remember = () => addRecentSearch(query);

  const hasLeft = Boolean(shown && (shown.suggestions.length > 0 || shown.categories.length > 0));
  const hasProducts = Boolean(shown && shown.products.length > 0);
  const nothing = Boolean(shown && upToDate && !hasLeft && !hasProducts);

  return (
    <ModalOverlay
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable
      // Pinned to the top on every screen; full-bleed on phones.
      className="items-start px-0 motion-reduce:animate-none [--modal-pb:0px] [--modal-pt:0px] sm:items-start sm:px-4 sm:[--modal-pb:32px] sm:[--modal-pt:0px]"
    >
      <Modal
        // Slides down from the top edge instead of the kit's centre zoom.
        className={(state) =>
          cx(
            "max-w-5xl max-sm:h-dvh max-sm:max-h-none max-sm:rounded-none sm:rounded-t-none motion-reduce:animate-none",
            state.isEntering && "zoom-in-100 slide-in-from-top-4",
            state.isExiting && "zoom-out-100 slide-out-to-top-4",
          )
        }
      >
        <Dialog aria-label="Search" className="flex max-h-[inherit] flex-col max-sm:h-dvh">
          <Autocomplete inputValue={query} onInputChange={setQuery}>
            <form
              onSubmit={onSubmit}
              className="relative flex shrink-0 items-center gap-2 border-b border-gray-200 px-2 sm:px-3"
            >
              <Input
                autoFocus
                size="lg"
                icon={SearchLg}
                aria-label="Search products"
                placeholder="Search for products, colours, categories"
                className="min-w-0 flex-1"
                // Borderless and large: the panel's divider is the only line.
                wrapperClassName="bg-transparent shadow-none ring-0"
                inputClassName="h-14 pl-11 text-lg sm:h-16 sm:text-xl"
                iconClassName="size-6 text-gray-500"
              />

              {scope && scoped && (
                <BadgeWithButton
                  type="pill-color"
                  color="gray"
                  size="md"
                  buttonLabel={`Search everything, not just ${scope.label}`}
                  onButtonClick={() => setScoped(false)}
                >
                  in {scope.label}
                </BadgeWithButton>
              )}

              {query && (
                <Button
                  color="tertiary"
                  size="sm"
                  iconLeading={XClose}
                  aria-label="Clear search"
                  onPress={() => setQuery("")}
                />
              )}

              <Button color="link-gray" size="sm" onPress={close} className="px-2 max-sm:hidden">
                <kbd className="rounded-md border border-gray-300 px-1.5 py-0.5 font-sans text-xs text-gray-600">
                  Esc
                </kbd>
              </Button>
              <Button color="link-gray" size="sm" onPress={close} className="px-2 sm:hidden">
                Cancel
              </Button>

              {/* A thin progress line while a newer answer is on its way. */}
              {pending && shown && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-gray-950 motion-safe:animate-pulse"
                />
              )}
            </form>

            <div className="min-h-0 flex-1 overflow-y-auto">
              <p aria-live="polite" className="sr-only">
                {upToDate && shown ? `${shown.total} results` : ""}
              </p>

              {!active && (
                <EmptyStart recent={recent} featured={featured} onSearch={goToSearch} onProduct={close} />
              )}

              {/* Only the very first query waits with nothing on screen. */}
              {active && !shown && (
                <div className="flex justify-center py-16">
                  <LoadingIndicator type="line-spinner" size="sm" />
                </div>
              )}

              {nothing && (
                <div className="px-4 py-12">
                  <EmptyState size="sm">
                    <EmptyState.Header pattern="none">
                      <EmptyState.FeaturedIcon icon={SearchLg} color="gray" />
                    </EmptyState.Header>
                    <EmptyState.Content>
                      <EmptyState.Title>
                        No results for “{trimmed}”{category && scope ? ` in ${scope.label}` : ""}
                      </EmptyState.Title>
                      <EmptyState.Description>Try a different word, or one of these:</EmptyState.Description>
                    </EmptyState.Content>
                    <EmptyState.Footer>
                      <TrendingButtons onSearch={goToSearch} />
                    </EmptyState.Footer>
                  </EmptyState>
                </div>
              )}

              {shown && (hasLeft || hasProducts) && (
                // Kit menu sections; arrow keys move through them in order
                // (suggestions, categories, products) while typing continues.
                // The columns adapt to what's there, so no half sits empty.
                <Dropdown.Menu
                  aria-label="Search suggestions"
                  className={cx(
                    "grid gap-x-6 py-2 motion-safe:transition-opacity",
                    pending && "opacity-60",
                    hasLeft && hasProducts && "sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] sm:grid-rows-[auto_1fr]",
                    hasLeft && !hasProducts && "max-w-xl",
                  )}
                >
                  {shown.suggestions.length > 0 && (
                    <Dropdown.Section className="sm:col-start-1 sm:row-start-1">
                      <Dropdown.SectionHeader className={sectionLabelClassName}>
                        Suggestions
                      </Dropdown.SectionHeader>
                      {shown.suggestions.map((phrase) => (
                        <Dropdown.Item
                          key={phrase}
                          id={`suggestion-${phrase}`}
                          textValue={phrase}
                          icon={SearchLg}
                          href={searchHref(phrase, category)}
                          onAction={() => {
                            addRecentSearch(phrase);
                            close();
                          }}
                        >
                          <span className="text-gray-950">
                            <Highlight text={phrase} query={trimmed} mode="completion" />
                          </span>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Section>
                  )}

                  {shown.categories.length > 0 && (
                    <Dropdown.Section className="sm:col-start-1 sm:row-start-2">
                      <Dropdown.SectionHeader className={sectionLabelClassName}>
                        Categories
                      </Dropdown.SectionHeader>
                      {shown.categories.map((link) => (
                        <Dropdown.Item
                          key={link.href}
                          id={`category-${link.href}`}
                          textValue={`${link.label} ${link.category}`}
                          icon={LayoutGrid01}
                          addon={link.category}
                          href={link.href}
                          onAction={() => {
                            remember();
                            close();
                          }}
                        >
                          <Highlight text={link.label} query={trimmed} />
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Section>
                  )}

                  {hasProducts && (
                    <Dropdown.Section
                      className={cx(
                        "sm:grid sm:gap-1 sm:px-2",
                        hasLeft
                          ? "sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:grid-cols-3"
                          : "sm:grid-cols-4",
                      )}
                    >
                      <Dropdown.SectionHeader className={cx(sectionLabelClassName, "sm:col-span-full sm:px-2")}>
                        Products
                      </Dropdown.SectionHeader>
                      {shown.products.map((product) => (
                        <ProductItem
                          key={product.id}
                          product={product}
                          query={trimmed}
                          onSelect={() => {
                            remember();
                            close();
                          }}
                        />
                      ))}
                    </Dropdown.Section>
                  )}
                </Dropdown.Menu>
              )}
            </div>

            {/* shrink-0 keeps it pinned above the phone keyboard (h-dvh shrinks). */}
            {shown && shown.total > 0 && (
              <div className="shrink-0 border-t border-gray-200 px-4 py-3">
                <Button
                  color="link-color"
                  size="md"
                  iconTrailing={ArrowRight}
                  onPress={() => goToSearch(trimmed)}
                  className="w-full justify-between"
                >
                  See all {shown.total} {shown.total === 1 ? "result" : "results"} for “{trimmed}”
                  {category && scope ? ` in ${scope.label}` : ""}
                </Button>
              </div>
            )}
          </Autocomplete>
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}

function TrendingButtons({ onSearch }: { onSearch: (term: string) => void }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
      {TRENDING_SEARCHES.map((term) => (
        <Button key={term} color="secondary" size="sm" iconLeading={TrendUp01} onPress={() => onSearch(term)}>
          {term}
        </Button>
      ))}
    </div>
  );
}

// Before typing: recent and trending searches, and bestsellers to browse.
function EmptyStart({
  recent,
  featured,
  onSearch,
  onProduct,
}: {
  recent: string[];
  featured: SearchProduct[];
  onSearch: (term: string) => void;
  onProduct: () => void;
}) {
  return (
    <div className="grid gap-x-6 p-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
      <div className="space-y-6">
        {recent.length > 0 && (
          <section>
            <div className="flex items-center justify-between">
              <h3 className="py-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Recent searches
              </h3>
              <Button color="link-gray" size="sm" onPress={clearRecentSearches}>
                Clear
              </Button>
            </div>
            <ul>
              {recent.slice(0, MAX_RECENT_SHOWN).map((term) => (
                <li key={term} className="group/recent flex items-center gap-1 rounded-md hover:bg-gray-50">
                  <button
                    type="button"
                    onClick={() => onSearch(term)}
                    className="flex min-w-0 flex-1 items-center gap-3 rounded-md px-2 py-2 text-left text-sm text-gray-700 focus-visible:outline-2 focus-visible:outline-focus-ring"
                  >
                    <Clock aria-hidden="true" className="size-4 shrink-0 text-gray-400" />
                    <span className="truncate">{term}</span>
                  </button>
                  {/* Shown on hover or keyboard focus; always on touch screens. */}
                  <span className="opacity-0 group-focus-within/recent:opacity-100 group-hover/recent:opacity-100 pointer-coarse:opacity-100">
                    <Button
                      color="tertiary"
                      size="xs"
                      iconLeading={XClose}
                      aria-label={`Remove ${term} from recent searches`}
                      onPress={() => removeRecentSearch(term)}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h3 className="py-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">Trending</h3>
          <div className="mt-1">
            <TrendingButtons onSearch={onSearch} />
          </div>
        </section>
      </div>

      {featured.length > 0 && (
        <section className="mt-6 sm:mt-0">
          <h3 className="py-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">Bestsellers</h3>
          <ul className="mt-1 grid grid-cols-1 gap-1 sm:grid-cols-3">
            {featured.map((product) => (
              <li key={product.id}>
                <Link
                  href={product.href}
                  onClick={onProduct}
                  className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-focus-ring sm:flex-col sm:items-stretch sm:gap-2"
                >
                  <div className="relative h-14 w-11 shrink-0 overflow-hidden rounded-sm bg-gray-50 sm:aspect-3/4 sm:h-auto sm:w-full">
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 160px, 44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 text-sm">
                    <p className="truncate font-medium text-gray-950">{product.name}</p>
                    <SearchPrice price={product.price} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
