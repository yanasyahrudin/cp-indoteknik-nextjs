import { descriptionDetailCategory } from '../../../../../data/descriptionDetailCategory';
import categories from '@/app/data/commonRailPipeCategory';
import CommonRailPipeClient from './CommonRailPipeClient';
export const dynamic = "force-static";
const categoryDetails = {
    name: 'Common Rail Pipe Assy',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735807284/cp-indoteknik-v3/productsCommonRailPipe/common_rail_pipe_uj898_nywprg.png',
};

export const metadata = {
    title: `${categoryDetails.name} | Indo Teknik`,
    description: `${categoryDetails.name} untuk sistem injeksi bahan bakar diesel. Temukan informasi, spesifikasi, dan suku cadang ${categoryDetails.name} berkualitas di Indo Teknik.`,
    keywords: [
        'Common Rail Pipe Assy',
        'common rail pipe',
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
        canonical:
            'https://indo-teknik.com/products/fuel-injection-systems/common-rail/common-rail-pipe/common-rail-pipe-assy',
    },
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
        images: [categoryDetails.imageUrl],
    },
};

export default function CommonRailPipeDetailsPage() {
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
        <CommonRailPipeClient
            shuffledCategories={shuffledCategories}
            jsonLd={jsonLd}
            categoryDetails={categoryDetails}
        />
    );
}
