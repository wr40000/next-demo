/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {    
    // domains: ['th.bing.com', 'pic1.zhimg.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
      },
      {
        protocol: "https",
        hostname: "pic1.zhimg.com",
      },
    ],
  },
};

export default nextConfig;
