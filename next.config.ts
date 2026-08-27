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
  /* The site serves no third-party script and takes no payment, so these cost
     nothing and close the usual defaults: no MIME sniffing, no framing by
     another origin, no full URL leaked to an outbound link, and no access to
     camera, microphone or location. A content security policy is deliberately
     left out: it needs to be written against a real deployment, not guessed. */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
