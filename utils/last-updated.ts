import { execSync } from "node:child_process";

// Vercel exposes no commit-date env var, but it builds inside a shallow clone,
// so HEAD is readable here; falls back to build time off a git checkout
const lastCommit = () => {
  try {
    return new Date(execSync("git log -1 --format=%cI").toString().trim());
  } catch {
    return new Date();
  }
};

export const lastUpdated = lastCommit().toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
