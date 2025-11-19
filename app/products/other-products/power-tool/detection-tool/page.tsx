import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '../../../../data/powerToolCategory'; // Update to the appropriate category data if needed
import CoverInjectorLDetails from './DetectionToolDetailsClient'

const categoryDetails = {
    name: 'Detection Tool',
    description: descriptionDetailCategory,   imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724036540/cp-indoteknik-v3/productsPowerTool/alat_deteksi_bosch-removebg-preview_buf7am.png', // Replace with actual image URL
};
export const dynamic = "force-static";
export const metadata = {
    title: 'Cover Injector L | Indo Teknik',
    description: 'Cover Injector L untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Cover Injector L',
        'cover injector',
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
        canonical: 'https://indo-teknik.com/products/other-products/power-tool/detection-tool',
    },
    openGraph: {
        title: 'Cover Injector L | Indo Teknik',
        description: 'Cover Injector L untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Cover Injector L',
            },
        ],
    },
};

export default function CoverLDetailsPage() {
    // Function to shuffle array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
    const filteredCategories = categories.filter(
        (category) => category.name !== categoryDetails.name,
    );

    const shuffledCategories = shuffleArray([...filteredCategories]);
      const jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: categoryDetails.name,
            image: categoryDetails.imageUrl,
            description: categoryDetails.description,
        };
    return <CoverInjectorLDetails shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}
