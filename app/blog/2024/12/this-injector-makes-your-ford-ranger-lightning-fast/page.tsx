import blogPosts from '@/app/data/blogPostsData.js';
import ThisInjectorMakesYourFordRangerLightningFastClient from './ThisInjectorMakesYourFordRangerLightningFastClient';
export const revalidate = 60;
export const metadata = {
    title: 'Injektor Ini Bikin Ford Ranger Anda Ngebut Abis! | Indo Teknik',
    description:
        'Cari tahu bagaimana injektor khusus membuat Ford Ranger Anda lebih bertenaga dan responsif. Tips, harga, dan solusi spare part dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/12/this-injector-makes-your-ford-ranger-lightning-fast',
    },
    keywords: [
        'Injektor Ford Ranger',
        'Ford Ranger ngebut',
        'spare part diesel',
        'Indo Teknik Pekanbaru',
        'tips otomotif',
        'solusi mesin industri',
    ],
};

// Contoh struktur jsonLd sederhana
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Injektor Ini Bikin Ford Ranger Anda Ngebut Abis!",
    "datePublished": "2024-12-01",
    "author": {
        "@type": "Organization",
        "name": "Indo Teknik Pekanbaru"
    }
};

export default function ThisInjectorMakesYourFordRangerLightningFastPage() {
    const currentPostTitle = 'Injektor Ini Bikin Ford Ranger Anda Ngebut Abis!';
    const currentPost = blogPosts.find(
        (post) => post.title === currentPostTitle
    );
    const publicationDate = currentPost
        ? new Date(currentPost.date).toLocaleDateString()
        : 'Unknown Date';

    const latestPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
        <ThisInjectorMakesYourFordRangerLightningFastClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            currentPostTitle={currentPostTitle}
            jsonLd={jsonLd}
        />
    );
}