"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import ProductCard, { type ProductCardData } from "@/components/product/ProductCard";
import type { BadgeKind } from "@/utils/productCardData";
import {
  productRailImageSizes,
  productRailItemClassName,
  type SectionTone,
} from "@/components/product/productRailStyles";
import { CATEGORIES, FALLBACK_LABEL } from "@/utils/categories";
import { cx } from "@/utils/cx";

type Chip = { value: string; label: string };

const groupOf = (product: ProductCardData) => product.productGroup || FALLBACK_LABEL;

const ALL = "all";
const ALL_LIMIT = 16;
const CATEGORY_LIMIT = 12;

const TONES = {
  light: {
    chipSelected: "bg-gray-950 text-white",
    chip: "text-gray-700 ring-1 ring-gray-300 ring-inset hover:bg-gray-100",
    // White fill so buttons still read as buttons on tinted bands.
    button: "bg-white text-gray-950 ring-1 ring-gray-300 ring-inset",
    buttonHover: "hover:bg-gray-100",
    focus: "focus-visible:outline-gray-950",
  },
  dark: {
    chipSelected: "bg-white text-gray-950",
    chip: "text-white/80 ring-1 ring-white/25 ring-inset hover:bg-white/10",
    button: "text-white ring-1 ring-white/25 ring-inset",
    buttonHover: "hover:bg-white/10",
    focus: "focus-visible:outline-white",
  },
};

type ProductRailProps = {
  products: ProductCardData[]; // already mixed across categories
  hideBadge?: BadgeKind; // the badge the section is about, e.g. "new" in New arrivals
  showSavings?: boolean;
  viewAll?: { label: string; href: string }; // full-width button on phones
  tone?: SectionTone;
};

// A swipeable row of product cards with category filter chips.
export default function ProductRail({
  products,
  hideBadge,
  showSavings = false,
  viewAll,
  tone = "light",
}: ProductRailProps) {
  const [selected, setSelected] = useState(ALL);
  const colors = TONES[tone];

  const arrowClassName = ({ isDisabled }: { isDisabled: boolean }) =>
    cx(
      "grid size-10 place-items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
      colors.button,
      colors.focus,
      isDisabled ? "opacity-40" : colors.buttonHover,
    );

  // Products from several categories get category chips. If they're all from
  // one category (e.g. a beauty-only sale), chips switch to its product groups,
  // largest first, so they still filter something.
  const categoryChips: Chip[] = CATEGORIES.filter((category) =>
    products.some((product) => product.category === category.key),
  ).map((category) => ({ value: category.key, label: category.label }));

  const byGroup = categoryChips.length <= 1;
  const groupCounts = new Map<string, number>();
  for (const product of products) {
    groupCounts.set(groupOf(product), (groupCounts.get(groupOf(product)) ?? 0) + 1);
  }
  const groupChips: Chip[] = [...groupCounts]
    .sort((a, b) => b[1] - a[1])
    .map(([group]) => ({ value: group, label: group }));

  const chips = byGroup ? groupChips : categoryChips;
  // A single chip wouldn't filter anything.
  const showChips = chips.length > 1;

  const matches = (product: ProductCardData) =>
    byGroup ? groupOf(product) === selected : product.category === selected;

  const visible =
    selected === ALL
      ? products.slice(0, ALL_LIMIT)
      : products.filter(matches).slice(0, CATEGORY_LIMIT);

  return (
    <>
      {/* Keyed by filter so switching chips starts back at the first card. */}
      <Carousel.Root
        key={selected}
        opts={{ align: "start", containScroll: "trimSnaps", slidesToScroll: "auto" }}
      >
        <div
          className={cx(
            "mb-6 items-center justify-between gap-4",
            showChips ? "flex" : "hidden sm:flex sm:justify-end",
          )}
        >
          {showChips && (
            <div className="-mx-5 flex gap-2 overflow-x-auto px-5 scrollbar-none sm:mx-0 sm:px-0">
              {[{ value: ALL, label: "All" }, ...chips].map((chip) => (
                <button
                  key={chip.value}
                  type="button"
                  aria-pressed={selected === chip.value}
                  onClick={() => setSelected(chip.value)}
                  className={cx(
                    "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
                    colors.focus,
                    selected === chip.value ? colors.chipSelected : colors.chip,
                  )}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          )}

          <div className="hidden shrink-0 gap-2 sm:flex">
            <Carousel.PrevTrigger className={arrowClassName}>
              <ArrowLeft aria-hidden="true" className="size-5" />
            </Carousel.PrevTrigger>
            <Carousel.NextTrigger className={arrowClassName}>
              <ArrowRight aria-hidden="true" className="size-5" />
            </Carousel.NextTrigger>
          </div>
        </div>

        <Carousel.Content className="-ml-4">
          {visible.map((product) => (
            <Carousel.Item key={product.id} className={productRailItemClassName}>
              <ProductCard
                product={product}
                sizes={productRailImageSizes}
                hideBadge={hideBadge}
                showSavings={showSavings}
                tone={tone}
              />
            </Carousel.Item>
          ))}
        </Carousel.Content>
      </Carousel.Root>

      {/* The header link is small on phones; give thumbs a bigger target. */}
      {viewAll && (
        <Link
          href={viewAll.href}
          className={cx(
            "mt-8 flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:hidden",
            colors.button,
            colors.buttonHover,
            colors.focus,
          )}
        >
          {viewAll.label}
        </Link>
      )}
    </>
  );
}
