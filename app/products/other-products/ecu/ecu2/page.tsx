import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import EcuDetailsClient from './EcuDetailsClient'

const categoryDetails = {
    name: 'Engine Control Unit (ECU)',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721378469/cp-indoteknik-v3/productsEcu/High-Quality-D04FR-Engine-Controller-ECU-D04FR-004559-0281020220-for-Kobelco-SK130-8-SK140-8-SK135SR-removebg-preview_fmdog4.png', // Replace with actual image URL
};

export const metadata = {
    title: 'Engine Control Unit (ECU) | Indo Teknik',
    description: 'ECU (Engine Control Unit) untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'ECU',
        'Engine Control Unit',
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
        canonical: 'https://indo-teknik.com/products/other-products/ecu/ecu2',
    },
    openGraph: {
        title: 'Engine Control Unit (ECU) | Indo Teknik',
        description: 'ECU (Engine Control Unit) untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Engine Control Unit (ECU)',
            },
        ],
    },
};

export default function EcuDetailsPage() {
    return <EcuDetailsClient />;
}
