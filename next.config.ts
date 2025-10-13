import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // enables .next/standalone for tiny runtime images
  reactStrictMode: true,
};

export default nextConfig;
