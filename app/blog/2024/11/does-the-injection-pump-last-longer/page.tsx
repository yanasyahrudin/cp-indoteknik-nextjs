import DoesTheInjectionPumpLastLongerClient from './DoesTheInjectionPumpLastLongerClient';
import blogPosts from '../../../../data/blogPostsData';
export const revalidate = 60;
export const metadata = {
    title: 'Injection Pump Jadi Lebih Awet? Ini Rahasianya! | Indo Teknik',
    description:
        'Cari tahu rahasia agar injection pump mesin diesel lebih awet. Temukan tips perawatan, penyebab kerusakan, dan solusi terbaik dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/11/does-the-injection-pump-last-longer',
    },
    keywords: [
        'Injection Pump',
        'perawatan injection pump',
        'spare part diesel Pekanbaru',
        'tips mesin diesel',
        'Indo Teknik Pekanbaru',
        'injeksi diesel',
        'harga injection pump',
        'artikel otomotif',
        'solusi mesin industri',
    ],
};

export default async function DieselEngineFansMustKnowThisPencilNozzleAssyPage() {
    const currentPostTitle = 'Injection Pump Jadi Lebih Awet? Ini Rahasianya!';
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
        <DoesTheInjectionPumpLastLongerClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}
