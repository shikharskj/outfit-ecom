import Link from "next/link";
import { ArrowRight } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import type { SectionTone } from "@/components/product/productRailStyles";

const TONES = {
  light: {
    eyebrow: "text-gray-500",
    title: "text-gray-950",
    description: "text-gray-600",
    link: "text-gray-950 focus-visible:outline-gray-950",
  },
  dark: {
    eyebrow: "text-white/60",
    title: "text-white",
    description: "text-white/70",
    link: "text-white focus-visible:outline-white",
  },
};

type SectionHeaderProps = {
  id: string; // for the section's aria-labelledby
  eyebrow: string;
  eyebrowClassName?: string; // overrides the default grey, e.g. a sale red
  title: string;
  description?: string;
  link?: { label: string; href: string };
  tone?: SectionTone;
  as?: "h1" | "h2"; // h1 when the header is the page title
};

// Eyebrow, title and description on the left, an optional "View all" link on the right.
export default function SectionHeader({
  id,
  eyebrow,
  eyebrowClassName,
  title,
  description,
  link,
  tone = "light",
  as: Heading = "h2",
}: SectionHeaderProps) {
  const colors = TONES[tone];

  return (
    <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
      <div>
        <p
          className={cx(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            colors.eyebrow,
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>

        <Heading
          id={id}
          className={cx(
            "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",
            colors.title,
          )}
        >
          {title}
        </Heading>

        {description && (
          <p
            className={cx("mt-3 max-w-xl text-sm sm:text-base", colors.description)}
          >
            {description}
          </p>
        )}
      </div>

      {link && (
        <Link
          href={link.href}
          className={cx(
            "group inline-flex shrink-0 items-center gap-1.5 rounded-sm text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4",
            colors.link,
          )}
        >
          {link.label}
          <ArrowRight
            aria-hidden="true"
            className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </div>
  );
}
