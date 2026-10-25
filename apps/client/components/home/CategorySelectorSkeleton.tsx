import { cx } from "@/utils/cx";
import {
  CategorySelectorHeader,
  cardClassName,
  categoryGridClassName,
  featuredCardClassName,
} from "@/components/home/CategorySelector";

// Mirrors the CategorySelector layout so the page doesn't shift once data loads.
export default function CategorySelectorSkeleton({ count = 5 }) {
  return (
    <section
      aria-labelledby="category-selector-title"
      aria-busy="true"
      className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24"
    >
      <CategorySelectorHeader />

      <div className={categoryGridClassName}>
        {Array.from({ length: count }, (_, index) => (
          <div
            key={index}
            className={cx(
              "rounded-lg bg-gray-100 motion-safe:animate-pulse",
              index === 0 ? featuredCardClassName : cardClassName,
            )}
          />
        ))}
      </div>

      <span className="sr-only">Loading categories…</span>
    </section>
  );
}
