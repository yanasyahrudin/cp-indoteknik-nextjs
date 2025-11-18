import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '../../../../data/toolsCategory'; 
import ToolsCatDetailsClient from './ToolsCatDetailsClient';

const categoryDetails = {
    name: 'Tool Injector Caterpillar',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839447/cp-indoteknik-v3/productsTools/TOOLS_CAT_DSC_0510_copy_np60qw_t7aroq_w3xvjc.png',
};
export const revalidate = 60;
export const metadata = {
    title: 'Tool Injector Caterpillar | Indo Teknik',
    description: 'Tool Injector Caterpillar untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Tool Injector Caterpillar',
        'tool injector cat',
        'injector caterpillar',
        'alat injector',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/tools-cat',
    },
    openGraph: {
        title: 'Tool Injector Caterpillar | Indo Teknik',
        description: 'Tool Injector Caterpillar untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Tool Injector Caterpillar',
            },
        ],
    },
};

export default function ToolsCatDetailsPage() {
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
    return <ToolsCatDetailsClient shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}