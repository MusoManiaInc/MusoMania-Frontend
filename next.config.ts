import type { NextConfig } from "next";

const UPLOADTHING_APP_ID = process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID || "";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "assets.aceternity.com",
      `${UPLOADTHING_APP_ID}.ufs.sh`,
      "utfs.io" // Added domain for utfs.io
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${UPLOADTHING_APP_ID}.ufs.sh`,
        pathname: "/f/*",
      },
    ],
  },
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  serverExternalPackages: ["@node-rs/argon2"],
};


export default nextConfig;
