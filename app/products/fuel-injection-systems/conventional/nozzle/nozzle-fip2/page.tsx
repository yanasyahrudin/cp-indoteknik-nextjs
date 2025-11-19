import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import NozzleFip2DetailsClient from './NozzleFip2DetailsClient';

const categoryDetails = {
    name: 'Nozzle FIP 2',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721881115/cp-indoteknik-v3/productsNozzle/DSC_0651-removebg-preview_qphkvt.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas untuk sistem injeksi bahan bakar diesel di Indo Teknik.`,
    keywords: [
        'Nozzle FIP 2',
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

export default function NozzleFip2DetailsPage() {
    return <NozzleFip2DetailsClient />;
}