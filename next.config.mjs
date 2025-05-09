/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minotar.net'
      },
      {
        protocol: 'https',
        hostname: 'api.creepernation.net'
      }
    ]
  }
};

export default nextConfig;
