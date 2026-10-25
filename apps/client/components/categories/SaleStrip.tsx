import Link from "next/link";
import { ArrowRight } from "@untitledui/icons";
import { SALE_BANNER_THEMES } from "@/components/shared/saleBannerTheme";
import { cx } from "@/utils/cx";
import { getSaleBanner } from "@/utils/getSaleBanner";

// A one-line reminder of the live sale on list pages, using the banner's
// content and theme. Nothing renders when there's no sale.
export default async function SaleStrip() {
  const banner = await getSaleBanner();
  if (!banner) return null;

  const theme = SALE_BANNER_THEMES[banner.theme ?? "dark"];

  return (
    <Link
      href={banner.cta.href}
      className={cx(
        "group mb-8 flex items-center justify-between gap-4 rounded-lg px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 sm:px-5",
        theme.card,
      )}
    >
      <span className="min-w-0 truncate">
        <span className={cx("font-medium uppercase tracking-wider", theme.subtle)}>
          {banner.eyebrow}
        </span>
        <span aria-hidden="true" className={theme.subtle}>
          {" · "}
        </span>
        <span className="font-semibold">{banner.title}</span>
      </span>
      <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold underline-offset-4 group-hover:underline">
        {banner.cta.label}
        <ArrowRight
          aria-hidden="true"
          className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
