const nextConfig = {
  output: 'export',  // Habilitar exportación estática para GitHub Pages
  images: {
    domains: ['localhost', 'portafolio-chi-ruddy.vercel.app'],
    unoptimized: true, // Necesario para exportación estática
  },
  // Configuración para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/Portafolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portafolio/' : '',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
