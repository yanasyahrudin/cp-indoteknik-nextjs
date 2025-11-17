import ImportantTipsWhenReplacingAPressMachineSeal from './ImportantTipsWhenReplacingAPressMachineSealClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Tips Penting Saat Ganti Seal Mesin Press | Reparasi Silinder Jack Mesin Press 300 Bar Bocor',
    description:
        'Pelajari langkah-langkah penting saat mengganti seal mesin press, termasuk cara reparasi silinder jack mesin press 300 bar yang bocor. Dapatkan tips dan solusi terbaik dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/11/important-tips-when-replacing-a-press-machine-seal',
    },
    keywords: [
        'seal mesin press',
        'reparasi silinder jack',
        'mesin press 300 bar',
        'tips perbaikan mesin',
        'Indo Teknik Pekanbaru',
        'spare part mesin industri',
        'artikel otomotif',
        'solusi mesin industri',
    ],
};

export default async function ImportantTipsWhenReplacingAPressMachineSealPage() {
    const currentPostTitle =
        'Tips Penting Saat Ganti Seal Mesin Press: Langkah Reparasi Silinder Jack Mesin Press 300 Bar yang Bocor';
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
            'Pelajari langkah-langkah penting saat mengganti seal mesin press dan cara reparasi silinder jack mesin press 300 bar yang bocor.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <ImportantTipsWhenReplacingAPressMachineSeal
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}