/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {    
    domains: ['th.bing.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
