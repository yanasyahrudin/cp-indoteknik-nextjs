import categories from '@/app/data/powerToolCategory';
import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import DistanceMeasuringDetailsClient from './DistanceMeasuringDetailsClient';

const categoryDetails = {
    name: 'Distance Measuring Tool',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724033018/cp-indoteknik-v3/productsPowerTool/measuring_tools_GLM_30-23-removebg-preview_jz6cyw.png',
};

export const metadata = {
    title: 'Distance Measuring Tool | Indo Teknik',
    description:
        'Distance Measuring Tool untuk kebutuhan pengukuran jarak secara presisi. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Distance Measuring Tool',
        'alat ukur jarak',
        'power tool',
        'alat teknik',
        'Bosch',
        'Indo Teknik',
        'alat industri',
        'alat pertukangan',
        'GLM 30-23',
        'measuring tools',
    ],
    alternates: {
        canonical:
            'https://indo-teknik.com/products/other-products/power-tool/distance-measuring-tool',
    },
    openGraph: {
        title: 'Distance Measuring Tool | Indo Teknik',
        description:
            'Distance Measuring Tool untuk kebutuhan pengukuran jarak secara presisi. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Distance Measuring Tool',
            },
        ],
    },
};

export default function DistanceMeasuringToolDetailsPage() {
    const categoryDetails = {
        name: 'Distance Measuring Tool',
        description: descriptionDetailCategory,
        imageUrl:
            'https://res.cloudinary.com/dcbryptkx/image/upload/v1724033018/cp-indoteknik-v3/productsPowerTool/measuring_tools_GLM_30-23-removebg-preview_jz6cyw.png', // Replace with actual image URL
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
        <DistanceMeasuringDetailsClient
            categoryDetails={categoryDetails}
            shuffledCategories={shuffledCategories}
            jsonLd={jsonLd}
        />
    );
}
