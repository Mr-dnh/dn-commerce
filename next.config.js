const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

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
module.exports = withNextIntl(nextConfig);