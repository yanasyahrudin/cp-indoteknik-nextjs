import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import RotorSetFeedPumpDetailsClient from './RotorSetFeedPumpDetailsClient';

const categoryDetails = {
    name: 'Rotor Set Feed Pump',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721372685/cp-indoteknik-v3/productsSupplyPump/DSC_0122b-removebg-preview_x9f6dm.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Rotor Set Feed Pump',
        'feed pump',
        'rotor set',
        'supply pump',
        'common rail supply pump',
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

export default function RotorSetFeedPumpDetailsPage() {
    return <RotorSetFeedPumpDetailsClient />;
}