import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import GasketInlineDetailsClient from './GasketInlineDetailsClient';

const categoryDetails = {
    name: 'Gasket & Repair Kit Inline',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721465059/cp-indoteknik-v3/productsFuelInjectionPump/in-line/pc33240617-kit_perbaikan_pompa_injeksi_bahan_bakar_mobil_diesel_801671_190440_0390-removebg-preview_ckq0oy.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Gasket Inline',
        'Repair Kit Inline',
        'gasket injection pump',
        'repair kit injection pump',
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

export default function GasketInlineDetailsPage() {
    return <GasketInlineDetailsClient />;
}