import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';
import categories from '@/app/data/fipCategory';
import PlungerDetailsClient from './PlungerDetailsClient';

const categoryDetails = {
    name: 'Plunger',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721447766/cp-indoteknik-v3/productsFuelInjectionPump/in-line/Plunger-removebg-preview_vkflsm.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Plunger',
        'plunger injection pump',
        'fuel injection pump',
        'in-line pump',
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

export default function PlungerDetailsPage() {
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
        <PlungerDetailsClient
            shuffledCategories={shuffledCategories}
            categoryDetails={categoryDetails}
            jsonLd={jsonLd}
        />
    );
}
