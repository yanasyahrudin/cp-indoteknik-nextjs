import L300CarInjectorRepairPartIIClient from './L300CarInjectorRepairPartIIClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Perbaikan Injector Mitsubishi L300 di Pekanbaru: Part II - Pencucian Tangki dan Pemasangan Injektor',
    description:
        'Detail proses perbaikan injector Mitsubishi L300 di Pekanbaru, mulai dari pencucian tangki hingga pemasangan injektor baru. Indo Teknik Pekanbaru siap membantu perawatan mesin diesel Anda.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/10/l300-car-injector-repair-part-ii',
    },
    keywords: [
        'injector L300',
        'perbaikan mesin diesel',
        'pencucian tangki',
        'pemasangan injektor',
        'Indo Teknik Pekanbaru',
        'servis L300',
        'artikel otomotif',
        'tips perawatan mesin',
        'solusi mesin industri',
    ],
};

export default function L300CarInjectorRepairPartIIPage() {
    const currentPostTitle =
        'Perbaikan Injector Mitsubishi L300 di Pekanbaru: Part II - Pencucian Tangki dan Pemasangan Injektor';

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
            'Detail proses perbaikan injector Mitsubishi L300 di Pekanbaru, mulai dari pencucian tangki hingga pemasangan injektor baru.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <L300CarInjectorRepairPartIIClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}