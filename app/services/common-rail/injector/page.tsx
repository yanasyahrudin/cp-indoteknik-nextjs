import InjectorClient from './InjectorClient';

export const revalidate = 60;

export const metadata = {
    title: 'Layanan Injector | Indo Teknik',
    description:
        'Layanan perbaikan dan servis injector common rail diesel di Indo Teknik Pekanbaru. Teknisi profesional, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.',

    alternates: {
        canonical: 'https://indo-teknik.com/services/common-rail/injector',
    },
    keywords: [
        'servis injector diesel',
        'perbaikan injector common rail',
        'injector Pekanbaru',
        'Indo Teknik Pekanbaru',
        'teknisi diesel profesional',
        'spare part injector',
        'bengkel diesel Pekanbaru',
        'alamat Indo Teknik',
        'jam operasional Indo Teknik',
        'kontak Indo Teknik',
    ],
    openGraph: {
        title: 'Layanan Injector | Indo Teknik',
        description:
            'Layanan perbaikan dan servis injector common rail diesel di Indo Teknik Pekanbaru. Teknisi profesional, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.',
        url: 'https://indo-teknik.com/services/common-rail/injector',
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
        title: 'Layanan Injector | Indo Teknik',
        description:
            'Layanan perbaikan dan servis injector common rail diesel di Indo Teknik Pekanbaru. Teknisi profesional, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function InjectorPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Layanan Injector',
        description: 'Injector adalah bagian penting dari sistem bahan bakar yang menyemprotkan bahan bakar ke ruang bakar mesin dengan presisi tinggi. Kami menawarkan berbagai layanan untuk memastikan injector Anda berfungsi secara optimal, termasuk diagnosis, pemeliharaan, pengujian, dan pembersihan.',
    };
    return <InjectorClient jsonLd={jsonLd} />;
}
