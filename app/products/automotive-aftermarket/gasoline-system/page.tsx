import FilterClient from './GasolineSystemClient';

export const metadata = {
    title: 'Gasoline System | Indo Teknik',
    description:
        'Temukan komponen sistem bensin aftermarket seperti fuel pump, injector, regulator, dan filter bahan bakar untuk mobil. Solusi terbaik menjaga performa dan efisiensi mesin di Indo Teknik.',
    
        alternates: {
        canonical: 'https://indo-teknik.com/products/automotive-aftermarket/gasoline-system',
    },
    keywords: [
        'gasoline system',
        'fuel pump',
        'injector',
        'regulator bensin',
        'filter bahan bakar',
        'komponen bensin',
        'sparepart mobil',
        'automotive aftermarket',
        'Indo Teknik',
        'performa mesin',
        'efisiensi bahan bakar',
        'suku cadang mobil',
        'sistem injeksi',
        'bahan bakar mobil',
    ],
};

export default function FilterPage() {
    return <FilterClient />;
}
