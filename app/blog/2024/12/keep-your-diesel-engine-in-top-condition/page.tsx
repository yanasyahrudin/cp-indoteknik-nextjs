
import KeepYourDieselEngineInTopConditionClient from './KeepYourDieselEngineInTopConditionClient';
import blogPosts from '../../../../data/blogPostsData';
export const revalidate = 60;
export const metadata = {
    title: 'Jaga Mesin Diesel Anda Tetap Prima dengan Pipa Common Rail Kobelco SK130 | Indo Teknik',
    description:
        'Pelajari keunggulan Pipa Common Rail Kobelco SK130 untuk mesin diesel Anda. Temukan tips perawatan, harga terjangkau, dan solusi terbaik dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/12/keep-your-diesel-engine-in-top-condition',
    },
    keywords: [
        'Pipa Common Rail Kobelco SK130',
        'perawatan mesin diesel',
        'spare part diesel Pekanbaru',
        'tips mesin diesel',
        'Indo Teknik Pekanbaru',
        'common rail diesel',
        'harga pipa common rail',
        'artikel otomotif',
        'solusi mesin industri',
    ],
};

export default async function KeepYourDieselEngineInTopConditionPage() {
    const currentPostTitle =
        'Jaga Mesin Diesel Anda Tetap Prima dengan Pipa Common Rail Kobelco SK130!';
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
        description: (
            'Mesin diesel yang andal dan efisien adalah kunci untuk produktivitas dan performa terbaik. Salah satu komponen vital yang memengaruhi kinerja mesin diesel adalah pipa common rail. Dalam artikel ini, kita akan membahas mengapa Pipa Common Rail Kobelco SK130 adalah pilihan terbaik untuk menjaga mesin diesel tetap dalam kondisi prima.'
        ),
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };
    
    return (
        <KeepYourDieselEngineInTopConditionClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}
