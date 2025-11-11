import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import CupNozzleInjectorClient from './CupNozzleInjectorDetailsClient'; // Pastikan file dan komponen ini ada

const categoryDetails = {
    name: 'Cup Nozzle Injector',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_600/v1721206188/cp-indoteknik-v3/productsInjetcor/DSC_0694_copy_ujmdkj.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Cup Nozzle Injector',
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

export default function CupNozzleInjectorDetailsPage() {
    return <CupNozzleInjectorClient />;
}