import MakeYourHinoStrongerWithThisSparePartClient from './MakeYourHinoStrongerWithThisSparePartClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Tenaga Hino Harus Lebih Kuat dengan Sparepart Ini!',
    description:
        'Temukan sparepart terbaik untuk meningkatkan tenaga Hino Anda. Tips, solusi, dan rekomendasi dari Indo Teknik Pekanbaru untuk performa maksimal.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/8/make-your-hino-stronger-with-this-spare-part',
    },
    keywords: [
        'Hino',
        'sparepart Hino',
        'tenaga mesin',
        'Indo Teknik Pekanbaru',
        'servis truk',
        'artikel otomotif',
        'tips perawatan mesin',
        'solusi mesin industri',
    ],
};

export default function MakeYourHinoStrongerWithThisSparePartPage() {
    const currentPostTitle =
        'Tenaga Hino Harus Lebih Kuat dengan Sparepart Ini!';
    const currentPost = blogPosts.find(
        (post) => post.title === currentPostTitle
    );

    const publicationDate = currentPost?.date
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
            'Temukan sparepart terbaik untuk meningkatkan tenaga Hino Anda. Tips, solusi, dan rekomendasi dari Indo Teknik Pekanbaru untuk performa maksimal.',
        datePublished: currentPost?.date
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost?.image || '',
    };

    return (
        <MakeYourHinoStrongerWithThisSparePartClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}