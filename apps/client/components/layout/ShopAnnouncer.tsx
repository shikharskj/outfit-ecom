"use client";

import { useShopStore } from "@/providers/shop-store-provider";

// One live region for the whole app, so screen readers hear wishlist and bag
// changes. Keying by id remounts the message, so repeats are announced too.
export default function ShopAnnouncer() {
  const announcement = useShopStore((state) => state.announcement);

  return (
    <div aria-live="polite" className="sr-only">
      <p key={announcement.id}>{announcement.text}</p>
    </div>
  );
}
