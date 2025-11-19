import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import CommonRailSensorDetailsClient from './CommonRailSensorDetailsClient';

const categoryDetails = {
    name: 'Common Rail Sensor',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721363366/cp-indoteknik-v3/productsSensor/DSC_0596-removebg-preview_qmjwme.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: 'Common Rail Sensor | Indo Teknik',
    description: 'Common Rail Sensor untuk sistem sensor injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Common Rail Sensor',
        'sensor common rail',
        'sistem injeksi bahan bakar',
        'diesel',
        'spare part sensor',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection sensor',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/sensor/common-rail-sensor',
    },
    openGraph: {
        title: 'Common Rail Sensor | Indo Teknik',
        description: 'Common Rail Sensor untuk sistem sensor injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Common Rail Sensor',
            },
        ],
    },
};

export default function CommonRailSensorDetailsPage() {
    return <CommonRailSensorDetailsClient />;
}