import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import TurboAssyDetailsClient from './TurboAssyDetailsClient';

const categoryDetails = {
    name: 'Turbo Assy',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721361016/cp-indoteknik-v3/productsTurboCharger/CIMG4320-removebg-preview_hbsviw.png', // Replace with actual image URL
};
export const dynamic = "force-static";
export const metadata = {
    title: 'Turbo Assy | Indo Teknik',
    description: 'Turbo Assy untuk turbocharger diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Turbo Assy',
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
        canonical: 'https://indo-teknik.com/products/other-products/turbo-charger/turbo-assy',
    },
    openGraph: {
        title: 'Turbo Assy | Indo Teknik',
        description: 'Turbo Assy untuk turbocharger diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Turbo Assy',
            },
        ],
    },
};

export default function TurboAssyDetailsPage() {
    return <TurboAssyDetailsClient />;
}