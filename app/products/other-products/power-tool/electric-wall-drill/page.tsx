import categories from '@/app/data/powerToolCategory';
import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import CoverInjectorLDetails from './ElectricWallDrillDetailsClient';

const categoryDetails = {
    name: 'Electric Wall Drill',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1723780077/cp-indoteknik-v3/productsPowerTool/BOSCH_BOR_TEMBOK_LISTRIK_GSB-removebg-preview_xeygas.png', // Replace with actual image URL
};
export const dynamic = "force-static";
export const metadata = {
    title: 'Electric Wall Drill | Indo Teknik',
    description:
        'Electric Wall Drill untuk pengeboran presisi pada berbagai material. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Electric Wall Drill',
        'bor tembok listrik',
        'pengeboran presisi',
        'alat bor',
        'spare part alat bor',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'power tool',
        
    ],
    alternates: {
        canonical:
            'https://indo-teknik.com/products/other-products/power-tool/electric-wall-drill',
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
            shuffledCategories={shuffledCategories}
            jsonLd={jsonLd}
        />
    );
}
