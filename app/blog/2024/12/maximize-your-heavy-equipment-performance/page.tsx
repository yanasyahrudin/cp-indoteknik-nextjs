import MaximizeYourHeavyEquipmentPerformanceClient from './MaximizeYourHeavyEquipmentPerformanceWithTheCAT320DInjectionPumpClient';
import blogPosts from '../../../../data/blogPostsData';

export const metadata = {
    title: 'Maksimalkan Performa Alat Berat Anda dengan Injection Pump CAT 320D | Indo Teknik',
    description:
        'Temukan keunggulan Injection Pump CAT 320D untuk alat berat Anda. Dapatkan tips perawatan, harga terbaik, dan solusi spare part diesel dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/12/maximize-your-heavy-equipment-performance',
    },
    keywords: [
        'Injection Pump CAT 320D',
        'perawatan alat berat',
        'spare part diesel Pekanbaru',
        'tips alat berat',
        'Indo Teknik Pekanbaru',
        'injeksi diesel',
        'harga injection pump',
        'artikel alat berat',
        'solusi mesin industri',
    ],
};

export default function MaximizeYourHeavyEquipmentPerformancePage() {
    const currentPostTitle =
        'Maksimalkan Performa Alat Berat Anda dengan Injection Pump CAT 320D!';
    // Find the current post in blogPosts using the title

    const currentPost = blogPosts.find(
        (post) => post.title === currentPostTitle
    );

    // Extract the publication date from the current post
    const publicationDate = currentPost
        ? new Date(currentPost.date).toLocaleDateString()
        : 'Unknown Date';

    // Sort blog posts by date (latest first)
    const latestPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: currentPostTitle,
        datePublished: currentPost ? currentPost.date : '',
        image: currentPost ? currentPost.image : '',
    };
    return (
        <MaximizeYourHeavyEquipmentPerformanceClient
            jsonLd={jsonLd}
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            currentPostTitle={currentPostTitle}
        />
    );
}
