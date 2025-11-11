import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import NozzleFipDetailsClient from './NozzleFipDetailsClient';

const categoryDetails = {
    name: 'Nozzle FIP',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721881114/cp-indoteknik-v3/productsNozzle/DSC_0314b-removebg-preview_vezxbp.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas untuk sistem injeksi bahan bakar diesel di Indo Teknik.`,
    keywords: [
        'Nozzle FIP',
        'nozzle fip injector',
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
    openGraph: {
        title: `${categoryDetails.name} | Indo Teknik`,
        description: `Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas untuk sistem injeksi bahan bakar diesel di Indo Teknik.`,
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

export default function NozzleFipDetailsPage() {
    return <NozzleFipDetailsClient />;
}