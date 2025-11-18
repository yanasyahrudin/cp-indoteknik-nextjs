import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '../../../../data/toolsCategory'; 
import StandSketmatDetailsClient from './StandSketmatDetailsClient';

const categoryDetails = {
    name: 'Stand Sketmat & Sketmat',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839441/cp-indoteknik-v3/productsTools/Stand_Sketmad_And_Sketmad_DSC_0116_copy_f6uzxj_z8qjow_arvps0.png',
};
export const revalidate = 60;
export const metadata = {
    title: 'Stand Sketmat & Sketmat | Indo Teknik',
    description: 'Stand Sketmat & Sketmat untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Stand Sketmat',
        'Sketmat',
        'stand sketmat',
        'alat sketmat',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/stand-sketmat',
    },
    openGraph: {
        title: 'Stand Sketmat & Sketmat | Indo Teknik',
        description: 'Stand Sketmat & Sketmat untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Stand Sketmat & Sketmat',
            },
        ],
    },
};

export default function StandSketmatDetailsPage() {
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
    return <StandSketmatDetailsClient shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}