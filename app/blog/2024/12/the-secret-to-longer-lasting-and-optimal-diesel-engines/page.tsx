import blogPosts from '@/app/data/blogPostsData.js';
import TheSecretToLongerLastingAndOptimalDieselEngines_ValveG4Hilux2GDITechClient from './TheSecretToLongerLastingAndOptimalDieselEngines_ValveG4Hilux2GDITechClient.tsx';

export const metadata = {
    title: 'Rahasia Mesin Diesel Awet & Optimal | Pipa Common Rail Kobelco SK130 - Indo Teknik',
    description:
        'Temukan rahasia mesin diesel lebih tahan lama dan optimal dengan Pipa Common Rail Kobelco SK130. Dapatkan tips perawatan, harga terbaik, dan solusi spare part dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/12/the-secret-to-longer-lasting-and-optimal-diesel-engines',
    },
    keywords: [
        'Pipa Common Rail Kobelco SK130',
        'mesin diesel awet',
        'perawatan diesel',
        'spare part diesel',
        'Indo Teknik Pekanbaru',
        'common rail',
        'harga pipa common rail',
        'tips otomotif',
        'solusi mesin industri',
    ],
};

export default function TheSecretToLongerLastingAndOptimalDieselEngines_ValveG4Hilux2GDITechPage() {
    const currentPostTitle =
        'Rahasia Mesin Diesel Lebih Awet dan Optimal: Valve G4 Hilux 2GD Itech';
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
    return (
        <TheSecretToLongerLastingAndOptimalDieselEngines_ValveG4Hilux2GDITechClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            currentPostTitle={currentPostTitle}
            jsonLd={jsonLd}
        />
    );
}
