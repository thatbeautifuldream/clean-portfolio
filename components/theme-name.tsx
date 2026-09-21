"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Flyouts, useFlyouts } from "@/components/flyouts";
import { FullSign } from "@/components/full-sign";
import { site } from "@/utils/site";

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

  return (
    <button
      type="button"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        push();
      }}
      aria-label={`${site.shortName} — toggle dark mode`}
      className="relative origin-left cursor-pointer text-left transition-[color,scale] duration-150 ease-out hover:text-muted active:scale-98 motion-reduce:transition-none"
    >
      <FullSign className="h-10 w-auto sm:h-12" />
      <span role="status" className="sr-only">
        {count > 0 && labelAt(count)}
      </span>
      <Flyouts
        flyouts={flyouts}
        setFlyouts={setFlyouts}
        className="bottom-full left-0 -mb-2 text-sm text-faint"
      />
    </button>
  );
}

export function ThemeShortcut() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "d" || !(event.metaKey || event.ctrlKey)) return;
      event.preventDefault();
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  return null;
}
