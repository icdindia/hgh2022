const path = require('path')
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = ({
  // pwa: {
  //   dest: "public",
  //   runtimeCaching,
  //   buildExcludes: [/middleware-manifest\.json$/]
  // },

  experimental: {
    images: {
      unoptimized: true,
    },
  },


  exportPathMap: async function() {
    return {
      "/": { page: "/" },
    };
  },


  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  optimizeFonts: true,
  reactStrictMode: true,



  async headers() {
    return [
      {
        source: '/_next/image(.*)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=365d, must-revalidate',
          }
        ],
      },
    ]
  }, 
});