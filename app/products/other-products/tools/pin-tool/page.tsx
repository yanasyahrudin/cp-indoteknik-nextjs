import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import PinToolDetailsClient from './PinToolDetailsClient';
import categories from '../../../../data/toolsCategory'; 


const categoryDetails = {
    name: 'Pin Tool',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963680/cp-indoteknik-v3/productsTools/pin_tool_DSC_1437-removebg-preview_uw8rc6.png', // Replace with actual image URL
};
export const revalidate = 60;
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
    const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
    const filteredCategories = categories.filter(
        (category) => category.imgSrc !== categoryDetails.imageUrl,
    );

    const shuffledCategories = shuffleArray([...filteredCategories]);

       const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: categoryDetails.name,
        image: categoryDetails.imageUrl,
        description: categoryDetails.description,
    };
    return <PinToolDetailsClient shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}
