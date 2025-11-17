import FuelTankDismantlingAndCleaningProcessClient from './FuelTankDismantlingAndCleaningProcessClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Proses Pembongkaran dan Pembersihan Tangki Bahan Bakar | Indo Teknik Pekanbaru',
    description:
        'Pelajari proses pembongkaran dan pembersihan tangki bahan bakar di Indo Teknik Pekanbaru. Dapatkan tips dan langkah-langkah terbaik untuk perawatan tangki bahan bakar.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/11/fuel-tank-dismantling-and-cleaning-process',
    },
    keywords: [
        'pembersihan tangki bahan bakar',
        'pembongkaran tangki',
        'tips perawatan mesin',
        'Indo Teknik Pekanbaru',
        'servis mesin industri',
        'artikel otomotif',
        'solusi mesin industri',
    ],
};

export default async function FuelTankDismantlingAndCleaningProcessPage() {
    const currentPostTitle =
        'Proses Pembongkaran dan Pembersihan Tangki Bahan Bakar di Indo Teknik';
    // Find the current post in blogPosts using the title
    const currentPost = blogPosts.find(
        (post) => post.title === currentPostTitle
    );

    const publicationDate = currentPost
        ? new Date(currentPost.date).toLocaleDateString()
        : 'Unknown Date';

    const latestPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: currentPostTitle,
        description:
            'Pelajari proses pembongkaran dan pembersihan tangki bahan bakar di Indo Teknik Pekanbaru.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <FuelTankDismantlingAndCleaningProcessClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}