/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
    metadata: {
        metadataBase: 'https://www.rewritethenarrative.com',
    },
};

module.exports = nextConfig;
