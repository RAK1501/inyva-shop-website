import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    /* 3000 matches the hero master, so a 2x 1440 screen is served the file's
       own pixels rather than being resampled up to the next stop. */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3000, 3840],
    /* The hero is the only image big enough for the default q75 re-encode to
       show; everything else stays on the default. */
    qualities: [75, 90],
  },
  devIndicators: false,
};

export default nextConfig;
