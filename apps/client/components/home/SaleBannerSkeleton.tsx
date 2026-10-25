import { cx } from "@/utils/cx";
import {
  saleBannerCardClassName,
  saleBannerContentClassName,
  saleBannerImageClassName,
  saleBannerSectionClassName,
} from "@/components/home/SaleBanner";

const bar = "rounded-md bg-gray-200 motion-safe:animate-pulse";

// Mirrors the SaleBanner layout so the page doesn't shift once data loads.
export default function SaleBannerSkeleton() {
  return (
    <div aria-busy="true" className={saleBannerSectionClassName}>
      <div className={cx(saleBannerCardClassName, "bg-gray-100")}>
        <div
          className={cx(saleBannerImageClassName, "bg-gray-200 motion-safe:animate-pulse")}
        />

        <div className={saleBannerContentClassName}>
          <div className={cx(bar, "h-3 w-24")} />
          <div className={cx(bar, "mt-4 h-10 w-3/4 sm:h-12 lg:h-14")} />
          <div className={cx(bar, "mt-5 h-4 w-full max-w-md")} />
          <div className={cx(bar, "mt-2 h-4 w-2/3 max-w-sm")} />
          <div className={cx(bar, "mt-6 h-8 w-44")} />
          <div className={cx(bar, "mt-8 h-11 w-40 rounded-full")} />
        </div>
      </div>

      <span className="sr-only">Loading sale…</span>
    </div>
  );
}
