"use client";

import { useSyncExternalStore } from "react";
import { MAX_RECENT, RECENT_KEY } from "@/utils/search/config";

// Recent searches, kept in this browser's localStorage. Storage can be
// unavailable (private mode, blocked site data), so every access is guarded
// and the list simply comes back empty.

const listeners = new Set<() => void>();
let cachedRaw: string | null = null;
let cached: string[] = [];

const read = (): string[] => {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(RECENT_KEY);
  } catch {
    raw = null;
  }
  // Same string, same array: useSyncExternalStore needs a stable snapshot.
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      const parsed = raw ? JSON.parse(raw) : [];
      cached = Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
    } catch {
      cached = [];
    }
  }
  return cached;
};

const write = (next: string[]) => {
  try {
    window.localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable: the list just won't persist.
  }
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const EMPTY: string[] = [];

export const addRecentSearch = (query: string) => {
  const term = query.trim();
  if (!term) return;
  write([term, ...read().filter((item) => item.toLowerCase() !== term.toLowerCase())].slice(0, MAX_RECENT));
};

export const removeRecentSearch = (term: string) => write(read().filter((item) => item !== term));

export const clearRecentSearches = () => write([]);

// The server (and the first browser render) sees an empty list, so markup matches.
export const useRecentSearches = () => useSyncExternalStore(subscribe, read, () => EMPTY);
