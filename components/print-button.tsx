"use client";

import { useSyncExternalStore } from "react";

const queries = ["(min-width: 40rem)", "(hover: hover) and (pointer: fine)"];

function subscribe(onChange: () => void) {
  const media = queries.map((query) => window.matchMedia(query));
  for (const query of media) query.addEventListener("change", onChange);
  return () => {
    for (const query of media) query.removeEventListener("change", onChange);
  };
}

function label() {
  const desktop = queries.every((query) => window.matchMedia(query).matches);
  if (!desktop) return "Print";
  const nav = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };
  const platform = nav.userAgentData?.platform ?? navigator.platform;
  return /mac/i.test(platform) ? "⌘P" : "Ctrl+P";
}

export function PrintButton({ className }: { className?: string }) {
  const text = useSyncExternalStore(subscribe, label, () => "Print");

  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label="Print"
      suppressHydrationWarning
      className={className}
    >
      {text}
    </button>
  );
}
