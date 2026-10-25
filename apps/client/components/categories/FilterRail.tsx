"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/base/buttons/button";
import { Checkbox, CheckboxBase } from "@/components/base/checkbox/checkbox";
import PriceRangeFilter from "@/components/categories/PriceRangeFilter";
import type { Facet, FacetKey, FilterState } from "@/utils/productFilters";
import { cx } from "@/utils/cx";

// On group pages, CATEGORY lists the sibling groups as links instead of a filter.
export type CategoryLink = { label: string; href: string; count: number; current: boolean };

type FilterRailProps = {
  facets: Facet[]; // Size is left out: it lives in the top bar
  state: FilterState;
  categoryLinks?: CategoryLink[];
  onToggle: (key: FacetKey, value: string) => void;
  onPriceChange: (min: number | null, max: number | null) => void;
};

const SHORT_LIST = 6; // longer lists show this many, then "+ N more"

const isChecked = (state: FilterState, key: FacetKey, value: string) =>
  key !== "price" && (state[key] as Set<string>).has(value);

const Count = ({ count }: { count: number }) => (
  <span className="ml-1 text-xs font-normal text-gray-500 tabular-nums">({count})</span>
);

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-gray-200 py-6">
      <h3 className="mb-4 text-xs font-semibold tracking-wider text-gray-950 uppercase">{title}</h3>
      {children}
    </section>
  );
}

// Shows the first few items, then "+ N more" to expand in place.
function ShortList<T>({ items, render }: { items: T[]; render: (item: T) => ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const hidden = items.length - SHORT_LIST;
  const visible = expanded || hidden <= 0 ? items : items.slice(0, SHORT_LIST);

  return (
    <>
      <ul className="space-y-3">{visible.map(render)}</ul>
      {hidden > 0 && (
        <Button color="link-color" size="sm" className="mt-3" onPress={() => setExpanded(!expanded)}>
          {expanded ? "Show less" : `+ ${hidden} more`}
        </Button>
      )}
    </>
  );
}

// The flat filter list: always-expanded sections with Untitled UI checkboxes
// and slider. Used in the desktop sidebar and inside the phone sheet.
export default function FilterRail({
  facets,
  state,
  categoryLinks,
  onToggle,
  onPriceChange,
}: FilterRailProps) {
  if (facets.length === 0 && !categoryLinks?.length) {
    return <p className="py-4 text-sm text-gray-500">No filters for these products.</p>;
  }

  return (
    <div>
      {categoryLinks && categoryLinks.length > 1 && (
        <Section title="Category">
          <ShortList
            items={categoryLinks}
            render={(link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={link.current ? "page" : undefined}
                  className="flex items-center gap-2 rounded-sm text-sm font-medium text-gray-700 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
                >
                  {/* Navigation, not a form control: the box just mirrors the kit checkbox. */}
                  <CheckboxBase isSelected={link.current} size="sm" />
                  <span className={cx(link.current && "text-gray-950")}>{link.label}</span>
                  <Count count={link.count} />
                </Link>
              </li>
            )}
          />
        </Section>
      )}

      {facets.map((facet) =>
        facet.kind === "range" ? (
          <Section key={facet.key} title={facet.label}>
            <PriceRangeFilter
              // Remount when the URL changes the range, e.g. after removing its pill.
              key={`${state.priceMin}-${state.priceMax}`}
              bounds={facet.range!}
              value={{ min: state.priceMin, max: state.priceMax }}
              onChange={onPriceChange}
            />
          </Section>
        ) : (
          <Section key={facet.key} title={facet.label}>
            <ShortList
              // Options with no results (and not chosen) sink to the bottom.
              items={[...facet.options].sort(
                (a, b) =>
                  Number(a.count === 0 && !isChecked(state, facet.key, a.value)) -
                  Number(b.count === 0 && !isChecked(state, facet.key, b.value)),
              )}
              render={(option) => {
                const checked = isChecked(state, facet.key, option.value);
                return (
                  <li key={option.value}>
                    <Checkbox
                      isSelected={checked}
                      // Choices that would give no results are disabled, unless chosen.
                      isDisabled={option.count === 0 && !checked}
                      onChange={() => onToggle(facet.key, option.value)}
                      label={
                        <span className="flex items-center">
                          {facet.kind === "swatch" && (
                            <span
                              aria-hidden="true"
                              className="mr-2 size-4 shrink-0 rounded-full ring-1 ring-black/15"
                              style={{ background: option.swatch }}
                            />
                          )}
                          <span className="text-gray-700">{option.label}</span>
                          <Count count={option.count} />
                        </span>
                      }
                    />
                  </li>
                );
              }}
            />
          </Section>
        ),
      )}
    </div>
  );
}
