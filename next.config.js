const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Portafolio' : '',
  assetPrefix: isProd ? '/Portafolio/' : '',
  images: {
    domains: ['localhost', 'portafolio-chi-ruddy.vercel.app'],
    unoptimized: true,
  }
};

module.exports = nextConfig;
