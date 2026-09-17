"use client";

import { useState } from "react";
import { site } from "./site";

// escalates with the click count; the last one holds for anyone still going
const labels = [
  "Copied!",
  "Copied again",
  "Still copied",
  "Yes, same address",
  "It's the same email",
];

type Flyout = { id: number; label: string; drift: string; rise: string };

export function CopyEmail() {
  const [flyouts, setFlyouts] = useState<Flyout[]>([]);
  const [count, setCount] = useState(0);

  function copy() {
    navigator.clipboard.writeText(site.email);
    const next = count + 1;
    setCount(next);
    setFlyouts((current) => [
      ...current,
      {
        id: Date.now() + next,
        label: labels[Math.min(next, labels.length) - 1],
        // fan alternating sides and heights so a burst reads as separate labels
        drift: `${(next % 2 ? 1 : -1) * (1 + (next % 3) * 0.75)}rem`,
        rise: `-${1.5 + (next % 4) * 0.6}rem`,
      },
    ]);
  }

  return (
    <button
      type="button"
      className="relative cursor-pointer text-faint hover:text-ink"
      onClick={copy}
    >
      {site.email}
      <span role="status" className="sr-only">
        {count > 0 && `${labels[Math.min(count, labels.length) - 1]} ${site.email}`}
      </span>
      {flyouts.map((flyout) => (
        <span
          key={flyout.id}
          aria-hidden
          style={
            { "--drift": flyout.drift, "--rise": flyout.rise } as React.CSSProperties
          }
          onAnimationEnd={() =>
            setFlyouts((current) => current.filter((f) => f.id !== flyout.id))
          }
          className="animate-copied pointer-events-none absolute inset-x-0 bottom-full whitespace-nowrap text-ink"
        >
          {flyout.label}
        </span>
      ))}
    </button>
  );
}
