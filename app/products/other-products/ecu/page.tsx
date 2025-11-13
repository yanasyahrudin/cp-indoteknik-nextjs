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
    return <ECUClient />;
}
