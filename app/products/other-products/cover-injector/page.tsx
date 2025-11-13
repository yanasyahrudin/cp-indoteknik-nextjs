import CoverInjectorClient from './CoverInjectorClient';

export const metadata = {
    title: 'Cover Injector | Indo Teknik',
    description:
        'Temukan cover injector asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan berbagai pilihan cover injector untuk kebutuhan otomotif dan industri.',

    alternates: {
        canonical:
            'https://indo-teknik.com/products/other-products/cover-injector',
    },
    keywords: [
        'cover injector',
        'cover injektor',
        'suku cadang diesel',
        'sparepart injeksi',
        'Indo Teknik',
        'cover injektor l',
        'cover injektor t',
        'sparepart otomotif',
        'injeksi bahan bakar',
        'produk cover injector',
    ],
    openGraph: {
        title: 'Cover Injector | Indo Teknik',
        description:
            'Temukan cover injector asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan berbagai pilihan cover injector untuk kebutuhan otomotif dan industri.',
        url: 'https://indo-teknik.com/products/other-products/cover-injector',
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
        title: 'Cover Injector | Indo Teknik',
        description:
            'Temukan cover injector asli dan berkualitas untuk sistem injeksi bahan bakar diesel. Indo Teknik menyediakan berbagai pilihan cover injector untuk kebutuhan otomotif dan industri.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function CoverInjectorPage() {
    return <CoverInjectorClient />;
}
