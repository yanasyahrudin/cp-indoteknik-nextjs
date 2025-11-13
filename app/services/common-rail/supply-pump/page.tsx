import SupplyPumpClient from './SupplyPumpClient';

export const metadata = {
    title: 'Layanan Supply Pump | Indo Teknik',
    description:
        'Layanan perbaikan dan servis supply pump common rail diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.',
    alternates: {
        canonical: 'https://indo-teknik.com/services/common-rail/supply-pump',
    },
    keywords: [
        'servis supply pump diesel',
        'perbaikan supply pump common rail',
        'supply pump Pekanbaru',
        'Indo Teknik Pekanbaru',
        'teknisi diesel profesional',
        'spare part supply pump',
        'bengkel diesel Pekanbaru',
        'alamat Indo Teknik',
        'jam operasional Indo Teknik',
        'kontak Indo Teknik',
    ],
    openGraph: {
        title: 'Layanan Supply Pump | Indo Teknik',
        description:
            'Layanan perbaikan dan servis supply pump common rail diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.',
        url: 'https://indo-teknik.com/services/common-rail/supply-pump',
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
        title: 'Layanan Supply Pump | Indo Teknik',
        description:
            'Layanan perbaikan dan servis supply pump common rail diesel di Indo Teknik Pekanbaru. Teknisi berpengalaman, alat modern, dan jaminan kualitas untuk kebutuhan industri dan otomotif Anda.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function SupplyPumpPage() {

    const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Layanan Supply Pump',
    description:
        'Supply pump adalah komponen penting dalam sistem bahan bakar yang bertugas untuk memompa bahan bakar dari tangki ke mesin. Kami menawarkan layanan perbaikan, pemeliharaan, dan penggantian supply pump dengan fokus pada kualitas dan kepuasan pelanggan. Layanan kami meliputi identifikasi masalah, servis berkala, penggantian part rusak, dan kalibrasi untuk efisiensi optimal.',
};

    return <SupplyPumpClient jsonLd={jsonLd} />;
}
