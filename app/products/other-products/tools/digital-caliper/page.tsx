import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import DigitalCaliperDetailsClient from './DigitalCaliperDetailsClient';

const categoryDetails = {
    name: 'Digital Caliper',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963452/cp-indoteknik-v3/productsTools/digital_caliper_DSC_0013-removebg-preview_dlbjco.png', // Replace with actual image URL
};
export const revalidate = 60;
export const metadata = {
    title: 'Digital Caliper | Indo Teknik',
    description: 'Digital Caliper untuk pengukuran presisi pada berbagai material. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Digital Caliper',
        'caliper digital',
        'alat ukur',
        'alat teknik',
        'Indo Teknik',
        'alat industri',
        'alat bengkel',
        'pengukuran presisi',
        'alat pertukangan',
        'digital measuring tool',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/tools/digital-caliper',
    },
    openGraph: {
        title: 'Digital Caliper | Indo Teknik',
        description: 'Digital Caliper untuk pengukuran presisi pada berbagai material. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Digital Caliper',
            },
        ],
    },
};

export default function DigitalCaliperDetailsPage() {
    return <DigitalCaliperDetailsClient />;
}