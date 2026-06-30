/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.asos-media.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    experimental: {
        scrollRestoration: false,
    },
};

module.exports = nextConfig;