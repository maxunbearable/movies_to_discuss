// next.config.js
module.exports = {
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/contact', // Redirect /about to /contact
                permanent: true, // Set this to true for permanent redirects (HTTP 301)
            },
        ];
    },
};