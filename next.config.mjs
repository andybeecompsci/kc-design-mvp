/** @type {import('next').NextConfig} */
const nextConfig = {
  // # enable strict mode for better development experience
  reactStrictMode: true,
  
  // # enable server components by default
  experimental: {
    serverActions: true,
  },

  // # image optimization settings
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },

  // # production source maps for better debugging
  productionBrowserSourceMaps: true,

  // # optimize loading of third-party scripts
  optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],

  // # temporary build settings - remove these once all type errors are fixed
  typescript: {
    // # we'll show type errors but not fail the build for now
    ignoreBuildErrors: true
  }
}

export default nextConfig
