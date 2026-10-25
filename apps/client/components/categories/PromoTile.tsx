import Link from "next/link";
import { ArrowRight } from "@untitledui/icons";
import { cx } from "@/utils/cx";

// Plain data, so server pages can pass it through client listings.
export type PromoTileContent = {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  href: string;
  className: string; // background and text colours, e.g. a sale banner theme
  subtleClassName: string;
};

// A card-sized campaign tile placed among products in a grid.
export default function PromoTile({ promo }: { promo: PromoTileContent }) {
  return (
    <Link
      href={promo.href}
      className={cx(
        "group flex aspect-3/4 flex-col justify-between rounded-lg p-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-950 sm:p-6",
        promo.className,
      )}
    >
      <p
        className={cx(
          "text-xs font-semibold uppercase tracking-[0.2em]",
          promo.subtleClassName,
        )}
      >
        {promo.eyebrow}
      </p>

      <div>
        <p className="text-2xl font-semibold tracking-tight sm:text-3xl">{promo.title}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 group-hover:underline">
          {promo.ctaLabel}
          <ArrowRight
            aria-hidden="true"
            className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
