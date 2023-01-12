/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error']
    }
  },
  images: {
    domains: ['image.tmdb.org']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/network/213',
        permanent: false
      },
      {
        source: '/network',
        destination: '/network/213',
        permanent: false
      },
      {
        source: '/movie',
        destination: '/movie/92749',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
