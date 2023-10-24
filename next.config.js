/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        domains: ['picsum.photos'],
        unoptimized: true,
    },
}

module.exports = nextConfig
