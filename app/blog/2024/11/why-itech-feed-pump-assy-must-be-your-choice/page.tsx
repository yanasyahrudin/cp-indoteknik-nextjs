import WhyItechFeedPumpAssyMustBeYourChoiceClient from './WhyItechFeedPumpAssyMustBeYourChoiceClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

// Metadata diperbaiki agar sesuai dengan artikel Feed Pump Assy ITech
export const metadata = {
    title: 'Mengapa Feed Pump Assy ITech Wajib Jadi Pilihan Anda! | Indo Teknik',
    description:
        'Temukan alasan utama memilih Feed Pump Assy ITech untuk mesin diesel Anda. Simak keunggulan, tips pemasangan, dan solusi terbaik dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/11/why-itech-feed-pump-assy-must-be-your-choice',
    },
    keywords: [
        'Feed Pump Assy ITech',
        'mesin diesel',
        'spare part diesel',
        'tips feed pump',
        'Indo Teknik Pekanbaru',
        'perawatan mesin',
        'artikel otomotif',
        'solusi mesin industri',
    ],
};

export default async function WhyItechFeedPumpAssyMustBeYourChoicePage() {
    const currentPostTitle =
        'Mengapa Feed Pump Assy ITech Wajib Jadi Pilihan Anda!';

    const currentPost = blogPosts.find(
        (post) => post.title === currentPostTitle
    );

    const publicationDate = currentPost
        ? new Date(currentPost.date).toLocaleDateString()
        : 'Unknown Date';

    const latestPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // JSON-LD diperbaiki agar sesuai dengan artikel Feed Pump Assy ITech
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: currentPostTitle,
        description:
            'Feed Pump Assy ITech adalah pilihan terbaik untuk performa mesin diesel. Artikel ini membahas keunggulan, tips pemasangan, dan solusi terbaik untuk mesin Anda.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <WhyItechFeedPumpAssyMustBeYourChoiceClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}