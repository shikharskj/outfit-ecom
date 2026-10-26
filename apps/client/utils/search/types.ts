// The contract between the search UI and the search service. The mock in
// ./client.ts implements it today; the Node search service will later.

export type SearchProduct = {
  id: string;
  name: string;
  href: string;
  image: string;
  price: { current: number; regular: number; onSale: boolean; currency: string };
  category: string; // top-level category key, e.g. "women"
};

export type SearchCategoryLink = {
  label: string; // the group, e.g. "Dresses"
  category: string; // the top-level category, e.g. "Kids"
  href: string;
};

export type SearchSuggestions = {
  suggestions: string[]; // phrases that complete the query
  categories: SearchCategoryLink[];
  products: SearchProduct[]; // the first few matches
  total: number; // all product matches, for "See all N results"
};

// `category` scopes a search to one top-level category (e.g. "in Women").
export type SearchOptions = { signal?: AbortSignal; category?: string };

export type SearchClient = {
  suggest: (query: string, options?: SearchOptions) => Promise<SearchSuggestions>;
  featured: (options?: { signal?: AbortSignal }) => Promise<SearchProduct[]>; // shown before typing
  search: (query: string, options?: SearchOptions) => Promise<SearchProduct[]>;
};
