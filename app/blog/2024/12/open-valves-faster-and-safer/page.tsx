import OpenValvesFasterAndSaferClient from './OpenValvesFasterAndSaferWithOurProfessionalTool';
import blogPosts from '../../../../data/blogPostsData';
export const metadata = {
    title: 'Buka Valve Lebih Cepat & Aman dengan Alat Profesional | Indo Teknik Pekanbaru',
    description:
        'Pelajari cara membuka valve alat berat dengan lebih cepat dan aman menggunakan alat profesional dari Indo Teknik Pekanbaru. Dapatkan tips, solusi, dan produk terbaik untuk kebutuhan industri Anda.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/12/open-valves-faster-and-safer',
    },
    keywords: [
        'alat buka valve',
        'valve alat berat',
        'alat profesional industri',
        'tips buka valve',
        'Indo Teknik Pekanbaru',
        'spare part alat berat',
        'solusi mesin industri',
        'perawatan alat berat',
        'artikel teknik',
    ],
};

export default function OpenValvesFasterAndSaferPage() {
    const currentPostTitle =
        'Buka Valve Lebih Cepat dan Aman dengan Tool Injector Ford 2.2 dari Itech!';
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
        datePublished: currentPost ? currentPost.date : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <OpenValvesFasterAndSaferClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}
