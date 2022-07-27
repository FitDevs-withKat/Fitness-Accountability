/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "./",
  experimental: { images: { allowFutureImage: true } },
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
