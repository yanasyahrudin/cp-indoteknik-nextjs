import blogPosts from '@/app/data/blogPostsData.js';
import TurboChargerRHV41515A170ItechClient from './TurboChargerRHV41515A170ItechClient';
export const revalidate = 60;
export const metadata = {
    title: 'Turbo Charger RHV4 1515A170 ITech: Bikin Pajero Dakar Makin Ngebut dan Tangguh! | Indo Teknik',
    description:
        'Pelajari keunggulan Turbo Charger RHV4 1515A170 ITech untuk Pajero Dakar. Solusi performa, harga, dan tips dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/12/turbo-charger-rhv4-1515A170-itech',
    },
    keywords: [
        'Turbo Charger Pajero Dakar',
        'RHV4 1515A170 ITech',
        'spare part turbo',
        'Indo Teknik Pekanbaru',
        'tips otomotif',
        'solusi mesin diesel',
    ],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Turbo Charger RHV4 1515A170 ITech: Bikin Pajero Dakar Makin Ngebut dan Tangguh!",
    "datePublished": "2024-12-01",
    "author": {
        "@type": "Organization",
        "name": "Indo Teknik Pekanbaru"
    }
};

export default function TurboChargerRHV41515A170ItechPage() {
    const currentPostTitle =
        'Turbo Charger RHV4 1515A170 ITech: Bikin Pajero Dakar Makin Ngebut dan Tangguh!';
    const currentPost = blogPosts.find(
        (post) => post.title === currentPostTitle
    );
    const publicationDate = currentPost
        ? new Date(currentPost.date).toLocaleDateString()
        : 'Unknown Date';

    const latestPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <TurboChargerRHV41515A170ItechClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            currentPostTitle={currentPostTitle}
            jsonLd={jsonLd}
        />
    );
}