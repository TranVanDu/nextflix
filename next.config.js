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
  }
}

module.exports = nextConfig
