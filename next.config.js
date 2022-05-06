const withPlugins = require(`next-compose-plugins`);
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const { i18n } = require("./next-i18next.config");

const __DEV__ = process.env.NODE_ENV === "development";

const customWithPWA = [
  withPWA,
  {
    pwa: {
      disable: __DEV__,
      dest: "public",
      runtimeCaching,
    },
  },
];

const IMAGE_HOST_DOMAINS = ["picsum.photos", "i.pravatar.cc"];

const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  images: {
    domains: IMAGE_HOST_DOMAINS,
  },
  async rewrites() {
    return [
      {
        source: "/main/api/:path*",
        destination: `${process.env.API_URL}/:path*`,
      },
    ];
  },
  i18n,
};

module.exports = withPlugins([customWithPWA], nextConfig);
