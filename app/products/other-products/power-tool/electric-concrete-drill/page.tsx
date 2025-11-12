import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import ElectricConcreteDrillDetails from './ElectricConcreteDrillDetails';

const categoryDetails = {
    name: 'Electric Concrete Drill',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1723780076/cp-indoteknik-v3/productsPowerTool/Bor_Beton_Listrik_2kG-removebg-preview_fjs01n.png',
};

export const metadata = {
    title: 'Electric Concrete Drill | Indo Teknik',
    description: 'Electric Concrete Drill untuk kebutuhan pengeboran beton. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Electric Concrete Drill',
        'bor beton listrik',
        'power tool',
        'alat teknik',
        'Indo Teknik',
        'alat industri',
        'alat pertukangan',
        'bor beton',
        'Bosch',
        'alat konstruksi',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/power-tool/electric-concrete-drill',
    },
    openGraph: {
        title: 'Electric Concrete Drill | Indo Teknik',
        description: 'Electric Concrete Drill untuk kebutuhan pengeboran beton. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Electric Concrete Drill',
            },
        ],
    },
};

export default function ElectricConcreteDrillDetailsPage() {
    return <ElectricConcreteDrillDetails />;
}