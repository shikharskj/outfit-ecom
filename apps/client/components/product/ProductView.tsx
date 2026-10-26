"use client";

import { useSearchParams } from "next/navigation";
import ProductDetails from "@/components/product/ProductDetails";
import ProductGallery from "@/components/product/ProductGallery";
import type { Product } from "@/utils/getProducts";

// The selected colour's photos: the default colour has the full set; other
// colours have the one image the catalogue provides for them.
const imagesFor = (product: Product, colorCode: string) => {
  if (colorCode === product.id) {
    return [
      ...new Set([
        product.images.main,
        product.images.model,
        ...product.images.gallery.map((image) => image.url),
      ]),
    ].filter(Boolean);
  }
  const variant = product.colorVariants.find((entry) => entry.articleCode === colorCode);
  return [variant?.image ?? product.images.main];
};

// Gallery and details side by side on desktop, stacked on phones.
export function ProductView({ product, colorCode }: { product: Product; colorCode: string }) {
  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12">
      <ProductGallery key={colorCode} images={imagesFor(product, colorCode)} name={product.name} />
      <div className="md:sticky md:top-28 md:self-start">
        <ProductDetails product={product} colorCode={colorCode} />
      </div>
    </div>
  );
}

// Reads the colour from ?color= (set by colour dots and product cards).
export default function ProductViewFromUrl({ product }: { product: Product }) {
  const requested = useSearchParams().get("color");
  const valid = product.colorVariants.some((variant) => variant.articleCode === requested);
  return <ProductView product={product} colorCode={valid && requested ? requested : product.id} />;
}
