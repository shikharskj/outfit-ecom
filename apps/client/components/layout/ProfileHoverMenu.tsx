"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/utils/cx";
import {
  User01,
  Package,
  Heart,
  LogOut01,
  MarkerPin01,
} from "@untitledui/icons";

type ProfileHoverMenuProps = {
  isLoggedIn?: boolean;
  userName?: string;
  onLogout?: () => void;
};

const ProfileHoverMenu = ({
  isLoggedIn = false,
  userName,
  onLogout,
}: ProfileHoverMenuProps) => {
  const pathname = usePathname();

  const isAccountActive =
    pathname === "/account" || pathname.startsWith("/account/");

  const menuItemClassName =
    "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:font-semibold hover:text-gray-950";

  const textLinkClassName =
    "block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:font-semibold hover:text-gray-950";

  return (
    <div className="group relative">
      <Link
        href="/account"
        aria-label="My account"
        className={cx(
          "relative flex h-20 w-12 flex-col items-center justify-center gap-1.5 text-gray-800",
          "after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-gray-950 after:transition-transform after:content-['']",
          "group-hover:[&>svg]:stroke-[2.5] group-hover:[&>span]:font-bold",
          "group-focus-within:[&>svg]:stroke-[2.5] group-focus-within:[&>span]:font-bold",
          isAccountActive
            ? "after:scale-x-100 [&>svg]:stroke-[2.5] [&>span]:font-bold"
            : "after:scale-x-0 group-hover:after:scale-x-100 group-focus-within:after:scale-x-100",
        )}
      >
        <User01 className="size-5 shrink-0 transition-all" />
        <span className="text-[10px] font-semibold transition-all">
          Profile
        </span>
      </Link>

      <div className="invisible absolute right-0 top-full z-50 pt-px opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="w-64 rounded-b-sm bg-white p-3 shadow-lg ring-1 ring-black/5">
          {isLoggedIn ? (
            <>
              <div className="border-b border-gray-100 px-1 pb-3">
                <div className="mb-2 px-3">
                  <p className="text-sm font-semibold text-gray-900">
                    Welcome{userName ? `, ${userName}` : " User"}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Phone number / email
                  </p>
                </div>

                {/* <Link href="/account" className={menuItemClassName}>
                  View your account
                </Link> */}
              </div>

              <div className="mt-2 space-y-1">
                <Link href="/account/orders" className={menuItemClassName}>
                  <Package className="size-4 shrink-0" />
                  My Orders
                </Link>

                <Link href="/wishlist" className={menuItemClassName}>
                  <Heart className="size-4 shrink-0" />
                  My Wishlist
                </Link>

                <Link href="/account/addresses" className={menuItemClassName}>
                  <MarkerPin01 className="size-4 shrink-0" />
                  Saved Addresses
                </Link>

                <Link
                  href="/account/edit-profile"
                  className={menuItemClassName}
                >
                  <User01 className="size-4 shrink-0" />
                  Edit Profile
                </Link>

                {onLogout && (
                  <button
                    type="button"
                    onClick={onLogout}
                    className={menuItemClassName}
                  >
                    <LogOut01 className="size-4 shrink-0" />
                    Logout
                  </button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="px-1">
                <p className="text-sm font-semibold text-gray-900">
                  Welcome to Outfit!
                </p>
                <p className="mt-1.5 text-xs leading-5 text-gray-500">
                  To access your account and manage orders
                </p>
              </div>

              <Link
                href="/login"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-gray-200 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-[#e8485f] transition-colors hover:border-[#e8485f] hover:bg-rose-50"
              >
                Login / Sign Up
              </Link>

              <div className="mt-3 space-y-1 border-t border-gray-100 pt-2">
                <Link href="/account/orders" className={textLinkClassName}>
                  Track Orders
                </Link>

                <Link href="/wishlist" className={textLinkClassName}>
                  My Wishlist
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHoverMenu;
