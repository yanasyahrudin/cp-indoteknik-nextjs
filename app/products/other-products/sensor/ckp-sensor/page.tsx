import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import CKPSensorDetailsClient from './CKPSensorDetailsClient';

const categoryDetails = {
    name: 'CKP (Crankshaft Position Sensor) Sensor',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721363834/cp-indoteknik-v3/productsSensor/DSC_0160b-removebg-preview_d27pkp.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: 'CKP Sensor | Indo Teknik',
    description: 'CKP (Crankshaft Position Sensor) untuk sistem sensor mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'CKP Sensor',
        'crankshaft position sensor',
        'sensor mesin',
        'diesel',
        'spare part sensor',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'sensor CKP',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/sensor/ckp-sensor',
    },
    openGraph: {
        title: 'CKP Sensor | Indo Teknik',
        description: 'CKP (Crankshaft Position Sensor) untuk sistem sensor mesin diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'CKP Sensor',
            },
        ],
    },
};

export default function CKPSensorDetailsPage() {
    return <CKPSensorDetailsClient />;
}