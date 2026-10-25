"use client";

import { type ReactNode, createContext, useContext, useState } from "react";
import { useStore } from "zustand";
import { type ShopStore, createShopStore } from "@/stores/shop-store";

export type ShopStoreApi = ReturnType<typeof createShopStore>;

// Carries the store instance only; all state lives in Zustand. This is the
// per-request setup from the Zustand Next.js guide.
const ShopStoreContext = createContext<ShopStoreApi | undefined>(undefined);

type ShopStoreProviderProps = {
  children: ReactNode;
};

export const ShopStoreProvider = ({ children }: ShopStoreProviderProps) => {
  // One store per request on the server, and once per session in the browser.
  const [store] = useState(() => createShopStore());
  return <ShopStoreContext.Provider value={store}>{children}</ShopStoreContext.Provider>;
};

// Select only what you need, so components re-render only when it changes.
export const useShopStore = <T,>(selector: (store: ShopStore) => T): T => {
  const shopStoreContext = useContext(ShopStoreContext);
  if (!shopStoreContext) {
    throw new Error("useShopStore must be used within ShopStoreProvider");
  }
  return useStore(shopStoreContext, selector);
};
