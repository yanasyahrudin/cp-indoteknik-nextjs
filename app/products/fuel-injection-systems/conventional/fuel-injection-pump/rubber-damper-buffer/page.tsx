import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import RubberDamperBufferDetailsClient from './RubberDamperBufferDetailsClient';

const categoryDetails = {
    name: 'Rubber Damper Buffer',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721447767/cp-indoteknik-v3/productsFuelInjectionPump/in-line/Karet_Damper_Buffer-removebg-preview_f3wozx.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Rubber Damper Buffer',
        'damper buffer injection pump',
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

export default function RubberDamperBufferDetailsPage() {
    return <RubberDamperBufferDetailsClient />;
}