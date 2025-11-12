import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import HandTapTDetails from './HandTapTDetailsClient'

const categoryDetails = {
    name: 'Hand Tap T',
    description: descriptionDetailCategory,   imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963551/cp-indoteknik-v3/productsTools/hand%20tap%20t%20DSC_0485b-removebg-preview_ozpcgp.png', // Replace with actual image URL
};

export const metadata = {
    title: 'Hand Tap T | Indo Teknik',
    description: 'Hand Tap T untuk kebutuhan perbengkelan dan industri. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Hand Tap T',
        'hand tap',
        'alat bengkel',
        'tools',
        'Indo Teknik',
        'perbengkelan',
        'industri',
        'spare part',
        'otomotif',
        'alat teknik',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/tools/hand-tap-t',
    },
    openGraph: {
        title: 'Hand Tap T | Indo Teknik',
        description: 'Hand Tap T untuk kebutuhan perbengkelan dan industri. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Hand Tap T',
            },
        ],
    },
};

export default function CoverLDetailsPage() {
    return <HandTapTDetails />;
}
