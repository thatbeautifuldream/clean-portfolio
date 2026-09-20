"use client";

import { useState } from "react";

type Flyout = { id: number; label: string; drift: string; rise: string };

export function useFlyouts(labels: readonly string[]) {
  const [flyouts, setFlyouts] = useState<Flyout[]>([]);
  const [count, setCount] = useState(0);

  const labelAt = (n: number) => labels[Math.min(n, labels.length) - 1];

  function push() {
    const next = count + 1;
    setCount(next);
    setFlyouts((current) => [
      ...current,
      {
        id: Date.now() + next,
        label: labelAt(next),
        // fan alternating sides and heights so a burst reads as separate labels
        drift: `${(next % 2 ? 1 : -1) * (1 + (next % 3) * 0.75)}rem`,
        rise: `-${1.5 + (next % 4) * 0.6}rem`,
      },
    ]);
  }

  return { flyouts, count, labelAt, push, setFlyouts };
}

export function Flyouts({
  flyouts,
  setFlyouts,
  className = "inset-x-0 bottom-full text-ink",
}: Pick<ReturnType<typeof useFlyouts>, "flyouts" | "setFlyouts"> & {
  className?: string;
}) {
  return flyouts.map((flyout) => (
    <span
      key={flyout.id}
      aria-hidden
      style={
        {
          "--drift": flyout.drift,
          "--rise": flyout.rise,
        } as React.CSSProperties
      }
      onAnimationEnd={() =>
        setFlyouts((current) => current.filter((f) => f.id !== flyout.id))
      }
      className={`animate-copied pointer-events-none absolute whitespace-nowrap ${className}`}
    >
      {flyout.label}
    </span>
  ));
}
