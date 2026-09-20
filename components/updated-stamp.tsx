"use client";

import { useRef } from "react";

export function UpdatedStamp({ date, sha }: { date: string; sha: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const showingSha = useRef(false);

  const swap = () => {
    const el = ref.current;
    if (!el) return;

    const dur =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--text-swap-dur",
        ),
      ) || 150;

    showingSha.current = !showingSha.current;
    const next = showingSha.current ? `Commit ${sha}` : `Updated ${date}`;

    el.classList.add("is-exit");
    setTimeout(() => {
      el.textContent = next;
      el.classList.remove("is-exit");
      el.classList.add("is-enter-start");
      void el.offsetHeight; // force reflow so the next change transitions
      el.classList.remove("is-enter-start");
    }, dur);
  };

  return (
    <span className="block">
      <button
        ref={ref}
        type="button"
        onClick={swap}
        className="t-text-swap cursor-pointer text-faint hover:text-ink"
      >
        {`Updated ${date}`}
      </button>
    </span>
  );
}
