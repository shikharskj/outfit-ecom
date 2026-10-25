import { cacheLife, cacheTag } from "next/cache";
import type { ProductCategory } from "@/components/home/CategorySelector";
import { CACHE_TAGS } from "@/utils/cacheTags";

const IMG =
  "https://res.cloudinary.com/k39i8qu6/image/upload/f_auto,q_auto,w_800/hm";

const categories: ProductCategory[] = [
  {
    id: "men",
    name: "Men",
    description: "Everyday essentials",
    imageSrc: `https://res.cloudinary.com/k39i8qu6/image/upload/f_auto,q_auto,w_800/hm/men/fa6bb490b934f6e8d0a71621f409d591d1a1d445.jpg`, // model in a beige knit
    href: "/categories/men",
    itemCount: 1240,
    badge: "New in",
  },
  {
    id: "women",
    name: "Women",
    description: "Your style, your way",
    imageSrc: `${IMG}/women/5981817ae129d7e18af1d65a99a14834f3794be2.jpg`, // model in a navy printed sweatshirt
    href: "/categories/women",
    itemCount: 2380,
  },
  {
    id: "beauty",
    name: "Beauty",
    description: "The finishing touches",
    imageSrc: `${IMG}/beauty/7f6fb9fc08cde546507f4e6c050517a2429edf5e.jpg`, // black two-tier wash bag
    href: "/categories/beauty",
    itemCount: 640,
  },
  {
    id: "kids",
    name: "Kids",
    description: "Little looks, big personality",
    imageSrc: `${IMG}/kids/220c6e4b2abaa6c44f2227d7f4903364ec5617ad.jpg`, // boy in a red reindeer jumper
    href: "/categories/kids",
    itemCount: 980,
    badge: "Festive edit",
  },
  {
    id: "home",
    name: "Home & Living",
    description: "Comfort for your space",
    imageSrc: `${IMG}/home/9dbd188a3db40dfd1d0d04fcb97497cbfa0c0b7e.jpg`, // burgundy bedroom scene
    href: "/categories/home-living",
    itemCount: 520,
  },
];

// Simulated network latency so loading states can be seen during development.
const MOCK_DELAY_MS = 500;

// Mocks a call to the categories API. Swap the body for a real fetch later;
// callers already treat it as async. Cached so the page can be prerendered.
export const getAllCategories = async (): Promise<ProductCategory[]> => {
  "use cache";
  cacheLife("hours");
  cacheTag(CACHE_TAGS.categories);

  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));

  // Return a copy so callers can't mutate the shared mock data.
  return structuredClone(categories);
};
