import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';

import CommonRailCRCTesterDetailsClient from './CommonRailCRCTesterDetailsClient';

const categoryDetails = {
    name: 'Common Rail CRC Tester',
    description: descriptionDetailCategory,   imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963153/cp-indoteknik-v3/productsTools/crc_common_rail_DSC_0544_copy_rfncgv.png', // Replace with actual image URL
};

export const revalidate = 60;
export const metadata = {
    title: 'Common Rail CRC Tester | Indo Teknik',
    description: 'Common Rail CRC Tester untuk pengujian sistem common rail pada mesin diesel. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Common Rail CRC Tester',
        'CRC tester',
        'common rail tester',
        'alat uji common rail',
        'diesel',
        'alat teknik',
        'Indo Teknik',
        'alat industri',
        'alat bengkel',
        'uji common rail',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/tools/common-rail-crc-tester',
    },
    openGraph: {
        title: 'Common Rail CRC Tester | Indo Teknik',
        description: 'Common Rail CRC Tester untuk pengujian sistem common rail pada mesin diesel. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Common Rail CRC Tester',
            },
        ],
    },
};

export default function CommonRailCRCTesterDetailsPage() {
    return <CommonRailCRCTesterDetailsClient />;
}