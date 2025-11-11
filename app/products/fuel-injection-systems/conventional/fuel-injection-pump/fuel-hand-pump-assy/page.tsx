import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import FuelHandPumpAssyDetailsClient from './FuelHandPumpAssyDetailsClient';

const categoryDetails = {
    name: 'Fuel Hand Pump Assy',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721447771/cp-indoteknik-v3/productsFuelInjectionPump/in-line/Fuel_Handpump_Assy-removebg-preview_f9oukv.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Fuel Hand Pump Assy',
        'fuel hand pump',
        'fuel injection pump',
        'in-line pump',
        'diesel',
        'spare part diesel',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection',
    ],
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

export default function FuelHandPumpAssyDetailsPage() {
    return <FuelHandPumpAssyDetailsClient />;
}