"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { User, Settings, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuLinkItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Icons by name, so callers pass plain strings rather than components.
const iconMap = {
  user: User,
  settings: Settings,
} satisfies Record<string, LucideIcon>;

type MenuLink = {
  label: string;
  href: string;
  icon?: keyof typeof iconMap;
};

type AvatarDropdownProps = {
  user: { name: string; email: string; image?: string };
  items?: MenuLink[];
  onLogout?: () => void; // wire to the auth sign-out once there is auth
};

const AvatarDropdown = ({ user, items = [], onLogout }: AvatarDropdownProps) => {
  const initial = user.name.trim().charAt(0).toUpperCase() || "?";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Open user menu for ${user.name}`}
          >
            <Avatar>
              <AvatarImage src={user.image} alt="" />
              <AvatarFallback>{initial}</AvatarFallback>
            </Avatar>
          </Button>
        }
      />

      <DropdownMenuContent align="end" className="w-56">
        {/* Who's signed in. */}
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex flex-col gap-0.5 py-2">
            <span className="truncate text-sm font-medium text-foreground">
              {user.name}
            </span>
            <span className="truncate text-xs font-normal text-muted-foreground">
              {user.email}
            </span>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        {items.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {items.map((item) => {
                const Icon = item.icon ? iconMap[item.icon] : null;

                return (
                  <DropdownMenuLinkItem
                    key={item.href}
                    render={<Link href={item.href} />}
                  >
                    {Icon && <Icon aria-hidden="true" />}
                    {item.label}
                  </DropdownMenuLinkItem>
                );
              })}
            </DropdownMenuGroup>
          </>
        )}

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive" onClick={onLogout}>
          <LogOut aria-hidden="true" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
