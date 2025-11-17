import TheSecretToDieselEnginesStayingPowerfulClient from './TheSecretToDieselEnginesStayingPowerful!ChooseSCVPajeroDakarFromIndoTeknikClient';
import blogPosts from '../../../../data/blogPostsData';
export const revalidate = 60;
export const metadata = {
    title: 'Solenoid Injector Kobelco SK200: Performa Optimal & Tahan Lama | Indo Teknik Pekanbaru',
    description:
        'Temukan keunggulan solenoid injector Kobelco SK200 untuk mesin diesel Anda. Dapatkan tips perawatan, harga terbaik, dan solusi spare part industri dari Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/12/the-secret-to-diesel-engines-staying-powerful',
    },
    keywords: [
        'solenoid injector Kobelco SK200',
        'solenoid mesin diesel',
        'spare part diesel Pekanbaru',
        'perawatan mesin diesel',
        'Indo Teknik Pekanbaru',
        'solusi mesin industri',
        'harga solenoid injector',
        'artikel teknik',
        'alat berat Kobelco',
    ],
};

export default function TheSecretToDieselEnginesStayingPowerfulPage() {
    const currentPostTitle =
        'Rahasia Mesin Diesel Tetap Bertenaga! Pilih SCV Pajero Dakar dari Indo Teknik!';
    
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
        datePublished: currentPost?.date || '',
        image: currentPost?.image || '',
    };

    return (
        <TheSecretToDieselEnginesStayingPowerfulClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            currentPostTitle={currentPostTitle}
            jsonLd={jsonLd}
        />
    );
}