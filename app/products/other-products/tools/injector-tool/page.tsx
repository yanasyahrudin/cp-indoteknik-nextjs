import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '../../../../data/toolsCategory'; 
import InjectorToolDetails from './InjectorToolDetailsClient';

const categoryDetails = {
    name: 'Injector Tool',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721965740/cp-indoteknik-v3/productsTools/injector_tool_WhatsApp_Image_2021-01-19_at_14.55.58__2_-removebg-preview_l4yasd.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: 'Injector Tool | Indo Teknik',
    description: 'Injector Tool untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Injector Tool',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/injector-tool',
    },
    openGraph: {
        title: 'Injector Tool | Indo Teknik',
        description: 'Injector Tool untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Injector Tool',
            },
        ],
    },
};

export default function InjectorToolDetailsPage() {
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
    return <InjectorToolDetails shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}