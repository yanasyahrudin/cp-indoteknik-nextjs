import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import ElectricGrinderDetailsClient from './ElectricGrinderDetailsClient';

const categoryDetails = {
    name: 'Electric Grinder',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1723780076/cp-indoteknik-v3/productsPowerTool/Gerinda_Listrik_GWS-removebg-preview_d69m1d.png',
};

export const metadata = {
    title: 'Electric Grinder | Indo Teknik',
    description: 'Electric Grinder untuk kebutuhan pemotongan dan penghalusan material. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Electric Grinder',
        'gerinda listrik',
        'power tool',
        'alat teknik',
        'Indo Teknik',
        'alat industri',
        'alat pertukangan',
        'Bosch',
        'alat konstruksi',
        'grinder',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/power-tool/electric-grinder',
    },
    openGraph: {
        title: 'Electric Grinder | Indo Teknik',
        description: 'Electric Grinder untuk kebutuhan pemotongan dan penghalusan material. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Electric Grinder',
            },
        ],
    },
};

export default function ElectricGrinderDetailsPage() {
    return <ElectricGrinderDetailsClient />;
}