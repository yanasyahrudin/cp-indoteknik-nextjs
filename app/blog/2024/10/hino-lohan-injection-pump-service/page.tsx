import HinoLohanInjectionPumpServiceClient from './HinoLohanInjectionPumpServiceClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Service Injection Pump Hino Lohan Pekanbaru | Indo Teknik Pekanbaru',
    description:
        'Ulasan lengkap tentang service injection pump Hino Lohan di Pekanbaru. Dapatkan tips perawatan, solusi terbaik, dan keunggulan layanan dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/10/hino-lohan-injection-pump-service',
    },
    keywords: [
        'service injection pump',
        'Hino Lohan',
        'perawatan mesin diesel',
        'Indo Teknik Pekanbaru',
        'servis mobil diesel',
        'artikel otomotif',
        'solusi mesin industri',
        'tips perawatan mesin',
    ],
};

export default async function HinoLohanInjectionPumpServicePage() {
    const currentPostTitle =
        'Service Injection Pump Hino Lohan Pekanbaru: Kinerja Optimal';

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
            'Ulasan lengkap tentang service injection pump Hino Lohan di Pekanbaru. Dapatkan tips perawatan, solusi terbaik, dan keunggulan layanan dari Indo Teknik Pekanbaru.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <HinoLohanInjectionPumpServiceClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}