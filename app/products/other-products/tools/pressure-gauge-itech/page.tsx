import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '../../../../data/toolsCategory'; 
import PressureGaugeItech from './PressureGaugeItech';

const categoryDetails = {
    name: 'Pressure Gauge Itech',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839442/cp-indoteknik-v3/productsTools/Pressure_Gauge_Itech_DSC_0574b_copy_ttwser_moncb2_ckf4b4.png',
};
export const revalidate = 60;
export const metadata = {
    title: 'Pressure Gauge Itech | Indo Teknik',
    description: 'Pressure Gauge Itech untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Pressure Gauge Itech',
        'pressure gauge',
        'alat ukur tekanan',
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
        canonical: 'https://indo-teknik.com/products/other-products/tools/pressure-gauge-itech',
    },
    openGraph: {
        title: 'Pressure Gauge Itech | Indo Teknik',
        description: 'Pressure Gauge Itech untuk sistem injeksi bahan bakar diesel. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Pressure Gauge Itech',
            },
        ],
    },
};

export default function PressureGaugeItechPage() {
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
    return <PressureGaugeItech shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}