import { Suspense } from "react";
import type { Metadata } from "next";
import CollectionLoading from "@/components/categories/CollectionLoading";
import SearchResults from "@/components/search/SearchResults";

// Search result pages aren't useful in search engines.
export const metadata: Metadata = {
  title: "Search",
  robots: { index: false },
};

// The query is read in the browser (useSearchParams), so the page shell is
// static and the results stream in.
export default function SearchPage() {
  return (
    <Suspense fallback={<CollectionLoading />}>
      <SearchResults />
    </Suspense>
  );
}
