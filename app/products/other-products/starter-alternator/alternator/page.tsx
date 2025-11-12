import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import AlternatorDetailsClient from './AlternatorDetailsClient';

const categoryDetails = {
    name: 'Alternator',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724812872/cp-indoteknik-v3/productsStarterAlternator/Alternator_Example.png', // Ganti dengan URL gambar alternator yang benar
};

export const metadata = {
    title: 'Alternator | Indo Teknik',
    description: 'Alternator untuk sistem starter dan pengisian daya mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Alternator',
        'starter alternator',
        'alternator diesel',
        'spare part alternator',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'alternator mesin',
        'alternator mobil',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/starter-alternator/alternator',
    },
    openGraph: {
        title: 'Alternator | Indo Teknik',
        description: 'Alternator untuk sistem starter dan pengisian daya mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Alternator',
            },
        ],
    },
};

export default function AlternatorDetailsPage() {
    return <AlternatorDetailsClient />;
}