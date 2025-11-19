import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';
import DistributorPumpVP44DetailsClient from './DistributorPumpVP44DetailsClient';



const categoryDetails = {
    name: 'Distributor Pump VP44',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721888185/cp-indoteknik-v3/productsDistributorPump/CIMG4447-removebg-preview_pzeimm.png', // Replace with actual image URL
};

const categories = [
    {
        id: 1,
        name: 'Distributor Pump VP44',
        type: 'VP44',
        imgSrc: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1721888185/cp-indoteknik-v3/productsDistributorPump/CIMG4447-removebg-preview_pzeimm.png',
    },
];
export const dynamic = "force-static";
export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `Distributor Pump VP44: Informasi, spesifikasi, dan suku cadang berkualitas untuk sistem injeksi bahan bakar diesel di Indo Teknik.`,
    keywords: [
        'Distributor Pump VP44',
        'VP44 pump',
        'fuel injection pump',
        'diesel injection',
        'spare part diesel',
        'otomotif',
        'Indo Teknik',
        'aftermarket',
        'komponen mesin',
        'fuel injection',
    ],
    openGraph: {
        title: `${categoryDetails.name} | Indo Teknik`,
        description:
            categoryDetails.description ||
            'Distributor Pump VP44 untuk sistem injeksi bahan bakar diesel.',
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

export default function DistributorPumpVP44DetailsPage() {
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
        <DistributorPumpVP44DetailsClient
            shuffledCategories={shuffledCategories}
            categoryDetails={categoryDetails}
            jsonLd={jsonLd}
        />
    );
}
