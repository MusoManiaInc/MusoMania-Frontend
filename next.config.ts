import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
    ignoreBuildErrors: true
  },
  eslint:{
      ignoreDuringBuilds:true
  },
  images: {
    domains: ["assets.aceternity.com"], // Add your allowed domains here
  },
};

export default nextConfig;
