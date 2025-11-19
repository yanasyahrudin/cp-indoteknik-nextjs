import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';
import FuelHandPumpAssyDetailsClient from './FuelHandPumpAssyDetailsClient';
import categories from '@/app/data/fipCategory';

const categoryDetails = {
    name: 'Fuel Hand Pump Assy',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721447771/cp-indoteknik-v3/productsFuelInjectionPump/in-line/Fuel_Handpump_Assy-removebg-preview_f9oukv.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Fuel Hand Pump Assy',
        'fuel hand pump',
        'fuel injection pump',
        'in-line pump',
        'diesel',
        'spare part diesel',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection',
    ],
    openGraph: {
        title: `${categoryDetails.name} | Indo Teknik`,
        description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: categoryDetails.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${categoryDetails.name} | Indo Teknik`,
        description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
        images: [
            categoryDetails.imageUrl,
        ],
    },
};

export default function FuelHandPumpAssyDetailsPage() {
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
    return <FuelHandPumpAssyDetailsClient 
        shuffledCategories={shuffledCategories}
        jsonLd={jsonLd}
        categoryDetails={categoryDetails}
    />;
}