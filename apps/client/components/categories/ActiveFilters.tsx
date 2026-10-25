"use client";

import { BadgeWithButton } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import type { FacetKey } from "@/utils/productFilters";

type ActiveFiltersProps = {
  filters: { key: FacetKey; value: string; label: string }[];
  onRemove: (key: FacetKey, value: string) => void;
  onClearAll: () => void;
};

// On desktop the rail is visible with these already ticked, so only filters
// set elsewhere (Size in the top bar, the price slider) get a pill there.
// Phones hide the rail, so they show every pill.
const ALWAYS_SHOWN: FacetKey[] = ["size", "price"];

// Removable pills for the filters in use, plus "Clear all".
export default function ActiveFilters({ filters, onRemove, onClearAll }: ActiveFiltersProps) {
  if (filters.length === 0) return null;
  const anyOnDesktop = filters.some((filter) => ALWAYS_SHOWN.includes(filter.key));

  return (
    <div className={cx("mb-4 flex min-h-8 flex-wrap items-center gap-2", !anyOnDesktop && "lg:hidden")}>
      {filters.map((filter) => (
        // The kit badge takes no className, so the wrapper carries the visibility.
        <span
          key={`${filter.key}-${filter.value}`}
          className={cx("inline-flex", !ALWAYS_SHOWN.includes(filter.key) && "lg:hidden")}
        >
          <BadgeWithButton
            type="pill-color"
            color="gray"
            size="md"
            buttonLabel={`Remove filter: ${filter.label}`}
            onButtonClick={() => onRemove(filter.key, filter.value)}
          >
            {filter.label}
          </BadgeWithButton>
        </span>
      ))}
      {/* The rail header has its own "Clear all" on desktop. */}
      <Button color="link-gray" size="sm" className="lg:hidden" onPress={onClearAll}>
        Clear all
      </Button>
    </div>
  );
}
