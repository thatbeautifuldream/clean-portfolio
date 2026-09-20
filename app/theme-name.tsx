"use client";

import { Flyouts, useFlyouts } from "./flyouts";
import { site } from "./site";

const labels = [
  "You found an easter egg",
  "Lights off, lights on",
  "Still just a light switch",
  "cmd + D does this too",
];

export function ThemeName() {
  const { flyouts, count, labelAt, push, setFlyouts } = useFlyouts(labels);

  function toggle() {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    push();
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative cursor-pointer text-left"
    >
      {site.shortName}
      <span role="status" className="sr-only">
        {count > 0 && labelAt(count)}
      </span>
      <Flyouts
        flyouts={flyouts}
        setFlyouts={setFlyouts}
        className="bottom-full left-0 -mb-2 font-mono text-xs tracking-wide text-faint uppercase"
      />
    </button>
  );
}
