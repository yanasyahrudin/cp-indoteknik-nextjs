import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import NozzleFIP3DetailsClient from './NozzleFIP3DetailsClient';

const categoryDetails = {
    name: 'Nozzle FIP 3',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721881115/cp-indoteknik-v3/productsNozzle/DSC_0275-removebg-preview_eypeg8.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas untuk sistem injeksi bahan bakar diesel di Indo Teknik.`,
    keywords: [
        'Nozzle FIP 3',
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

export default function NozzleFIP3DetailsPage() {
    return <NozzleFIP3DetailsClient />;
}