/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "./",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
