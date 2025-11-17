import DidYouKnowTheImportanceOfTCoverClient from './DidYouKnowTheImportanceOfTCoverClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Tahukah Anda? Pentingnya Cover T Untuk Mobil Diesel Anda',
    description:
        'Pelajari mengapa cover T sangat penting untuk mobil diesel Anda dan bagaimana perawatannya dapat meningkatkan umur mesin.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/8/did-you-know-the-importance-of-t-cover',
    },
    keywords: [
        'cover T',
        'mobil diesel',
        'perawatan mesin',
        'Indo Teknik Pekanbaru',
        'servis mobil',
        'artikel otomotif',
        'tips perawatan mesin',
        'solusi mesin industri',
    ],
};

export default function DidYouKnowTheImportanceOfTCoverPage() {
    const currentPostTitle =
        'Tahukah Anda? Pentingnya Cover T Untuk Mobil Diesel Anda';
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
            'Pelajari mengapa cover T sangat penting untuk mobil diesel Anda dan bagaimana perawatannya dapat meningkatkan umur mesin.',
        datePublished: currentPost?.date
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost?.image || '',
    };

    return (
        <DidYouKnowTheImportanceOfTCoverClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}