import blogPosts from '@/app/data/blogPostsData';
import WantYourDieselEngineToGetMorePowerfulClient from './WantYourDieselEngineToGetMorePowerfulClient';
export const revalidate = 60;
export const metadata = {
    title: 'Tingkatkan Performa CAT 320D Anda: Dapatkan Tenaga Maksimal dengan Injector Hebat Ini! | Indo Teknik',
    description:
        'Temukan cara meningkatkan performa mesin CAT 320D Anda dengan tips perawatan, solusi spare part, dan produk unggulan dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/12/want-your-diesel-engine-to-get-more-powerful',
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

export default function WantYourDieselEngineToGetMorePowerfulPage() {
    const currentPostTitle =
        'Mau Mesin Diesel Anda Makin Bertenaga! Ini Dia Kuncinya! Rotor Head 7189-039 Itech';
    const currentPost = blogPosts.find(
        (post) => post.title === currentPostTitle
    );

    const publicationDate = currentPost?.date
        ? new Date(currentPost.date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        : 'Unknown Date';

    const latestPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: currentPostTitle,
        datePublished: currentPost?.date || '',
        image: currentPost?.image || '',
        author: {
            '@type': 'Organization',
            name: 'Indo Teknik Pekanbaru',
        },
    };

    return (
        <WantYourDieselEngineToGetMorePowerfulClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            currentPostTitle={currentPostTitle}
            jsonLd={jsonLd}
        />
    );
}