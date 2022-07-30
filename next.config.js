/** @type {import('next').NextConfig} */

const prodSubfolder = "/Fitness-Accountability";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? prodSubfolder : "/",
};

module.exports = nextConfig;
