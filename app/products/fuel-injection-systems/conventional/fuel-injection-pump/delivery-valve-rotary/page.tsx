import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import DeliveryValveRotaryDetailsClient from './DeliveryValveRotaryDetailsClient';

const categoryDetails = {
    name: 'Delivery Valve Rotary',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_600/v1721447704/cp-indoteknik-v3/productsFuelInjectionPump/rotary/Delivery_Valve_pbocxp.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Delivery Valve Rotary',
        'delivery valve',
        'fuel injection pump',
        'rotary pump',
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

export default function DeliveryValveRotaryDetailsPage() {
    return <DeliveryValveRotaryDetailsClient />;
}