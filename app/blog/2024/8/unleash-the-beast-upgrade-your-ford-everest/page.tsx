import SafeWorkProjectCompletedChooseOurSupplyPumpClient from './UnleashTheBeastUpgradeYourFordEverest';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Kerja Aman! Proyek Tuntas! Pilih Supply Pump Kami Untuk Komatsu PC-70',
    description:
        'Solusi supply pump terbaik untuk Komatsu PC-70, menjamin proyek Anda selesai dengan aman dan efisien bersama Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/8/safe-work-project-completed-choose-our-supply-pump',
    },
    keywords: [
        'Komatsu PC-70',
        'supply pump',
        'proyek aman',
        'Indo Teknik Pekanbaru',
        'servis alat berat',
        'artikel otomotif',
        'tips perawatan mesin',
        'solusi mesin industri',
    ],
};

export default function SafeWorkProjectCompletedChooseOurSupplyPumpPage() {
    const currentPostTitle =
        'TENAGA BADAK! Upgrade Ford Everest Anda dengan Nozzle DNOPDN121 ITECH';
    // Find the current post in blogPosts using the title
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
            'Solusi supply pump terbaik untuk Komatsu PC-70, menjamin proyek Anda selesai dengan aman dan efisien bersama Indo Teknik Pekanbaru.',
        datePublished: currentPost?.date
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost?.image || '',
    };

    return (
        <SafeWorkProjectCompletedChooseOurSupplyPumpClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}