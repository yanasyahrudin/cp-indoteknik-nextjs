import TurboChargerClient from './TurboChargerClient';

export const metadata = {
    title: 'Turbo Charger | Indo Teknik',
    description:
        'Temukan turbo charger, cartridge turbo, repair kit turbo, dan solenoid turbo berkualitas untuk kendaraan dan mesin industri. Indo Teknik menyediakan produk turbo charger asli dari merek terpercaya untuk performa optimal.',
    alternates: {
        canonical:
            'https://indo-teknik.com/products/other-products/turbo-charger',
    },
    keywords: [
        'turbo charger',
        'cartridge turbo',
        'repair kit turbo',
        'solenoid turbo',
        'turbo assy',
        'suku cadang turbo',
        'komponen turbo',
        'Indo Teknik',
        'sparepart otomotif',
        'turbo mesin',
        'produk turbo charger',
    ],
    openGraph: {
        title: 'Turbo Charger | Indo Teknik',
        description:
            'Temukan turbo charger, cartridge turbo, repair kit turbo, dan solenoid turbo berkualitas untuk kendaraan dan mesin industri. Indo Teknik menyediakan produk turbo charger asli dari merek terpercaya untuk performa optimal.',
        url: 'https://indo-teknik.com/products/other-products/turbo-charger',
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
        title: 'Turbo Charger | Indo Teknik',
        description:
            'Temukan turbo charger, cartridge turbo, repair kit turbo, dan solenoid turbo berkualitas untuk kendaraan dan mesin industri. Indo Teknik menyediakan produk turbo charger asli dari merek terpercaya untuk performa optimal.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function TurboChargerPage() {
    return <TurboChargerClient />;
}
