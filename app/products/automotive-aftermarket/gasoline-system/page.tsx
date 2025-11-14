import FilterClient from './GasolineSystemClient';
import categories from './../../../data/gasolineSystem';
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
        openGraph: {
        title: 'Gasoline System | Indo Teknik',
        description:
            'Temukan komponen sistem bensin aftermarket seperti fuel pump, injector, regulator, dan filter bahan bakar untuk mobil. Solusi terbaik menjaga performa dan efisiensi mesin di Indo Teknik.',
        url: 'https://indo-teknik.com/products/automotive-aftermarket/gasoline-system',
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
        title: 'Gasoline System | Indo Teknik',
        description:
            'Temukan komponen sistem bensin aftermarket seperti fuel pump, injector, regulator, dan filter bahan bakar untuk mobil. Solusi terbaik menjaga performa dan efisiensi mesin di Indo Teknik.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function FilterPage() {
    return <FilterClient categories={categories} />;
}
