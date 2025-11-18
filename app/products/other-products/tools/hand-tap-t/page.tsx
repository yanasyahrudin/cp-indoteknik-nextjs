import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '../../../../data/toolsCategory'; 
import HandTapTDetails from './HandTapTDetailsClient'

const categoryDetails = {
    name: 'Hand Tap T',
    description: descriptionDetailCategory,   imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963551/cp-indoteknik-v3/productsTools/hand%20tap%20t%20DSC_0485b-removebg-preview_ozpcgp.png', // Replace with actual image URL
};
export const revalidate = 60;
export const metadata = {
    title: 'Hand Tap T | Indo Teknik',
    description: 'Hand Tap T untuk kebutuhan perbengkelan dan industri. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Hand Tap T',
        'hand tap',
        'alat bengkel',
        'tools',
        'Indo Teknik',
        'perbengkelan',
        'industri',
        'spare part',
        'otomotif',
        'alat teknik',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/tools/hand-tap-t',
    },
    openGraph: {
        title: 'Hand Tap T | Indo Teknik',
        description: 'Hand Tap T untuk kebutuhan perbengkelan dan industri. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Hand Tap T',
            },
        ],
    },
};

export default function CoverLDetailsPage() {
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
    return <HandTapTDetails shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}
