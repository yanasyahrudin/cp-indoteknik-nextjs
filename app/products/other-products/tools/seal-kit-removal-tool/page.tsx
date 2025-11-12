import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import SealKitRemovalToolDetailsClient from './SealKitRemovalToolDetailsClient';

const categoryDetails = {
    name: 'Seal Kit Removal Tool',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963857/cp-indoteknik-v3/productsTools/opener_seal_kit_uxbjzm.png',
};

export const metadata = {
    title: 'Seal Kit Removal Tool | Indo Teknik',
    description: 'Seal Kit Removal Tool untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Seal Kit Removal Tool',
        'seal kit removal',
        'alat pembuka seal kit',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/seal-kit-removal-tool',
    },
    openGraph: {
        title: 'Seal Kit Removal Tool | Indo Teknik',
        description: 'Seal Kit Removal Tool untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Seal Kit Removal Tool',
            },
        ],
    },
};

export default function SealKitRemovalToolDetailsPage() {
    return <SealKitRemovalToolDetailsClient />;
}