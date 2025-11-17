import Ford25TotallyDeadInjectorRepairSolutionWithITechProductsClient from './Ford2_5TotallyDeadInjectorRepairSolutionWithItechRoductsClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Ford 2.5 Mati Total: Solusi Perbaikan Injektor dengan Produk ITech yang Bikin Mesin Kembali Bertenaga!',
    description:
        'Solusi perbaikan injektor Ford 2.5 yang mati total menggunakan produk ITech di Indo Teknik Pekanbaru. Mesin kembali bertenaga dan efisien.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/9/ford-2_5-totally-dead-injector-repair-solution-with-itech-roducts',
    },
    keywords: [
        'Ford 2.5',
        'injektor mati total',
        'produk ITech',
        'perbaikan mesin diesel',
        'Indo Teknik Pekanbaru',
        'servis Ford',
        'artikel otomotif',
        'tips perawatan mesin',
        'solusi mesin industri',
    ],
};

export default function Ford25TotallyDeadInjectorRepairSolutionWithITechProductsPage() {
    const currentPostTitle =
        'Ford 2.5 Mati Total: Solusi Perbaikan Injektor dengan Produk ITech yang Bikin Mesin Kembali Bertenaga!';

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
            'Solusi perbaikan injektor Ford 2.5 yang mati total menggunakan produk ITech di Indo Teknik Pekanbaru. Mesin kembali bertenaga dan efisien.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <Ford25TotallyDeadInjectorRepairSolutionWithITechProductsClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}