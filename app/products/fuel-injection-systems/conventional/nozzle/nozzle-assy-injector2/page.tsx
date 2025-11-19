import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import NozzleAssyInjector2DetailsClient from './NozzleAssyInjector2DetailsClient';

const categoryDetails = {
    name: 'Nozzle Assy Injector',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721880466/cp-indoteknik-v3/productsNozzle/nozzle_assy_DSC_0510-removebg-preview_nfcigk.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas untuk sistem injeksi bahan bakar diesel di Indo Teknik.`,
    keywords: [
        'Nozzle Assy Injector 2',
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

export default function NozzleAssyInjector2DetailsPage() {
    return <NozzleAssyInjector2DetailsClient />;
}