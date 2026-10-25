import type { Product } from "@/utils/getProducts";

// Plain data module (no "use client"), so server pages can map products and
// client components can share the type.

// The card's merchandising badges. A page or section about one of them (e.g.
// /sale) hides that badge, since every card would carry it.
export type BadgeKind = "new" | "bestseller" | "sale";

// Only what the card renders. Product rails are client components, so keeping
// this small keeps the page's data payload small.
export type ProductCardData = Pick<
  Product,
  "id" | "name" | "category" | "productType" | "productGroup" | "isNewArrival" | "isBestSeller" | "price" | "tags"
> & {
  colorName: string; // the product's own colour, used by the colour filter
  colorHex: string;
  images: Pick<Product["images"], "main" | "model">;
  colorVariants: Pick<
    Product["colorVariants"][number],
    "articleCode" | "colorName" | "hex" | "image"
  >[];
  sizes: { code: string; name: string; inStock: boolean }[];
};

export const toProductCardData = (product: Product): ProductCardData => ({
  id: product.id,
  name: product.name,
  category: product.category,
  productType: product.productType,
  productGroup: product.productGroup,
  isNewArrival: product.isNewArrival,
  isBestSeller: product.isBestSeller,
  price: product.price,
  tags: product.tags,
  colorName: product.color.name,
  colorHex: product.color.hex,
  images: { main: product.images.main, model: product.images.model },
  colorVariants: product.colorVariants.map(({ articleCode, colorName, hex, image }) => ({
    articleCode,
    colorName,
    hex,
    image,
  })),
  sizes: product.sizes.map(({ sizeCode, name, inStock }) => ({
    code: sizeCode,
    name,
    inStock,
  })),
});
