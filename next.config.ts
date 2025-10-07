import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    // Ensures app is optimized for container environments
    optimizePackageImports: [
      "react",
      "react-dom",
      "framer-motion",
      "lucide-react",
    ],
  },
};

export default nextConfig;
