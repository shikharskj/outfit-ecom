import Link from "next/link";
import { ArrowRight } from "@untitledui/icons";
import AnnouncementDismiss from "@/components/layout/AnnouncementDismiss";
import { getSaleBanner } from "@/utils/getSaleBanner";

// A slim line above the navbar on every page while a sale is live. It scrolls
// away with the page; the navbar below stays sticky.
export default async function AnnouncementBar() {
  const banner = await getSaleBanner();
  if (!banner) return null;

  return (
    <AnnouncementDismiss>
      <p className="flex h-9 items-center justify-center gap-1.5 truncate px-10 text-xs text-gray-600 sm:text-sm">
        <span className="hidden font-medium tracking-wide uppercase sm:inline">
          {banner.eyebrow}
        </span>
        <span aria-hidden="true" className="hidden sm:inline">
          ·
        </span>
        <span>{banner.title}</span>
        <span aria-hidden="true">·</span>
        <Link
          href={banner.cta.href}
          className="group inline-flex items-center gap-1 font-semibold text-gray-950 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
        >
          {banner.cta.label}
          <ArrowRight
            aria-hidden="true"
            className="size-3.5 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5"
          />
        </Link>
      </p>
    </AnnouncementDismiss>
  );
}
