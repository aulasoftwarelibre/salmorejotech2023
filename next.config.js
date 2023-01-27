/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "pbs.twimg.com",
      "salmorejo.tech"
    ]
  }
}

module.exports = nextConfig
