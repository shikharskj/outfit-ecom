import Image from "next/image";
import Link from "next/link";
import type { TaxonomyGroup } from "@/utils/getTaxonomy";

type GroupTilesProps = {
  groups: TaxonomyGroup[];
  label: string; // names the navigation, e.g. "Women groups"
  className?: string;
};

// Square image tiles linking to group pages. Scrolls sideways on phones and
// wraps on wider screens.
export default function GroupTiles({ groups, label, className }: GroupTilesProps) {
  return (
    <nav aria-label={label} className={className}>
      <ul className="-mx-5 flex gap-3 overflow-x-auto px-5 scrollbar-none sm:mx-0 sm:flex-wrap sm:px-0">
        {groups.map((group) => (
          <li key={group.slug} className="shrink-0">
            <Link
              href={group.href}
              className="group flex w-36 flex-col rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-950 sm:w-40"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                {/* Decorative: the group name is below. */}
                <Image
                  src={group.imageSrc}
                  alt=""
                  fill
                  sizes="160px"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                />
              </div>
              <span className="mt-2 text-sm font-semibold text-gray-950 group-hover:underline">
                {group.label}
              </span>
              <span className="text-xs text-gray-500">
                {group.count} {group.count === 1 ? "product" : "products"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
