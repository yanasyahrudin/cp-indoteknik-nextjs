import categories from '@/app/data/powerToolCategory';
import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import CoverInjectorLDetails from './LaserLineDetailsClient';

const categoryDetails = {
    name: 'Laser Line',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724036386/cp-indoteknik-v3/productsPowerTool/sg-11134201-22100-mg1oolluusiv27-removebg-preview_wpnfs5.png', // Replace with actual image URL
};
export const revalidate = 60;
export const metadata = {
    title: 'Cover Injector L | Indo Teknik',
    description:
        'Cover Injector L untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
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
        canonical:
            'https://indo-teknik.com/products/other-products/power-tool/laser-line',
    },
    openGraph: {
        title: 'Cover Injector L | Indo Teknik',
        description:
            'Cover Injector L untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
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
        <CoverInjectorLDetails
            categoryDetails={categoryDetails}
            jsonLd={jsonLd}
            shuffledCategories={shuffledCategories}
        />
    );
}
