import RelayClient from './RelayClient';

export const metadata = {
    title: 'Relay | Indo Teknik',
    description:
        'Temukan berbagai jenis filter aftermarket seperti filter udara, filter oli, dan filter bahan bakar untuk kendaraan mobil dan motor. Indo Teknik menyediakan produk filter berkualitas untuk menjaga performa mesin dan efisiensi bahan bakar.',
    alternates: {
        canonical:
            'https://indo-teknik.com/products/automotive-aftermarket/relay',
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
        title: 'Relay | Indo Teknik',
        description:
            'Temukan berbagai jenis relay aftermarket untuk kendaraan mobil dan motor. Indo Teknik menyediakan produk relay berkualitas untuk sistem kelistrikan yang handal dan aman.',
        url: 'https://indo-teknik.com/products/automotive-aftermarket/relay',
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
        title: 'Relay | Indo Teknik',
        description:
            'Temukan berbagai jenis relay aftermarket untuk kendaraan mobil dan motor. Indo Teknik menyediakan produk relay berkualitas untuk sistem kelistrikan yang handal dan aman.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function RelayPage() {
    return <RelayClient />;
}
