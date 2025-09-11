import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Using default output mode for Netlify with server components
  images: {
    unoptimized: true // let's not use netlify's optimized images (they use edge functions)
  }
};

export default nextConfig;
