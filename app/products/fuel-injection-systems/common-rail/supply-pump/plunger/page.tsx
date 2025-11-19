import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import PlungerDetailsClient from './PlungerDetailsClient';

const categoryDetails = {
    name: 'Plunger',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_600/v1721357271/cp-indoteknik-v3/productsSupplyPump/gvasy7g7a8s_kmfyir.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Plunger',
        'plunger supply pump',
        'common rail supply pump',
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
        canonical: 'https://indo-teknik.com/products/fuel-injection-systems/common-rail/supply-pump/plunger',
    },
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
        images: [
            categoryDetails.imageUrl,
        ],
    },
};

export default function PlungerDetailsPage() {
    return <PlungerDetailsClient />;
}