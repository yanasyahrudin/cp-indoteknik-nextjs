import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import NozzleAssyPencilDetailsClient from './NozzleAssyPencilDetailsClient';

const categoryDetails = {
    name: 'Nozzle Assy Pencil',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721880467/cp-indoteknik-v3/productsNozzle/nozzle_assy_DSC_0166b-removebg-preview_ryuzfm.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas untuk sistem injeksi bahan bakar diesel di Indo Teknik.`,
    keywords: [
        'Nozzle Assy Pencil',
        'nozzle pencil injector',
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

export default function NozzleAssyPencilDetailsPage() {
    return <NozzleAssyPencilDetailsClient />;
}