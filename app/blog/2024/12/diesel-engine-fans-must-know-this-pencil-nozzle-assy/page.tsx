import DieselEngineFansMustKnowThisPencilNozzleAssyClient from './DieselEngineFansMustKnowThisPencilNozzleAssyClient';
import blogPosts from '../../../../data/blogPostsData';
export const revalidate = 60;
export const metadata = {
    title: 'Penggemar Mesin Diesel Wajib Tahu! Nozzle Pensil Assy Ini Jadikan Mesin Lebih Perkasa! | Indo Teknik',
    description:
        'Pelajari keunggulan Nozzle Pensil Assy untuk mesin diesel Anda. Temukan tips perawatan, harga terjangkau, dan solusi terbaik dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/12/diesel-engine-fans-must-know-this-pencil-nozzle-assy',
    },
    keywords: [
        'Nozzle Pensil Assy',
        'perawatan mesin diesel',
        'spare part diesel Pekanbaru',
        'tips mesin diesel',
        'Indo Teknik Pekanbaru',
        'diesel nozzle',
        'harga nozzle diesel',
        'artikel otomotif',
        'solusi mesin industri',
    ],
};

export default async function DieselEngineFansMustKnowThisPencilNozzleAssyPage() {
    const currentPostTitle =
        'Penggemar Mesin Diesel Wajib Tahu! Nozzle Pensil Assy Ini Jadikan Mesin Lebih Perkasa!';
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
        <DieselEngineFansMustKnowThisPencilNozzleAssyClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}