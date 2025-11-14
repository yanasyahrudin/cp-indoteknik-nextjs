import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import InjectorToolSetDetailsClient from './InjectorToolSetDetailsClient';

const categoryDetails = {
    name: 'Injector Tool Set',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721964088/cp-indoteknik-v3/productsTools/tools_set_injector_DSC_0378_copy-removebg-preview_wtdx2p.png',
};
export const revalidate = 60;
export const metadata = {
    title: 'Injector Tool Set | Indo Teknik',
    description: 'Injector Tool Set untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Injector Tool Set',
        'alat injector',
        'tool set injector',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/injector-tool-set',
    },
    openGraph: {
        title: 'Injector Tool Set | Indo Teknik',
        description: 'Injector Tool Set untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Injector Tool Set',
            },
        ],
    },
};

export default function InjectorToolSetDetailsPage() {
    return <InjectorToolSetDetailsClient />;
}