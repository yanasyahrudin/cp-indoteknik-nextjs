import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      domains: ['servisdieselpekanbaru.wordpress.com'],
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dcbryptkx/image/upload/**',
      },
    ],
  },
};

export default nextConfig;
