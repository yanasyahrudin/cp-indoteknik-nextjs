import categories from '@/app/data/coverInjectorCategory';
import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import CoverInjectorTDetails from './CoverTDetailsClient';

const categoryDetails = {
    name: 'Cover Injector T',
    description: descriptionDetailCategory, imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724912617/cp-indoteknik-v3/productsCoverInjector/cover_injector_T_adzzg4.png', // Replace with actual image URL
};

export const metadata = {
    title: 'Cover Injector T | Indo Teknik',
    description: 'Cover Injector T untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Cover Injector T',
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
        canonical: 'https://indo-teknik.com/products/other-products/cover-injector/cover-t',
    },
    openGraph: {
        title: 'Cover Injector T | Indo Teknik',
        description: 'Cover Injector T untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Cover Injector T',
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
    return <CoverInjectorTDetails shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}
