// next.config.js
module.exports = {
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/first-post',
                permanent: true, // Set this to true for permanent redirects (HTTP 301)
            },
        ];
    },
};