import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import CoverInjectorLDetails from './CoverLDetailsClient'

const categoryDetails = {
    name: 'Cover Injector L',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724912557/cp-indoteknik-v3/productsCoverInjector/cover_injector_L_s2b6ot.png', // Replace with actual image URL
};

export const metadata = {
    title: 'Cover Injector L | Indo Teknik',
    description: 'Cover Injector L untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Cover Injector L',
        'cover injector',
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
        canonical: 'https://indo-teknik.com/products/other-products/cover-injector/cover-l',
    },
    openGraph: {
        title: 'Cover Injector L | Indo Teknik',
        description: 'Cover Injector L untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Cover Injector L',
            },
        ],
    },
};

export default function CoverLDetailsPage() {
    return <CoverInjectorLDetails />;
}
