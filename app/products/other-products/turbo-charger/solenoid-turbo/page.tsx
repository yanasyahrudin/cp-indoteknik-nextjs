import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import SolenoidTurboDetailsClient from './SolenoidTurboDetailsClient';

const categoryDetails = {
    name: 'Solenoid Turbo',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724659560/cp-indoteknik-v3/productsTurboCharger/Solenoid_Turbo_Example.png', // Ganti dengan URL gambar solenoid turbo yang benar
};
export const revalidate = 60;
export const metadata = {
    title: 'Solenoid Turbo | Indo Teknik',
    description: 'Solenoid Turbo untuk turbocharger diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Solenoid Turbo',
        'solenoid turbocharger',
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
        canonical: 'https://indo-teknik.com/products/other-products/turbo-charger/solenoid-turbo',
    },
    openGraph: {
        title: 'Solenoid Turbo | Indo Teknik',
        description: 'Solenoid Turbo untuk turbocharger diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Solenoid Turbo',
            },
        ],
    },
};

export default function SolenoidTurboDetailsPage() {
    return <SolenoidTurboDetailsClient />;
}