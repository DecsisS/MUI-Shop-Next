import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      '@mui/material',
      '@emotion/styled',
      '@emotion/react',
    ]
  }
};

export default nextConfig;
