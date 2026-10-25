import { Fragment } from "react";
import Link from "next/link";

type BreadcrumbsProps = {
  items: { label: string; href?: string }[]; // last item is the current page
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <Fragment key={item.label}>
              {index > 0 && <li aria-hidden="true">/</li>}
              <li>
                {isCurrent || !item.href ? (
                  <span
                    aria-current={isCurrent ? "page" : undefined}
                    className="font-medium text-gray-950"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-gray-950 hover:underline">
                    {item.label}
                  </Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
