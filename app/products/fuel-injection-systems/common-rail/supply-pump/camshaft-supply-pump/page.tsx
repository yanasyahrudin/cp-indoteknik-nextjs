import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import CamshaftSupplyPumpDetailsClient from './CamshaftSupplyPumpDetailsClient'; // Pastikan file dan komponen ini ada

const categoryDetails = {
    name: 'Camshaft Supply Pump',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721812151/cp-indoteknik-v3/productsSupplyPump/DSC_0110b-removebg-preview_u8xfv1.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Camshaft Supply Pump',
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

export default function CamshaftSupplyPumpDetailsPage() {
    return <CamshaftSupplyPumpDetailsClient />;
}