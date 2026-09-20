"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Flyouts, useFlyouts } from "./flyouts";
import { site } from "./site";

const labels = [
  "You found an easter egg",
  "Lights off, lights on",
  "Still just a light switch",
];

// the shortcut hint only lands on a device that has the keys to press
function labelsForDevice() {
  if (
    typeof window === "undefined" ||
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return labels;
  }

  const key = navigator.userAgent.includes("Mac") ? "cmd" : "ctrl";
  return [...labels, `${key} + D does this too`];
}

export function ThemeName() {
  const { resolvedTheme, setTheme } = useTheme();
  const { flyouts, count, labelAt, push, setFlyouts } =
    useFlyouts(labelsForDevice());

  function toggle() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "d" || !(event.metaKey || event.ctrlKey)) return;
      event.preventDefault();
      toggle();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <button
      type="button"
      onClick={() => {
        toggle();
        push();
      }}
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
