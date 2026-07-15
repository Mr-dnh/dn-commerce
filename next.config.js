/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

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
const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');
module.exports = withNextIntl(nextConfig);