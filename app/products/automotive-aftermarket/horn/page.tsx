import HornClient from './HornClient';
import categories from '../../../data/hornCategory';

export const revalidate = 60;
export const metadata = {
    title: 'Klakson | Indo Teknik',
    description:
        'Jual berbagai jenis klakson aftermarket untuk mobil dan motor seperti disc compact, megatone, fanfare, dan piccolo. Produk klakson berkualitas untuk keselamatan dan kenyamanan berkendara hanya di Indo Teknik.',
    alternates: {
        canonical:
            'https://indo-teknik.com/products/automotive-aftermarket/horn',
    },
    keywords: [
        'klakson',
        'horn',
        'disc compact',
        'europa',
        'fanfare compact',
        'megatone',
        'motorcycle mini',
        'piccolo',
        'klakson mobil',
        'klakson motor',
        'sparepart klakson',
        'automotive aftermarket',
        'Indo Teknik',
        'suku cadang mobil',
        'suku cadang motor',
        'keselamatan berkendara',
        'aksesoris kendaraan',
    ],
    openGraph: {
        title: 'Klakson | Indo Teknik',
        description:
            'Jual berbagai jenis klakson aftermarket untuk mobil dan motor seperti disc compact, megatone, fanfare, dan piccolo. Produk klakson berkualitas untuk keselamatan dan kenyamanan berkendara hanya di Indo Teknik.',
        url: 'https://indo-teknik.com/products/automotive-aftermarket/horn',
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
        title: 'Klakson | Indo Teknik',
        description:
            'Jual berbagai jenis klakson aftermarket untuk mobil dan motor seperti disc compact, megatone, fanfare, dan piccolo. Produk klakson berkualitas untuk keselamatan dan kenyamanan berkendara hanya di Indo Teknik.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function HornPage() {
    return <HornClient categories={categories} />;
}
