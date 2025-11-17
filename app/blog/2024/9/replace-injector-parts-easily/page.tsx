import UseThisKnowYourNozzleConditionAcuratelyClient from './ReplaceInjectorPartsEasilyClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Ganti Part Injector dengan Mudah! Pakai Repair Kit 1465A257 ITech',
    description:
        'Pelajari cara mengganti part injector dengan mudah menggunakan Repair Kit 1465A257 ITech di Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/9/replace-injector-parts-easily',
    },
    keywords: [
        'repair kit injector',
        '1465A257 ITech',
        'servis injektor',
        'Indo Teknik Pekanbaru',
        'artikel otomotif',
        'tips perawatan mesin',
        'solusi mesin industri',
    ],
};

export default function ReplaceInjectorPartsEasilyPage() {
    const currentPostTitle =
        'Ganti Part Injector dengan Mudah! Pakai Repair Kit 1465A257 ITech';
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
            'Pelajari cara mengganti part injector dengan mudah menggunakan Repair Kit 1465A257 ITech di Indo Teknik Pekanbaru.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <UseThisKnowYourNozzleConditionAcuratelyClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}