import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/pdf", destination: "/resume.pdf" }];
  },
  async headers() {
    return [{
      source: "/:path(pdf|resume.pdf)",
      headers: [{
        key: "Content-Disposition",
        value: 'attachment; filename="milind-mishra-resume.pdf"',
      }],
    }];
  },
  async redirects() {
    return [{ source: "/resume", destination: "/", permanent: true }];
  },
};

export default nextConfig;
