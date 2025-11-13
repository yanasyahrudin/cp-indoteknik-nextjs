import BrakeClient from './BrakeClient';

export const metadata = {
    title: 'Rem | Indo Teknik',
    description:
        'Temukan berbagai jenis rem aftermarket seperti brake disc, brake pad, dan komponen rem lainnya untuk kendaraan mobil dan motor. Indo Teknik menyediakan produk rem berkualitas untuk performa optimal dan keselamatan berkendara.',
    alternates: {
        canonical:
            'https://indo-teknik.com/products/automotive-aftermarket/brake',
    },
    keywords: [
        'brake',
        'rem',
        'brake disc',
        'brake pad',
        'komponen rem',
        'aftermarket brake',
        'rem mobil',
        'rem motor',
        'suku cadang rem',
        'Indo Teknik',
        'sparepart otomotif',
        'produk rem',
        'automotive aftermarket',
        'keselamatan berkendara',
    ],
    openGraph: {
        title: 'Rem | Indo Teknik',
        description:
            'Temukan berbagai jenis rem aftermarket seperti brake disc, brake pad, dan komponen rem lainnya untuk kendaraan mobil dan motor. Indo Teknik menyediakan produk rem berkualitas untuk performa optimal dan keselamatan berkendara.',
        url: 'https://indo-teknik.com/products/automotive-aftermarket/brake',
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
        title: 'Rem | Indo Teknik',
        description:
            'Temukan berbagai jenis rem aftermarket seperti brake disc, brake pad, dan komponen rem lainnya untuk kendaraan mobil dan motor. Indo Teknik menyediakan produk rem berkualitas untuk performa optimal dan keselamatan berkendara.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function BrakePage() {
    return <BrakeClient />;
}
