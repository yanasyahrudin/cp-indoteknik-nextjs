import ReliableSolenoidForOptimalPerformanceKobelcoSK200InjectorSolenoidClient from './ReliableSolenoidForOptimalPerformanceKobelcoSK200InjectorSolenoidClient';
import blogPosts from '../../../../data/blogPostsData';

export const metadata = {
    title: 'Solenoid Injector Kobelco SK200: Performa Optimal & Tahan Lama | Indo Teknik Pekanbaru',
    description:
        'Temukan keunggulan solenoid injector Kobelco SK200 untuk mesin diesel Anda. Dapatkan tips perawatan, harga terbaik, dan solusi spare part industri dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/12/reliable-solenoid-for-optimal-performance',
    },
    keywords: [
        'solenoid injector Kobelco SK200',
        'solenoid mesin diesel',
        'spare part diesel Pekanbaru',
        'perawatan mesin diesel',
        'Indo Teknik Pekanbaru',
        'solusi mesin industri',
        'harga solenoid injector',
        'artikel teknik',
        'alat berat Kobelco',
    ],
};

export default function ReliableSolenoidForOptimalPerformancePage() {
    const currentPostTitle =
        'Solenoid Handal Kinerja Optimal! Selenoid Injektor Kobelco SK200';
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
        <ReliableSolenoidForOptimalPerformanceKobelcoSK200InjectorSolenoidClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            currentPostTitle={currentPostTitle}
            jsonLd={jsonLd}
        />
    );
}
