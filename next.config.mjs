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
  trailingSlash: true, // Required for GitHub Pages
  output: "standalone", // This enables static export for the app
};

export default nextConfig;
