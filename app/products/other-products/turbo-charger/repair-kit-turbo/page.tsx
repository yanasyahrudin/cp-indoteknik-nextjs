import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import RepairKitTurboDetailsClient from './RepairKitTurboDetailsClient';

const categoryDetails = {
    name: 'Turbo Repair Kit',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721360636/cp-indoteknik-v3/productsTurboCharger/DSC_0331-removebg-preview_kjdaw2.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: 'Turbo Repair Kit | Indo Teknik',
    description: 'Turbo Repair Kit untuk turbocharger diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Turbo Repair Kit',
        'repair kit turbo',
        'turbocharger',
        'diesel',
        'spare part turbo',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'turbo',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/turbo-charger/repair-kit-turbo',
    },
    openGraph: {
        title: 'Turbo Repair Kit | Indo Teknik',
        description: 'Turbo Repair Kit untuk turbocharger diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Turbo Repair Kit',
            },
        ],
    },
};

export default function RepairKitTurboDetailsPage() {
    return <RepairKitTurboDetailsClient />;
}