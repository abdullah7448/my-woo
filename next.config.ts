// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true, // ensures /app directory features are enabled
//   },
//   // Important: Disable static export so dynamic routes (like /search) work
//   output: "standalone", // ❌ NOT 'export'
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,

//   // This ensures that Vercel builds a dynamic app, not a static export.
//   output: "standalone",

//   // Optional: Add this if you use environment variables in build
//   env: {
//     NEXT_PUBLIC_WP_API_URL: process.env.NEXT_PUBLIC_WP_API_URL,
//     WOO_CONSUMER_KEY: process.env.WOO_CONSUMER_KEY,
//     WOO_CONSUMER_SECRET: process.env.WOO_CONSUMER_SECRET,
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  output: "standalone", // 👈 helps with Vercel dynamic routes
};

export default nextConfig;


