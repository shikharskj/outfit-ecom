"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProductCardData } from "@/utils/productCardData";
import { cx } from "@/utils/cx";
import type { SectionTone } from "@/components/product/productRailStyles";
import ProductCardActions from "@/components/product/ProductCardActions";

const MAX_SWATCHES = 4;

// Text colours for white and black sections. The lighter reds and oranges keep
// readable contrast on black.
const TONES = {
  light: {
    focus: "focus-visible:after:outline-gray-950",
    imageBg: "bg-gray-100",
    name: "text-gray-950",
    price: "text-gray-950",
    salePrice: "text-red-700",
    muted: "text-gray-500",
    fewLeft: "text-orange-700",
    swatchRing: "ring-black/15",
    swatchSelected: "ring-2 ring-gray-950 ring-offset-1 ring-offset-white",
    dotFocus: "focus-visible:outline-gray-950",
  },
  dark: {
    focus: "focus-visible:after:outline-white",
    imageBg: "bg-gray-800",
    name: "text-white",
    price: "text-white",
    salePrice: "text-red-400",
    muted: "text-white/55",
    fewLeft: "text-orange-400",
    swatchRing: "ring-white/30",
    swatchSelected: "ring-2 ring-white ring-offset-1 ring-offset-gray-950",
    dotFocus: "focus-visible:outline-white",
  },
};

export type { ProductCardData } from "@/utils/productCardData";

const formatPrice = (amount: number, currency: string) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);

type ProductCardProps = {
  product: ProductCardData;
  sizes: string; // passed to next/image so each layout downloads the right width
  showNewBadge?: boolean; // off inside sections that are already "new"
  showSavings?: boolean; // "Save ₹X" under sale prices
  tone?: SectionTone;
  priority?: boolean; // load the image right away (first row of a list page)
  // Swipe between photos on touch screens. Grids only: inside a carousel row
  // it would fight the row's own swipe.
  swipeImages?: boolean;
};

export default function ProductCard({
  product,
  sizes,
  showNewBadge = true,
  showSavings = false,
  tone = "light",
  priority = false,
  swipeImages = false,
}: ProductCardProps) {
  const colors = TONES[tone];
  const { price, images, colorVariants } = product;

  // Colour dots switch the photo: hovering previews a colour, clicking picks it.
  const defaultCode =
    colorVariants.find((variant) => variant.articleCode === product.id)?.articleCode ?? null;
  const [selectedCode, setSelectedCode] = useState(defaultCode);
  const [previewCode, setPreviewCode] = useState<string | null>(null);
  const shownCode = previewCode ?? selectedCode;
  const shownVariant =
    shownCode === defaultCode
      ? undefined
      : colorVariants.find((variant) => variant.articleCode === shownCode);
  const mainImage = shownVariant?.image ?? images.main;
  const productHref =
    selectedCode && selectedCode !== defaultCode
      ? `/products/${product.id}?color=${selectedCode}`
      : `/products/${product.id}`;

  const sizeCount = product.sizes.length;
  const inStockCount = product.sizes.filter((size) => size.inStock).length;
  // The model shot is of the default colour, so only swap to it then.
  const hasHoverImage = !shownVariant && images.model && images.model !== images.main;
  const extraSwatches = colorVariants.length - MAX_SWATCHES;

  // Touch photo strip: the shown colour, plus the model shot for the default colour.
  const slides = hasHoverImage ? [mainImage, images.model] : [mainImage];
  const showStrip = swipeImages && slides.length > 1;
  const [activeSlide, setActiveSlide] = useState(0);

  const soldOut = sizeCount > 0 && inStockCount === 0;
  // One-size items (most beauty and home) never count as running low.
  const fewSizesLeft = !soldOut && sizeCount > 1 && inStockCount / sizeCount <= 0.5;

  return (
    // Not one big link: the heart and Add to bag buttons can't live inside an
    // <a>. The name's link stretches over the card instead (see below).
    <article className="group relative min-w-0">
      <div
        className={cx(
          "relative aspect-3/4 overflow-hidden rounded-lg",
          colors.imageBg,
        )}
      >
        <div
          className={cx(
            "absolute inset-0",
            soldOut && "opacity-60",
            showStrip && "pointer-coarse:hidden",
          )}
        >
          {/* Decorative: the product name is in the text below. */}
          <Image
            src={mainImage}
            alt=""
            fill
            sizes={sizes}
            loading={priority ? "eager" : undefined}
            fetchPriority={priority ? "high" : undefined}
            className="object-cover"
          />

          {/* On hover-capable devices, swap to the model shot. */}
          {hasHoverImage && (
            <Image
              src={images.model}
              alt=""
              fill
              sizes={sizes}
              className="object-cover opacity-0 group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-300"
            />
          )}
        </div>

        {/* Touch screens: swipe between photos. It sits above the card's
            stretched link so swipes reach it, so each slide links too. */}
        {showStrip && (
          <>
            <div
              onScroll={(event) => {
                const strip = event.currentTarget;
                setActiveSlide(Math.round(strip.scrollLeft / strip.clientWidth));
              }}
              className={cx(
                "absolute inset-0 z-10 hidden snap-x snap-mandatory overflow-x-auto scrollbar-none pointer-coarse:flex",
                soldOut && "opacity-60",
              )}
            >
              {slides.map((src) => (
                <Link
                  key={src}
                  href={productHref}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="relative h-full w-full shrink-0 snap-center"
                >
                  <Image src={src} alt="" fill sizes={sizes} className="object-cover" />
                </Link>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 gap-1.5 pointer-coarse:flex"
            >
              {slides.map((src, index) => (
                <span
                  key={src}
                  className={cx(
                    "size-1.5 rounded-full shadow-sm",
                    index === activeSlide ? "bg-gray-950" : "bg-white",
                  )}
                />
              ))}
            </div>
          </>
        )}

        <div className="pointer-events-none absolute left-2 top-2 z-10 flex flex-wrap gap-1.5 sm:left-3 sm:top-3">
          {soldOut && (
            <span className="rounded-full bg-gray-950 px-2 py-0.5 text-xs font-semibold text-white">
              Sold out
            </span>
          )}
          {showNewBadge && product.isNewArrival && (
            <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-gray-950">
              New
            </span>
          )}
          {price.onSale && price.discountPercentage && (
            <span className="rounded-full bg-red-700 px-2 py-0.5 text-xs font-semibold text-white">
              {price.discountPercentage}
            </span>
          )}
        </div>

        <ProductCardActions product={product} />
      </div>

      <div className="mt-3">
        <h3
          className={cx(
            "line-clamp-1 text-sm font-medium sm:text-base",
            colors.name,
          )}
        >
          {/* The ::after overlay makes the whole card clickable; the actions sit above it. */}
          <Link
            href={productHref}
            data-product-link={product.id}
            className={cx(
              "after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4",
              colors.focus,
            )}
          >
            {product.name}
          </Link>
        </h3>

        <p className="mt-1 flex flex-wrap items-baseline gap-x-2 text-sm">
          {price.onSale ? (
            <>
              <span className="sr-only">Sale price</span>
              <span
                className={cx(
                  "font-semibold",
                  soldOut ? colors.muted : colors.salePrice,
                )}
              >
                {formatPrice(price.current, price.currency)}
              </span>
              <span className="sr-only">Regular price</span>
              <s className={colors.muted}>
                {formatPrice(price.regular, price.currency)}
              </s>
            </>
          ) : (
            <span
              className={cx(
                "font-semibold",
                soldOut ? colors.muted : colors.price,
              )}
            >
              {formatPrice(price.current, price.currency)}
            </span>
          )}
        </p>

        {showSavings && price.onSale && price.regular > price.current && !soldOut && (
          <p className={cx("mt-1 text-xs font-medium", colors.salePrice)}>
            Save {formatPrice(price.regular - price.current, price.currency)}
          </p>
        )}

        {fewSizesLeft && (
          <p className={cx("mt-1 text-xs font-medium", colors.fewLeft)}>
            Few sizes left
          </p>
        )}

        {colorVariants.length > 1 && (
          // Above the stretched link (relative z-10) so the dots are clickable.
          <div
            role="group"
            aria-label={`${colorVariants.length} colours`}
            className="relative z-10 mt-1.5 -ml-1.5 flex w-fit items-center"
            onMouseLeave={() => setPreviewCode(null)}
          >
            {colorVariants.slice(0, MAX_SWATCHES).map((variant) => {
              const isSelected = variant.articleCode === selectedCode;
              return (
                <button
                  key={variant.articleCode}
                  type="button"
                  aria-label={`Show ${variant.colorName}`}
                  aria-pressed={isSelected}
                  title={variant.colorName}
                  onClick={() => {
                    setSelectedCode(variant.articleCode);
                    setActiveSlide(0);
                  }}
                  onPointerEnter={(event) => {
                    // Mouse only: on touch a tap selects, without a preview step.
                    if (event.pointerType === "mouse") setPreviewCode(variant.articleCode);
                  }}
                  className={cx(
                    "grid size-6 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-0",
                    colors.dotFocus,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cx(
                      "size-3 rounded-full ring-1",
                      isSelected ? colors.swatchSelected : colors.swatchRing,
                    )}
                    style={{ backgroundColor: variant.hex }}
                  />
                </button>
              );
            })}
            {extraSwatches > 0 && (
              <span aria-hidden="true" className={cx("text-xs", colors.muted)}>
                +{extraSwatches}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
