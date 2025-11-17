import TheFuelSystemIsMoreResponseClient from './TheFuelSystemIsMoreResponseClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Sistem Bahan Bakar Makin Cepat Tanggap Dengan Switch Limiter Pipa Common Rail Itech 23810-30100 | Indo Teknik',
    description:
        'Switch Limiter Pipa Common Rail Itech 23810-30100 membuat sistem bahan bakar diesel lebih responsif. Temukan keunggulan, tips pemasangan, dan solusi terbaik dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/11/the-fuel-system-is-more-response',
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

export default async function TheFuelSystemIsMoreResponsePage() {
    const currentPostTitle =
        'Sistem Bahan Bakar Makin Cepat Tanggap Dengan Switch Limiter Pipa Common Rail Itech!';
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
        <TheFuelSystemIsMoreResponseClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}