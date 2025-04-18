import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['bcryptjs']
  },
  // Ensure environment variables are available during build
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  // Increase serverless function timeout
  serverRuntimeConfig: {
    maxDuration: 60, // 60 seconds
  },
};

export default nextConfig;
