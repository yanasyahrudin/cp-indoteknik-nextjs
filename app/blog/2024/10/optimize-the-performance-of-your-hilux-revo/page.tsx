import OptimizeThePerformanceOfYourHiluxRevoClient from './OptimizeThePerformanceOfYourHiluxRevoClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Optimalkan Performa Toyota Hilux Revo Anda dengan Service Injector di Indo Teknik Pekanbaru',
    description:
        'Panduan service injector Toyota Hilux Revo di Indo Teknik Pekanbaru untuk meningkatkan performa dan efisiensi mesin diesel Anda.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/10/optimize-the-performance-of-your-hilux-revo',
    },
    keywords: [
        'Toyota Hilux Revo',
        'service injector',
        'performa mesin',
        'Indo Teknik Pekanbaru',
        'servis Hilux',
        'artikel otomotif',
        'tips perawatan mesin',
        'solusi mesin diesel',
        'efisiensi bahan bakar',
    ],
};

export default function OptimizeThePerformanceOfYourHiluxRevoPage() {
    const currentPostTitle =
        'Optimalkan Performa Toyota Hilux Revo Anda dengan Service Injector di Indo Teknik Pekanbaru';

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
            'Panduan service injector Toyota Hilux Revo di Indo Teknik Pekanbaru untuk meningkatkan performa dan efisiensi mesin diesel Anda.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <OptimizeThePerformanceOfYourHiluxRevoClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}