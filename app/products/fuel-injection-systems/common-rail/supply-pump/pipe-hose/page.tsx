import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import PipeHoseDetailsClient from './PipeHoseDetailsClient';

const categoryDetails = {
    name: 'Pipe Hose',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724838119/cp-indoteknik-v3/productsSupplyPump/Selang_Pipa_Supply_Pump_Tryton_DSC_0888b-removebg-preview_blkpk6.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Pipe Hose',
        'supply pump hose',
        'selang supply pump',
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
        canonical: 'https://indo-teknik.com/products/fuel-injection-systems/common-rail/supply-pump/pipe-hose',
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

export default function PipeHoseDetailsPage() {
    return <PipeHoseDetailsClient />;
}