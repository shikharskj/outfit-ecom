"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import type { EmblaCarouselType } from "embla-carousel";
import { Carousel } from "@/components/application/carousel/carousel-base";

export type ResponsiveSrc = {
  desktop: string; // wide video, for screens over 767px
  mobile: string; // portrait 2:3 video, for 767px and below
};

export type HeroVideo = {
  id: string;
  category: string;
  eyebrow: string; // short kicker shown above the title
  title: string;
  subtitle: string;
  videoSrc: ResponsiveSrc;
  posterSrc: ResponsiveSrc;
  href: string;
};

type VideoHeroProps = {
  videos: HeroVideo[];
};

export default function VideoHero({ videos }: VideoHeroProps) {
  const [carouselApi, setCarouselApi] = useState<
    EmblaCarouselType | undefined
  >();
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  // Playback position of the active video, 0 to 1, drives the tab fill.
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSelect = useCallback((api: EmblaCarouselType) => {
    setActiveIndex(api.selectedScrollSnap());
    setVideoFailed(false);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    // Subscribe to carousel changes without setting state synchronously
    // inside the effect.
    carouselApi.on("select", handleSelect);

    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi, handleSelect]);

  // Play the active slide from the start and pause the rest. This runs on
  // mount and on every slide change, whether it came from a video ending or
  // from the user switching slides. Calling play() directly is more reliable
  // than the autoPlay attribute, which only applies when the element is
  // inserted and is ignored for server-rendered videos missing `muted`.
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.muted = true;
        video.currentTime = 0;
        video.play().catch(() => {
          // Autoplay can still be refused (e.g. low-power mode); the poster
          // stays visible in that case.
        });
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  if (videos.length === 0) return null;

  return (
    <section
      aria-label="Featured Outfit collections"
      className="relative isolate overflow-hidden bg-gray-950 text-white"
    >
      <Carousel.Root
        setApi={setCarouselApi}
        opts={{
          loop: true,
          align: "start",
          duration: 35,
        }}
        className="w-full"
      >
        <Carousel.Content className="ml-0">
          {videos.map((video, index) => (
            <Carousel.Item key={video.id} className="basis-full pl-0">
              <div className="relative h-[75svh] min-h-140 overflow-hidden bg-gray-950 md:h-[85svh] md:min-h-170">
                {" "}
                <Link
                  href={video.href}
                  aria-label={`Explore ${video.category}`}
                  tabIndex={index === activeIndex ? 0 : -1}
                  className="absolute inset-0"
                  onClick={() => {
                    // Navigation is handled by Next.js Link.
                  }}
                >
                  <video
                    ref={(element) => {
                      videoRefs.current[index] = element;
                    }}
                    className={`absolute inset-0 size-full object-cover ${
                      videoFailed ? "hidden" : ""
                    }`}
                    muted
                    // With a single video there is no next slide, so let it
                    // loop on its own instead of advancing.
                    loop={videos.length === 1}
                    playsInline
                    preload={index === activeIndex ? "auto" : "none"}
                    poster={video.posterSrc.desktop}
                    aria-hidden="true"
                    onTimeUpdate={(event) => {
                      const { currentTime, duration } = event.currentTarget;
                      if (index === activeIndex && duration) {
                        setProgress(currentTime / duration);
                      }
                    }}
                    onEnded={() => {
                      if (index === activeIndex) {
                        carouselApi?.scrollNext();
                      }
                    }}
                    onError={() => {
                      if (index === activeIndex) {
                        setVideoFailed(true);
                      }
                    }}
                  >
                    <source
                      src={video.videoSrc.mobile}
                      type="video/mp4"
                      media="(max-width: 767px)"
                    />
                    <source src={video.videoSrc.desktop} type="video/mp4" />
                  </video>

                  {videoFailed && index === activeIndex && (
                    <picture>
                      <source
                        media="(max-width: 767px)"
                        srcSet={video.posterSrc.mobile}
                      />
                      <img
                        src={video.posterSrc.desktop}
                        alt=""
                        className="absolute inset-0 size-full object-cover"
                      />
                    </picture>
                  )}

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-black/10"
                  />
                  {/* Extra shade behind the text column on wide screens */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 hidden bg-linear-to-r from-black/45 via-black/10 to-transparent md:block"
                  />
                </Link>
                {/* Re-keyed on activation so the entrance animation replays
                    every time a slide comes into view. */}
                <div
                  key={index === activeIndex ? "active" : "idle"}
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1600px] px-5 pb-24 sm:px-8 md:px-12 md:pb-32"
                >
                  <p
                    className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/85 ${
                      index === activeIndex
                        ? "animate-in fade-in slide-in-from-bottom-3 duration-700 fill-mode-both"
                        : ""
                    }`}
                  >
                    <span aria-hidden="true" className="h-px w-8 bg-white/70" />
                    {video.eyebrow}
                  </p>

                  <h1
                    className={`mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-balance drop-shadow-lg sm:text-7xl md:text-8xl ${
                      index === activeIndex
                        ? "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both"
                        : ""
                    }`}
                  >
                    {video.title}
                  </h1>

                  <p
                    className={`mt-5 max-w-lg text-base text-pretty text-white/85 sm:text-xl ${
                      index === activeIndex
                        ? "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both"
                        : ""
                    }`}
                  >
                    {video.subtitle}
                  </p>

                  <Link
                    href={video.href}
                    tabIndex={index === activeIndex ? 0 : -1}
                    className={`group pointer-events-auto mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-gray-950 shadow-lg transition-colors hover:bg-gray-100 ${
                      index === activeIndex
                        ? "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both"
                        : ""
                    }`}
                  >
                    <span className="capitalize">Shop {video.category}</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
      </Carousel.Root>

      {/* Slide controls: labelled tabs that fill with video progress, plus
          prev/next arrows. */}
      {videos.length > 1 && (
        <div className="absolute inset-x-0 bottom-0 z-20 mx-auto flex max-w-[1600px] items-end gap-4 px-5 pb-5 sm:px-8 md:gap-10 md:px-12 md:pb-8">
          <div className="flex flex-1 gap-2 md:gap-4">
            {videos.map((video, index) => {
              const isActive = index === activeIndex;
              const fill = isActive ? (videoFailed ? 1 : progress) : 0;

              return (
                <button
                  key={video.id}
                  type="button"
                  aria-label={`Show ${video.category}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className="group flex-1 cursor-pointer py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span className="relative block h-0.5 overflow-hidden rounded-full bg-white/30 transition-colors group-hover:bg-white/60">
                    <span
                      className="absolute inset-0 origin-left bg-white transition-transform duration-300 ease-linear"
                      style={{ transform: `scaleX(${fill})` }}
                    />
                  </span>
                  <span
                    className={`mt-3 hidden text-xs font-semibold uppercase tracking-[0.2em] transition-colors md:block ${
                      isActive
                        ? "text-white"
                        : "text-white/55 group-hover:text-white"
                    }`}
                  >
                    {video.category}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden text-sm font-medium tabular-nums text-white/80 sm:block">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="text-white/45">
                {" / "}
                {String(videos.length).padStart(2, "0")}
              </span>
            </span>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => carouselApi?.scrollPrev()}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/50 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:size-12"
            >
              <ArrowLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => carouselApi?.scrollNext()}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/50 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:size-12"
            >
              <ArrowRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
