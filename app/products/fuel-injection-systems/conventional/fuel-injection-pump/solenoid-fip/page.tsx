import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import SolenoidFIPDetailsClient from './SolenoidFIPDetailsClient';

const categoryDetails = {
    name: 'Solenoid FIP',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721460643/cp-indoteknik-v3/productsFuelInjectionPump/rotary/solenoid%20DSC_0689_copy-removebg-preview_lhcqmf.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Solenoid FIP',
        'solenoid injection pump',
        'fuel injection pump',
        'rotary pump',
        'diesel',
        'spare part diesel',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection',
    ],
    openGraph: {
        title: `${categoryDetails.name} | Indo Teknik`,
        description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
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

export default function SolenoidFIPDetailsPage() {
    return <SolenoidFIPDetailsClient />;
}