/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.remotePatterns",'images.unsplash.com', 'plus.unsplash.com', "unsplash.com", "portfolio-web-app-zeta.vercel.app", 'next-ecommerce-template-4.vercel.app'], // Add all necessary domains
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
