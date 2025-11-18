import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '../../../../data/toolsCategory'; 
import ToolShimE1024072DetailsClient from './ToolShimE1024072DetailsClient';

const categoryDetails = {
    name: 'Tool Shim E1024072',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839444/cp-indoteknik-v3/productsTools/Tool_Shim_E1024072_Itech_Rp.500.000__DSC_0140_copy_ezotmx_msak63_fdun7v.png',
};
export const revalidate = 60;
export const metadata = {
    title: 'Tool Shim E1024072 | Indo Teknik',
    description: 'Tool Shim E1024072 untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Tool Shim E1024072',
        'tool shim',
        'shim injector',
        'alat shim',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/tool-shim-e1024072',
    },
    openGraph: {
        title: 'Tool Shim E1024072 | Indo Teknik',
        description: 'Tool Shim E1024072 untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Tool Shim E1024072',
            },
        ],
    },
};

export default function ToolShimE1024072DetailsPage() {
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
    return <ToolShimE1024072DetailsClient shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}