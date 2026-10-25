"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

// Friendly names for known URL segments; anything else (e.g. a username) is
// shown decoded, exactly as written.
const SEGMENT_LABELS: Record<string, string> = {
  users: "Users",
  payments: "Payments",
  inbox: "Inbox",
  calendar: "Calendar",
  search: "Search",
  settings: "Settings",
};

const labelFor = (segment: string) =>
  SEGMENT_LABELS[segment] ?? decodeURIComponent(segment);

// Dashboard / Users / john, built from the current URL.
const NavBreadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = [
    { label: "Dashboard", href: "/" },
    ...segments.map((segment, index) => ({
      label: labelFor(segment),
      href: `/${segments.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <Breadcrumb className="min-w-0">
      <BreadcrumbList className="flex-nowrap">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          // Phones show only the current page and its parent, so earlier
          // crumbs and the separator leading into the parent are hidden.
          const hideOnPhone = index < crumbs.length - 2;
          const hideSeparatorOnPhone = index <= crumbs.length - 2;

          return (
            <Fragment key={crumb.href}>
              {index > 0 && (
                <BreadcrumbSeparator
                  className={cn(hideSeparatorOnPhone && "hidden md:inline-flex")}
                />
              )}
              <BreadcrumbItem
                className={cn("min-w-0", hideOnPhone && "hidden md:inline-flex")}
              >
                {isLast ? (
                  <BreadcrumbPage className="truncate">{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<Link href={crumb.href} />}>
                    {crumb.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavBreadcrumbs;
