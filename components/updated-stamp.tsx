"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

export function UpdatedStamp({
  date,
  sha,
  href,
}: {
  date: string;
  sha: string;
  href: string;
}) {
  const [open, setOpen] = useState(false);
  const [linkWidth, setLinkWidth] = useState(0);
  const textRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (linkRef.current) setLinkWidth(linkRef.current.offsetWidth);
  }, []);

  // the text swaps first, then the new label slides left as the link widens in
  const swap = () => {
    const el = textRef.current;
    if (!el) return;

    const dur =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--text-swap-dur",
        ),
      ) || 150;

    el.classList.add("is-exit");
    setTimeout(() => {
      flushSync(() => setOpen((value) => !value));
      el.classList.remove("is-exit");
      el.classList.add("is-enter-start");
      void el.offsetHeight; // force reflow so the next change transitions
      el.classList.remove("is-enter-start");
    }, dur);
  };

  return (
    <span className="flex items-baseline sm:justify-end">
      <button
        ref={textRef}
        type="button"
        onClick={swap}
        aria-expanded={open}
        className="t-text-swap cursor-pointer whitespace-nowrap text-faint hover:text-ink"
      >
        {open ? `Commit ${sha}` : `Updated ${date}`}
      </button>
      <span
        className="t-resize inline-block overflow-hidden"
        style={{ width: open ? linkWidth : 0 }}
      >
        <a
          ref={linkRef}
          href={href}
          target="_blank"
          rel="noreferrer"
          tabIndex={open ? undefined : -1}
          aria-hidden={!open}
          className="inline-block pl-2 whitespace-nowrap text-faint underline decoration-faint/25 underline-offset-[3px] hover:text-ink hover:decoration-ink"
        >
          GitHub ↗
        </a>
      </span>
    </span>
  );
}
