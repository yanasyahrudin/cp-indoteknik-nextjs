import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import SCVInjectorSocketDetails from './SCVInjectorSocketDetails';

const categoryDetails = {
    name: 'SCV Injector Socket',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724812873/cp-indoteknik-v3/productsSocket/Soket_SCV_Denso_Injector_Denso_Dmax-removebg-preview_amwgjr.png',
};
export const revalidate = 60;
export const metadata = {
    title: 'SCV Injector Socket | Indo Teknik',
    description: 'SCV Injector Socket untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'SCV Injector Socket',
        'socket SCV injector',
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
        canonical: 'https://indo-teknik.com/products/other-products/socket/scv-injector-socket',
    },
    openGraph: {
        title: 'SCV Injector Socket | Indo Teknik',
        description: 'SCV Injector Socket untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'SCV Injector Socket',
            },
        ],
    },
};

export default function SCVInjectorSocketDetailsPage() {
    return <SCVInjectorSocketDetails />;
}