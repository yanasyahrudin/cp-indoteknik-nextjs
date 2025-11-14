import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import CoverInjectorLDetails from './InjectorPressureGaugeDetailsClient'

const categoryDetails = {
    name: 'Injector Pressure Gauge',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839440/cp-indoteknik-v3/productsTools/Pengukur_Tekanan_Injector_DSC_0008-removebg-preview_crjboj_bkqpie_tczhjn.png', // Replace with actual image URL
};
export const revalidate = 60;
export const metadata = {
    title: 'Injector Pressure Gauge | Indo Teknik',
    description: 'Injector Pressure Gauge untuk mengukur tekanan injektor pada sistem bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Injector Pressure Gauge',
        'pengukur tekanan injektor',
        'alat ukur diesel',
        'spare part diesel',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection',
        'tekanan injektor',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/tools/injector-pressure-gauge',
    },
    openGraph: {
        title: 'Injector Pressure Gauge | Indo Teknik',
        description: 'Injector Pressure Gauge untuk mengukur tekanan injektor pada sistem bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Injector Pressure Gauge',
            },
        ],
    },
};

export default function CoverLDetailsPage() {
    return <CoverInjectorLDetails />;
}
