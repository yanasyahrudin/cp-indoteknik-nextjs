import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import MapSensorDetailsClient from './MapSensorDetailsClient';

const categoryDetails = {
    name: 'MAP (Manifold Absolute Pressure) Sensor',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721363673/cp-indoteknik-v3/productsSensor/DSC_0747-removebg-preview_nbltym.png',
};
export const revalidate = 60;
export const metadata = {
    title: 'MAP Sensor | Indo Teknik',
    description: 'MAP (Manifold Absolute Pressure) Sensor untuk sistem sensor tekanan udara pada mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'MAP Sensor',
        'manifold absolute pressure sensor',
        'sensor tekanan udara',
        'diesel',
        'spare part sensor',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'sensor MAP',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/sensor/map-sensor',
    },
    openGraph: {
        title: 'MAP Sensor | Indo Teknik',
        description: 'MAP (Manifold Absolute Pressure) Sensor untuk sistem sensor tekanan udara pada mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'MAP Sensor',
            },
        ],
    },
};

export default function MapSensorDetailsPage() {
    return <MapSensorDetailsClient />;
}