import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import GasketRotaryDetailsClient from './GasketRotaryDetailsClient';

const categoryDetails = {
    name: 'Gasket & Repair Kit Rotary',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721463885/cp-indoteknik-v3/productsFuelInjectionPump/rotary/gasket%20repair%20kit80-0636-hot-sales-common-rail-repair-kits-80-0636-removebg-preview_gumifm.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Gasket Rotary',
        'Repair Kit Rotary',
        'gasket injection pump',
        'repair kit injection pump',
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

export default function GasketRotaryDetailsPage() {
    return <GasketRotaryDetailsClient />;
}