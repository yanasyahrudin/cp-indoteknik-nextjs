import ReplaceRotorHeadAtIndoTeknikClient from './ReplaceRotorHeadAtIndoTeknikClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Ganti Rotor Head di Indo Teknik Pekanbaru | Kantong Aman & Hasil Terjamin',
    description:
        'Panduan lengkap ganti rotor head di Indo Teknik Pekanbaru. Dapatkan tips, solusi, dan hasil terbaik untuk mesin diesel Anda dengan harga terjangkau.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/10/replace-rotor-head-at-indo-teknik',
    },
    keywords: [
        'ganti rotor head',
        'Indo Teknik Pekanbaru',
        'servis mesin diesel',
        'tips perawatan mesin',
        'artikel otomotif',
        'solusi mesin industri',
        'perbaikan mesin diesel',
        'hemat biaya servis',
    ],
};

export default async function ReplaceRotorHeadAtIndoTeknikPage() {
    const currentPostTitle =
        'Ganti Rotor Head di Indo Teknik Pekanbaru, Kantong Aman dan Hasil Terjamin!';
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
            'Panduan lengkap ganti rotor head di Indo Teknik Pekanbaru. Dapatkan tips, solusi, dan hasil terbaik untuk mesin diesel Anda dengan harga terjangkau.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <ReplaceRotorHeadAtIndoTeknikClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}