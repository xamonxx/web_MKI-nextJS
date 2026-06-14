import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Compress output HTML/JS/CSS
  compress: true,
  images: {
    // Static export requires unoptimized: true for next/image
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: [
    "192.168.18.12",
    "100.105.166.15",
    "localhost",
    "127.0.0.1"
  ],
  // Tree-shake icon/animation libraries — eliminates unused exports
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
  },
};

export default nextConfig;
