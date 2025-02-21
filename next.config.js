/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables `next export` (only for static sites!)
  
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during build
  },

  images: { 
    unoptimized: true, // Required for `next export`, disables Next.js Image Optimization
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'i.pinimg.com',
      'i.ytimg.com',
      'student-datasets-bucket.s3.ap-south-1.amazonaws.com',
      'encrypted-tbn0.gstatic.com'
    ],
  },

  // Optional: Enable React Strict Mode for better debugging
  reactStrictMode: true,
};

module.exports = nextConfig;