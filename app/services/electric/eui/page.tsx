import EUIClient from './EUIClient';

export const metadata = {
    title: 'Layanan EUI | Indo Teknik',
    description:
        'Layanan perbaikan dan servis EUI (Electronic Unit Injector) diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.',
    alternates: {
        canonical: 'https://indo-teknik.com/services/electric/eui',
    },
    keywords: [
        'servis EUI diesel',
        'perbaikan EUI',
        'Electronic Unit Injector Pekanbaru',
        'Indo Teknik Pekanbaru',
        'teknisi diesel profesional',
        'spare part EUI',
        'bengkel diesel Pekanbaru',
        'alamat Indo Teknik',
        'jam operasional Indo Teknik',
        'kontak Indo Teknik',
    ],
    openGraph: {
        title: 'Layanan EUI | Indo Teknik',
        description:
            'Layanan perbaikan dan servis EUI (Electronic Unit Injector) diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.',
        url: 'https://indo-teknik.com/services/electric/eui',
        type: 'website',
        images: [
            {
                url: 'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
                width: 1200,
                height: 630,
                alt: 'Indo Teknik - Spare Part Diesel & Servis',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Layanan EUI | Indo Teknik',
        description:
            'Layanan perbaikan dan servis EUI (Electronic Unit Injector) diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function EUIPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Layanan EUI (Electronic Unit Injector)',
        description: 'EUI atau Electronic Unit Injector adalah sistem injeksi bahan bakar canggih yang mengatur jumlah bahan bakar yang disemprotkan ke dalam ruang bakar dengan presisi tinggi. Kami menawarkan layanan profesional untuk perbaikan dan pemeliharaan EUI, meliputi diagnosis, pemeliharaan, pengujian, dan pembersihan oleh teknisi berpengalaman dengan alat modern.',
    };
    return <EUIClient jsonLd={jsonLd} />;
}
