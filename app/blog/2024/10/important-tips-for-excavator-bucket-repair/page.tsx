import ImportantTipsForExcavatorBucketRepairClient from './ImportantTipsForExcavatorBucketRepairClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Tips Penting dalam Reparasi Bucket Ekskavator | Indo Teknik Pekanbaru',
    description:
        'Pelajari tips penting dalam reparasi bucket ekskavator untuk menghemat biaya operasional dan memperpanjang usia alat berat. Dapatkan solusi terbaik dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/10/important-tips-for-excavator-bucket-repair',
    },
    keywords: [
        'reparasi bucket ekskavator',
        'tips perbaikan alat berat',
        'hemat biaya operasional',
        'Indo Teknik Pekanbaru',
        'servis alat berat',
        'artikel otomotif',
        'solusi mesin industri',
    ],
};

export default async function ImportantTipsForExcavatorBucketRepairPage() {
    const currentPostTitle =
        'Tips Penting dalam Reparasi Bucket Ekskavator untuk Menghemat Biaya Operasional';
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
            'Pelajari tips penting dalam reparasi bucket ekskavator untuk menghemat biaya operasional dan memperpanjang usia alat berat.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <ImportantTipsForExcavatorBucketRepairClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}