"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "@untitledui/icons";
import { cx } from "@/utils/cx";

// Appears once the visitor is about two screens down a long list.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 2);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      // Hidden from keyboard and screen readers until it's shown.
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cx(
        "fixed right-5 bottom-5 z-40 grid size-12 place-items-center rounded-full bg-gray-950 text-white shadow-lg hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 sm:right-8 sm:bottom-8 motion-safe:transition",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp aria-hidden="true" className="size-5" />
    </button>
  );
}
