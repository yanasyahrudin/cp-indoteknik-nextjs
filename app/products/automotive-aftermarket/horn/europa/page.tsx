import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import EuropaHornDetails from './EuropaDetailsClient';

const categoryDetails = {
    name: 'Europa',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1723107502/cp-indoteknik-v3/productsHorn/Bosch-Europa-Car-Horn_4-removebg-preview_qd0xtz.png',
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
        canonical: 'https://indo-teknik.com/products/automotive-aftermarket/horn/europa',
    },
    openGraph: {
        title: `${categoryDetails.name} | Indo Teknik`,
        description: `Telusuri kategori ${categoryDetails.name} untuk komponen otomotif dan mesin berkualitas terbaik. Temukan informasi detail tentang ${categoryDetails.name} dan suku cadang terkait di Indo Teknik.`,
        url: 'https://indo-teknik.com/products/automotive-aftermarket/horn/europa',
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

export default function EuropaHornDetailsPage() {
    return <EuropaHornDetails />;
}