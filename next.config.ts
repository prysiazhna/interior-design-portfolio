const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: true, // For debugging
        },
    },
    experimental: {
        appDir: false, // Explicitly disable the App Router
    },
};

module.exports = nextConfig;