/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    //this is being use for the fullstack logo
    domains: ['scontent-atl3-2.xx.fbcdn.net', 'img.icons8.com'],
  },
}

module.exports = nextConfig
