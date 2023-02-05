/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '127.0.0.1:8000',
        port: '',
        pathname: '/account123/**',
      },
    ],
  }
}

module.exports = nextConfig
