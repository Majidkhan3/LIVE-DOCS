/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
  basePath: isProd ? "/LIVE-DOCS" : "",
  assetPrefix: isProd ? "/LIVE-DOCS/" : "",
  trailingSlash: true, // Ensures compatibility with GitHub Pages
};

export default nextConfig;
