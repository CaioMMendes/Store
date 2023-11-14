/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.discordapp.com"]
    },
    trailingSlash: true,
    experimental: {
        serverActions: true
    },
    // reactStrictMode: true,
}

module.exports = nextConfig
