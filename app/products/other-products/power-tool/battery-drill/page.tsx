import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import BatteryDrillDetailsClient from './BatteryDrillDetailsClient';

const categoryDetails = {
    name: 'Battery Drill',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724049756/cp-indoteknik-v3/productsPowerTool/Bosch_-_Bor_Tembok_Baterai_12_V-removebg-preview_bmw7no.png',
};

export const metadata = {
    title: 'Battery Drill | Indo Teknik',
    description: 'Battery Drill untuk kebutuhan power tool. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Battery Drill',
        'bor baterai',
        'power tool',
        'alat listrik',
        'Bosch',
        'Indo Teknik',
        'alat teknik',
        'alat industri',
        'bor tembok',
        'alat pertukangan',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/power-tool/battery-drill',
    },
    openGraph: {
        title: 'Battery Drill | Indo Teknik',
        description: 'Battery Drill untuk kebutuhan power tool. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Battery Drill',
            },
        ],
    },
};

export default function BatteryDrillDetailsPage() {
    return <BatteryDrillDetailsClient />;
}