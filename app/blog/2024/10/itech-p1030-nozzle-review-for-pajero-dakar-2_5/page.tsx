import ItechP1030NozzleReviewForPajeroDakar2_5Client from './ItechP1030NozzleReviewForPajeroDakar2_5Client';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Review Nozzle P1030 Itech untuk Pajero Dakar 2.5 | Indo Teknik Pekanbaru',
    description:
        'Ulasan lengkap tentang Nozzle P1030 Itech untuk Pajero Dakar 2.5. Temukan keunggulan, performa, dan tips pemasangan untuk hasil maksimal.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/10/itech-p1030-nozzle-review-for-pajero-dakar-2_5',
    },
    keywords: [
        'review nozzle P1030',
        'Itech Pajero Dakar',
        'nozzle Pajero 2.5',
        'tips pemasangan nozzle',
        'Indo Teknik Pekanbaru',
        'servis mobil diesel',
        'artikel otomotif',
        'performa mesin',
    ],
};

export default async function ItechP1030NozzleReviewForPajeroDakar2_5Page() {
    const currentPostTitle =
        'Review Nozzle P1030 Itech untuk Pajero Dakar 2.5: Pilihan Terbaik untuk Performa Maksimal';
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
            'Ulasan lengkap tentang Nozzle P1030 Itech untuk Pajero Dakar 2.5. Temukan keunggulan, performa, dan tips pemasangan untuk hasil maksimal.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <ItechP1030NozzleReviewForPajeroDakar2_5Client
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}