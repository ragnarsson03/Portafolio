const nextConfig = {
  // Eliminar output: 'export' para despliegues en Vercel
  // Eliminar basePath y assetPrefix
  images: {
    domains: ['localhost', 'portafolio-chi-ruddy.vercel.app'],
  },
};

export default nextConfig;