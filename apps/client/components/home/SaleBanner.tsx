import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { getSaleBanner } from "@/utils/getSaleBanner";
import { SALE_BANNER_THEMES } from "@/components/shared/saleBannerTheme";
import CopyCodeButton from "@/components/home/CopyCodeButton";
import SaleBannerCountdown from "@/components/home/SaleBannerCountdown";

// Shared with SaleBannerSkeleton so the page doesn't shift once data loads.
// Full-bleed: edge to edge with no side gutters. No bottom gap either: the
// On sale band below starts flush with its own padding.
export const saleBannerSectionClassName = "w-full";

// Phones: image on top, text below. Desktop: image left, text right.
export const saleBannerCardClassName =
  "relative flex flex-col overflow-hidden md:grid md:min-h-104 md:grid-cols-2 lg:min-h-128";

export const saleBannerImageClassName =
  "relative aspect-video overflow-hidden md:aspect-auto";

export const saleBannerContentClassName =
  "flex flex-col justify-center p-8 sm:p-12 lg:p-16";

// Sale end dates are set in the store's local time.
const endDateFormat = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  timeZone: "Asia/Kolkata",
});

export default async function SaleBanner() {
  const banner = await getSaleBanner();

  // No live sale: render nothing rather than an empty slot.
  if (!banner) return null;

  const theme = SALE_BANNER_THEMES[banner.theme ?? "dark"];

  return (
    <section
      aria-labelledby="sale-banner-title"
      className={saleBannerSectionClassName}
    >
      <div
        className={cx(
          saleBannerCardClassName,
          "group",
          !banner.imageSrc && "md:grid-cols-1",
          theme.card,
        )}
      >
        {banner.imageSrc && (
          <div className={saleBannerImageClassName}>
            {/* Decorative: the text carries the offer. */}
            <Image
              src={banner.imageSrc}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-105"
            />

            {/* Softens the edge between the text panel and the photo. */}
            <div
              className={cx(
                "absolute inset-y-0 right-0 hidden w-1/4 bg-linear-to-l to-transparent md:block",
                theme.gradient,
              )}
            />
          </div>
        )}

        <div className={saleBannerContentClassName}>
          <p
            className={cx(
              "text-xs font-semibold uppercase tracking-[0.2em]",
              theme.subtle,
            )}
          >
            {banner.eyebrow}
          </p>

          <h2
            id="sale-banner-title"
            className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {banner.title}
          </h2>

          <p className={cx("mt-4 max-w-md text-sm sm:text-base", theme.muted)}>
            {banner.description}
          </p>

          {banner.promoCode && (
            <div
              className={cx(
                "mt-6 flex flex-wrap items-center gap-3 text-sm",
                theme.muted,
              )}
            >
              Use code
              <CopyCodeButton code={banner.promoCode} className={theme.chip} />
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            {/* The ::after overlay stretches this link over the whole card. */}
            <Link
              href={banner.cta.href}
              className={cx(
                "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-4",
                theme.button,
              )}
            >
              {banner.cta.label}
              <ArrowRight
                aria-hidden="true"
                className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5"
              />
            </Link>

            {banner.endsAt && (
              <SaleBannerCountdown
                endsAt={banner.endsAt}
                dateLabel={endDateFormat.format(new Date(banner.endsAt))}
                className={cx("text-sm", theme.subtle)}
              />
            )}
          </div>

          {banner.terms && (
            <p className={cx("mt-6 text-xs", theme.subtle)}>{banner.terms}</p>
          )}
        </div>
      </div>
    </section>
  );
}
