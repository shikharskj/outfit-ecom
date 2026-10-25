"use client";

import { useState } from "react";
import { Slider } from "@/components/base/slider/slider";
import { PRICE_STEP, formatRupees } from "@/utils/productFilters";

type PriceRangeFilterProps = {
  bounds: { min: number; max: number };
  value: { min: number | null; max: number | null }; // null = no limit
  onChange: (min: number | null, max: number | null) => void;
};

// The Untitled UI range slider. Dragging only changes the local value; the
// filter (and URL) updates when the drag ends, so the router isn't hit on
// every pixel. Arrow keys and Page Up/Down work too.
export default function PriceRangeFilter({ bounds, value, onChange }: PriceRangeFilterProps) {
  const [draft, setDraft] = useState<number[] | null>(null);
  const [low, high] = draft ?? [value.min ?? bounds.min, value.max ?? bounds.max];
  const atTop = high >= bounds.max;

  return (
    <div className="px-2 pt-1">
      <Slider
        aria-label="Price range"
        size="sm"
        minValue={bounds.min}
        maxValue={bounds.max}
        step={PRICE_STEP}
        value={[low, high]}
        formatOptions={{ style: "currency", currency: "INR", maximumFractionDigits: 0 }}
        onChange={(next) => setDraft(next as number[])}
        onChangeEnd={(next) => {
          const [nextLow, nextHigh] = next as number[];
          setDraft(null);
          // Limits at the ends of the range mean "no limit".
          onChange(
            nextLow <= bounds.min ? null : nextLow,
            nextHigh >= bounds.max ? null : nextHigh,
          );
        }}
      />
      <p className="mt-3 -mx-2 text-sm font-semibold text-gray-950 tabular-nums">
        {formatRupees(low)} – {formatRupees(high)}
        {atTop && "+"}
      </p>
    </div>
  );
}
