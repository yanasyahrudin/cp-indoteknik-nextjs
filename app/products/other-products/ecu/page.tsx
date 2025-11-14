import ECUClient from './ECUClient';

export const metadata = {
    title: 'ECU | Indo Teknik',
    description:
        'Temukan ECU (Electronic Control Unit) asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan berbagai pilihan ECU untuk kebutuhan otomotif dan industri.',

    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/ecu',
    },
    keywords: [
        'ECU',
        'Electronic Control Unit',
        'suku cadang diesel',
        'sparepart ECU',
        'Indo Teknik',
        'kontrol injeksi',
        'sparepart otomotif',
        'injeksi bahan bakar',
        'produk ECU',
    ],
    openGraph: {
        title: 'ECU | Indo Teknik',
        description:
            'Temukan ECU (Electronic Control Unit) asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan berbagai pilihan ECU untuk kebutuhan otomotif dan industri.',
        url: 'https://indo-teknik.com/products/other-products/ecu',
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
        title: 'ECU | Indo Teknik',
        description:
            'Temukan ECU (Electronic Control Unit) asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan berbagai pilihan ECU untuk kebutuhan otomotif dan industri.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function ECUPage() {
    const categories = [
            {
                id: 1,
                name: 'Engine Control Unit (ECU)',
                type: 'ECU',
                description:
                    'High-performance engine control unit for precise engine management.',
                imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721376982/cp-indoteknik-v3/productsEcu/20190328_145254-removebg-preview_jgrz1x.png', // Replace with actual image URL
                link: '/products/other-products/ecu/ecu',
            },
            {
                id: 2,
                name: 'Engine Control Unit (ECU)',
                type: 'ECU',
                description:
                    'High-performance engine control unit for precise engine management.',
                imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721378469/cp-indoteknik-v3/productsEcu/High-Quality-D04FR-Engine-Controller-ECU-D04FR-004559-0281020220-for-Kobelco-SK130-8-SK140-8-SK135SR-removebg-preview_fmdog4.png', // Replace with actual image URL
                link: '/products/other-products/ecu/ecu2',
            },
            {
                id: 3,
                name: 'Engine Control Unit (ECU)',
                type: 'ECU',
                description:
                    'High-performance engine control unit for precise engine management.',
                imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721378638/cp-indoteknik-v3/productsEcu/S000000621-01-112500-1201-is-for-DENSO-engine-ECU-control-module-for-XCMG-Oman-trucks-and-removebg-preview_yt5baw.png', // Replace with actual image URL
                link: '/products/other-products/ecu/ecu3',
            },
        ];
    return <ECUClient categories={categories} />;
}
