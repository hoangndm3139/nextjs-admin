import type { NextConfig } from 'next';

// Define the base Next.js configuration
const baseConfig: NextConfig = {
  transpilePackages: ['geist']
};

let configWithPlugins = baseConfig;

const nextConfig = configWithPlugins;
export default nextConfig;
