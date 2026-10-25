"use client";

import { type ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/utils/cx";
import { useShopStore } from "@/providers/shop-store-provider";
import {
  SearchLg,
  User01,
  ShoppingBag01,
  Menu01,
  XClose,
  Heart,
  ChevronDown,
} from "@untitledui/icons";
import Image from "next/image";

export type NavCategory = {
  label: string;
  href: string;
  groups: { label: string; href: string }[]; // shown in the dropdown
  accent?: boolean; // shown in red, e.g. Sale
};

// Collections that span every category, so they have no groups.
const extraLinks: NavCategory[] = [
  { label: "New in", href: "/new-arrivals", groups: [] },
  { label: "Sale", href: "/sale", groups: [], accent: true },
  { label: "Bestsellers", href: "/bestsellers", groups: [] },
];

const iconClassName = "size-5 shrink-0";

// Reserves the bold width under the label, so going bold (on hover or when
// active) changes only the weight and never nudges neighbouring links.
const BoldSafe = ({ children }: { children: ReactNode }) => (
  <span className="inline-grid">
    <span aria-hidden="true" className="invisible col-start-1 row-start-1 font-bold">
      {children}
    </span>
    <span className="col-start-1 row-start-1">{children}</span>
  </span>
);

const itemsLabel = (label: string, count: number) =>
  count > 0 ? `${label}, ${count} ${count === 1 ? "item" : "items"}` : label;

const CountBadge = ({ count }: { count: number }) =>
  count > 0 ? (
    <span
      aria-hidden="true"
      className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gray-950 px-1 text-[10px] font-semibold leading-none text-white"
    >
      {count > 99 ? "99+" : count}
    </span>
  ) : null;

type NavbarProps = {
  categories: NavCategory[];
};

const Navbar = ({ categories: navCategories }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // The current page's item is bold; category pages also cover their groups,
  // so /categories/women/tops marks Women.
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const wishlistCount = useShopStore((state) => state.wishlist.length);
  const bagCount = useShopStore((state) =>
    state.bag.reduce((total, line) => total + line.quantity, 0),
  );
  const categories = [...navCategories, ...extraLinks];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.06)] transition-colors">
      <div className="relative mx-auto grid h-20 max-w-[1600px] grid-cols-[1fr_auto] items-center px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        {/* Left: Categories */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-3 xl:flex 2xl:gap-6"
        >
          {categories.map((category) => (
            // The dropdown opens on hover and on keyboard focus, no JS needed.
            <div key={category.href} className="group relative">
              <Link
                href={category.href}
                aria-current={isActive(category.href) ? "page" : undefined}
                className={cx(
                  "whitespace-nowrap text-xs uppercase tracking-wide transition-colors hover:font-bold",
                  isActive(category.href) ? "font-bold" : "font-medium",
                  category.accent
                    ? "text-red-700 hover:text-red-800"
                    : isActive(category.href)
                      ? "text-gray-950"
                      : "text-gray-700 hover:text-black",
                )}
              >
                <BoldSafe>{category.label}</BoldSafe>
              </Link>

              {category.groups.length > 0 && (
                <div className="invisible absolute left-0 top-full z-50 pt-4 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5">
                    <li>
                      <Link
                        href={category.href}
                        className="block rounded-md px-3 py-2 text-sm font-semibold text-gray-950 hover:bg-gray-50 focus-visible:bg-gray-50 focus-visible:outline-none"
                      >
                        Shop all {category.label.toLowerCase()}
                      </Link>
                    </li>
                    {category.groups.map((group) => (
                      <li key={group.href}>
                        <Link
                          href={group.href}
                          className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-950 focus-visible:bg-gray-50 focus-visible:text-gray-950 focus-visible:outline-none"
                        >
                          {group.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex size-10 items-center justify-center rounded-lg hover:bg-gray-50 xl:hidden"
        >
          {mobileMenuOpen ? (
            <XClose className={iconClassName} />
          ) : (
            <Menu01 className={iconClassName} />
          )}
        </button>

        {/* Center: Logo — always centered relative to the navbar */}
        <Link
          href="/"
          aria-label="Outfit home"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/outfit-icon.svg"
            alt="Outfit logo"
            width={48}
            height={48}
            className="inline-block"
          />
          <Image
            src="/outfit-wordmark.svg"
            alt="Outfit"
            width={96}
            height={24}
            className="hidden sm:inline-block"
          />
        </Link>

        {/* Right: Information links and actions */}
        <div className="col-start-2 flex items-center justify-self-end gap-2 lg:col-start-3 sm:gap-3">
          <div className="hidden items-center gap-5 xl:flex">
            <Link
              href="/about"
              className="whitespace-nowrap text-xs uppercase tracking-wide text-gray-600 transition-colors hover:text-gray-950"
            >
              About Us
            </Link>

            <Link
              href="/fit-guide"
              className="whitespace-nowrap text-xs uppercase tracking-wide text-gray-600 transition-colors hover:text-gray-950"
            >
              Fit Guide
            </Link>
          </div>

          <Link
            href="/search"
            aria-label="Search"
            className="flex size-10 items-center justify-center rounded-lg hover:bg-gray-50"
          >
            <SearchLg className={iconClassName} />
          </Link>

          <Link
            href="/account"
            aria-label="My account"
            className="hidden size-10 items-center justify-center rounded-lg hover:bg-gray-50 sm:flex"
          >
            <User01 className={iconClassName} />
          </Link>

          <Link
            href="/wishlist"
            aria-label={itemsLabel("Wishlist", wishlistCount)}
            className="relative flex size-10 items-center justify-center rounded-lg hover:bg-gray-50"
          >
            <Heart className={iconClassName} />
            <CountBadge count={wishlistCount} />
          </Link>

          <Link
            href="/cart"
            aria-label={itemsLabel("Shopping bag", bagCount)}
            className="relative flex size-10 items-center justify-center rounded-lg hover:bg-gray-50"
          >
            <ShoppingBag01 className={iconClassName} />
            <CountBadge count={bagCount} />
          </Link>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-gray-200 bg-white px-5 py-3 xl:hidden"
        >
          <div className="flex flex-col">
            {categories.map((category) =>
              category.groups.length > 0 ? (
                <details
                  key={category.href}
                  className="group border-b border-gray-100"
                >
                  <summary
                    className={cx(
                      "flex cursor-pointer list-none items-center justify-between py-3 text-sm uppercase tracking-wide hover:text-gray-950 [&::-webkit-details-marker]:hidden",
                      isActive(category.href) ? "font-bold text-gray-950" : "font-medium text-gray-700",
                    )}
                  >
                    {category.label}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-4 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <ul className="pb-3 pl-3">
                    <li>
                      <Link
                        href={category.href}
                        onClick={closeMobileMenu}
                        aria-current={pathname === category.href ? "page" : undefined}
                        className="block py-2 text-sm font-semibold text-gray-950"
                      >
                        Shop all {category.label.toLowerCase()}
                      </Link>
                    </li>
                    {category.groups.map((group) => (
                      <li key={group.href}>
                        <Link
                          href={group.href}
                          onClick={closeMobileMenu}
                          aria-current={pathname === group.href ? "page" : undefined}
                          className={cx(
                            "block py-2 text-sm hover:text-gray-950",
                            pathname === group.href ? "font-semibold text-gray-950" : "text-gray-600",
                          )}
                        >
                          {group.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  key={category.href}
                  href={category.href}
                  onClick={closeMobileMenu}
                  aria-current={isActive(category.href) ? "page" : undefined}
                  className={cx(
                    "border-b border-gray-100 py-3 text-sm uppercase tracking-wide",
                    isActive(category.href) ? "font-bold" : "font-medium",
                    category.accent
                      ? "text-red-700"
                      : isActive(category.href)
                        ? "text-gray-950"
                        : "text-gray-700 hover:text-gray-950",
                  )}
                >
                  {category.label}
                </Link>
              ),
            )}

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="border-b border-gray-100 py-3 text-sm uppercase tracking-wide text-gray-700 hover:text-gray-950"
            >
              About Us
            </Link>

            <Link
              href="/fit-guide"
              onClick={closeMobileMenu}
              className="border-b border-gray-100 py-3 text-sm uppercase tracking-wide text-gray-700 hover:text-gray-950"
            >
              Fit Guide
            </Link>

            <Link
              href="/account"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 py-3 text-sm uppercase tracking-wide text-gray-700 hover:text-gray-950 sm:hidden"
            >
              <User01 className={iconClassName} />
              My Account
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
