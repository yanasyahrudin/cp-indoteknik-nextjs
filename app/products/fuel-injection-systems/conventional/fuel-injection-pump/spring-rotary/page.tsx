import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import SpringRotaryDetailsClient from './SpringRotaryDetailsClient';

const categoryDetails = {
    name: 'Spring Rotary',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721463483/cp-indoteknik-v3/productsFuelInjectionPump/rotary/spring_rotary_uk85st.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Spring Rotary',
        'spring rotary injection pump',
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

export default function SpringRotaryDetailsPage() {
    return <SpringRotaryDetailsClient />;
}