/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// sass config

const path = require('path')

module.exports = {
  sassOptions : {
    indludePaths : [path.join(__dirname, 'styles')],
  },
}

// sass config end