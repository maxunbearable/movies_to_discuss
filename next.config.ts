// next.config.ts
import { Redirect } from 'next';

module.exports = {
    async redirects() {
        const redirects: Redirect[] = [
            {
                source: '/first-post',
                destination: '/contact', // Redirect /about to /contact
                permanent: true, // Set this to true for permanent redirects (HTTP 301)
            },
        ];

        return redirects;
    },
};
