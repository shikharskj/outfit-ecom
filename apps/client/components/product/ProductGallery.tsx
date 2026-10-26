"use client";

import { useState } from "react";
import Image from "next/image";
import { cx } from "@/utils/cx";

type ProductGalleryProps = {
  images: string[]; // the selected colour's photos, first is the main one
  name: string;
};

// Desktop: a two-column grid of photos. Phones: a swipeable strip with dots,
// the same scroll-snap approach as the product cards.
export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="hidden grid-cols-2 gap-2 md:grid">
        {images.map((src, index) => (
          <div key={src} className="relative aspect-3/4 overflow-hidden rounded-lg bg-gray-50">
            <Image
              src={src}
              alt={index === 0 ? name : ""}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 28vw, 100vw"
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <div
          onScroll={(event) => {
            const strip = event.currentTarget;
            setActive(Math.round(strip.scrollLeft / strip.clientWidth));
          }}
          className="-mx-5 flex snap-x snap-mandatory overflow-x-auto scrollbar-none sm:-mx-8"
        >
          {images.map((src, index) => (
            <div key={src} className="relative aspect-3/4 w-full shrink-0 snap-center bg-gray-50">
              <Image
                src={src}
                alt={index === 0 ? name : ""}
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <div aria-hidden="true" className="mt-3 flex justify-center gap-1.5">
            {images.map((src, index) => (
              <span
                key={src}
                className={cx("size-1.5 rounded-full", index === active ? "bg-gray-950" : "bg-gray-300")}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
