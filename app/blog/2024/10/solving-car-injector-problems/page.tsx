import SolvingCarInjectorProblemsClient from './SolvingCarInjectorProblemsClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Mengatasi Masalah Injector Mobil: Pentingnya Menggunakan Sparepart yang Sesuai Standar',
    description:
        'Panduan lengkap mengatasi masalah injector mobil dan pentingnya menggunakan sparepart sesuai standar di Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/10/solving-car-injector-problems',
    },
    keywords: [
        'masalah injector mobil',
        'sparepart standar',
        'Indo Teknik Pekanbaru',
        'servis mesin diesel',
        'tips perawatan mesin',
        'artikel otomotif',
        'solusi mesin industri',
        'perbaikan mesin diesel',
        'hemat biaya servis',
    ],
};

export default function SolvingCarInjectorProblemsPage() {
        const currentPostTitle =
            'Mengatasi Masalah Injector Mobil: Pentingnya Menggunakan Sparepart yang Sesuai Standar';

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
            'Panduan lengkap mengatasi masalah injector mobil dan pentingnya menggunakan sparepart sesuai standar di Indo Teknik Pekanbaru.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <SolvingCarInjectorProblemsClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}