import UseThisKnowYourNozzleConditionAcuratelyClient from './UseThisKnowYourNozzleConditionAcuratelyClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Pakai ini! Ketahui Kondisi Nozzle Anda dengan Akurat',
    description:
        'Temukan cara mengetahui kondisi nozzle injektor Anda secara akurat menggunakan alat khusus di Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/9/use-this-know-your-nozzle-condition-acurately',
    },
    keywords: [
        'nozzle injektor',
        'diagnosa mesin diesel',
        'alat uji nozzle',
        'Indo Teknik Pekanbaru',
        'servis injektor',
        'artikel otomotif',
        'tips perawatan mesin',
        'solusi mesin industri',
    ],
};

export default function UseThisKnowYourNozzleConditionAcuratelyPage() {
    const currentPostTitle =
        'Pakai ini! Ketahui Kondisi Nozzle Anda dengan Akurat';
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
            'Temukan cara mengetahui kondisi nozzle injektor Anda secara akurat menggunakan alat khusus di Indo Teknik Pekanbaru.',
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