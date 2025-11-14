import NozzleClient from './NozzleClient';

export const revalidate = 60;

export const metadata = {
    title: 'Layanan Nozzle | Indo Teknik',
    description:
        'Layanan perbaikan, pembersihan, penggantian, dan pengujian nozzle oleh Indo Teknik. Hubungi kami untuk solusi nozzle terbaik.',
    alternates: {
        canonical: 'https://indo-teknik.com/services/conventional/nozzle',
    },
    keywords: [
        'perbaikan nozzle',
        'jasa nozzle',
        'service nozzle',
        'Indo Teknik',
        'alamat indo teknik',
        'jam operasional indo teknik',
        'kontak indo teknik',
        'nozzle diesel',
        'nozzle injektor',
        'nozzle mesin',
    ],
    openGraph: {
        title: 'Layanan Nozzle | Indo Teknik',
        description:
            'Layanan perbaikan, pembersihan, penggantian, dan pengujian nozzle oleh Indo Teknik. Hubungi kami untuk solusi nozzle terbaik.',
        url: 'https://indo-teknik.com/services/conventional/nozzle',
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
        title: 'Layanan Nozzle | Indo Teknik',
        description:
            'Layanan perbaikan, pembersihan, penggantian, dan pengujian nozzle oleh Indo Teknik. Hubungi kami untuk solusi nozzle terbaik.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function NozzlePage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Layanan Nozzle',
        description: 'Nozzle adalah komponen penting dalam sistem injeksi bahan bakar yang berfungsi untuk menyemprotkan bahan bakar ke dalam ruang bakar mesin. Kami menyediakan layanan perbaikan, pembersihan, dan penggantian nozzle untuk memastikan performa mesin Anda optimal. Layanan kami meliputi pembersihan, perbaikan, penggantian, dan pengujian nozzle dengan standar kualitas tinggi.',
    };
    return <NozzleClient jsonLd={jsonLd} />;
}
