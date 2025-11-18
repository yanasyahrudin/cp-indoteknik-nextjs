import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '../../../../data/ecuCategory'; // Update to the appropriate category data if needed

import EcuDetailsClient from './EcuDetailsClient'

const categoryDetails = {
    name: 'Engine Control Unit (ECU)',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721378469/cp-indoteknik-v3/productsEcu/High-Quality-D04FR-Engine-Controller-ECU-D04FR-004559-0281020220-for-Kobelco-SK130-8-SK140-8-SK135SR-removebg-preview_fmdog4.png', // Replace with actual image URL
};
export const revalidate = 60;
export const metadata = {
    title: 'Engine Control Unit (ECU) | Indo Teknik',
    description: 'ECU (Engine Control Unit) untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'ECU',
        'Engine Control Unit',
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
        canonical: 'https://indo-teknik.com/products/other-products/ecu/ecu3',
    },
    openGraph: {
        title: 'Engine Control Unit (ECU) | Indo Teknik',
        description: 'ECU (Engine Control Unit) untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Engine Control Unit (ECU)',
            },
        ],
    },
};

export default function EcuDetailsPage() {
    // Function to shuffle array
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
    
    return <EcuDetailsClient shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}
