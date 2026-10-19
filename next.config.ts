import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // cacheComponents (+ partialPrefetching, which depends on it) forces every
  // component to be either fully static or explicitly wrapped in Suspense —
  // even trivial per-request values like `new Date()` in the footer break the
  // build under it. Turned off until the app actually needs that model.
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
