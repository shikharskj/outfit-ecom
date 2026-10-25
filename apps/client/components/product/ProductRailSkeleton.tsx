import { cx } from "@/utils/cx";
import {
  productRailItemClassName,
  type SectionTone,
} from "@/components/product/productRailStyles";

type ProductRailSkeletonProps = {
  showChips?: boolean;
  tone?: SectionTone;
};

// Mirrors ProductRail's chips and cards so the page doesn't shift once data loads.
export default function ProductRailSkeleton({
  showChips = true,
  tone = "light",
}: ProductRailSkeletonProps) {
  const bar = cx(
    "rounded-md motion-safe:animate-pulse",
    tone === "dark" ? "bg-white/10" : "bg-gray-100",
  );

  return (
    <>
      {showChips && (
        <div className="mb-6 flex gap-2 overflow-hidden">
          {[12, 20, 16, 16, 28].map((width, index) => (
            <div
              key={index}
              className={cx(bar, "h-9 shrink-0 rounded-full")}
              style={{ width: `${width * 4}px` }}
            />
          ))}
        </div>
      )}

      <div className="-ml-4 flex overflow-hidden">
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className={cx("shrink-0", productRailItemClassName)}>
            <div className={cx(bar, "aspect-3/4 rounded-lg")} />
            <div className={cx(bar, "mt-3 h-4 w-3/4")} />
            <div className={cx(bar, "mt-2 h-4 w-1/3")} />
          </div>
        ))}
      </div>
    </>
  );
}
