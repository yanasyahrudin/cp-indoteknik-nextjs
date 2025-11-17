import FreeYourselfFromDieselEngineProblemsClient from './FreeYourselfFromDieselEngineProblems';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Bebas dari Masalah Mesin Diesel dengan Injector Ini!',
    description:
        'Temukan solusi ampuh untuk mengatasi masalah mesin diesel Anda dengan injector rekomendasi dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/8/free-yourself-from-diesel-engine-problems',
    },
    keywords: [
        'mesin diesel',
        'injector diesel',
        'solusi mesin',
        'Indo Teknik Pekanbaru',
        'servis diesel',
        'artikel otomotif',
        'tips perawatan mesin',
        'sparepart diesel',
    ],
};

export default function FreeYourselfFromDieselEngineProblemsPage() {
    const currentPostTitle =
        'Bebas dari Masalah Mesin Diesel dengan Injector Ini!';
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
            'Temukan solusi ampuh untuk mengatasi masalah mesin diesel Anda dengan injector rekomendasi dari Indo Teknik Pekanbaru.',
        datePublished: currentPost?.date
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost?.image || '',
    };

    return (
        <FreeYourselfFromDieselEngineProblemsClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}