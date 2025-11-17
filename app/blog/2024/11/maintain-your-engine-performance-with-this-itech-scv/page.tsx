import MaintainYourEnginePerformanceWithThisItechSCVClient from './MaintainYourEnginePerformanceWithThisItechSCVClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Jaga Performa Mesinmu dengan SCV ITECH Ini! Suction Control Valve Itech 294200-4970 | Indo Teknik',
    description:
        'Switch Limiter Pipa Common Rail Itech 23810-30100 membuat sistem bahan bakar diesel lebih responsif. Temukan keunggulan, tips pemasangan, dan solusi terbaik dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/11/maintain-your-engine-performance-with-this-itech-scv',
    },
    keywords: [
        'Switch Limiter Pipa Common Rail Itech 23810-30100',
        'Sistem Bahan Bakar',
        'mesin diesel',
        'spare part diesel Pekanbaru',
        'tips sistem bahan bakar',
        'Indo Teknik Pekanbaru',
        'turbo upgrade',
        'artikel otomotif',
        'solusi mesin industri',
    ],
};

export default async function MaintainYourEnginePerformanceWithThisItechSCVPage() {
    const currentPostTitle =
        'Jaga Performa Mesinmu dengan SCV ITECH Ini! Suction Control Valve Itech 294200-4970';
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
            'Switch Limiter Pipa Common Rail Itech 23810-30100 membuat sistem bahan bakar diesel lebih responsif. Pelajari keunggulan, tips pemasangan, dan solusi terbaik untuk mesin diesel Anda.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <MaintainYourEnginePerformanceWithThisItechSCVClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}
