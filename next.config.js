const withPlugins = require(`next-compose-plugins`);
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { i18n } = require('./next-i18next.config')


const __DEV__ = process.env.NODE_ENV === "development";

const customWithPWA = [
  withPWA,
  {
    pwa: {
      disable: __DEV__,
      dest: 'public',
      runtimeCaching,
      // quick fix bad-precaching-response #288
      buildExcludes: [/middleware-manifest.json$/]
      },
  },
];

const IMAGE_HOST_DOMAINS = [
  "picsum.photos",
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: IMAGE_HOST_DOMAINS,
  },
  i18n,
};

module.exports = withPlugins([customWithPWA], nextConfig);
