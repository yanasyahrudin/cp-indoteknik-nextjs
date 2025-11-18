import { descriptionDetailCategory } from '../../../../data/descriptionDetailCategory';
import categories from '../../../../data/toolsCategory'; 
import FilterOpeningToolDetailsClient from './FilterOpeningToolDetails'

const categoryDetails = {
    name: 'Filter Opening Tool',
    description: descriptionDetailCategory,
    imageUrl:
        'https://res.cloudinary.com/dcbryptkx/image/upload/v1721963153/cp-indoteknik-v3/productsTools/filter_opening_tool_example.png', // Ganti dengan URL gambar Filter Opening Tool yang benar
};
export const revalidate = 60;
export const metadata = {
    title: 'Filter Opening Tool | Indo Teknik',
    description: 'Filter Opening Tool untuk membuka filter oli dan bahan bakar dengan mudah dan aman. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
    keywords: [
        'Filter Opening Tool',
        'kunci filter',
        'alat buka filter',
        'alat teknik',
        'Indo Teknik',
        'alat industri',
        'alat bengkel',
        'filter oli',
        'filter solar',
        'alat pertukangan',
    ],
    alternates: {
        canonical: 'https://indo-teknik.com/products/other-products/tools/filter-opening-tool',
    },
    openGraph: {
        title: 'Filter Opening Tool | Indo Teknik',
        description: 'Filter Opening Tool untuk membuka filter oli dan bahan bakar dengan mudah dan aman. Temukan spesifikasi, informasi, dan alat berkualitas hanya di Indo Teknik.',
        images: [
            {
                url: categoryDetails.imageUrl,
                width: 600,
                height: 400,
                alt: 'Filter Opening Tool',
            },
        ],
    },
};

export default function FilterOpeningToolDetailsPage() {
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
    return <FilterOpeningToolDetailsClient shuffledCategories={shuffledCategories} categoryDetails={categoryDetails} jsonLd={jsonLd} />;
}