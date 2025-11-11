import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import PlateCouplingDetailsClient from './PlateCouplingDetailsClient';

const categoryDetails = {
    name: 'Plate Coupling',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721459141/cp-indoteknik-v3/productsFuelInjectionPump/in-line/plate%20coupling%20H54f1686a4d2e4216ac8b8a854eb05115.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Plate Coupling',
        'plate coupling injection pump',
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

export default function PlateCouplingDetailsPage() {
    return <PlateCouplingDetailsClient />;
}