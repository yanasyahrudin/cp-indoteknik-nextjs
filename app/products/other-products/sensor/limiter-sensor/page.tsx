import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import LimiterSensorDetailsClient from './LimmiterSensorDetailsClient';

const categoryDetails = {
    name: 'Limiter Sensor',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_600/v1721362938/cp-indoteknik-v3/productsSensor/DSC_0726_copy_p9rz0o.png',
};

export const metadata = {
    title: 'Limiter Sensor | Indo Teknik',
    description: 'Limiter Sensor untuk sistem sensor mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Limiter Sensor',
        'sensor limiter',
        'sensor mesin',
        'diesel',
        'spare part sensor',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'sensor diesel',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/sensor/limiter-sensor',
    },
    openGraph: {
        title: 'Limiter Sensor | Indo Teknik',
        description: 'Limiter Sensor untuk sistem sensor mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Limiter Sensor',
            },
        ],
    },
};

export default function LimiterSensorDetailsPage() {
    return <LimiterSensorDetailsClient />;
}