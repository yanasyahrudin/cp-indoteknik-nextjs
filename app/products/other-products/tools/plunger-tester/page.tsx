import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import CoverInjectorLDetails from './PlungerTesterDetailsClient'

const categoryDetails = {
    name: 'Plunger Tester',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839439/cp-indoteknik-v3/productsTools/PLUNGER_TESTER_NOZZLE_DSC_0136b-removebg-preview_tefzwb_hqdcnr_do4v52.png', // Replace with actual image URL
};
export const revalidate = 60;
export const metadata = {
    title: 'Plunger Tester | Indo Teknik',
    description: 'Plunger Tester untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Plunger Tester',
        'plunger tester',
        'alat uji plunger',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/plunger-tester',
    },
    openGraph: {
        title: 'Plunger Tester | Indo Teknik',
        description: 'Plunger Tester untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Plunger Tester',
            },
        ],
    },
};

export default function CoverLDetailsPage() {
    return <CoverInjectorLDetails />;
}
