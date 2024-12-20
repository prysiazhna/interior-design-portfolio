const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: true,
        },
    },
    experimental: {
        // appDir: false,
    },
};

module.exports = nextConfig;