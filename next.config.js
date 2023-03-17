/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    //this is being use for the fullstack logo, import the pages for images
    domains: [
      "scontent-atl3-2.xx.fbcdn.net",
      "img.icons8.com",
      "cdn2.iconfinder.com",
      "cdn.iconscout.com",
      "cdn.sanity.io",
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
