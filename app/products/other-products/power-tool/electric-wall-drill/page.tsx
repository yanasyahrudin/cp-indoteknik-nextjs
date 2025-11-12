import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import CoverInjectorLDetails from './ElectricWallDrillDetailsClient'

const categoryDetails = {
    name: 'Electric Wall Drill',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1723780077/cp-indoteknik-v3/productsPowerTool/BOSCH_BOR_TEMBOK_LISTRIK_GSB-removebg-preview_xeygas.png', // Replace with actual image URL
};

export const metadata = {
    title: 'Cover Injector L | Indo Teknik',
    description: 'Cover Injector L untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Cover Injector L',
        'cover injector',
        'sistem injeksi bahan bakar',
        'diesel',
        'spare part diesel',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/power-tool/electric-wall-drill',
    },
    openGraph: {
        title: 'Cover Injector L | Indo Teknik',
        description: 'Cover Injector L untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Cover Injector L',
            },
        ],
    },
};

export default function CoverLDetailsPage() {
    return <CoverInjectorLDetails />;
}
