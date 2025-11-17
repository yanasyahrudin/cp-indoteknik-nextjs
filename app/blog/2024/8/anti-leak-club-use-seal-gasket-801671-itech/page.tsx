import HowToSolveInjectorProblemsOnAMitsubishiTriton2500ccClient from './AntiLeakClubUseSealGasket801671ItechClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Cara Mengatasi Masalah Injektor pada Mitsubishi Triton 2500cc: Langkah Demi Langkah',
    description:
        'Panduan lengkap langkah demi langkah mengatasi masalah injektor pada Mitsubishi Triton 2500cc di Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/8/anti-leak-club-use-seal-gasket-801671-itech',
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
        'Anti Bocor-Bocor Club! Pakai Seal Gasket 801671 ITech!';
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
            'Panduan lengkap langkah demi langkah mengatasi masalah injektor pada Mitsubishi Triton 2500cc di Indo Teknik Pekanbaru.',
        datePublished: currentPost?.date
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost?.image || '',
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