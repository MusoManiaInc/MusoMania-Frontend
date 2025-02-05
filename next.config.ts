import type { NextConfig } from "next";
import dynamic from "next/dynamic";

const nextConfig: NextConfig = {
  typescript:{
    ignoreBuildErrors: true
  },
  eslint:{
      ignoreDuringBuilds:true
  },
  images: {
    domains: ["assets.aceternity.com"], 
  },
  experimental:{
  staleTimes:{
        dynamic:30
      }
  },
  serverExternalPackages:["@node-rs/argon2"]
};

export default nextConfig;
