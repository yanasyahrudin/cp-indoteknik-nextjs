import PressClient from './PressClient';
export const revalidate = 60;
export const metadata = {
    title: 'Layanan Press | Indo Teknik',
    description:
        'Layanan press, fabrikasi, dan modifikasi mesin diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan hasil presisi untuk kebutuhan industri dan otomotif Anda.',

    alternates: {
        canonical: 'https://indo-teknik.com/services/fabrication/press',
    },
    keywords: [
        'servis press mesin',
        'fabrikasi mesin diesel',
        'modifikasi mesin diesel',
        'press Pekanbaru',
        'Indo Teknik Pekanbaru',
        'teknisi press profesional',
        'bengkel press Pekanbaru',
        'alamat Indo Teknik',
        'jam operasional Indo Teknik',
        'kontak Indo Teknik',
    ],
    openGraph: {
        title: 'Layanan Press | Indo Teknik',
        description:
            'Layanan press, fabrikasi, dan modifikasi mesin diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan hasil presisi untuk kebutuhan industri dan otomotif Anda.',
        url: 'https://indo-teknik.com/services/fabrication/press',
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
        title: 'Layanan Press | Indo Teknik',
        description:
            'Layanan press, fabrikasi, dan modifikasi mesin diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan hasil presisi untuk kebutuhan industri dan otomotif Anda.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function PressPage() {
        const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Layanan Press',
        description: 'Kami menyediakan layanan press berkualitas tinggi untuk berbagai kebutuhan industri dan komersial. Tim ahli kami berpengalaman dalam menangani berbagai jenis pekerjaan press, mulai dari komponen kecil hingga proyek besar. Layanan kami meliputi pembuatan komponen presisi, perbaikan, pembuatan prototipe, dan produksi massal dengan hasil presisi dan berkualitas tinggi.',
    };
    return <PressClient jsonLd={jsonLd} />;
}
