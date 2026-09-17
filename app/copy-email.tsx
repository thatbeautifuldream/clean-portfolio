"use client";

import { useState } from "react";
import { site } from "./site";

export function CopyEmail() {
  // the timestamp doubles as the animation key, so a repeat click replays it
  const [copiedAt, setCopiedAt] = useState(0);

  return (
    <button
      type="button"
      className="relative cursor-pointer text-faint hover:text-ink"
      onClick={() => {
        navigator.clipboard.writeText(site.email);
        setCopiedAt(Date.now());
      }}
    >
      {site.email}
      {copiedAt > 0 && (
        <span
          key={copiedAt}
          role="status"
          className="animate-copied pointer-events-none absolute inset-x-0 bottom-full text-ink"
        >
          Copied!
        </span>
      )}
    </button>
  );
}
