import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "adncurso.com",
      },
    ],
  },
};

export default nextConfig;
