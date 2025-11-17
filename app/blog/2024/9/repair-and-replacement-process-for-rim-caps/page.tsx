import RepairAndReplacementProcessForRimCapsClient from './RepairAndReplacementProcessForRimCapsClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Proses Reparasi dan Penggantian Topi Velg di Indo Teknik',
    description:
        'Panduan lengkap proses reparasi dan penggantian topi velg di Indo Teknik Pekanbaru untuk hasil maksimal dan tampilan kendaraan lebih menarik.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/9/repair-and-replacement-process-for-rim-caps',
    },
    keywords: [
        'topi velg',
        'reparasi velg',
        'penggantian velg',
        'Indo Teknik Pekanbaru',
        'servis velg',
        'artikel otomotif',
        'tips perawatan kendaraan',
        'solusi velg mobil',
    ],
};

export default function RepairAndReplacementProcessForRimCapsPage() {
    const currentPostTitle =
        'Proses Reparasi dan Penggantian Topi Velg di Indo Teknik';
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
            'Panduan lengkap proses reparasi dan penggantian topi velg di Indo Teknik Pekanbaru untuk hasil maksimal dan tampilan kendaraan lebih menarik.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <RepairAndReplacementProcessForRimCapsClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}