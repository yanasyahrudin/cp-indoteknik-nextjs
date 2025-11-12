import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import NozzleTesterPipeDetailsClient from './NozzleTesterPipeDetailsClient'

const categoryDetails = {
    name: 'Nozzle Tester Pipe',
    description: descriptionDetailCategory, imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839438/cp-indoteknik-v3/productsTools/PIPA_TESTER_NOZZLE_DSC_0068b-removebg-preview_ynnybg_hipxtj_vusiqq.png', // Replace with actual image URL
};

export const metadata = {
    title: 'Nozzle Tester Pipe | Indo Teknik',
    description: 'Nozzle Tester Pipe untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Nozzle Tester Pipe',
        'pipa tester nozzle',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/nozzle-tester-pipe',
    },
    openGraph: {
        title: 'Nozzle Tester Pipe | Indo Teknik',
        description: 'Nozzle Tester Pipe untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Nozzle Tester Pipe',
            },
        ],
    },
};

export default function NozzleTesterPipeDetailsPage() {
    return <NozzleTesterPipeDetailsClient />;
}
