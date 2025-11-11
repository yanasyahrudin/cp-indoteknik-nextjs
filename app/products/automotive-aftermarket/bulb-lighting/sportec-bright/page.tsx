
import SportecBulbDetails from './SportecBrightDetailsClient';
import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

const categoryDetails = {
    name: 'Sportec Bulb',
    description: descriptionDetailCategory,   imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1723111449/cp-indoteknik-v3/productsBulbLighting/bosch_sportec-removebg-preview_pqva6q.png', // Replace with actual image URL
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
};

export default function SportecBulbDetailsPage() {
    return <SportecBulbDetails />;
}