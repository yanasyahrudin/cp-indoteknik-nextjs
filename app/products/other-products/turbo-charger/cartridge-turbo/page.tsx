import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import CartridgeTurboDetailsClient from './CartridgeTurboDetailsClient';

const categoryDetails = {
    name: 'Cartridge Turbo',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724659560/cp-indoteknik-v3/productsTurboCharger/Cartidge_Turbo_HX35_xjxzxy.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: 'Cartridge Turbo | Indo Teknik',
    description: 'Cartridge Turbo untuk turbocharger diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Cartridge Turbo',
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
        canonical: 'https://indo-teknik.com/products/other-products/turbo-charger/cartridge-turbo',
    },
    openGraph: {
        title: 'Cartridge Turbo | Indo Teknik',
        description: 'Cartridge Turbo untuk turbocharger diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Cartridge Turbo',
            },
        ],
    },
};

export default function CartridgeTurboDetailsPage() {
    return <CartridgeTurboDetailsClient />;
}