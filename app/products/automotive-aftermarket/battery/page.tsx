import BaterryClient from './BatteryClient';

export const metadata = {
    title: 'Battery | Indo Teknik',
    description:
        'Temukan berbagai jenis aki/battery aftermarket seperti dry charged, dry charged motorcycle, dan maintenance free untuk kendaraan mobil dan motor. Indo Teknik menyediakan produk battery berkualitas untuk performa optimal dan daya tahan lama.',
    alternates: {
        canonical:
            'https://indo-teknik.com/products/automotive-aftermarket/battery',
    },
    keywords: [
        'battery',
        'aki',
        'automotive battery',
        'aftermarket battery',
        'dry charged',
        'maintenance free',
        'dry charged motorcycle',
        'aki mobil',
        'aki motor',
        'suku cadang otomotif',
        'Indo Teknik',
        'produk battery',
        'sparepart aki',
    ],
        openGraph: {
        title: 'Battery | Indo Teknik', // Judul halaman
        description:
            'Temukan berbagai jenis aki/battery aftermarket seperti dry charged, dry charged motorcycle, dan maintenance free untuk kendaraan mobil dan motor. Indo Teknik menyediakan produk battery berkualitas untuk performa optimal dan daya tahan lama.', // Deskripsi halaman
        url: 'https://indo-teknik.com/products/automotive-aftermarket/battery', // URL halaman
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
        title: 'Battery | Indo Teknik', // Judul halaman
        description:
            'Temukan berbagai jenis aki/battery aftermarket seperti dry charged, dry charged motorcycle, dan maintenance free untuk kendaraan mobil dan motor. Indo Teknik menyediakan produk battery berkualitas untuk performa optimal dan daya tahan lama.', // Deskripsi halaman
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function BatteryPage() {
    return <BaterryClient />;
}
