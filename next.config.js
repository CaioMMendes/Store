/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.discordapp.com", 'drive.google.com']
    },
    trailingSlash: true,
    experimental: {
        serverActions: true
    },
    // reactStrictMode: true,
}

module.exports = nextConfig
