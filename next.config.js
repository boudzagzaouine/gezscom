const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const __DEV__ = process.env.NODE_ENV === "development";

module.exports = withPWA({
  pwa: {
    disable: __DEV__,
    dest: 'public',
    runtimeCaching,
    // quick fix bad-precaching-response #288
    buildExcludes: [/middleware-manifest.json$/]
  },
})
