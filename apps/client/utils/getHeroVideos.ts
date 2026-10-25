import { cacheLife, cacheTag } from "next/cache";
import type { HeroVideo } from "@/components/home/VideoHero";
import { CACHE_TAGS } from "@/utils/cacheTags";

const heroVideos: HeroVideo[] = [
  {
    id: "hero-women",
    category: "women",
    eyebrow: "The designer edit",
    title: "Elie Saab",
    subtitle:
      "Sequins, sheer layers and gowns made for the moment the lights go down.",
    videoSrc: {
      desktop:
        "https://res.cloudinary.com/k39i8qu6/video/upload/v1792873505/hm/hero/women_desktop.mp4",
      mobile:
        "https://res.cloudinary.com/k39i8qu6/video/upload/v1792873507/hm/hero/women_mobile.mp4",
    },
    posterSrc: {
      desktop:
        "https://res.cloudinary.com/k39i8qu6/image/upload/v1792873539/hm/hero/women_desktop_poster.jpg",
      mobile:
        "https://res.cloudinary.com/k39i8qu6/image/upload/v1792873540/hm/hero/women_mobile_poster.jpg",
    },
    href: "/categories/women",
  },
  {
    id: "hero-men",
    category: "men",
    eyebrow: "New-season tailoring",
    title: "Sharp by design",
    subtitle:
      "Clean lines, confident cuts and the essentials that take you from desk to dinner.",
    videoSrc: {
      desktop:
        "https://res.cloudinary.com/k39i8qu6/video/upload/v1792873508/hm/hero/men_desktop.mp4",
      mobile:
        "https://res.cloudinary.com/k39i8qu6/video/upload/v1792873510/hm/hero/men_mobile.mp4",
    },
    posterSrc: {
      desktop:
        "https://res.cloudinary.com/k39i8qu6/image/upload/v1792873543/hm/hero/men_desktop_poster.jpg",
      mobile:
        "https://res.cloudinary.com/k39i8qu6/image/upload/v1792873544/hm/hero/men_mobile_poster.jpg",
    },
    href: "/categories/men",
  },
  {
    id: "hero-kids",
    category: "kids",
    eyebrow: "Festive 2026",
    title: "Little stars, big celebrations",
    subtitle:
      "Twirl-ready dresses and dapper sets for every party on the calendar.",
    videoSrc: {
      desktop:
        "https://res.cloudinary.com/k39i8qu6/video/upload/v1792873513/hm/hero/kids_desktop.mp4",
      mobile:
        "https://res.cloudinary.com/k39i8qu6/video/upload/v1792873519/hm/hero/kids_mobile.mp4",
    },
    posterSrc: {
      desktop:
        "https://res.cloudinary.com/k39i8qu6/image/upload/v1792873545/hm/hero/kids_desktop_poster.jpg",
      mobile:
        "https://res.cloudinary.com/k39i8qu6/image/upload/v1792873550/hm/hero/kids_mobile_poster.jpg",
    },
    href: "/categories/kids",
  },
  {
    id: "hero-home",
    category: "home",
    eyebrow: "The holiday home",
    title: "Make it merry",
    subtitle:
      "Glowing decor, festive tableware and cosy textiles to bring the season home.",
    videoSrc: {
      desktop:
        "https://res.cloudinary.com/k39i8qu6/video/upload/w_1920,q_auto,f_mp4/hm/hero/home_desktop.mp4",
      mobile:
        "https://res.cloudinary.com/k39i8qu6/video/upload/v1792873526/hm/hero/home_mobile.mp4",
    },
    posterSrc: {
      desktop:
        "https://res.cloudinary.com/k39i8qu6/image/upload/v1792873552/hm/hero/home_desktop_poster.jpg",
      mobile:
        "https://res.cloudinary.com/k39i8qu6/image/upload/v1792873554/hm/hero/home_mobile_poster.jpg",
    },
    href: "/categories/home-living",
  },
  {
    id: "hero-beauty",
    category: "beauty",
    eyebrow: "Beauty with Sharvari",
    title: "Your festive glow",
    subtitle:
      "Signature scents and party-ready make-up for every celebration ahead.",
    videoSrc: {
      desktop:
        "https://res.cloudinary.com/k39i8qu6/video/upload/v1792873531/hm/hero/beauty_desktop.mp4",
      mobile:
        "https://res.cloudinary.com/k39i8qu6/video/upload/v1792873534/hm/hero/beauty_mobile.mp4",
    },
    posterSrc: {
      desktop:
        "https://res.cloudinary.com/k39i8qu6/video/upload/so_1/hm/hero/beauty_desktop.jpg",
      mobile:
        "https://res.cloudinary.com/k39i8qu6/image/upload/v1792873556/hm/hero/beauty_mobile_poster.jpg",
    },
    href: "/categories/beauty",
  },
];

// Simulated network latency so loading states can be seen during development.
const MOCK_DELAY_MS = 500;

// Mocks a call to the hero videos API. Swap the body for a real fetch later;
// callers already treat it as async. The videos are the same for every
// visitor, so they're cached and the page can be prerendered.
export const getHeroVideos = async (): Promise<HeroVideo[]> => {
  "use cache";
  cacheLife("hours");
  cacheTag(CACHE_TAGS.heroVideos);

  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));

  // Return a copy so callers can't mutate the shared mock data.
  return structuredClone(heroVideos);
};
