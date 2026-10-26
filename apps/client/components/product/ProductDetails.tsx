"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Radio } from "react-aria-components";
import { Check, Heart, ShoppingBag01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { RadioGroup } from "@/components/base/radio-buttons/radio-buttons";
import SearchPrice from "@/components/search/SearchPrice";
import { useShopStore } from "@/providers/shop-store-provider";
import { cx } from "@/utils/cx";
import type { Product } from "@/utils/getProducts";
import { formatRupees } from "@/utils/productFilters";

const ADDED_MS = 1500;
const NO_SIZE = "NOSIZE";

const badgeClassName =
  "rounded-sm bg-gray-100 px-1.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase";

type ProductDetailsProps = {
  product: Product;
  colorCode: string; // the selected colour variant's article code
};

// Name, price, colour, size, Add to bag and wishlist for the product page.
export default function ProductDetails({ product, colorCode }: ProductDetailsProps) {
  const { price } = product;
  const saved = useShopStore((state) => state.wishlist.includes(product.id));
  const toggleWishlist = useShopStore((state) => state.toggleWishlist);
  const addToBag = useShopStore((state) => state.addToBag);

  const sizes = product.sizes.filter((size) => size.name !== NO_SIZE);
  const oneSize = sizes.length <= 1;
  const soldOut = product.sizes.length > 0 && product.sizes.every((size) => !size.inStock);
  const [sizeCode, setSizeCode] = useState<string | null>(null);
  const [justAdded, setJustAdded] = useState(false);
  const addedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (addedTimer.current) clearTimeout(addedTimer.current);
  }, []);

  const colour = product.colorVariants.find((variant) => variant.articleCode === colorCode);
  const chosenSize = oneSize ? product.sizes[0] : sizes.find((size) => size.sizeCode === sizeCode);
  const canAdd = !soldOut && Boolean(chosenSize);

  const onAdd = () => {
    if (!chosenSize) return;
    addToBag({
      productId: product.id,
      name: product.name,
      sizeCode: chosenSize.sizeCode,
      sizeName: oneSize ? "" : chosenSize.name,
    });
    setJustAdded(true);
    if (addedTimer.current) clearTimeout(addedTimer.current);
    addedTimer.current = setTimeout(() => setJustAdded(false), ADDED_MS);
  };

  const badges = [
    price.onSale && { label: price.discountPercentage ?? "Sale", className: "text-red-700" },
    product.isBestSeller && { label: "Bestseller", className: "text-gray-950" },
    product.isNewArrival && { label: "New", className: "text-gray-950" },
  ].filter((badge): badge is { label: string; className: string } => Boolean(badge));

  return (
    <div className="space-y-6">
      <div>
        {badges.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {badges.map((badge) => (
              <span key={badge.label} className={cx(badgeClassName, badge.className)}>
                {badge.label}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-2xl font-semibold tracking-tight text-gray-950">{product.name}</h1>
        <p className="mt-2 text-lg">
          <SearchPrice price={price} />
        </p>
        {price.onSale && price.regular > price.current && (
          <p className="mt-1 text-sm font-medium text-red-700">
            Save {formatRupees(price.regular - price.current)}
          </p>
        )}
      </div>

      {product.colorVariants.length > 0 && (
        <div>
          <p className="mb-3 text-sm text-gray-700">
            <span className="text-xs font-semibold tracking-wider text-gray-950 uppercase">Colour</span>
            {colour && <span className="ml-2">{colour.colorName}</span>}
          </p>
          <div role="group" aria-label="Colour" className="flex flex-wrap gap-2">
            {product.colorVariants.map((variant) => {
              const selected = variant.articleCode === colorCode;
              return (
                <Link
                  key={variant.articleCode}
                  href={`/products/${product.id}?color=${variant.articleCode}`}
                  replace
                  scroll={false}
                  aria-label={variant.colorName}
                  aria-current={selected ? "true" : undefined}
                  title={variant.colorName}
                  className={cx(
                    "grid size-9 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950",
                    selected ? "ring-2 ring-gray-950" : "ring-1 ring-gray-200 hover:ring-gray-400",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="size-6 rounded-full ring-1 ring-black/10"
                    style={{ backgroundColor: variant.hex }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {!oneSize && (
        <RadioGroup
          aria-label="Size"
          value={sizeCode}
          onChange={setSizeCode}
          className="gap-3"
        >
          <p className="text-xs font-semibold tracking-wider text-gray-950 uppercase">Size</p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <Radio
                key={size.sizeCode}
                value={size.sizeCode}
                isDisabled={!size.inStock}
                aria-label={size.inStock ? `Size ${size.name}` : `Size ${size.name}, out of stock`}
                className={({ isSelected, isDisabled, isFocusVisible }) =>
                  cx(
                    "min-w-12 cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold ring-1 ring-inset transition-colors",
                    isSelected ? "bg-gray-950 text-white ring-gray-950" : "text-gray-950 ring-gray-300 hover:bg-gray-50",
                    isDisabled && "cursor-not-allowed text-gray-400 line-through hover:bg-transparent",
                    isFocusVisible && "outline-2 outline-offset-2 outline-gray-950",
                  )
                }
              >
                {size.name}
              </Radio>
            ))}
          </div>
        </RadioGroup>
      )}

      <div className="flex gap-3">
        <Button
          color="primary"
          size="xl"
          className="flex-1"
          iconLeading={justAdded ? Check : ShoppingBag01}
          isDisabled={!canAdd && !justAdded}
          onPress={onAdd}
        >
          {soldOut ? "Sold out" : justAdded ? "Added to bag" : canAdd ? "Add to bag" : "Select a size"}
        </Button>
        <Button
          color="secondary"
          size="xl"
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={saved}
          iconLeading={<Heart data-icon className={cx(saved && "fill-red-600 text-red-600")} />}
          onPress={() => toggleWishlist(product)}
        />
      </div>
    </div>
  );
}
