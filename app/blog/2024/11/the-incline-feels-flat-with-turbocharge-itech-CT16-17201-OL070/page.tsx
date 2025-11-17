import TheInclineFeelsFlatWithTurbochargeItechCT1617201OL070Client from './TheInclineFeelsFlatWithTurbochargeItechCT1617201OL070Client';
import blogPosts from '../../../../data/blogPostsData';
export const revalidate = 60;
export const metadata = {
    title: 'Tanjakan Serasa Datar dengan Turbocharger Itech CT16 17201-OL070 untuk Kijang Innova 2KD | Indo Teknik',
    description:
        'Rasakan performa maksimal Kijang Innova 2KD dengan Turbocharger Itech CT16 17201-OL070. Temukan keunggulan, tips pemasangan, dan solusi turbo terbaik dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/11/the-incline-feels-flat-with-turbocharge-itech-CT16-17201-OL070',
    },
    keywords: [
        'Turbocharger Itech CT16',
        'Kijang Innova 2KD',
        'turbo diesel',
        'spare part turbo Pekanbaru',
        'tips turbocharger',
        'Indo Teknik Pekanbaru',
        'turbo upgrade',
        'artikel otomotif',
        'solusi mesin industri',
    ],
};

export default async function DieselEngineFansMustKnowThisPencilNozzleAssyPage() {
        const currentPostTitle =
            'Tanjakan Serasa Datar dengan Turbocharger Itech CT16 17201-OL070 untuk Kijang Innova 2KD';
    const currentPost = blogPosts.find(
        (post) => post.title === currentPostTitle
    );

    const publicationDate = currentPost
        ? new Date(currentPost.date).toLocaleDateString()
        : 'Unknown Date';

    const latestPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: currentPostTitle,
        description:
            'Nozzle Pensil Assy adalah komponen penting untuk performa mesin diesel. Artikel ini membahas manfaat, tips perawatan, dan solusi terbaik untuk mesin diesel Anda.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <TheInclineFeelsFlatWithTurbochargeItechCT1617201OL070Client
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}
