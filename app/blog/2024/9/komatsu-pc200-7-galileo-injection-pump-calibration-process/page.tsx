import KomatsuPC2007GalileoInjectionPumpCalibrationProcessClient from './KomatsuPC2007GalileoInjectionPumpCalibrationProcessClient';
import blogPosts from '../../../../data/blogPostsData';

export const revalidate = 60;

export const metadata = {
    title: 'Proses Kalibrasi Injection Pump Komatsu PC200-7 Galileo: Langkah-langkah Detil yang Perlu Anda Ketahui',
    description:
        'Panduan lengkap proses kalibrasi injection pump Komatsu PC200-7 Galileo secara detil di Indo Teknik Pekanbaru.',
    alternates: {
        canonical:
            'https://indo-teknik.com/blog/2024/9/komatsu-pc200-7-galileo-injection-pump-calibration-process',
    },
    keywords: [
        'Komatsu PC200-7 Galileo',
        'kalibrasi injection pump',
        'perbaikan mesin diesel',
        'Indo Teknik Pekanbaru',
        'servis alat berat',
        'artikel otomotif',
        'tips perawatan mesin',
        'solusi mesin industri',
    ],
};

export default function KomatsuPC2007GalileoInjectionPumpCalibrationProcessPage() {
    const currentPostTitle =
        'Proses Kalibrasi Injection Pump Komatsu PC200-7 Galileo: Langkah-langkah Detil yang Perlu Anda Ketahui';

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
            'Panduan lengkap proses kalibrasi injection pump Komatsu PC200-7 Galileo secara detil di Indo Teknik Pekanbaru.',
        datePublished: currentPost
            ? new Date(currentPost.date).toISOString()
            : '',
        image: currentPost ? currentPost.image : '',
    };

    return (
        <KomatsuPC2007GalileoInjectionPumpCalibrationProcessClient
            currentPost={currentPost}
            publicationDate={publicationDate}
            latestPosts={latestPosts}
            jsonLd={jsonLd}
            currentPostTitle={currentPostTitle}
        />
    );
}