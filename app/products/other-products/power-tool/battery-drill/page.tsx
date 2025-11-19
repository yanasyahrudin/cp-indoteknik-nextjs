import categories from '@/app/data/powerToolCategory';
import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import BatteryDrillDetailsClient from './BatteryDrillDetailsClient';

const categoryDetails = {
    name: 'Battery Drill',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724049756/cp-indoteknik-v3/productsPowerTool/Bosch_-_Bor_Tembok_Baterai_12_V-removebg-preview_bmw7no.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: 'Battery Drill | Indo Teknik',
    description:
        'Battery Drill untuk kebutuhan power tool. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
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
        canonical:
            'https://indo-teknik.com/products/other-products/power-tool/battery-drill',
    },
    openGraph: {
        title: 'Battery Drill | Indo Teknik',
        description:
            'Battery Drill untuk kebutuhan power tool. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
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
    const categoryDetails = {
        name: 'Battery Drill',
        description: descriptionDetailCategory,
        imageUrl:
            'https://res.cloudinary.com/dcbryptkx/image/upload/v1724049756/cp-indoteknik-v3/productsPowerTool/Bosch_-_Bor_Tembok_Baterai_12_V-removebg-preview_bmw7no.png', // Replace with actual image URL
    };
    // Function to shuffle array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const filteredCategories = categories.filter(
        (category) => category.name !== categoryDetails.name
    );

    const shuffledCategories = shuffleArray([...filteredCategories]);
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: categoryDetails.name,
        image: categoryDetails.imageUrl,
        description: categoryDetails.description,
    };
    return (
        <BatteryDrillDetailsClient
            shuffledCategories={shuffledCategories}
            categoryDetails={categoryDetails}
            jsonLd={jsonLd}
        />
    );
}
