import ItechRetainingNutTheKeyClient from './ItechRetainingNutTheKeyClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Retaining Nut ITech: Kunci Performa Maksimal Injector Triton',
    description:
        'Temukan bagaimana Retaining Nut ITech dapat menjadi kunci performa maksimal untuk injector Mitsubishi Triton Anda. Tips, solusi, dan rekomendasi dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/8/itech-retaining-nut-the-key',
    },
    keywords: [
        'Retaining Nut ITech',
        'Injector Triton',
        'Mitsubishi Triton 2500cc',
        'performa mesin',
        'Indo Teknik Pekanbaru',
        'servis Triton',
        'artikel otomotif',
        'tips perawatan mesin',
        'solusi mesin industri',
    ],
};

export default function ItechRetainingNutTheKeyPage() {
    const currentPostTitle =
        'Retaining Nut ITech: Kunci Performa Maksimal Injector Triton';
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
            'Temukan bagaimana Retaining Nut ITech dapat menjadi kunci performa maksimal untuk injector Mitsubishi Triton Anda. Tips, solusi, dan rekomendasi dari Indo Teknik Pekanbaru.',
        datePublished: currentPost?.date
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost?.image || '',
    };

    return (
        <ItechRetainingNutTheKeyClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}