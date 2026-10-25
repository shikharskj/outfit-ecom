// Plain constants and helpers, safe to import from client components. Keep
// anything that touches product data in utils/getTaxonomy.ts instead, or the
// whole mock ends up in the browser bundle.

// Display order everywhere: navbar, rails, category pages. `key` matches the
// product data; `slug` is the URL.
export const CATEGORIES = [
  { key: "women", slug: "women", label: "Women" },
  { key: "men", slug: "men", label: "Men" },
  { key: "kids", slug: "kids", label: "Kids" },
  { key: "home", slug: "home-living", label: "Home & Living" },
  { key: "beauty", slug: "beauty", label: "Beauty" },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

export const categoryByKey = (key: string) =>
  CATEGORIES.find((category) => category.key === key);

export const categoryBySlug = (slug: string) =>
  CATEGORIES.find((category) => category.slug === slug);

// "Sweatshirts & hoodies" -> "sweatshirts-hoodies". A stopgap until the API
// returns its own slugs.
export const slugify = (label: string) =>
  label
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Products missing a group or type are filed under this label.
export const FALLBACK_LABEL = "Other";

export const categoryHref = (categorySlug: string) => `/categories/${categorySlug}`;

export const groupHref = (categorySlug: string, groupSlug: string) =>
  `/categories/${categorySlug}/${groupSlug}`;
