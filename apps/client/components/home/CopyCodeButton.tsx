"use client";

import { Check, Copy01 } from "@untitledui/icons";
import { useClipboard } from "@/hooks/use-clipboard";
import { cx } from "@/utils/cx";

type CopyCodeButtonProps = {
  code: string;
  className?: string; // theme colours for the border, hover and focus ring
};

export default function CopyCodeButton({ code, className }: CopyCodeButtonProps) {
  const { copied, copy } = useClipboard();

  return (
    <>
      {/* relative z-10 keeps it clickable above the banner's stretched link. */}
      <button
        type="button"
        onClick={() => copy(code)}
        aria-label={`Copy promo code ${code}`}
        className={cx(
          "relative z-10 inline-flex items-center gap-2 rounded-md border border-dashed px-3 py-1.5 font-mono font-semibold tracking-wider text-current transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
          className,
        )}
      >
        {code}
        {copied ? (
          <Check aria-hidden="true" className="size-4" />
        ) : (
          <Copy01 aria-hidden="true" className="size-4" />
        )}
      </button>

      <span aria-live="polite" className="text-xs">
        {copied ? "Copied" : ""}
      </span>
    </>
  );
}
