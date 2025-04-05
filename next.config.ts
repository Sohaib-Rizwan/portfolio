import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // Allow all paths from picsum.photos
      },
    ],
  },
  // Optional: Avoid build errors from ESLint during deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
