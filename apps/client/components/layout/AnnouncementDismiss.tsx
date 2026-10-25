"use client";

import { type ReactNode, useState } from "react";
import { XClose } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

// Wraps the announcement so it can be closed for the rest of the visit.
// Nothing is stored: it comes back on the next full page load.
export default function AnnouncementDismiss({ children }: { children: ReactNode }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="relative border-b border-gray-200 bg-gray-50">
      {children}
      <Button
        aria-label="Dismiss announcement"
        color="tertiary"
        size="xs"
        iconLeading={XClose}
        onPress={() => setDismissed(true)}
        className="absolute top-1/2 right-2 -translate-y-1/2 sm:right-4"
      />
    </div>
  );
}
