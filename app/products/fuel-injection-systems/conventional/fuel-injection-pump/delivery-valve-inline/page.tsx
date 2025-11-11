import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import DeliveryValveInlineDetailsClient from './DeliveryValveInlineDetailsClient';

const categoryDetails = {
    name: 'Delivery Valve Inline',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721447771/cp-indoteknik-v3/productsFuelInjectionPump/in-line/Delivery_Valve-removebg-preview_iyax79.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Delivery Valve Inline',
        'delivery valve',
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
};

export default function DeliveryValveInlineDetailsPage() {
    return <DeliveryValveInlineDetailsClient />;
}