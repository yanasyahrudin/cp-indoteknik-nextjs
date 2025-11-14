import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import NozzleTesterDetailsClient from './NozzleTesterDetailsClient'

const categoryDetails = {
    name: 'Nozzle Tester',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721960151/cp-indoteknik-v3/productsTools/nozzle_tester_pnbez2.png', // Replace with the actual image URL
};
export const revalidate = 60;
export const metadata = {
    title: 'Nozzle Tester | Indo Teknik',
    description: 'Nozzle Tester untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Nozzle Tester',
        'tester nozzle',
        'alat uji nozzle',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/nozzle-tester',
    },
    openGraph: {
        title: 'Nozzle Tester | Indo Teknik',
        description: 'Nozzle Tester untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Nozzle Tester',
            },
        ],
    },
};

export default function NozzleTesterDetailsPage() {
    return <NozzleTesterDetailsClient />;
}
