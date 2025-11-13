import FabricationClient from './FabricationClient';

export const metadata = {
    title: 'Layanan Fabrikasi | Indo Teknik',
    description:
        'Layanan fabrikasi, modifikasi, dan pengelasan mesin diesel di Indo Teknik Pekanbaru. Didukung teknisi berpengalaman dan peralatan modern untuk kebutuhan industri dan otomotif Anda.',
    alternates: {
        canonical: 'https://indo-teknik.com/services/fabrication/fabrication',
    },
    keywords: [
        'servis fabrikasi mesin',
        'pengelasan mesin diesel',
        'modifikasi mesin diesel',
        'fabrikasi Pekanbaru',
        'Indo Teknik Pekanbaru',
        'teknisi fabrikasi profesional',
        'bengkel fabrikasi Pekanbaru',
        'alamat Indo Teknik',
        'jam operasional Indo Teknik',
        'kontak Indo Teknik',
    ],
    openGraph: {
        title: 'Layanan Fabrikasi | Indo Teknik',
        description:
            'Layanan fabrikasi, modifikasi, dan pengelasan mesin diesel di Indo Teknik Pekanbaru. Didukung teknisi berpengalaman dan peralatan modern untuk kebutuhan industri dan otomotif Anda.',
        url: 'https://indo-teknik.com/services/fabrication/fabrication',
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
        title: 'Layanan Fabrikasi | Indo Teknik',
        description:
            'Layanan fabrikasi, modifikasi, dan pengelasan mesin diesel di Indo Teknik Pekanbaru. Didukung teknisi berpengalaman dan peralatan modern untuk kebutuhan industri dan otomotif Anda.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function FabricationPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Layanan Fabrikasi',
        description:
            'Kami menawarkan layanan fabrikasi profesional untuk berbagai keperluan industri dan komersial. Tim ahli kami berpengalaman dalam berbagai teknik fabrikasi, termasuk pengelasan dan perbaikan mesin diesel. Didukung oleh teknisi berpengalaman dan peralatan modern untuk kebutuhan industri dan otomotif Anda.',
    };
    return <FabricationClient jsonLd={jsonLd} />;
}
