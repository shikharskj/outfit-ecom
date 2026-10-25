"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Heart, ShoppingBag01, XClose } from "@untitledui/icons";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { useShopStore } from "@/providers/shop-store-provider";
import { cx } from "@/utils/cx";

type CardSize = { code: string; name: string; inStock: boolean };

type ProductCardActionsProps = {
  product: { id: string; name: string; sizes: CardSize[] };
};

const ADDED_MS = 1500;

// Heart and Add to bag, layered over the card image. They sit above the card's
// stretched link (relative z-10) so clicking them never navigates.
export default function ProductCardActions({
  product,
}: ProductCardActionsProps) {
  const saved = useShopStore((state) => state.wishlist.includes(product.id));
  const toggleWishlist = useShopStore((state) => state.toggleWishlist);
  const addToBag = useShopStore((state) => state.addToBag);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const touchTriggerRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const inStock = product.sizes.filter((size) => size.inStock);
  const soldOut = product.sizes.length > 0 && inStock.length === 0;
  // One size (or no size data): nothing to choose, add straight away.
  const needsSize = product.sizes.length > 1;

  useEffect(() => {
    if (!justAdded) return;
    const id = setTimeout(() => setJustAdded(false), ADDED_MS);
    return () => clearTimeout(id);
  }, [justAdded]);

  const add = (size?: CardSize) => {
    addToBag({
      productId: product.id,
      name: product.name,
      sizeCode: size?.code ?? "one-size",
      sizeName: size?.name ?? "",
    });
    setPickerOpen(false);
    setJustAdded(true);
    lastTrigger.current?.focus();
  };

  const onAddClick = (trigger: HTMLButtonElement | null) => {
    lastTrigger.current = trigger;
    if (needsSize) setPickerOpen(true);
    else add(inStock[0] ?? product.sizes[0]);
  };

  const closePicker = () => {
    setPickerOpen(false);
    lastTrigger.current?.focus();
  };

  const addLabel = soldOut ? "Sold out" : justAdded ? "Added" : "Add to bag";

  return (
    <>
      {/* Wishlist */}
      <div className="absolute right-2 top-2 z-10 sm:right-3 sm:top-3">
        <Tooltip
          title={saved ? "Remove from wishlist" : "Add to wishlist"}
          placement="left"
        >
          <TooltipTrigger
            aria-label={`${saved ? "Remove" : "Add"} ${product.name} ${saved ? "from" : "to"} wishlist`}
            aria-pressed={saved}
            onPress={() => toggleWishlist(product)}
            className={({ isFocusVisible }) =>
              cx(
                "grid size-9 place-items-center rounded-full bg-white text-gray-950 shadow-sm transition-colors hover:bg-gray-100",
                isFocusVisible && "outline-2 outline-offset-2 outline-gray-950",
              )
            }
          >
            <Heart
              aria-hidden="true"
              className={cx("size-5", saved && "fill-red-600 text-red-600")}
            />
          </TooltipTrigger>
        </Tooltip>
      </div>

      {/* Add to bag: a full-width bar on hover for mouse users... */}
      <div className="absolute inset-x-2 bottom-2 z-10 hidden pointer-fine:block sm:inset-x-3 sm:bottom-3">
        <button
          ref={triggerRef}
          type="button"
          disabled={soldOut}
          aria-haspopup={needsSize ? "true" : undefined}
          aria-expanded={needsSize ? pickerOpen : undefined}
          onClick={() => onAddClick(triggerRef.current)}
          className={cx(
            "flex w-full items-center justify-center gap-2 rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-gray-200 shadow-sm hover:bg-neutral-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200 disabled:cursor-not-allowed disabled:bg-neutral-900 disabled:text-gray-500 disabled:hover:bg-neutral-900",
            // Hidden until the card is hovered or focused, unless it's showing feedback.
            !justAdded &&
              "translate-y-2 opacity-0 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 motion-safe:transition",
          )}
        >
          {justAdded ? (
            <Check aria-hidden="true" className="size-4" />
          ) : (
            !soldOut && <ShoppingBag01 aria-hidden="true" className="size-4" />
          )}
          {addLabel}
        </button>
      </div>

      {/* ...and a round button that's always visible on touch screens. */}
      <div className="absolute bottom-2 right-2 z-10 hidden pointer-coarse:block">
        <button
          ref={touchTriggerRef}
          type="button"
          disabled={soldOut}
          aria-label={
            soldOut
              ? `${product.name} is sold out`
              : `Add ${product.name} to bag`
          }
          aria-haspopup={needsSize ? "true" : undefined}
          aria-expanded={needsSize ? pickerOpen : undefined}
          onClick={() => onAddClick(touchTriggerRef.current)}
          className="grid size-10 place-items-center rounded-full bg-white text-gray-950 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 disabled:opacity-50"
        >
          {justAdded ? (
            <Check aria-hidden="true" className="size-5" />
          ) : (
            <ShoppingBag01 aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      {/* Size picker */}
      {pickerOpen && (
        <div
          role="dialog"
          aria-label={`Choose a size for ${product.name}`}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.stopPropagation();
              closePicker();
            }
          }}
          className="absolute inset-x-2 bottom-2 z-20 rounded-xl bg-white p-3 text-gray-950 shadow-lg sm:inset-x-3 sm:bottom-3"
        >
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-semibold">Select size</p>
            <button
              type="button"
              aria-label="Close size picker"
              onClick={closePicker}
              className="grid size-7 place-items-center rounded-full hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-gray-950"
            >
              <XClose aria-hidden="true" className="size-4" />
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size, index) => (
              <button
                key={size.code}
                type="button"
                disabled={!size.inStock}
                // Move focus into the picker so keyboard users land on a size.
                autoFocus={
                  index === product.sizes.findIndex((entry) => entry.inStock)
                }
                aria-label={
                  size.inStock
                    ? `Size ${size.name}`
                    : `Size ${size.name}, out of stock`
                }
                onClick={() => add(size)}
                className="min-w-10 rounded-md px-2 py-1.5 text-xs font-semibold ring-1 ring-gray-300 ring-inset hover:bg-gray-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gray-950 disabled:cursor-not-allowed disabled:text-gray-400 disabled:line-through disabled:hover:bg-transparent"
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
