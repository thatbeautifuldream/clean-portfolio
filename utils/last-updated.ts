import { execSync } from "node:child_process";

import { site } from "@/utils/site";

// Vercel exposes no commit-date env var, but it builds inside a shallow clone,
// so HEAD is readable here; falls back to build time off a git checkout
const head = (() => {
  try {
    return execSync('git log -1 --format="%cI %h"')
      .toString()
      .trim()
      .split(" ");
  } catch {
    return [new Date().toISOString(), "unknown"];
  }
})();

export const lastUpdated = new Date(head[0]).toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export const lastCommit = head[1];

export const lastCommitUrl = `${site.repo}/commit/${lastCommit}`;
