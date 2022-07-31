const prodSubfolder = "/Fitness-Accountability";
const isProd = process.env.NODE_ENV === "production";

const basePath = isProd ? prodSubfolder : undefined;
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "./",
  // basePath,
};

module.exports = nextConfig;
