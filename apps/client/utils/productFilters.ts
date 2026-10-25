// Product list filters: definitions, URL format, matching and counts.
// Plain module (no React), shared by the list pages and the filter rail.
// Filtering runs in the browser for now; with a real catalogue the same URL
// parameters can be sent to the API instead.
import { CATEGORIES, FALLBACK_LABEL, slugify } from "@/utils/categories";
import type { ProductCardData } from "@/utils/productCardData";

export type FacetKey = "category" | "group" | "type" | "size" | "color" | "price" | "only";

export type FilterState = {
  category: Set<string>; // top-level category keys, on pages that span several
  group: Set<string>;
  type: Set<string>;
  size: Set<string>;
  color: Set<string>;
  priceMin: number | null; // rupees; null means no lower limit
  priceMax: number | null;
  only: Set<string>; // sale, new, sustainable
};

export type FacetOption = {
  value: string;
  label: string;
  count: number; // results if this option were chosen, given the other filters
  swatch?: string; // CSS background for colour swatches
  section?: string; // sub-heading, e.g. "Adult" / "Kids" sizes
};

export type Facet = {
  key: FacetKey;
  label: string;
  kind: "checkbox" | "size" | "swatch" | "range" | "toggle";
  options: FacetOption[];
  range?: { min: number; max: number }; // price slider bounds (kind "range")
};

const SET_KEYS = ["category", "group", "type", "size", "color", "only"] as const;
type SetKey = (typeof SET_KEYS)[number]; // every filter except price

export const emptyFilters = (): FilterState => ({
  category: new Set(),
  group: new Set(),
  type: new Set(),
  size: new Set(),
  color: new Set(),
  priceMin: null,
  priceMax: null,
  only: new Set(),
});

// --- Option values per product ---------------------------------------------

const groupOf = (product: ProductCardData) => slugify(product.productGroup || FALLBACK_LABEL);
const typeOf = (product: ProductCardData) => slugify(product.productType || FALLBACK_LABEL);

const NO_SIZE = "nosize";
const sizeSlug = (name: string) => slugify(name);
const isKidsSize = (name: string) => /\d/.test(name); // ages like "2-3Y"
const ADULT_ORDER = ["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"];

// The price slider moves in ₹100 steps between bounds rounded out from the
// page's cheapest and dearest products.
export const PRICE_STEP = 100;

export const formatRupees = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

const priceBounds = (products: ProductCardData[]) => {
  const prices = products.map((p) => p.price.current);
  return {
    min: Math.floor(Math.min(...prices) / PRICE_STEP) * PRICE_STEP,
    max: Math.ceil(Math.max(...prices) / PRICE_STEP) * PRICE_STEP,
  };
};

const priceLabel = (min: number | null, max: number | null) =>
  min !== null && max !== null
    ? `${formatRupees(min)} – ${formatRupees(max)}`
    : min !== null
      ? `Over ${formatRupees(min)}`
      : `Under ${formatRupees(max ?? 0)}`;

export const FLAGS = [
  { value: "sale", label: "On sale", test: (p: ProductCardData) => p.price.onSale },
  { value: "new", label: "New arrivals", test: (p: ProductCardData) => p.isNewArrival },
  {
    value: "sustainable",
    label: "Sustainable",
    test: (p: ProductCardData) => p.tags.includes("sustainable"),
  },
];

// --- Colour families ---------------------------------------------------------

export const COLOR_FAMILIES = [
  { value: "black", label: "Black", swatch: "#111111" },
  { value: "white", label: "White", swatch: "#ffffff" },
  { value: "grey", label: "Grey", swatch: "#9ca3af" },
  { value: "beige", label: "Beige", swatch: "#e4d5bd" },
  { value: "brown", label: "Brown", swatch: "#7a5134" },
  { value: "red", label: "Red", swatch: "#b91c1c" },
  { value: "pink", label: "Pink", swatch: "#f2a7c0" },
  { value: "orange", label: "Orange", swatch: "#f97316" },
  { value: "yellow", label: "Yellow", swatch: "#facc15" },
  { value: "green", label: "Green", swatch: "#4d7c0f" },
  { value: "blue", label: "Blue", swatch: "#1e40af" },
  { value: "purple", label: "Purple", swatch: "#7e22ce" },
  {
    value: "multi",
    label: "Multi",
    swatch: "conic-gradient(#ef4444, #facc15, #22c55e, #3b82f6, #a855f7, #ef4444)",
  },
];

// Checked in order, on the part of the name before any "/" (so "Black/Patterned"
// is black). Order matters: "Denim black" is black, "Dark denim blue" is blue.
const COLOR_KEYWORDS: [string, string[]][] = [
  ["black", ["black"]],
  ["white", ["white", "ivory", "ecru"]],
  ["grey", ["grey", "gray", "anthracite", "silver", "marl"]],
  ["beige", ["beige", "greige", "cream", "sand", "nude", "vanilla"]],
  ["brown", ["brown", "mole", "mocha", "latte", "chocolate", "camel", "bronze"]],
  ["purple", ["purple", "plum", "lilac", "lavender", "violet"]],
  ["pink", ["pink", "rose"]],
  ["red", ["red", "burgundy", "bordeaux", "ruby", "wine"]],
  ["orange", ["orange", "coral", "rust", "terracotta"]],
  ["yellow", ["yellow", "mustard", "lemon", "gold"]],
  ["green", ["green", "khaki", "olive", "sage", "mint"]],
  ["blue", ["blue", "navy", "denim", "turquoise", "teal"]],
];

// Shade names like "Silver Moon" or "Late Night Latte" don't always say the
// colour, so fall back to the product's actual colour value.
const familyFromHex = (hex: string) => {
  const match = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!match) return "multi";
  const n = parseInt(match[1], 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => v / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  let h = 0;
  if (d !== 0) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h = (h * 60 + 360) % 360;
  }

  if (l < 0.13) return "black";
  if (s < 0.12) return l > 0.88 ? "white" : "grey";
  if (h >= 20 && h < 50 && l > 0.65) return "beige";
  if (h >= 15 && h < 45 && l < 0.45) return "brown";
  if (h < 15 || h >= 345) return l > 0.7 ? "pink" : "red";
  if (h < 45) return "orange";
  if (h < 70) return "yellow";
  if (h < 170) return "green";
  if (h < 255) return "blue";
  if (h < 290) return "purple";
  return "pink";
};

const familyCache = new Map<string, string>();

export const colorFamilyOf = (product: ProductCardData) => {
  const key = `${product.colorName}|${product.colorHex}`;
  const cached = familyCache.get(key);
  if (cached) return cached;

  const name = product.colorName.split("/")[0].toLowerCase();
  const byName = COLOR_KEYWORDS.find(([, words]) =>
    words.some((word) => new RegExp(`\\b${word}\\b`).test(name)),
  )?.[0];
  const family = byName ?? familyFromHex(product.colorHex);
  familyCache.set(key, family);
  return family;
};

// --- Matching ----------------------------------------------------------------

const matchesFacet = (product: ProductCardData, key: FacetKey, state: FilterState) => {
  switch (key) {
    case "category":
      return state.category.size === 0 || state.category.has(product.category);
    case "group":
      return state.group.size === 0 || state.group.has(groupOf(product));
    case "type":
      return state.type.size === 0 || state.type.has(typeOf(product));
    case "size":
      return (
        state.size.size === 0 ||
        product.sizes.some((size) => size.inStock && state.size.has(sizeSlug(size.name)))
      );
    case "color":
      return state.color.size === 0 || state.color.has(colorFamilyOf(product));
    case "price":
      return (
        (state.priceMin === null || product.price.current >= state.priceMin) &&
        (state.priceMax === null || product.price.current <= state.priceMax)
      );
    case "only":
      // Each highlight is its own requirement: "On sale" and "New" means both.
      return FLAGS.every((flag) => !state.only.has(flag.value) || flag.test(product));
  }
};

const ALL_KEYS: FacetKey[] = ["category", "group", "type", "size", "color", "price", "only"];

// Options within a filter are OR'd (Black or Red); filters are AND'd together.
export const applyFilters = (
  products: ProductCardData[],
  state: FilterState,
  except?: FacetKey,
) =>
  products.filter((product) =>
    ALL_KEYS.every((key) => key === except || matchesFacet(product, key, state)),
  );

// --- Facets with counts --------------------------------------------------------

const countBy = <T,>(items: T[], keysOf: (item: T) => string[]) => {
  const counts = new Map<string, number>();
  for (const item of items) {
    for (const key of new Set(keysOf(item))) counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
};

const FACET_LABELS: Record<FacetKey, string> = {
  category: "Category",
  group: "Category",
  type: "Type",
  size: "Size",
  color: "Colour",
  price: "Price",
  only: "Highlights",
};

// The filters for a list, built from all its products so options don't vanish
// as filters change. Each count applies every *other* active filter, the usual
// faceted-search convention, so a count is what you'd get by picking it.
export const buildFacets = (
  products: ProductCardData[],
  state: FilterState,
  enabled: FacetKey[],
): Facet[] => {
  const facets: Facet[] = [];

  for (const key of enabled) {
    const pool = applyFilters(products, state, key);

    if (key === "category") {
      const present = new Set(products.map((p) => p.category));
      const counts = countBy(pool, (p) => [p.category]);
      facets.push({
        key,
        label: FACET_LABELS[key],
        kind: "checkbox",
        options: CATEGORIES.filter((category) => present.has(category.key)).map(
          (category) => ({
            value: category.key,
            label: category.label,
            count: counts.get(category.key) ?? 0,
          }),
        ),
      });
    }

    if (key === "group" || key === "type") {
      const valueOf = key === "group" ? groupOf : typeOf;
      const labelOf = (p: ProductCardData) =>
        (key === "group" ? p.productGroup : p.productType) || FALLBACK_LABEL;
      const labels = new Map(products.map((p) => [valueOf(p), labelOf(p)]));
      const totals = countBy(products, (p) => [valueOf(p)]);
      const counts = countBy(pool, (p) => [valueOf(p)]);
      facets.push({
        key,
        label: FACET_LABELS[key],
        kind: "checkbox",
        options: [...labels]
          .sort((a, b) => (totals.get(b[0]) ?? 0) - (totals.get(a[0]) ?? 0))
          .map(([value, label]) => ({ value, label, count: counts.get(value) ?? 0 })),
      });
    }

    if (key === "size") {
      const names = new Map<string, string>();
      for (const product of products) {
        for (const size of product.sizes) {
          const slug = sizeSlug(size.name);
          if (slug !== NO_SIZE) names.set(slug, size.name);
        }
      }
      const counts = countBy(pool, (p) =>
        p.sizes.filter((size) => size.inStock).map((size) => sizeSlug(size.name)),
      );
      const order = (name: string) => {
        if (isKidsSize(name)) return 100 + parseFloat(name.replace("½", ".5"));
        const index = ADULT_ORDER.indexOf(name.toLowerCase());
        return index === -1 ? 50 : index;
      };
      facets.push({
        key,
        label: FACET_LABELS[key],
        kind: "size",
        options: [...names]
          .sort((a, b) => order(a[1]) - order(b[1]))
          .map(([value, label]) => ({
            value,
            label,
            count: counts.get(value) ?? 0,
            section: isKidsSize(label) ? "Kids" : "Adult",
          })),
      });
    }

    if (key === "color") {
      const present = new Set(products.map(colorFamilyOf));
      const counts = countBy(pool, (p) => [colorFamilyOf(p)]);
      facets.push({
        key,
        label: FACET_LABELS[key],
        kind: "swatch",
        options: COLOR_FAMILIES.filter((family) => present.has(family.value)).map(
          (family) => ({ ...family, count: counts.get(family.value) ?? 0 }),
        ),
      });
    }

    if (key === "price" && products.length > 0) {
      facets.push({
        key,
        label: FACET_LABELS[key],
        kind: "range",
        options: [],
        range: priceBounds(products),
      });
    }

    if (key === "only") {
      // Each count adds that highlight to the other filters.
      facets.push({
        key,
        label: FACET_LABELS[key],
        kind: "toggle",
        // A highlight every product has (e.g. "On sale" on the sale page)
        // can't narrow anything, so it's left out.
        options: FLAGS.filter(
          (flag) => products.some(flag.test) && !products.every(flag.test),
        ).map((flag) => ({
          value: flag.value,
          label: flag.label,
          count: pool.filter(
            (p) => flag.test(p) && matchesFacet(p, "only", state),
          ).length,
        })),
      });
    }
  }

  // A filter with a single choice can't narrow anything down. Highlights are
  // independent toggles, so one is still useful; a price range needs a spread.
  return facets.filter((facet) => {
    if (facet.kind === "range") return facet.range!.min < facet.range!.max;
    if (facet.kind === "toggle") return facet.options.length > 0;
    return facet.options.length > 1;
  });
};

// --- URL format ----------------------------------------------------------------
// ?category=women&group=tops,bottoms&type=hoodie&size=m,l&color=black&min=500&max=2000&only=sale

export const FILTER_PARAMS = ["category", "group", "type", "size", "color", "min", "max", "only"] as const;

const parsePrice = (value: string | null) => {
  if (value === null || value.trim() === "") return null;
  const amount = Number(value);
  return Number.isFinite(amount) && amount >= 0 ? Math.round(amount) : null;
};

export const parseFilters = (params: URLSearchParams, enabled: FacetKey[]): FilterState => {
  const state = emptyFilters();
  for (const key of SET_KEYS) {
    if (!enabled.includes(key)) continue;
    for (const value of (params.get(key) ?? "").split(",")) {
      if (value) state[key].add(value);
    }
  }
  if (enabled.includes("price")) {
    state.priceMin = parsePrice(params.get("min"));
    state.priceMax = parsePrice(params.get("max"));
  }
  return state;
};

export const serializeFilters = (state: FilterState): Record<string, string | null> => {
  const params: Record<string, string | null> = {};
  for (const key of SET_KEYS) params[key] = state[key].size ? [...state[key]].join(",") : null;
  params.min = state.priceMin === null ? null : String(state.priceMin);
  params.max = state.priceMax === null ? null : String(state.priceMax);
  return params;
};

// Drops URL values this page doesn't offer (e.g. ?only=sale where nothing is
// on sale), so every active filter is visible in the rail and removable.
export const sanitizeFilters = (state: FilterState, facets: Facet[]): FilterState => {
  const offered = (key: FacetKey) =>
    new Set(facets.find((facet) => facet.key === key)?.options.map((option) => option.value));
  const keep = (key: SetKey) => {
    const values = offered(key);
    return new Set([...state[key]].filter((value) => values.has(value)));
  };
  // Price: clamp to the slider's bounds, and drop a limit that equals its bound.
  const range = facets.find((facet) => facet.key === "price")?.range;
  let priceMin = range ? state.priceMin : null;
  let priceMax = range ? state.priceMax : null;
  if (range) {
    const clamp = (value: number | null) =>
      value === null ? null : Math.min(Math.max(value, range.min), range.max);
    priceMin = clamp(priceMin);
    priceMax = clamp(priceMax);
    if (priceMin !== null && priceMax !== null && priceMin > priceMax) {
      [priceMin, priceMax] = [priceMax, priceMin];
    }
    if (priceMin === range.min) priceMin = null;
    if (priceMax === range.max) priceMax = null;
  }

  return {
    category: keep("category"),
    group: keep("group"),
    type: keep("type"),
    size: keep("size"),
    color: keep("color"),
    only: keep("only"),
    priceMin,
    priceMax,
  };
};

const hasPrice = (state: FilterState) => state.priceMin !== null || state.priceMax !== null;

export const activeFilterCount = (state: FilterState) =>
  SET_KEYS.reduce((total, key) => total + state[key].size, 0) + (hasPrice(state) ? 1 : 0);

// One entry per active choice, for removable pills: { key, value, label }.
// The price range is a single pill.
export const activeFilterList = (state: FilterState, facets: Facet[]) =>
  facets.flatMap((facet) =>
    facet.key === "price"
      ? hasPrice(state)
        ? [{ key: facet.key, value: "range", label: priceLabel(state.priceMin, state.priceMax) }]
        : []
      : facet.options
          .filter((option) => state[facet.key as SetKey].has(option.value))
          .map((option) => ({ key: facet.key, value: option.value, label: option.label })),
  );

const copyState = (state: FilterState): FilterState => ({
  ...state,
  category: new Set(state.category),
  group: new Set(state.group),
  type: new Set(state.type),
  size: new Set(state.size),
  color: new Set(state.color),
  only: new Set(state.only),
});

// The state with one choice toggled on or off. For price (one pill) it clears
// the range.
export const toggleFilter = (state: FilterState, key: FacetKey, value: string): FilterState => {
  if (key === "price") return clearFacet(state, key);
  const next = copyState(state);
  const set = next[key];
  if (set.has(value)) set.delete(value);
  else set.add(value);
  return next;
};

// The state with everything in one filter cleared.
export const clearFacet = (state: FilterState, key: FacetKey): FilterState => {
  const next = copyState(state);
  if (key === "price") {
    next.priceMin = null;
    next.priceMax = null;
  } else {
    next[key] = new Set();
  }
  return next;
};

export const setPriceRange = (
  state: FilterState,
  priceMin: number | null,
  priceMax: number | null,
): FilterState => ({ ...copyState(state), priceMin, priceMax });
