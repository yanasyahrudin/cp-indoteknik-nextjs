import WhyDoManyChooseTheItech9H5797PlungerClient from './WhyDoManyChooseTheItech9H5797PlungerClient';
import blogPosts from '../../../../data/blogPostsData';
export const revalidate = 60;
// Perbaikan metadata agar sesuai dengan isi artikel dan URL
export const metadata = {
    title: 'Kenapa Banyak yang Memilih Plunger ITech 9H5797? | Indo Teknik',
    description:
        'Cari tahu alasan utama Plunger ITech 9H5797 menjadi pilihan favorit untuk mesin diesel. Simak keunggulan, tips pemasangan, dan solusi terbaik dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/11/why-do-many-choose-the-itech-9H5797-plunger',
    },
    keywords: [
        'Plunger ITech 9H5797',
        'mesin diesel',
        'spare part diesel',
        'tips plunger',
        'Indo Teknik Pekanbaru',
        'perawatan mesin',
        'artikel otomotif',
        'solusi mesin industri',
    ],
};

export default async function WhyDoManyChooseTheItech9H5797PlungerPage() {
    const currentPostTitle = 'Kenapa Banyak yang Memilih Plunger ITech 9H5797?';

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
            'Plunger ITech 9H5797 adalah komponen penting untuk performa mesin diesel. Artikel ini membahas manfaat, tips perawatan, dan solusi terbaik untuk mesin diesel Anda.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <WhyDoManyChooseTheItech9H5797PlungerClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}
