import type { Product } from "@/utils/getProducts";

// Plain data module (no "use client"), so server pages can map products and
// client components can share the type.

// Only what the card renders. Product rails are client components, so keeping
// this small keeps the page's data payload small.
export type ProductCardData = Pick<
  Product,
  "id" | "name" | "category" | "productType" | "productGroup" | "isNewArrival" | "price"
> & {
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
  price: product.price,
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
