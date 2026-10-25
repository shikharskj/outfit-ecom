import { cacheLife, cacheTag } from "next/cache";
import type { SaleBannerContent } from "@/components/shared/saleBannerTheme";
import { CACHE_TAGS } from "@/utils/cacheTags";

// Will be created and scheduled from the admin app later.
const saleBanner: SaleBannerContent = {
  id: "festive-sale-2026",
  eyebrow: "Festive sale",
  title: "Up to 50% off",
  description:
    "Party-ready dresses, sharp tailoring and gifts for everyone on your list.",
  cta: { label: "Shop the sale", href: "/sale" },
  promoCode: "FESTIVE50",
  imageSrc:
    "https://res.cloudinary.com/k39i8qu6/image/upload/f_auto,q_auto,w_1200,h_700,c_fill,g_auto/hm/hero/kids_desktop_poster.jpg",
  endsAt: "2026-11-30T18:29:59Z",
  theme: "dark",
  terms: "Selected lines only. While stocks last.",
};

// Simulated network latency so loading states can be seen during development.
const MOCK_DELAY_MS = 500;

// Mocks a call to the sale banner API. The API returns the banner that's live
// right now, or null when there isn't one, so scheduling stays on the backend.
// Cached like the other home page data; the admin app can refresh it instantly
// through POST /api/revalidate with the "sale-banner" tag.
export const getSaleBanner = async (): Promise<SaleBannerContent | null> => {
  "use cache";
  cacheLife("hours");
  cacheTag(CACHE_TAGS.saleBanner);

  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));

  // Return a copy so callers can't mutate the shared mock data.
  return structuredClone(saleBanner);
};
