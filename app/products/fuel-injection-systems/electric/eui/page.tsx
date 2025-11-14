import EUIClient from './EUIClient';

export const metadata = {
    title: 'EUI | Indo Teknik',
    description:
        'Temukan suku cadang EUI (Electronic Unit Injector) asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan produk dari merek terpercaya seperti Bosch, Itech, dan Zexel, cocok untuk berbagai aplikasi otomotif dan industri.',

    alternates: {
        canonical:
            'https://indo-teknik.com/products/fuel-injection-systems/electric/eui',
    },
    keywords: [
        'EUI',
        'Electronic Unit Injector',
        'suku cadang diesel',
        'fuel injection',
        'Bosch',
        'Itech',
        'Zexel',
        'Indo Teknik',
        'kategori EUI',
        'injektor elektrik',
        'sparepart diesel',
    ],
    openGraph: {
        title: 'EUI | Indo Teknik',
        description:
            'Temukan suku cadang EUI (Electronic Unit Injector) asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan produk dari merek terpercaya seperti Bosch, Itech, dan Zexel, cocok untuk berbagai aplikasi otomotif dan industri.',
        url: 'https://indo-teknik.com/products/fuel-injection-systems/electric/eui',
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
        title: 'EUI | Indo Teknik',
        description:
            'Temukan suku cadang EUI (Electronic Unit Injector) asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan produk dari merek terpercaya seperti Bosch, Itech, dan Zexel, cocok untuk berbagai aplikasi otomotif dan industri.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function EUIPage() {
    const categories = [
        {
            id: 1,
            name: 'EUI (Electronic Unit Injector)',
            type: 'EUI',
            description:
                'Advanced fuel injection system for precise and efficient engine performance.',
            imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721701783/cp-indoteknik-v3/productsEUI/eui_zy8io5.png',
            link: '/products/fuel-injection-systems/electric/eui/eui',
        },
    ];
    return <EUIClient categories={categories} />;
}
