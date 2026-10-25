import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import SectionHeader from "@/components/shared/SectionHeader";

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  href: string;
  itemCount?: number; // number of products in the category
  badge?: string; // short promo label, e.g. "New in"
};

type CategorySelectorProps = {
  categories: ProductCategory[];
};

// Mobile: the first card spans full width and the rest sit in a 2-up grid.
// Desktop: the first card fills a 2x2 block with the next four beside it.
export const categoryGridClassName =
  "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5";

export const featuredCardClassName =
  "col-span-2 aspect-4/3 sm:aspect-video lg:row-span-2 lg:aspect-auto lg:min-h-112";

export const cardClassName = "aspect-4/5";

export function CategorySelectorHeader() {
  return (
    <SectionHeader
      id="category-selector-title"
      eyebrow="Explore Outfit"
      title="Shop by category"
      description="Discover everyday essentials and styles made for you."
      link={{ label: "View all", href: "/categories" }}
    />
  );
}

function CategoryCard({
  category,
  featured,
}: {
  category: ProductCategory;
  featured: boolean;
}) {
  return (
    <Link
      href={category.href}
      className={cx(
        "group relative isolate min-w-0 overflow-hidden rounded-lg bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-950 motion-safe:transition-transform motion-safe:duration-200 motion-safe:active:scale-[0.98]",
        featured ? featuredCardClassName : cardClassName,
      )}
    >
      {/* Decorative: the card's text already names the category. */}
      <Image
        src={category.imageSrc}
        alt=""
        fill
        sizes={
          featured
            ? "(min-width: 1024px) 50vw, 100vw"
            : "(min-width: 1024px) 25vw, 50vw"
        }
        className="-z-10 object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-105"
      />

      {/* Keeps the overlaid text legible on light photos. */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 via-black/15 to-transparent" />

      {category.badge && (
        <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-950 sm:left-4 sm:top-4">
          {category.badge}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-5">
        <div className="min-w-0 text-white motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-translate-y-1">
          <h3
            className={cx(
              "font-semibold tracking-tight",
              featured ? "text-2xl sm:text-3xl" : "text-base sm:text-xl",
            )}
          >
            {category.name}
          </h3>

          <p
            className={cx(
              "mt-1 line-clamp-1 text-white/80",
              featured ? "text-sm sm:text-base" : "text-xs sm:text-sm",
            )}
          >
            {category.description}
          </p>

          {category.itemCount !== undefined && (
            <p className="mt-1.5 text-xs font-medium text-white/65">
              {category.itemCount.toLocaleString("en-US")} styles
            </p>
          )}
        </div>

        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-gray-950 transition-colors duration-300 group-hover:bg-gray-950 group-hover:text-white sm:size-10">
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:rotate-45"
          />
        </span>
      </div>
    </Link>
  );
}

export default function CategorySelector({
  categories = [],
}: CategorySelectorProps) {
  return (
    <section
      aria-labelledby="category-selector-title"
      className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24"
    >
      <CategorySelectorHeader />

      {categories.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 px-6 py-16 text-center">
          <p className="text-base font-semibold text-gray-950">
            No categories to show yet
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Check back soon for new collections.
          </p>
        </div>
      ) : (
        <div className={categoryGridClassName}>
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              featured={index === 0}
            />
          ))}
        </div>
      )}
    </section>
  );
}
