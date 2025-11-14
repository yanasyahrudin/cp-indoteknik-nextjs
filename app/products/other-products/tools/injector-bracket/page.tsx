import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import InjectorBracketDetails from './InjectorBracketDetailsClient'

const categoryDetails = {
    name: 'Injector Bracket',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_600/v1721963220/cp-indoteknik-v3/productsTools/DSC_0524_copy_jyrnyo.png', // Replace with actual image URL
};
export const revalidate = 60;
export const metadata = {
    title: 'Injector Bracket | Indo Teknik',
    description: 'Injector Bracket untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Injector Bracket',
        'bracket injector',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/injector-bracket',
    },
    openGraph: {
        title: 'Injector Bracket | Indo Teknik',
        description: 'Injector Bracket untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Injector Bracket',
            },
        ],
    },
};

export default function InjectorBracketDetailsPage() {
    return <InjectorBracketDetails />;
}
