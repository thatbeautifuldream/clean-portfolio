"use client";

import { Flyouts, useFlyouts } from "./flyouts";
import { site } from "./site";

// escalates with the click count; the last one holds for anyone still going
const labels = [
  "Copied!",
  "Copied again",
  "Still copied",
  "Yes, same address",
  "It's the same email",
];

export function CopyEmail() {
  const { flyouts, count, labelAt, push, setFlyouts } = useFlyouts(labels);

  function copy() {
    navigator.clipboard.writeText(site.email);
    push();
  }

  return (
    <button
      type="button"
      className="relative cursor-pointer text-faint hover:text-ink"
      onClick={copy}
    >
      {site.email}
      <span role="status" className="sr-only">
        {count > 0 && `${labelAt(count)} ${site.email}`}
      </span>
      <Flyouts flyouts={flyouts} setFlyouts={setFlyouts} />
    </button>
  );
}
