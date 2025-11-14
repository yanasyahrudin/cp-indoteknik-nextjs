import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import OilTemperatureSensorSocketDetailsClient from './OilTemperatureSensorSocketDetailsClient';

const categoryDetails = {
    name: 'Oil Temperature Sensor Socket',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724812872/cp-indoteknik-v3/productsSocket/Soket_Oil_Temperature_Sensor_Denso-removebg-preview_udhaxg.png',
};
export const revalidate = 60;
export const metadata = {
    title: 'Oil Temperature Sensor Socket | Indo Teknik',
    description: 'Oil Temperature Sensor Socket untuk sensor suhu oli mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Oil Temperature Sensor Socket',
        'socket sensor oli',
        'sensor suhu oli',
        'diesel',
        'spare part sensor',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'oil temperature sensor',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/socket/oil-temperature-sensor-socket',
    },
    openGraph: {
        title: 'Oil Temperature Sensor Socket | Indo Teknik',
        description: 'Oil Temperature Sensor Socket untuk sensor suhu oli mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Oil Temperature Sensor Socket',
            },
        ],
    },
};

export default function OilTemperatureSensorSocketDetailsPage() {
    return <OilTemperatureSensorSocketDetailsClient />;
}