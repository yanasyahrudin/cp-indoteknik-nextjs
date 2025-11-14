import BulbLightingClient from './BulbLightingClient';
import categories from '../../../data/bulbCategory';
export const metadata = {
    title: 'Lampu Bohlam | Indo Teknik',
    description:
        'Temukan berbagai jenis lampu bohlam aftermarket seperti all weather plus, fusion bright, plus 120, rallye, sportec bright, dan standard untuk kendaraan mobil dan motor. Indo Teknik menyediakan produk lampu bohlam berkualitas untuk pencahayaan optimal dan keselamatan berkendara.',
    alternates: {
        canonical:
            'https://indo-teknik.com/products/automotive-aftermarket/bulb-lighting',
    },
    keywords: [
        'lampu bohlam',
        'bulb lighting',
        'all weather plus',
        'fusion bright',
        'plus 120',
        'rallye',
        'sportec bright',
        'standard',
        'lampu mobil',
        'lampu motor',
        'aftermarket lighting',
        'suku cadang lampu',
        'Indo Teknik',
        'produk lampu bohlam',
        'sparepart otomotif',
        'automotive aftermarket',
        'pencahayaan kendaraan',
        'keselamatan berkendara',
    ],
    openGraph: {
        title: 'Lampu Bohlam | Indo Teknik',
        description:
            'Temukan berbagai jenis lampu bohlam aftermarket seperti all weather plus, fusion bright, plus 120, rallye, sportec bright, dan standard untuk kendaraan mobil dan motor. Indo Teknik menyediakan produk lampu bohlam berkualitas untuk pencahayaan optimal dan keselamatan berkendara.',
        url: 'https://indo-teknik.com/products/automotive-aftermarket/bulb-lighting',
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
        title: 'Lampu Bohlam | Indo Teknik',
        description:
            'Temukan berbagai jenis lampu bohlam aftermarket seperti all weather plus, fusion bright, plus 120, rallye, sportec bright, dan standard untuk kendaraan mobil dan motor. Indo Teknik menyediakan produk lampu bohlam berkualitas untuk pencahayaan optimal dan keselamatan berkendara.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function BulbLightingPage() {
    return <BulbLightingClient categories={categories} />;
}
