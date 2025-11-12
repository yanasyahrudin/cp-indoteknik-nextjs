import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import SolenoidValveHydraulicSocketDetailsClient from './SolenoidValveHydraulicSocketDetailsClient';

const categoryDetails = {
    name: 'Solenoid Valve Hydraulic Socket',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724812872/cp-indoteknik-v3/productsSocket/Soket_Selenoid_valve_hidrolik-removebg-preview_p5d0xb.png',
};

export const metadata = {
    title: 'Solenoid Valve Hydraulic Socket | Indo Teknik',
    description: 'Solenoid Valve Hydraulic Socket untuk sistem hidrolik dan kontrol valve. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Solenoid Valve Hydraulic Socket',
        'socket solenoid valve',
        'hidrolik',
        'kontrol valve',
        'spare part hidrolik',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'solenoid socket',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/socket/solenoid-valve-hydraulic-socket',
    },
    openGraph: {
        title: 'Solenoid Valve Hydraulic Socket | Indo Teknik',
        description: 'Solenoid Valve Hydraulic Socket untuk sistem hidrolik dan kontrol valve. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Solenoid Valve Hydraulic Socket',
            },
        ],
    },
};

export default function SolenoidValveHydraulicSocketDetailsPage() {
    return <SolenoidValveHydraulicSocketDetailsClient />;
}