import categories from '@/app/data/ecuCategory';
import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import EcuDetailsClient from './EcuDetailsClient';

const categoryDetails = {
    name: 'Engine Control Unit (ECU)',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721376982/cp-indoteknik-v3/productsEcu/20190328_145254-removebg-preview_jgrz1x.png', // Replace with actual image URL
};
export const dynamic = "force-static";
export const metadata = {
    title: 'Engine Control Unit (ECU) | Indo Teknik',
    description:
        'ECU (Engine Control Unit) untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'ECU',
        'Engine Control Unit',
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
        canonical: 'https://indo-teknik.com/products/other-products/ecu/ecu',
    },
    openGraph: {
        title: 'Engine Control Unit (ECU) | Indo Teknik',
        description:
            'ECU (Engine Control Unit) untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Engine Control Unit (ECU)',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Engine Control Unit (ECU) | Indo Teknik',
        description:
            'ECU (Engine Control Unit) untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            categoryDetails.imageUrl,
        ],
    }
};

export default function EcuDetailsPage() {
    // Function to shuffle array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const filteredCategories = categories.filter(
        (category) => category.imgSrc !== categoryDetails.imageUrl
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
        <EcuDetailsClient
            shuffledCategories={shuffledCategories}
            categoryDetails={categoryDetails}
            jsonLd={jsonLd}
        />
    );
}
