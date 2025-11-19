import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '../../../../data/toolsCategory'; 
import HexKeyNo0512DetailsClient from './HexKeyNo0512-3-5mmDetailsClient'

const categoryDetails = {
    name: 'Hex Key No. 0512 (3.5MM)',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1724839447/cp-indoteknik-v3/productsTools/KUNCI_HEX_KEY_no.0512_3.5MM_DSC_0562-removebg-preview_dlsple_smbaj0.png',
};
export const dynamic = "force-static";
export const metadata = {
    title: 'Hex Key No. 0512 (3.5MM) | Indo Teknik',
    description: 'Kunci Hex No. 0512 ukuran 3.5MM untuk kebutuhan otomotif dan industri. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
    keywords: [
        'Hex Key No. 0512',
        'kunci hex',
        '3.5MM',
        'alat teknik',
        'otomotif',
        'Indo Teknik',
        'spare part',
        'tools',
        'industrial tools',
        'hand tools',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/tools/hex-key-no-0512-3-5mm',
    },
    openGraph: {
        title: 'Hex Key No. 0512 (3.5MM) | Indo Teknik',
        description: 'Kunci Hex No. 0512 ukuran 3.5MM untuk kebutuhan otomotif dan industri. Temukan spesifikasi, informasi, dan suku cadang berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Hex Key No. 0512 (3.5MM)',
            },
        ],
    },
};

export default function HexKeyNo0512DetailsPage() {
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
    return <HexKeyNo0512DetailsClient shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}