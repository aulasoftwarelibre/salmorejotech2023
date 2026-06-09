/** @type {import('next').NextConfig} */
const basePath = '/2023'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    domains: [
      "pbs.twimg.com",
      "salmorejo.tech"
    ]
  }
}

module.exports = nextConfig
