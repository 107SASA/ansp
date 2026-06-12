/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'anspl.co.in',
      },
    ],
  },
}

module.exports = nextConfig
