import { SALE_BANNER_THEMES } from "@/components/shared/saleBannerTheme";
import type { PromoTileContent } from "@/components/categories/PromoTile";
import { getSaleBanner } from "@/utils/getSaleBanner";

// What the promo tile in product grids shows: the live sale if there is one,
// otherwise new arrivals. Plain data, so it can pass into client listings.
export const getListingPromo = async (): Promise<PromoTileContent> => {
  const banner = await getSaleBanner();

  if (banner) {
    const theme = SALE_BANNER_THEMES[banner.theme ?? "dark"];
    return {
      eyebrow: banner.eyebrow,
      title: banner.title,
      ctaLabel: banner.cta.label,
      href: banner.cta.href,
      className: theme.card,
      subtleClassName: theme.subtle,
    };
  }

  const theme = SALE_BANNER_THEMES.dark;
  return {
    eyebrow: "Just landed",
    title: "New arrivals",
    ctaLabel: "Shop new in",
    href: "/new-arrivals",
    className: theme.card,
    subtleClassName: theme.subtle,
  };
};
