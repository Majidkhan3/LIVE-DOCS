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
  // These settings are necessary for GitHub Pages deployment
  basePath: isProd ? "/LIVE-DOCS" : "",
  assetPrefix: isProd ? "/LIVE-DOCS/" : "",
  trailingSlash: true, // Ensures each page ends with a trailing slash, needed for static export
};

export default nextConfig;
