import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '@/app/data/powerToolCategory';
import ElectricCircularSawMachineDetailsClient from './ElectricCircularSawMachineDetailsClient';

const categoryDetails = {
    name: 'Electric Circular Saw Machine',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1723780532/cp-indoteknik-v3/productsPowerTool/br-m036969-00486_bosch-circular-saw-gergaji-sirkel-listrik-184mm-1300watt-gks-130_full01-645ce84b-removebg-preview_toihfg.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: 'Electric Circular Saw Machine | Indo Teknik',
    description: 'Electric Circular Saw Machine untuk kebutuhan pemotongan material secara presisi. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Electric Circular Saw Machine',
        'gergaji sirkel listrik',
        'circular saw',
        'power tool',
        'Bosch',
        'Indo Teknik',
        'alat teknik',
        'alat industri',
        'alat pertukangan',
        'GKS 130',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/power-tool/electric-circular-saw-machine',
    },
    openGraph: {
        title: 'Electric Circular Saw Machine | Indo Teknik',
        description: 'Electric Circular Saw Machine untuk kebutuhan pemotongan material secara presisi. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Electric Circular Saw Machine',
            },
        ],
    },
};

export default function ElectricCircularSawMachineDetailsPage() {
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

    return <ElectricCircularSawMachineDetailsClient 
                categoryDetails={categoryDetails} 
                shuffledCategories={shuffledCategories} 
                jsonLd={jsonLd} 
            />;
}