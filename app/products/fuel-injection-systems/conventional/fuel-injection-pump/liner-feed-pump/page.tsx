import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import LinerFeedPumpDetailsClient from './LinerFeedPumpDetailsClient';

const categoryDetails = {
    name: 'Liner Feed Pump',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721447681/cp-indoteknik-v3/productsFuelInjectionPump/rotary/Liner_Feedpump-removebg-preview_qf17co.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Liner Feed Pump',
        'liner feed pump injection',
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

export default function LinerFeedPumpDetailsPage() {
    return <LinerFeedPumpDetailsClient />;
}