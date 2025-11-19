import BrakeDiscDetailsClient from './BrakeDiscDetailsClient';
import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '../../../../data/brakeCatgeory';
export const dynamic = "force-static";
const categoryDetails = {
    name: 'Brake Disc',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1723104827/cp-indoteknik-v3/productsBrake/brake_disc-removebg-preview_efrtrq.png', // Replace with actual image URL
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `Telusuri kategori ${categoryDetails.name} untuk komponen otomotif dan mesin berkualitas terbaik. Temukan informasi detail tentang ${categoryDetails.name} dan suku cadang terkait di Indo Teknik.`,
    keywords: [
        categoryDetails.name,
        'komponen otomotif',
        'part diesel',
        'Indo Teknik',
        'Automotive Aftermarket',
    ],
    alternates: {
        canonical:
            'https://indo-teknik.com/products/automotive-aftermarket/brake/brake-disc',
    },
    openGraph: {
        title: `${categoryDetails.name} | Indo Teknik`,
        description: `Telusuri kategori ${categoryDetails.name} untuk komponen otomotif dan mesin berkualitas terbaik. Temukan informasi detail tentang ${categoryDetails.name} dan suku cadang terkait di Indo Teknik.`,
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
        description: `Telusuri kategori ${categoryDetails.name} untuk komponen otomotif dan mesin berkualitas terbaik. Temukan informasi detail tentang ${categoryDetails.name} dan suku cadang terkait di Indo Teknik.`,
        images: [categoryDetails.imageUrl],
    },
};

export default function BrakeDiscPage() {
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

    return <BrakeDiscDetailsClient 
        categoryDetails={categoryDetails}
        shuffledCategories={shuffledCategories}
        jsonLd={jsonLd}
    />;
}
