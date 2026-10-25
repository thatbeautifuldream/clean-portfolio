"use client";

import { useEffect } from "react";

export function ThemeShortcut() {
  useEffect(() => {
    const root = document.documentElement;

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        !(event.metaKey || event.ctrlKey) ||
        event.key.toLowerCase() !== "d" ||
        event.altKey ||
        event.shiftKey ||
        event.isComposing ||
        (event.target instanceof Element &&
          event.target.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])"))
      ) return;

      event.preventDefault();
      if (event.repeat) return;

      const dark = root.classList.toggle("dark");
      try {
        localStorage.setItem("theme", dark ? "dark" : "light");
      } catch {
        // The shortcut still works when browser storage is unavailable.
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return null;
}
