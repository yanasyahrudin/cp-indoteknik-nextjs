import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import UniversalInjectorToolDetailsClient from './UniversalInjectorToolDetailsClient';

const categoryDetails = {
    name: 'Universal Injector Tool',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721965348/cp-indoteknik-v3/productsTools/universal_injector_tool_azxyuz.png',
};

export const metadata = {
    title: 'Universal Injector Tool | Indo Teknik',
    description: 'Universal Injector Tool untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Universal Injector Tool',
        'universal injector',
        'alat injector universal',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/universal-injector-tool',
    },
    openGraph: {
        title: 'Universal Injector Tool | Indo Teknik',
        description: 'Universal Injector Tool untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Universal Injector Tool',
            },
        ],
    },
};

export default function UniversalInjectorToolDetailsPage() {
    return <UniversalInjectorToolDetailsClient />;
}