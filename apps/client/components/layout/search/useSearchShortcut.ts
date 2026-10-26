"use client";

import { useEffect } from "react";

const isTypingTarget = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

// Opens search with ⌘K / Ctrl+K from anywhere, or "/" when not typing in a field.
export function useSearchShortcut(open: () => void) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const commandK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      const slash = event.key === "/" && !event.metaKey && !event.ctrlKey && !isTypingTarget(event.target);
      if (commandK || slash) {
        event.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);
}
