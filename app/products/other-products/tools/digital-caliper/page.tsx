import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '../../../../data/toolsCategory'; 
import DigitalCaliperDetailsClient from './DigitalCaliperDetailsClient';

const categoryDetails = {
    name: 'Digital Caliper',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963452/cp-indoteknik-v3/productsTools/digital_caliper_DSC_0013-removebg-preview_dlbjco.png', // Replace with actual image URL
};
export const revalidate = 60;
export const metadata = {
    title: 'Digital Caliper | Indo Teknik',
    description: 'Digital Caliper untuk pengukuran presisi pada berbagai material. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Digital Caliper',
        'caliper digital',
        'alat ukur',
        'alat teknik',
        'Indo Teknik',
        'alat industri',
        'alat bengkel',
        'pengukuran presisi',
        'alat pertukangan',
        'digital measuring tool',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/tools/digital-caliper',
    },
    openGraph: {
        title: 'Digital Caliper | Indo Teknik',
        description: 'Digital Caliper untuk pengukuran presisi pada berbagai material. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Digital Caliper',
            },
        ],
    },
};

export default function DigitalCaliperDetailsPage() {


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

    return <DigitalCaliperDetailsClient shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}