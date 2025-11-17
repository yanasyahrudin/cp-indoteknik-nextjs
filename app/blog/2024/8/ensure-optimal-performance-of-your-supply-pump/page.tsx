import HowToSolveInjectorProblemsOnAMitsubishiTriton2500ccClient from './EnsureOptimalPerformanceOfYourSupplyPumpClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Cara Mengatasi Masalah Injektor pada Mitsubishi Triton 2500cc: Langkah Demi Langkah',
    description:
        'Panduan lengkap langkah demi langkah mengatasi masalah injektor pada Mitsubishi Triton 2500cc di Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/8/safe-work-project-completed-choose-our-supply-pump',
    },
    keywords: [
        'Mitsubishi Triton 2500cc',
        'masalah injektor',
        'perbaikan mesin diesel',
        'Indo Teknik Pekanbaru',
        'servis Triton',
        'artikel otomotif',
        'tips perawatan mesin',
        'solusi mesin industri',
    ],
};

export default function HowToSolveInjectorProblemsOnAMitsubishiTriton2500ccPage() {
    const currentPostTitle =
        'Pastikan Kinerja Supply Pump Anda Optimal Dengan Plunger HP 3 ITech!';
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
            'Panduan lengkap langkah demi langkah mengatasi masalah injektor pada Mitsubishi Triton 2500cc di Indo Teknik Pekanbaru.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <HowToSolveInjectorProblemsOnAMitsubishiTriton2500ccClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}