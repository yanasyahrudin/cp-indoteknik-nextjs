import HereItIsThePowerfulSolutionForYourCanterClient from './HereItIsThePowerfulSolutionForYourCanterClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Solusi Ampuh untuk Canter Anda: Plunger Supply Pump Euro 4 FE 7.8 | Indo Teknik Pekanbaru',
    description:
        'Temukan solusi terbaik untuk Canter Anda dengan Plunger Supply Pump Euro 4 FE 7.8. Ulasan lengkap, keunggulan, dan tips pemasangan dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/11/here-it-is-the-powerful-solution-for-your-canter',
    },
    keywords: [
        'plunger supply pump',
        'Euro 4 FE 7.8',
        'solusi canter',
        'tips perawatan mesin',
        'Indo Teknik Pekanbaru',
        'servis mesin diesel',
        'artikel otomotif',
        'performa mesin',
    ],
};

export default async function HereItIsThePowerfulSolutionForYourCanterPage() {
        const currentPostTitle =
            'Ini Dia!!! Solusi Ampuh untuk Canter Anda: Plunger Supply Pump Euro 4 FE 7.8';
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
            'Temukan solusi terbaik untuk Canter Anda dengan Plunger Supply Pump Euro 4 FE 7.8. Ulasan lengkap, keunggulan, dan tips pemasangan dari Indo Teknik Pekanbaru.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <HereItIsThePowerfulSolutionForYourCanterClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}
