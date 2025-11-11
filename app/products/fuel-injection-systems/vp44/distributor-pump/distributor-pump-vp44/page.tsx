import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import NozzleAssyInjectorDetailsClient from './DistributorPumpVP44DetailsClient';

const categoryDetails = {
    name: 'Distributor Pump VP44',
    description: typeof descriptionDetailCategory === 'string' ? descriptionDetailCategory : '',
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721888185/cp-indoteknik-v3/productsDistributorPump/CIMG4447-removebg-preview_pzeimm.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `Distributor Pump VP44: Informasi, spesifikasi, dan suku cadang berkualitas untuk sistem injeksi bahan bakar diesel di Indo Teknik.`,
    keywords: [
        'Distributor Pump VP44',
        'VP44 pump',
        'fuel injection pump',
        'diesel injection',
        'spare part diesel',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection',
    ],
    openGraph: {
        title: `${categoryDetails.name} | Indo Teknik`,
        description: categoryDetails.description || 'Distributor Pump VP44 untuk sistem injeksi bahan bakar diesel.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: categoryDetails.name,
            },
        ],
    },
};

export default function NozzleAssyInjectorDetailsPage() {
    return <NozzleAssyInjectorDetailsClient />;
}