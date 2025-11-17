import TheRightSolutionForYourInnovaInjectorSolenoidProblemsClient from './TheRightSolutionForYourInnovaInjectorSolenoidProblemsClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Solusi Tepat untuk Masalah Solenoid Injektor Innova Anda: Pilih Solenoid ITech!',
    description:
        'Cari tahu solusi terbaik untuk masalah solenoid injektor Innova Anda. Dapatkan tips perawatan, harga, dan rekomendasi spare part dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/12/the-right-solution-for-your-innova-injector-solenoid-problems',
    },
    keywords: [
        'solenoid injektor Innova',
        'solenoid mesin diesel',
        'spare part diesel Pekanbaru',
        'perawatan mesin diesel',
        'Indo Teknik Pekanbaru',
        'solusi mesin industri',
        'harga solenoid injektor',
        'artikel teknik',
        'mobil Innova',
    ],
};

export default function TheRightSolutionForYourInnovaInjectorSolenoidProblemsPage() {
        const currentPostTitle =
            'Solusi Tepat untuk Masalah Solenoid Injektor Innova Anda: Pilih Solenoid ITech!';
    const currentPost = blogPosts.find(
        (post) => post.title === currentPostTitle
    );

    const publicationDate = currentPost?.date
        ? new Date(currentPost.date).toLocaleDateString('id-ID')
        : 'Unknown Date';

    const latestPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: currentPostTitle,
        description:
            'Cari tahu solusi terbaik untuk masalah solenoid injektor Innova Anda. Dapatkan tips perawatan, harga, dan rekomendasi spare part dari Indo Teknik Pekanbaru.',
        datePublished: currentPost?.date
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost?.image || '',
    };

    return (
        <TheRightSolutionForYourInnovaInjectorSolenoidProblemsClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            currentPostTitle={currentPostTitle}
            jsonLd={jsonLd}
        />
    );
}