/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

const nextConfig = withOptimizedImages({
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "./",
  images: {
    domains: ["avatars.githubusercontent.com", "github.com"],
  },
});

module.exports = nextConfig;
