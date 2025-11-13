import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import AerotwinPlusWiperDetails from './AerotwinPlusWiperClient';

const categoryDetails = {
    name: 'Aerotwin Plus Wiper',
    description: descriptionDetailCategory,    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1723169758/cp-indoteknik-v3/productsWiper/aerotwin_plus-removebg-preview_pbzxqa.png', // Replace with actual image URL
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
        canonical: 'https://indo-teknik.com/products/automotive-aftermarket/wiper/aerotwin-plus',
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
        images: [
            categoryDetails.imageUrl,
        ],
    },
};

export default function AerotwinPlusWiperDetailsPage() {
    return <AerotwinPlusWiperDetails />;
}