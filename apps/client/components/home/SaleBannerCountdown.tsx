"use client";

import { useSyncExternalStore } from "react";
import { Clock } from "@untitledui/icons";

type SaleBannerCountdownProps = {
  endsAt: string; // ISO date
  dateLabel: string; // server-formatted end date, e.g. "30 Nov"
  className?: string;
};

const TICK_MS = 30_000;
const COUNTDOWN_WINDOW_MS = 72 * 60 * 60 * 1000; // only count down in the last 3 days

// The current time, rounded to the tick so the snapshot stays stable between ticks.
const subscribe = (onTick: () => void) => {
  const id = setInterval(onTick, TICK_MS);
  return () => clearInterval(id);
};
const getNow = () => Math.floor(Date.now() / TICK_MS) * TICK_MS;
// On the server (and the cached page) there's no "now": show the plain date.
const getServerNow = () => null;

const formatRemaining = (ms: number) => {
  const totalMinutes = Math.floor(ms / 60_000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes / 60) % 24);
  const minutes = String(totalMinutes % 60).padStart(2, "0");

  if (totalMinutes < 1) return "under a minute";
  if (days > 0) return `${days}d ${String(hours).padStart(2, "0")}h ${minutes}m`;
  return `${hours}h ${minutes}m`;
};

export default function SaleBannerCountdown({
  endsAt,
  dateLabel,
  className,
}: SaleBannerCountdownProps) {
  const now = useSyncExternalStore(subscribe, getNow, getServerNow);
  const remaining = now === null ? null : new Date(endsAt).getTime() - now;

  // The cached banner can outlive the sale by a little while.
  if (remaining !== null && remaining <= 0) {
    return <p className={className}>Sale ended</p>;
  }

  if (remaining !== null && remaining <= COUNTDOWN_WINDOW_MS) {
    return (
      <p className={`inline-flex items-center gap-1.5 font-medium ${className ?? ""}`}>
        <Clock aria-hidden="true" className="size-4" />
        Ends in <time dateTime={endsAt}>{formatRemaining(remaining)}</time>
      </p>
    );
  }

  return (
    <p className={className}>
      Ends <time dateTime={endsAt}>{dateLabel}</time>
    </p>
  );
}
