import { createStore } from "zustand/vanilla";

export type BagItem = {
  productId: string;
  name: string;
  sizeCode: string;
  sizeName: string;
  quantity: number;
};

export type ShopState = {
  wishlist: string[]; // product ids; an array so it stays plain, persistable data
  bag: BagItem[];
  // Read by ShopAnnouncer; the id changes on every update so repeats re-announce.
  announcement: { id: number; text: string };
};

export type ShopActions = {
  toggleWishlist: (product: { id: string; name: string }) => void;
  addToBag: (item: Omit<BagItem, "quantity">) => void;
};

export type ShopStore = ShopState & ShopActions;

export const defaultInitState: ShopState = {
  wishlist: [],
  bag: [],
  announcement: { id: 0, text: "" },
};

// Created per request (see ShopStoreProvider), never as a module-level store,
// so server renders can't leak state between visitors. Memory only for now:
// pass a signed-in user's saved bag as `initState`, or wrap the creator in
// `persist` from zustand/middleware, once that's wanted.
export const createShopStore = (initState: ShopState = defaultInitState) =>
  createStore<ShopStore>()((set) => ({
    ...initState,

    toggleWishlist: ({ id, name }) =>
      set((state) => {
        const removing = state.wishlist.includes(id);
        return {
          wishlist: removing
            ? state.wishlist.filter((entry) => entry !== id)
            : [...state.wishlist, id],
          announcement: {
            id: state.announcement.id + 1,
            text: removing
              ? `Removed ${name} from your wishlist`
              : `Saved ${name} to your wishlist`,
          },
        };
      }),

    // The same product in the same size adds to the quantity.
    addToBag: (item) =>
      set((state) => {
        const existing = state.bag.find(
          (line) => line.productId === item.productId && line.sizeCode === item.sizeCode,
        );
        return {
          bag: existing
            ? state.bag.map((line) =>
                line === existing ? { ...line, quantity: line.quantity + 1 } : line,
              )
            : [...state.bag, { ...item, quantity: 1 }],
          announcement: {
            id: state.announcement.id + 1,
            text: `Added ${item.name}${item.sizeName ? `, size ${item.sizeName},` : ""} to your bag`,
          },
        };
      }),
  }));
