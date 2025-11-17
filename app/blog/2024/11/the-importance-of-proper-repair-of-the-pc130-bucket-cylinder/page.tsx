import TheImportanceOfProperRepairOfThePC130BucketCylinderClient from './TheImportanceOfProperRepairOfThePC130BucketCylinderClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Pentingnya Perbaikan Tepat pada Silinder Bucket PC-130 | Indo Teknik Pekanbaru',
    description:
        'Pelajari pentingnya perbaikan yang tepat pada silinder bucket PC-130 untuk menjaga kinerja alat berat tetap optimal. Dapatkan tips dan solusi terbaik dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/11/the-importance-of-proper-repair-of-the-pc130-bucket-cylinder',
    },
    keywords: [
        'perbaikan silinder bucket',
        'PC-130',
        'alat berat',
        'tips perawatan alat berat',
        'Indo Teknik Pekanbaru',
        'servis alat berat',
        'artikel otomotif',
        'solusi mesin industri',
    ],
};

export default async function TheImportanceOfProperRepairOfThePC130BucketCylinderPage() {
    const currentPostTitle =
        'Pentingnya Perbaikan Tepat pada Silinder Bucket PC-130 untuk Kinerja Alat Berat yang Optimal';
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
            'Pelajari pentingnya perbaikan yang tepat pada silinder bucket PC-130 untuk menjaga kinerja alat berat tetap optimal.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <TheImportanceOfProperRepairOfThePC130BucketCylinderClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}