import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';

import UnitPumpDetailsClient from './UnitPumpDetailsClient';

const categoryDetails = {
    name: 'Unit Pump Assy',
    description: descriptionDetailCategory,  imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721702361/cp-indoteknik-v3/productsEUI/unit_pump_njzr3b.png', // Replace with actual image URL
};

const categories = [
    {
        id: 1,
        name: 'Unit Pump Assy',
        type: 'Unit Pump',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721702361/cp-indoteknik-v3/productsEUI/unit_pump_njzr3b.png', // Replace with actual image URL
        link: '/products/fuel-injection-systems/electric/unit-pump/unit-pump-assy'
    },
];
export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'EUI Assy',
        'EUI injector',
        'electronic unit injector',
        'diesel',
        'spare part diesel',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection',
        'electric injector',
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
};

export default function EuiAssyDetailsPage() {
    // Function to shuffle array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const filteredCategories = categories.filter(
        (category) => category.name !== categoryDetails.name
    );
    const shuffledCategories = shuffleArray([...filteredCategories]);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: categoryDetails.name,
        image: categoryDetails.imageUrl,
        description: categoryDetails.description,
    };
    return (
        <UnitPumpDetailsClient
            shuffledCategories={shuffledCategories}
            categoryDetails={categoryDetails}
            jsonLd={jsonLd}
        />
    );
}
