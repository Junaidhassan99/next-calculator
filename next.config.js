/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/scientific',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
