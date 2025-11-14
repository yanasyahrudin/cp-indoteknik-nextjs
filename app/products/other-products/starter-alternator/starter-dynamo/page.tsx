import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import StarterDynamoDetailsClient from './StarterDynamoDetailsClient';

const categoryDetails = {
    name: 'Dynamo Starter',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721375480/cp-indoteknik-v3/productsStarterAlternator/0d477846-3914-4af2-b62d-93441dac8875-removebg-preview_k50ebm.png', // Replace with actual image URL
};
export const revalidate = 60;
export const metadata = {
    title: 'Dynamo Starter | Indo Teknik',
    description: 'Dynamo Starter untuk sistem starter dan pengisian daya mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Dynamo Starter',
        'starter mesin',
        'starter diesel',
        'spare part starter',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'starter dynamo',
        'starter mobil',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/starter-alternator/starter-dynamo',
    },
    openGraph: {
        title: 'Dynamo Starter | Indo Teknik',
        description: 'Dynamo Starter untuk sistem starter dan pengisian daya mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Dynamo Starter',
            },
        ],
    },
};

export default function StarterDynamoDetailsPage() {
    return <StarterDynamoDetailsClient />;
}