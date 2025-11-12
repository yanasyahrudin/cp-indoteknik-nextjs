import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import PinToolDetailsClient from './PinToolDetailsClient';



const categoryDetails = {
    name: 'Pin Tool',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963680/cp-indoteknik-v3/productsTools/pin_tool_DSC_1437-removebg-preview_uw8rc6.png', // Replace with actual image URL
};
export const metadata = {
    title: 'Pin Tool | Indo Teknik',
    description: 'Pin Tool untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Pin Tool',
        'pin tool',
        'alat pin',
        'sistem injeksi bahan bakar',
        'diesel',
        'spare part diesel',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/tools/pin-tool',
    },
    openGraph: {
        title: 'Pin Tool | Indo Teknik',
        description: 'Pin Tool untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Pin Tool',
            },
        ],
    },
};

export default function PinToolDetailsPage() {
    return <PinToolDetailsClient />;
}
