const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Portafolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portafolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;