import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import ElectricDrillDetailsClient from './ElectricDrillDetailsClient';

const categoryDetails = {
    name: 'Electric Drill',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1723780076/cp-indoteknik-v3/productsPowerTool/GBM_400_Bor_Bosch_-removebg-preview_x9luvj.png',
};

export const metadata = {
    title: 'Electric Drill | Indo Teknik',
    description: 'Electric Drill untuk kebutuhan pengeboran material. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Electric Drill',
        'bor listrik',
        'power tool',
        'alat teknik',
        'Indo Teknik',
        'alat industri',
        'alat pertukangan',
        'Bosch',
        'bor material',
        'alat konstruksi',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/power-tool/electric-drill',
    },
    openGraph: {
        title: 'Electric Drill | Indo Teknik',
        description: 'Electric Drill untuk kebutuhan pengeboran material. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Electric Drill',
            },
        ],
    },
};

export default function ElectricDrillDetailsPage() {
    return <ElectricDrillDetailsClient />;
}