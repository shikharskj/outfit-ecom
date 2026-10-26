// Search UI settings, shared by the navbar panel and the results page.

export const MIN_QUERY_LENGTH = 2; // suggestions start from this many characters
export const SUGGEST_DEBOUNCE_MS = 150;

export const TRENDING_SEARCHES = [
  "dresses",
  "hoodies",
  "jeans",
  "t-shirts",
  "lipstick",
  "bed sheets",
];

// Recent searches live in this browser only.
export const RECENT_KEY = "outfit:recent-searches";
export const MAX_RECENT = 6;

// The results page URL; `category` scopes it (e.g. "in Women").
export const searchHref = (query: string, category?: string | null) => {
  const params = new URLSearchParams({ q: query.trim() });
  if (category) params.set("category", category);
  return `/search?${params}`;
};
