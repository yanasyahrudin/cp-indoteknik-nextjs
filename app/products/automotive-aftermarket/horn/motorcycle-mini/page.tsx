import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import MotorcycleMiniHornDetails from './MotorcycleMiniDetailsClient';

const categoryDetails = {
    name: 'Motorcycle Mini',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1723107502/cp-indoteknik-v3/productsHorn/motorcycle_mini-removebg-preview_phzzyt.png',
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
        canonical: 'https://indo-teknik.com/products/automotive-aftermarket/horn/motorcycle-mini',
    },
    openGraph: {
        title: `${categoryDetails.name} | Indo Teknik`,
        description: `Telusuri kategori ${categoryDetails.name} untuk komponen otomotif dan mesin berkualitas terbaik. Temukan informasi detail tentang ${categoryDetails.name} dan suku cadang terkait di Indo Teknik.`,
        url: 'https://indo-teknik.com/products/automotive-aftermarket/horn/motorcycle-mini',
        type: 'website',
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

export default function MotorcycleMiniHornDetailsPage() {
    return <MotorcycleMiniHornDetails />;
}