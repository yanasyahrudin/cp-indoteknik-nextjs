import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import HalfBallValveClient from './FilterSupplyPumpDetailsClient'; // Pastikan file dan komponen ini ada

const categoryDetails = {
    name: 'Filter Supply Pump',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724838119/cp-indoteknik-v3/productsSupplyPump/Filter_Supply_Pump_Denso_DSC_0897b-removebg-preview_lxync4.png', // Replace with actual image URL
};


export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Half Ball Valve',
        'common rail injector',
        'sistem injeksi bahan bakar',
        'diesel',
        'spare part diesel',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/fuel-injection-systems/common-rail/supply-pump/filter-supply-pump',
    },
    openGraph: {
        title: `${categoryDetails.name} | Indo Teknik`,
        description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: categoryDetails.name,
            },
        ],
    },
};

export default function HalfBallValveDetailsPage() {
    return <HalfBallValveClient />;
}