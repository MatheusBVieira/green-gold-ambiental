/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
    TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    USER_ID: process.env.NEXT_PUBLIC_USER_ID,
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({nextConfig})
