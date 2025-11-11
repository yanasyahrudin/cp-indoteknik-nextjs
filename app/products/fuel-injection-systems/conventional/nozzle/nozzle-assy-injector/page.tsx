import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import NozzleAssyInjectorDetailsClient from './NozzleAssyInjectorDetailsClient';

const categoryDetails = {
    name: 'Nozzle Assy Injector',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721880466/cp-indoteknik-v3/productsNozzle/nozzle_assy_DSC_0195-removebg-preview_pbscst.png', // Replace with actual image URL
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas untuk sistem injeksi bahan bakar diesel di Indo Teknik.`,
    keywords: [
        'Nozzle Assy Injector',
        'nozzle injector',
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

export default function NozzleAssyInjectorDetailsPage() {
    return <NozzleAssyInjectorDetailsClient />;
}
