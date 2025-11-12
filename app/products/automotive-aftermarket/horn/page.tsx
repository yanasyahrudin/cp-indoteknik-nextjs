import HornClient from './HornClient';

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
};

export default function HornPage() {
    return <HornClient />;
}
