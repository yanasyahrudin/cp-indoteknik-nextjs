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
        const categories = [
            {
                id: 1,
                name: 'Brake Pad',
                type: 'Brake',
                description:
                    'High-performance brake pads for optimal stopping power.',
                imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723104828/cp-indoteknik-v3/productsBrake/Screenshot_2024-08-08_142640-removebg-preview_quskyn.png', // Replace with actual image URL
                link: '/products/automotive-aftermarket/brake/brake-pad',
            },
            {
                id: 2,
                name: 'Brake Disc',
                type: 'Brake',
                description:
                    'High-performance brake pads for optimal stopping power.',
                imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723104827/cp-indoteknik-v3/productsBrake/brake_disc-removebg-preview_efrtrq.png', // Replace with actual image URL
                link: '/products/automotive-aftermarket/brake/brake-disc',
            },
        ];
    
    return <BrakeClient categories={categories} />;
}
