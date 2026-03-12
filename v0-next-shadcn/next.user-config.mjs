/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/site',
  assetPrefix: '/site/',
};

export default nextConfig;
