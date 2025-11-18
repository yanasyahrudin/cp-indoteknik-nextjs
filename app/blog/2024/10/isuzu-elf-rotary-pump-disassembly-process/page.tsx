import IsuzuElfRotaryPumpDisassemblyProcessClient from './IsuzuElfRotaryPumpDisassemblyProcessClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Proses Pembongkaran Pump Rotary Isuzu Elf Pekanbaru | Indo Teknik Pekanbaru',
    description:
        'Panduan lengkap proses pembongkaran pump rotary Isuzu Elf di Pekanbaru. Dapatkan tips aman, langkah detail, dan solusi terbaik dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/10/isuzu-elf-rotary-pump-disassembly-process',
    },
    keywords: [
        'pembongkaran pump rotary',
        'Isuzu Elf',
        'tips perawatan mesin diesel',
        'Indo Teknik Pekanbaru',
        'servis mobil diesel',
        'artikel otomotif',
        'solusi mesin industri',
        'tips aman pembongkaran',
    ],
};

export default async function IsuzuElfRotaryPumpDisassemblyProcessPage() {
    const currentPostTitle =
        'Proses Pembongkaran Pump Rotary Isuzu Elf Pekanbaru: Tips Aman dan Detail';
    // Find the current post in blogPosts using the title
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
            'Panduan lengkap proses pembongkaran pump rotary Isuzu Elf di Pekanbaru. Dapatkan tips aman, langkah detail, dan solusi terbaik dari Indo Teknik Pekanbaru.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <IsuzuElfRotaryPumpDisassemblyProcessClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
            blogPosts={blogPosts}
        />
    );
}