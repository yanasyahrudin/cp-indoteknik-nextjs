import categories from '@/app/data/fipCategory';
import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import LinerFeedPumpDetailsClient from './LinerFeedPumpDetailsClient';

const categoryDetails = {
    name: 'Liner Feed Pump',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721447681/cp-indoteknik-v3/productsFuelInjectionPump/rotary/Liner_Feedpump-removebg-preview_qf17co.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Liner Feed Pump',
        'liner feed pump injection',
        'fuel injection pump',
        'rotary pump',
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
    twitter: {
        card: 'summary_large_image',
        title: `${categoryDetails.name} | Indo Teknik`,
        description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
        images: [categoryDetails.imageUrl],
    },
};

export default function LinerFeedPumpDetailsPage() {
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
        <LinerFeedPumpDetailsClient
            shuffledCategories={shuffledCategories}
            categoryDetails={categoryDetails}
            jsonLd={jsonLd}
        />
    );
}
