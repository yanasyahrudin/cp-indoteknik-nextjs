import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import ToolsCatDetailsClient from './ToolsCatDetailsClient';

const categoryDetails = {
    name: 'Tool Injector Caterpillar',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839447/cp-indoteknik-v3/productsTools/TOOLS_CAT_DSC_0510_copy_np60qw_t7aroq_w3xvjc.png',
};

export const metadata = {
    title: 'Tool Injector Caterpillar | Indo Teknik',
    description: 'Tool Injector Caterpillar untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Tool Injector Caterpillar',
        'tool injector cat',
        'injector caterpillar',
        'alat injector',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/tools-cat',
    },
    openGraph: {
        title: 'Tool Injector Caterpillar | Indo Teknik',
        description: 'Tool Injector Caterpillar untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Tool Injector Caterpillar',
            },
        ],
    },
};

export default function ToolsCatDetailsPage() {
    return <ToolsCatDetailsClient />;
}