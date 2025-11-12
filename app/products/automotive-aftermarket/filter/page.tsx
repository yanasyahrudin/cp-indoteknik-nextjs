import FilterClient from './FIlterClient';

export const metadata = {
    title: 'Filter | Indo Teknik',
    description:
        'Jual filter udara, filter oli, dan filter bahan bakar untuk mobil dan motor. Produk filter aftermarket berkualitas untuk menjaga performa mesin dan efisiensi kendaraan Anda. Temukan berbagai pilihan filter terbaik di Indo Teknik.',
    alternates: {
        canonical:
            'https://indo-teknik.com/products/automotive-aftermarket/filter',
    },
    keywords: [
        'filter udara',
        'filter oli',
        'filter bahan bakar',
        'filter mobil',
        'filter motor',
        'filter aftermarket',
        'sparepart filter',
        'suku cadang filter',
        'Indo Teknik',
        'otomotif',
        'automotive aftermarket',
        'performa mesin',
        'efisiensi bahan bakar',
        'produk filter',
        'filter kendaraan',
    ],
};

export default function FilterPage() {
    return <FilterClient />;
}
