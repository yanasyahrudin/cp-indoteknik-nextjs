import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import InjectorToolDetails from './InjectorToolDetailsClient';

const categoryDetails = {
    name: 'Injector Tool',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721965740/cp-indoteknik-v3/productsTools/injector_tool_WhatsApp_Image_2021-01-19_at_14.55.58__2_-removebg-preview_l4yasd.png',
};

export const metadata = {
    title: 'Injector Tool | Indo Teknik',
    description: 'Injector Tool untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Injector Tool',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/injector-tool',
    },
    openGraph: {
        title: 'Injector Tool | Indo Teknik',
        description: 'Injector Tool untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Injector Tool',
            },
        ],
    },
};

export default function InjectorToolDetailsPage() {
    return <InjectorToolDetails />;
}