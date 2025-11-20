import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  
  trailingSlash: true,
  images: {
        unoptimized: true,
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'servisdieselpekanbaru.wordpress.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dcbryptkx/image/upload/**',
      },
    ],
  },
};

export default nextConfig;
