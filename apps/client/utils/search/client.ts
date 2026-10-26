import { MOCK_CATEGORIES, MOCK_PRODUCTS, MOCK_SUGGESTIONS } from "@/utils/search/mockData";
import { categoryByKey, categoryHref } from "@/utils/categories";
import type { SearchClient } from "@/utils/search/types";

const LATENCY_MS = 200; // simulated network delay, so loading states show
const MAX_SUGGESTIONS = 5;
const MAX_CATEGORIES = 4;
const MAX_PRODUCTS = 6;

// Resolves after a short delay, or rejects as soon as the request is cancelled.
const delay = (signal?: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    if (signal?.aborted) return reject(new DOMException("Aborted", "AbortError"));
    const timer = setTimeout(resolve, LATENCY_MS);
    signal?.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });

const matches = (text: string, query: string) =>
  text.toLowerCase().includes(query.trim().toLowerCase());

const searchMock = (query: string, category?: string) =>
  MOCK_PRODUCTS.filter(
    (product) => matches(product.name, query) && (!category || product.category === category),
  );

// Category links live under /categories/{slug}; the slug can differ from the
// key ("home" -> "home-living").
const inCategory = (href: string, category?: string) => {
  if (!category) return true;
  const slug = categoryByKey(category)?.slug;
  return Boolean(slug) && href.startsWith(`${categoryHref(slug!)}/`);
};

// Mock search client: simple text matching over a small fixed sample. This is
// the one place to change when the Node search service exists: replace each
// method's body with a fetch to the service (passing `signal` through).
export const searchClient: SearchClient = {
  async suggest(query, { signal, category } = {}) {
    await delay(signal);
    const products = searchMock(query, category);
    return {
      suggestions: MOCK_SUGGESTIONS.filter((phrase) => matches(phrase, query)).slice(
        0,
        MAX_SUGGESTIONS,
      ),
      categories: MOCK_CATEGORIES.filter(
        (link) =>
          (matches(link.label, query) || matches(link.category, query)) &&
          inCategory(link.href, category),
      ).slice(0, MAX_CATEGORIES),
      products: products.slice(0, MAX_PRODUCTS),
      total: products.length,
    };
  },

  async featured({ signal } = {}) {
    await delay(signal);
    return MOCK_PRODUCTS.slice(0, MAX_PRODUCTS);
  },

  async search(query, { signal, category } = {}) {
    await delay(signal);
    return searchMock(query, category);
  },
};
