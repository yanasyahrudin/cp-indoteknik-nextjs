import blogPosts from '@/app/data/blogPostsData';
import UnleashMaximumPowerBoostYourCat320dPerformanceClient from './UnleashMaximumPowerBoostYourCat320dPerformanceClient';
export const revalidate = 60;
export const metadata = {
    title: 'Unleash Maximum Power: Boost Your CAT 320D Performance | Indo Teknik',
    description:
        'Temukan cara meningkatkan performa mesin CAT 320D Anda dengan tips perawatan, solusi spare part, dan produk unggulan dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/12/unleash-maximum-power-boost-your-cat-320d-performance',
    },
    keywords: [
        'CAT 320D',
        'boost performance',
        'spare part alat berat',
        'perawatan mesin CAT',
        'Indo Teknik Pekanbaru',
        'tips mesin diesel',
        'common rail CAT',
        'artikel teknik',
        'solusi mesin industri',
    ],
};

export default function UnleashMaximumPowerBoostYourCat320dPerformancePage() {
    const currentPostTitle =
        'Tingkatkan Performa CAT 320D Anda: Dapatkan Tenaga Maksimal dengan Injector Hebat Ini!';
    // Find the current post in blogPosts using the title
    const currentPost = blogPosts.find(
        (post) => post.title === currentPostTitle
    );

    // Extract the publication date from the current post
    const publicationDate = currentPost
        ? new Date(currentPost.date).toLocaleDateString()
        : 'Unknown Date';

    // Sort blog posts by date (latest first)
    const latestPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: currentPostTitle,
        datePublished: currentPost ? currentPost.date : '',
        image: currentPost ? currentPost.image : '',
    };
    return (
        <UnleashMaximumPowerBoostYourCat320dPerformanceClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            currentPostTitle={currentPostTitle}
            jsonLd={jsonLd}
        />
    );
}
