import DryChargedMotorcycleDetailsClient from './DryChargedMotorcycleDetailsClient';
import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

const categoryDetails = {
    name: 'Dry Charged (Motorcycle)',
    description: descriptionDetailCategory,imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724396613/cp-indoteknik-v3/productsBattery/battery_motorcycle_dc_309932af143dab374319fb928946b398-removebg-preview_nysovr.png', // Replace with actual image URL
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

export default function DryChargedPage() {
    return <DryChargedMotorcycleDetailsClient />;
}