// Labels attached to cached data with `cacheTag`. The admin app sends these to
// POST /api/revalidate to refresh the matching data without waiting for cacheLife.
export const CACHE_TAGS = {
  heroVideos: "hero-videos",
  categories: "categories",
  saleBanner: "sale-banner",
  products: "products",
} as const;

export type CacheTag = (typeof CACHE_TAGS)[keyof typeof CACHE_TAGS];

export const isCacheTag = (value: unknown): value is CacheTag =>
  Object.values(CACHE_TAGS).includes(value as CacheTag);
