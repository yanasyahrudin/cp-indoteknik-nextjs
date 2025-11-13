import LatheClient from './LatheClient';

export const metadata = {
    title: 'Layanan Bubut | Indo Teknik',
    description:
        'Layanan bubut, fabrikasi, dan modifikasi mesin diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan hasil presisi untuk kebutuhan industri dan otomotif Anda.',

    alternates: {
        canonical: 'https://indo-teknik.com/services/fabrication/lathe',
    },
    keywords: [
        'servis bubut mesin',
        'fabrikasi mesin diesel',
        'modifikasi mesin diesel',
        'bubut Pekanbaru',
        'Indo Teknik Pekanbaru',
        'teknisi bubut profesional',
        'bengkel bubut Pekanbaru',
        'alamat Indo Teknik',
        'jam operasional Indo Teknik',
        'kontak Indo Teknik',
    ],
    openGraph: {
        title: 'Layanan Bubut | Indo Teknik',
        description:
            'Layanan bubut, fabrikasi, dan modifikasi mesin diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan hasil presisi untuk kebutuhan industri dan otomotif Anda.',
        url: 'https://indo-teknik.com/services/fabrication/lathe',
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
        title: 'Layanan Bubut | Indo Teknik',
        description:
            'Layanan bubut, fabrikasi, dan modifikasi mesin diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan hasil presisi untuk kebutuhan industri dan otomotif Anda.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function LathePage() {
    return <LatheClient />;
}
