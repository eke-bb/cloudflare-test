/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // see https://github.com/vercel/next.js/pull/22867
    // this is required to be able to include the `<root>/localization.ts` file,
    // which is outside of the `site/nextjs` directory
    externalDir: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
