/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //SVGR
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  staticPageGenerationTimeout: 300,
};

module.exports = nextConfig;
