// Shared by product rail sections and their skeletons so the page doesn't
// shift once data loads.

// Light for white or tinted sections, dark for black ones.
export type SectionTone = "light" | "dark";

// Phones show a slice of the next card as a hint to swipe.
export const productRailItemClassName =
  "basis-[45%] pl-4 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5";

export const productRailImageSizes =
  "(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 45vw";
