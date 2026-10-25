"use client";

import AvatarDropdown from "./AvatarDropdown";
import NavBreadcrumbs from "./NavBreadcrumbs";
import ThemeToggle from "./ThemeToggle";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import { CURRENT_USER } from "@/lib/current-user";

// Sticks to the top of the content column so the breadcrumbs and actions stay
// in reach while long tables scroll.
const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur">
      <SidebarTrigger />
      <Separator orientation="vertical" className="mr-2 h-4" />

      <NavBreadcrumbs />

      <div className="ml-auto flex shrink-0 items-center gap-2">
        <ThemeToggle />

        <AvatarDropdown
          user={CURRENT_USER}
          items={[
            { label: "Profile", href: `/users/${CURRENT_USER.username}`, icon: "user" },
            { label: "Settings", href: "/settings", icon: "settings" },
          ]}
        />
      </div>
    </header>
  );
};

export default Navbar;
